import express from "express";
import cors from "cors";
import authRouter from "./auth/authController";



const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (_req, res) => {
  res.send("API is running");
});

app.use("/api/auth", authRouter);

export default app;
