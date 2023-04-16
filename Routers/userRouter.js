import { Router } from "express";
import bcrypt from "bcrypt";
import { users } from "../app.js"
import { log } from "console";

const router = Router();

let userIdCounter = 0;
export let hashedPassword = "";

router.get("/users", (req, res, next) => {
    res.send({ data: users })
});

router.post("/user", async (req, res, next) => {
    const { email, username, password, } = req.body;

    // Validate the required fields 
    if (!email || !password || !username) {
        return res.status(400).json({ message: 'Please provide all required credentials' });
    }

    const user = users.find(user => user.username === username || user.email === email);
    if (user) {
        // Check if a user with the same credentials already exists
        if (user.username === username && user.email === email) return res.status(400).json({ message: `User with the username '${username}' and email '${email}' already exists` });

        // Check if a user with the same username already exists
        if (user.username === username) return res.status(400).json({ message: `User with the username '${username}' already exists` });

        // Check if a user with the same email already exists
        if (user.email === email) return res.status(400).json({ message: `User with the email '${email}' already exists` });
    }

    // Hash the password using bcrypt
    hashedPassword = await bcrypt.hash(password, 12);

    //creates and saves a new user in the array
    const newUser = {
        id: ++userIdCounter,
        email: email,
        username: username,
        password: hashedPassword
    }
    users.push(newUser);

    return res.status(201).json({
        message: `User created successfully`,
        new_user: newUser
    });
});

export default router;