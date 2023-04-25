import { Router } from "express";
import bcrypt from "bcrypt";
import db from "../Database/connection.js";

const router = Router();

router.get("/login", (req, res) => {
    res.status(200).json({ message: "Login" });
});

router.post("/login", async (req, res, next) => {
    const { email, username, password, } = req.body;

    // Validate the required fields 
    if (!email || !password || !username) {
        return res.status(400).json({ message: 'Please provide all required credentials' });
    }

    //Check if user exists
    const userFound = await db.get('SELECT * FROM users WHERE email = ?', [email]);

    if (userFound) {

        if (username != userFound.username || email != userFound.email) return res.status(404).json({ message: `Couldn't find user with username '${username}' and email '${email}'` });

        //Check if password is the same
        const isSamePassword = await bcrypt.compare(password, userFound.password);

        if (isSamePassword) {
            //save the user info in the session
            req.session.user = {
                id: userFound.id,
                username: userFound.username,
                email: userFound.email
            };

            return res.status(200).json({ message: "Logged in" });
        } else {
            return res.status(400).json({ message: "Wrong password. Try again" });
        }
    } else {
        return res.status(404).json({ message: "User Not found" });
    }
});

export default router;