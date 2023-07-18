import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { prisma } from "@/lib/db/prisma";
import FormSubmitButton from "@/components/FormSubmitButton";
import { authOptions } from "../api/auth/[...nextauth]/route";

const addProduct = async (formData: FormData) => {
  "use server";
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("image")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw new Error("Missing required fields");
  } else {
    await prisma.product.create({
      data: { name, description, imageUrl, price },
    });
    redirect("/");
  }
};
const AddProductPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }
  return (
    <>
      <h1 className="mb-3 text-lg font-bold">Add Product</h1>
      <form encType="multipart/form-data" action={addProduct}>
        <input
          required
          name="name"
          type="text"
          placeholder="Product Name"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          required
          name="image"
          type="url"
          placeholder="Product image url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          required
          name="price"
          type="number"
          placeholder="0.00"
          className="input input-bordered mb-3 w-full"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </>
  );
};

export default AddProductPage;
