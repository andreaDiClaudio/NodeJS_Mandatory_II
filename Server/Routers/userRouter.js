import { Router } from "express";
import bcrypt from "bcrypt";
import db from "../Database/connection.js";

const router = Router();

export let hashedPassword = "";

router.get("/users", async (req, res, next) => {
    res.send({ data: await db.all("SELECT * FROM users;") });
});

router.post("/users", async (req, res, next) => {
    const { email, username, password, } = req.body;

    // Validate the required fields 
    if (!email || !password || !username) {
        return res.status(400).json({ message: 'Please provide all required credentials' });
    }

    const user = await db.get('SELECT * FROM users WHERE email = ? AND username = ?', [email, username]);
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

    //Saving the user in the db
    const { lastID } = await db.run("INSERT INTO users (username, email, password) VALUES (?, ?, ?);", [username, email, hashedPassword]);

    return res.status(201).json({
        message: `User created successfully`
    });
});

export default router;