import { stringToUpper } from "~/server/utils/strings";

export default defineEventHandler(async (event) => {
  const message = stringToUpper("api is working...");

  return {
    message,
    todos: [],
  };
});
