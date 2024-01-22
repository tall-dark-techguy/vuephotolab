import { stringToUpper } from "~/server/utils/strings";

export default defineEventHandler(async (event) => {
  const message = stringToUpper("api is working...");

  throw createError({
    statusCode: 400,
    statusMessage: "Invalid request body",
    data: {
      first_name: "Please enter your first name",
    },
  });

  return {
    message,
  };
});
