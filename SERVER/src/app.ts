import express from "express";
import cors from "cors";
import authRouter from "./auth/authRouter";
import videoRouter from "./videoFile/videoRoute"

import path from "path";
import bodyParser from "body-parser";
import likeRouter from "./like/likeRoute";




const app = express();

app.use(cors());
app.use(express.json());
app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ limit: "100mb"}));
app.use("/uploads", express.static(path.join("uploads")));

app.use(bodyParser.json());



app.use("/api/user", authRouter)
app.use("/api/video", videoRouter)
app.use("/api/like", likeRouter )



export default app;
