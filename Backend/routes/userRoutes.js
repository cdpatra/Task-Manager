import express from "express";
import { handleUserLogin, handleUserRegistration } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", handleUserRegistration);
router.post("/login", handleUserLogin);

export default router;
