import { Router } from "express";
import { isAuthenticated } from "../app.js";

const router = Router();

router.post("/logout", isAuthenticated, (req, res) => {
    req.session.destroy(() => {
        res.send({ message: "Goodbye!" });
    });
});