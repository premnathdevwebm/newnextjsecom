import { cookies } from "next/dist/client/components/headers";
import AES from "crypto-js/aes";
import encUtf8 from "crypto-js/enc-utf8";
import { getServerSession } from "next-auth";

import { prisma } from "./prisma";
import { Cart, CartItem, Prisma } from "@prisma/client";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const secretKey = "my-cookie-secret-key";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type ShoppingCart = CartWithProducts & {
  size: number;
  subtotal: number;
};

function encryptCookie(value: string) {
  const encryptedValue = AES.encrypt(value, secretKey).toString();
  return encryptedValue;
}

function decryptCookie(encryptedValue: string | undefined) {
  if (encryptedValue) {
    const decryptedValue = AES.decrypt(encryptedValue, secretKey).toString(
      encUtf8,
    );

    return decryptedValue;
  }
}

export async function getCart(): Promise<ShoppingCart | null> {
  const session = await getServerSession(authOptions);

  let cart: CartWithProducts | null = null;

  if (session) {
    cart = await prisma.cart.findFirst({
      where: { userId: session.user.id },
      include: { items: { include: { product: true } } },
    });
  } else {
    const localCartId = cookies().get("localCartId")?.value;
    const decrytedCartId = decryptCookie(localCartId);
    cart = decrytedCartId
      ? await prisma.cart.findUnique({
          where: { id: decrytedCartId },
          include: { items: { include: { product: true } } },
        })
      : null;
  }

  if (!cart) return null;
  return {
    ...cart,
    size: cart.items.reduce((accu, item) => accu + item.quantity, 0),
    subtotal: cart.items.reduce(
      (accu, item) => accu + item.quantity * item.product.price,
      0,
    ),
  };
}

export async function createCart(): Promise<ShoppingCart> {
  const session = await getServerSession(authOptions);

  let newCart: Cart;

  if (session) {
    newCart = await prisma.cart.create({
      data: { userId: session.user.id },
    });
  } else {
    newCart = await prisma.cart.create({
      data: {},
    });
    const encryptedLocalCartId = encryptCookie(newCart.id);

    cookies().set("localCartId", encryptedLocalCartId);
  }
  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
  };
}

export async function mergeAnonymousCartIntoUserCart(userId: string) {
  const localCartId = cookies().get("localCartId")?.value;
  const decrytedCartId = decryptCookie(localCartId);
  const localCart = decrytedCartId
    ? await prisma.cart.findUnique({
        where: { id: decrytedCartId },
        include: { items: true },
      })
    : null;
  if (!localCart) return;

  const userCart = await prisma.cart.findFirst({
    where: { userId },
    include: { items: true },
  });

  await prisma.$transaction(async (tx) => {
    if (userCart) {
      const mergedCartItems = mergeCartItems(localCart.items, userCart.items);
      await tx.cartItem.deleteMany({
        where: { cartId: userCart.id },
      });

      await tx.cart.update({
        where: { id: userCart.id },
        data: {
          items: {
            createMany: {
              data: mergedCartItems.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
              })),
            },
          },
        },
      });
    } else {
      await tx.cart.create({
        data: {
          userId,
          items: {
            createMany: {
              data: localCart.items.map((item) => ({
                productId: item.productId,
                quantity: item.quantity,
              })),
            },
          },
        },
      });
    }
    await tx.cart.delete({
      where: { id: localCart.id },
    });
    cookies().delete("localCartId");
  });
}

function mergeCartItems(...cartItems: CartItem[][]): CartItem[] {
  return cartItems.reduce((acc, items) => {
    items.forEach((item) => {
      const existingItem = acc.find((i) => i.productId === item.productId);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        acc.push(item);
      }
    });
    return acc;
  }, [] as CartItem[]);
}
