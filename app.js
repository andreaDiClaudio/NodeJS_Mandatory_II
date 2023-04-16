import express from "express";
import { log } from "console";

const app = express();
app.use(express.json()); //for parsing the body

//Mocking Database
export const users = [];

import userRouter from "./Routers/userRouter.js";
app.use(userRouter);

import loginRouter from "./Routers/loginRouter.js";
app.use(loginRouter);

import signupRouter from "./Routers/signupRouter.js";
app.use(signupRouter);

const PORT = 8080;
app.listen(PORT, () => {
    log("Server is running on port", PORT);
});

