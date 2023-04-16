import { Router } from "express";
import bcrypt from "bcrypt";

//So that i can authenticate the user credentials. I think it will change once the database will be implemented
import { hashedPassword } from "../Routers/userRouter.js"
import { users } from "../app.js"

const router = Router();

router.get("/login", (req, res) => {
    res.send({ message: "TODO implement frontend in the future" })
});

router.post("/login", async (req, res, next) => {
    const { email, password, } = req.body;

    // Validate the required fields 
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide all required credentials' });
    }

    //Check if user exists
    const user = users.find(user => user.username === username && user.email === email);

    if (user) {
        //Check if password is the same
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