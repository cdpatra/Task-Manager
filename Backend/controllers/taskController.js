import Task from "../models/Task.js";

export const getAllTasksOfUser = async (req, res) => {
   try {
      const tasks = await Task.find({ userId: req.user._id });
      return res.status(200).json(tasks);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const createNewTask = async (req, res) => {
   try {
      const { title } = req.body;
      const task = await Task.create({ userId: req.user._id, title });
      return res.status(201).json(task);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const updateTask = async (req, res) => {
   try {
      const task = await Task.findById(req.params.id);
      console.log(task);
      console.log(req.user._id);
      console.log(task.userId.toString() !== req.user._id.toString());
      if (!task || task.userId.toString() !== req.user._id.toString()) {
         return res.status(401).json({ message: "Not Authorized" });
      }
      const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).json(updatedTask);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const deleteTask = async (req, res) => {
   try {
      const task = await Task.findById(req.params.id);
      if (!task || task.userId.toString() !== req.user._id.toString()) {
         return res.status(401).json({ message: "Not Authorized" });
      }
      await Task.findByIdAndDelete(req.params.id);
      return res.status(202).json({ message: "Task Deleted Successfully" });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};
