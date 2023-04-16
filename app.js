import express from "express";
import { log } from "console";

const app = express();

//Mocking Database
export const users = [];
users.push({
    email:"hardcoded@mail.com",
    username:"hardcoded_username",
    password:"Hardcoded_password"
})

import testRouter from "./Routers/testRouter.js";
app.use(testRouter);

import signupRouter from "./Routers/signupRouter.js"
app.use(signupRouter);

const PORT = 8080;
app.listen(PORT, () => {
    log("Server is running on port", PORT);
})

