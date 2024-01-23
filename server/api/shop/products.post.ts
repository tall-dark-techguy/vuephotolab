import { productModel } from "~/server/models/product.schema";
import { addProductSchema } from "~/server/validations/products";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, addProductSchema.safeParse);

  if (!body.success) {
    throw createError({
      statusCode: 400,
      message: body.error.message,
    });
  }

  await productModel.create(body.data);

  return {
    message: "Product created successfully",
  };
});
