import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { log } from "console";

const app = express();
app.use(express.json()); //for parsing the body

dotenv.config();//needed to read .env file

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, //it will resave the session even if changes do not happen
    saveUninitialized: true,
    cookie: { secure: false } //'secure : true' expect us to use https    
}))

//Mocking Database
export const users = [];

// Middleware to check if the user is authenticated
export function isAuthenticated(req, res, next) {
    if (req.session && req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

import userRouter from "./Routers/userRouter.js";
app.use(userRouter);

import loginRouter from "./Routers/loginRouter.js";
app.use(loginRouter);

import signupRouter from "./Routers/signupRouter.js";
app.use(signupRouter);

import homeRouter from "./Routers/homeRouter.js";
app.use(homeRouter);

const PORT = 8080;
app.listen(PORT, () => {
    log("Server is running on port", PORT);
});

