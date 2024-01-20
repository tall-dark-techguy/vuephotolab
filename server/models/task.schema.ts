import { defineMongooseModel } from "#nuxt/mongoose";
import { ITask } from "~/interfaces";

export const taskModel = defineMongooseModel<ITask>({
  name: "Task",
  schema: {
    body: {
      type: String,
      required: true,
    },
  },
  options: {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
});
