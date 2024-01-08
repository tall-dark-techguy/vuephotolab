export default defineEventHandler(async (event) => {
  // fetch todos from redis cache or database

  return {
    todos: [],
    message: "Todos fetched successfully",
  };
});
