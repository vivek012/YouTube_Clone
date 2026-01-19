
import { Router } from "express";
import {login , updateProfile}from "./authController";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.put("/update-profile", updateProfile)


export default authRouter;