import express from "express";
import "dotenv/config.js";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import logger from "./middlewares/logger.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(logger);


app.use('/api/auth', authRoutes);
app.use(errorHandler);
export default app;
