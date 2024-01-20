export default defineEventHandler(async (event) => {
  try {
    const tasks = await taskModel.find().sort({ _id: -1 });

    return { tasks };
  } catch (error) {
    return error;
  }
});
