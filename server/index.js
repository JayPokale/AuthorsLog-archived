import express from "express";
import LoginRouter from "./Routes/login.js";
const app = express();
import jwt from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";
import connection from "./config.js";
import postRouter from "./Routes/post.js";
// middlewares
app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/v1/api/", LoginRouter);
app.use("/v1/api/post", postRouter);
app.listen(6969, (err) => {
  console.log({ err }, "server running on 6969");
});
