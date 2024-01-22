export default defineEventHandler(async (event) => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    throw createError({
      statusCode: 401,
      statusMessage: "You are not authorized to access this endpoint",
    });
  }
});
