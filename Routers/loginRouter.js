import { Router } from "express";
import bcrypt from "bcrypt";
import { hashedPassword } from "../Routers/userRouter.js"
import { users } from "../app.js"

const router = Router();

router.get("/login", (req, res) => {
    res.send({ message: "TODO implement the webpage in the future" })
});

router.post("/login", async (req, res, next) => {
    const { email, username, password, } = req.body;

    const user = users.find(user => user.username === username && user.email === email);

    if (user) {
        const isSamePassword = await bcrypt.compare(password, hashedPassword);

        if (isSamePassword) {
            return res.status(200).json({ message: "Logged in" });
        } else {
            return res.status(400).json({ message: "Wrong password. Try again" });
        }
    } else {
        return res.status(404).json({ message: "User Not found" });
    }
});

export default router;