export default defineEventHandler(async (event) => {
  const item_id = getRouterParam(event, "id");

  console.log({ item_id });

  return {
    message: "Item removed from cart",
  };
});
