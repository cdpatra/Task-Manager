import express from "express";
import { createNewTask, deleteTask, getAllTasksOfUser, updateTask } from "../controllers/taskController.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", auth, getAllTasksOfUser);
router.post("/", auth, createNewTask);
router.patch("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

export default router;
