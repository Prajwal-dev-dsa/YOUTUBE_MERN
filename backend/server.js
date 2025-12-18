import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import connectDB from "./config/dB.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import contentRouter from "./routes/content.route.js";
import rateLimiter from "./middlewares/rateLimiter.js";

dotenv.config();

const app = express();

// This tells Express to trust the SSL/HTTPS connection from Render's load balancer.
// Without this, 'secure: true' cookies will NOT work.
app.set("trust proxy", 1);

app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local development
      "https://youtube-rdi0.onrender.com", // YOUR DEPLOYED FRONTEND URL
    ],
    credentials: true, // This allows the cookie to be sent/received
  })
);

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(morgan("dev"));

app.use(rateLimiter);

// routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/content", contentRouter);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});