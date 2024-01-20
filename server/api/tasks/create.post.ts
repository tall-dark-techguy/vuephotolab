export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  setTimeout(() => {
    console.log("Server idling away...");
  }, 4000);

  try {
    await taskModel.create({
      body: body.body,
    });

    return {
      message: "Task has been added successfully!",
      task: body.body,
    };
  } catch (error) {
    return error;
  }
});
