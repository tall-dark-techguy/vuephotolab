export default defineEventHandler(async (event) => {
  const cart = await cartModel.findOne({});

  return { cart };
});
