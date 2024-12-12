import express from "express";
import cors from "cors";
import { connectMongoDB } from "./connectionDB.js";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
import dotenv from "dotenv";

// .env
dotenv.config();

const app = express();
const PORT = process.env.PORT_NO;

app.use(express.json());

// CORS configuration
const corsOptions = {
   origin: process.env.CORS_ORIGIN,
   methods: ["GET", "POST", "PATCH", "DELETE"], // Allowed HTTP methods
   allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions));

// connecting with the mongo db
connectMongoDB(process.env.MONGO_URI).then(() => console.log("DB connected Successfully"));

// API Routes
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
