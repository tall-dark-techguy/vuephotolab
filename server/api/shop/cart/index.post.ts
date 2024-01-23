import { addToCartSchema } from "~/server/validations/carts";

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, addToCartSchema.safeParse);

  if (!body.success) {
    throw createError({
      statusCode: 400,
      message: body.error.message,
    });
  }

  const cart = await cartModel.findOne({});

  if (cart) {
    const item_exists = cart.items.find((p) => p.id.toString() == body.data.id);

    if (!item_exists) {
      await cartModel.findByIdAndUpdate(cart._id, {
        $set: {
          items: [body.data, ...cart.items],
        },
      });
    }
  } else {
    await cartModel.create({
      items: [body.data],
    });
  }

  return {
    message: "Item added to cart successfully",
  };
});
