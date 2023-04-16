import { Router } from "express";
import { users } from "../app.js"

const router = Router();

router.get("/users", (req,res,next) => {
    res.send({message: users})
});

export default router;