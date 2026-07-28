import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

app.use("/api/auth" , authRoutes)
const app = express();

app.use(cors());

app.use(express.json());

export default app;
