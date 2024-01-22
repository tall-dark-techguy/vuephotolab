export default defineEventHandler(async (event) => {
  console.log("you visited: ", event.path);
});
