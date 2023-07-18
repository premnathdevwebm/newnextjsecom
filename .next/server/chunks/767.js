"use strict";
exports.id = 767;
exports.ids = [767];
exports.modules = {

/***/ 60509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GET: () => (/* binding */ handler),
  POST: () => (/* binding */ handler),
  authOptions: () => (/* binding */ authOptions)
});

// EXTERNAL MODULE: ./node_modules/@auth/prisma-adapter/index.js
var prisma_adapter = __webpack_require__(13563);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/google.js
var google = __webpack_require__(16657);
// EXTERNAL MODULE: ./node_modules/next-auth/next/index.js
var next = __webpack_require__(77082);
// EXTERNAL MODULE: ./src/lib/db/prisma.ts
var prisma = __webpack_require__(82101);
// EXTERNAL MODULE: ./node_modules/zod/lib/index.mjs
var lib = __webpack_require__(91746);
;// CONCATENATED MODULE: ./src/lib/env.ts

const envSchema = lib/* default.object */.ZP.object({
    DATABASE_URL: lib/* default.string */.ZP.string().nonempty(),
    GOOGLE_CLIENT_ID: lib/* default.string */.ZP.string().nonempty(),
    GOOGLE_CLIENT_SECRET: lib/* default.string */.ZP.string().nonempty(),
    NEXTAUTH_URL: lib/* default.string */.ZP.string().nonempty(),
    NEXTAUTH_SECRET: lib/* default.string */.ZP.string().nonempty()
});
const env = envSchema.parse(process.env);

// EXTERNAL MODULE: ./src/lib/db/cart.ts
var cart = __webpack_require__(95504);
;// CONCATENATED MODULE: ./src/app/api/auth/[...nextauth]/route.ts






const authOptions = {
    adapter: (0,prisma_adapter/* PrismaAdapter */.N)(prisma/* prisma */._),
    providers: [
        (0,google/* default */.Z)({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        session ({ session, user }) {
            session.user.id = user.id;
            return session;
        }
    },
    events: {
        async signIn ({ user }) {
            await (0,cart/* mergeAnonymousCartIntoUserCart */.Gt)(user.id);
        }
    }
};
const handler = (0,next["default"])(authOptions);



/***/ }),

/***/ 95504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bk: () => (/* binding */ createCart),
/* harmony export */   Gt: () => (/* binding */ mergeAnonymousCartIntoUserCart),
/* harmony export */   dv: () => (/* binding */ getCart)
/* harmony export */ });
/* harmony import */ var next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10525);
/* harmony import */ var next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js_aes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7055);
/* harmony import */ var crypto_js_aes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js_aes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4922);
/* harmony import */ var crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1215);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82101);
/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60509);






const secretKey = "my-cookie-secret-key";
function encryptCookie(value) {
    const encryptedValue = crypto_js_aes__WEBPACK_IMPORTED_MODULE_1___default().encrypt(value, secretKey).toString();
    return encryptedValue;
}
function decryptCookie(encryptedValue) {
    if (encryptedValue) {
        const decryptedValue = crypto_js_aes__WEBPACK_IMPORTED_MODULE_1___default().decrypt(encryptedValue, secretKey).toString((crypto_js_enc_utf8__WEBPACK_IMPORTED_MODULE_2___default()));
        return decryptedValue;
    }
}
async function getCart() {
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_5__.authOptions);
    let cart = null;
    if (session) {
        cart = await _prisma__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ ._.cart.findFirst({
            where: {
                userId: session.user.id
            },
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        });
    } else {
        const localCartId = (0,next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get("localCartId")?.value;
        const decrytedCartId = decryptCookie(localCartId);
        cart = decrytedCartId ? await _prisma__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ ._.cart.findUnique({
            where: {
                id: decrytedCartId
            },
            include: {
                items: {
                    include: {
                        product: true
                    }
                }
            }
        }) : null;
    }
    if (!cart) return null;
    return {
        ...cart,
        size: cart.items.reduce((accu, item)=>accu + item.quantity, 0),
        subtotal: cart.items.reduce((accu, item)=>accu + item.quantity * item.product.price, 0)
    };
}
async function createCart() {
    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_5__.authOptions);
    let newCart;
    if (session) {
        newCart = await _prisma__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ ._.cart.create({
            data: {
                userId: session.user.id
            }
        });
    } else {
        newCart = await _prisma__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ ._.cart.create({
            data: {}
        });
        const encryptedLocalCartId = encryptCookie(newCart.id);
        (0,next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set("localCartId", encryptedLocalCartId);
    }
    return {
        ...newCart,
        items: [],
        size: 0,
        subtotal: 0
    };
}
async function mergeAnonymousCartIntoUserCart(userId) {
    const localCartId = (0,next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get("localCartId")?.value;
    const decrytedCartId = decryptCookie(localCartId);
    const localCart = decrytedCartId ? await _prisma__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ ._.cart.findUnique({
        where: {
            id: decrytedCartId
        },
        include: {
            items: true
        }
    }) : null;
    if (!localCart) return;
    const userCart = await _prisma__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ ._.cart.findFirst({
        where: {
            userId
        },
        include: {
            items: true
        }
    });
    await _prisma__WEBPACK_IMPORTED_MODULE_4__/* .prisma */ ._.$transaction(async (tx)=>{
        if (userCart) {
            const mergedCartItems = mergeCartItems(localCart.items, userCart.items);
            await tx.cartItem.deleteMany({
                where: {
                    cartId: userCart.id
                }
            });
            await tx.cart.update({
                where: {
                    id: userCart.id
                },
                data: {
                    items: {
                        createMany: {
                            data: mergedCartItems.map((item)=>({
                                    productId: item.productId,
                                    quantity: item.quantity
                                }))
                        }
                    }
                }
            });
        } else {
            await tx.cart.create({
                data: {
                    userId,
                    items: {
                        createMany: {
                            data: localCart.items.map((item)=>({
                                    productId: item.productId,
                                    quantity: item.quantity
                                }))
                        }
                    }
                }
            });
        }
        await tx.cart.delete({
            where: {
                id: localCart.id
            }
        });
        (0,next_dist_client_components_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().delete("localCartId");
    });
}
function mergeCartItems(...cartItems) {
    return cartItems.reduce((acc, items)=>{
        items.forEach((item)=>{
            const existingItem = acc.find((i)=>i.productId === item.productId);
            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                acc.push(item);
            }
        });
        return acc;
    }, []);
}


/***/ }),

/***/ 82101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const globalForPrisma = globalThis;
const prismaBase = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
const prisma = prismaBase.$extends({
    query: {
        cart: {
            async update ({ args, query }) {
                args.data = {
                    ...args.data,
                    updatedAt: new Date()
                };
                return query(args);
            }
        }
    }
});
if (false) {}


/***/ })

};
;