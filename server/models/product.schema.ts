import { defineMongooseModel } from "#nuxt/mongoose";

export const productModel = defineMongooseModel({
  name: "Product",
  schema: {
    image_url: String,
    title: String,
    description: String,
    price: Number,
    quantity: Number,
  },
  options: {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
});
