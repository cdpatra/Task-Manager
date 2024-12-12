import express from "express";
import cors from "cors";
import { connectMongoDB } from "./connectionDB.js";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

const app = express();
const PORT = 9090;

app.use(express.json());

// CORS configuration
const corsOptions = {
   origin: "http://localhost:5173",
   methods: ["GET", "POST", "PATCH", "DELETE"], // Allowed HTTP methods
   allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
};

app.use(cors(corsOptions));

// connecting with the mongo db
connectMongoDB("mongodb://127.0.0.1:27017/task_manager").then(() => console.log("DB connected Successfully"));

// API Routes
app.use("/api/user", userRouter);
app.use("/api/task", taskRouter);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
