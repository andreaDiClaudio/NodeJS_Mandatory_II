import { Router } from "express";

const router = Router();

router.get("/signup", (req, res) => {
    res.send({ message: "SIGNUP: TODO implement frontend in the future" });
});

export default router;