import express from "express";
import session from "express-session";
import dotenv from "dotenv";
import { log } from "console";
import cors from "cors";

const app = express();
app.use(express.json()); //for parsing the body

app.use(cors({
    credentials: true,
    origin: true
}));

/*SESSION*/
dotenv.config();//needed to read .env file
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, //it will resave the session even if changes do not happen
    saveUninitialized: true,
    cookie: { secure: false } //'secure : true' expect us to use https    
}));

/*RATE LIMIT */
import rateLimit from "express-rate-limit"
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use("/login", apiLimiter);
app.use("/home", apiLimiter);

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

import logoutRouter from "./Routers/logoutRouter.js";
app.use(logoutRouter);

import homeRouter from "./Routers/homeRouter.js";
app.use(homeRouter);

import contactRouter from "./Routers/contactRouter.js";
app.use(contactRouter);

const PORT = 8080;
app.listen(PORT, () => {
    log("Server is running on port", PORT);
});
