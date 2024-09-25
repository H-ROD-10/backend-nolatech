import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import errorMidleware from "./middleware/error.js";

// Import all routes
import { userRoute } from "./modules/user/routes/user.router.js";
import swaggerRoute from "./modules/swagger/routes/swagger.routes.js";

const app = express();

dotenv.config({
  path: "config/config.env",
});

const options = {
  origin: [true, "*"],
  methods: ["GET", "HEAD", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(helmet());
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1", userRoute);
app.use("/api/v1", swaggerRoute);

// Midleware error handler
app.use(errorMidleware);

export default app;
