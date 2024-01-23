export default defineEventHandler(async (event) => {
  const item_id = getRouterParam(event, "id");

  const cart = await cartModel.findOne({});

  if (cart) {
    const filtered = cart.items.filter((p) => p.id.toString() !== item_id);

    await cartModel.findByIdAndUpdate(cart._id, {
      $set: {
        items: filtered,
      },
    });
  }

  return {
    message: "Item removed from cart",
  };
});
