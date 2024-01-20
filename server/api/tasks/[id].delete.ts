export default defineEventHandler(async (event) => {
  try {
    const task_id = event.context.params.id;

    await taskModel.findByIdAndDelete(task_id);

    return {
      message: "Task deleted",
    };
  } catch (error) {
    return error;
  }
});
