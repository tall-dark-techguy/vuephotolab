import { productModel } from "~/server/models/product.schema";

export default defineEventHandler(async (event) => {
  const products = await productModel.find({}).sort({ _id: "desc" });

  return { products };
});
