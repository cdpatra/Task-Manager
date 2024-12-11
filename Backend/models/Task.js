import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
   title: {
      type: String,
      require: true,
   },
   isCompleted: {
      type: Boolean,
      default: false,
   },
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
   },
});

const Task = mongoose.model("Task", taskSchema);
export default Task;
