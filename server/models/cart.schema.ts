import { defineMongooseModel } from "#nuxt/mongoose";

export const cartModel = defineMongooseModel({
  name: "Cart",
  schema: {
    items: [
      {
        id: String,
        title: String,
        price: String,
        quantity: String,
        image_url: String,
      },
    ],
  },
  options: {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
});
