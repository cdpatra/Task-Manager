import express from "express";
import { getUserInfo, handleUserLogin, handleUserRegistration } from "../controllers/userController.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

router.get("/",auth,getUserInfo)
router.post("/register", handleUserRegistration);
router.post("/login", handleUserLogin);

export default router;
