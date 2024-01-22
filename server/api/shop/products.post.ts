import { productModel } from "~/server/models/product.schema";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  await productModel.create(body);

  return {
    message: "Product created successfully",
  };
});
