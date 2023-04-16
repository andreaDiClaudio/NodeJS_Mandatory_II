import { Router } from "express";
import bcrypt from "bcrypt";
import session from "express-session";

//So that i can authenticate the user credentials. I think it will change once the database will be implemented
import { hashedPassword } from "../Routers/userRouter.js"
import { users } from "../app.js"

const router = Router();

router.get("/login", (req, res) => {
    res.send({ message: "LOGIN: TODO implement frontend in the future" })
});

router.post("/login", async (req, res, next) => {
    const { email, username, password, } = req.body;

    // Validate the required fields 
    if (!email || !password || !username) {
        return res.status(400).json({ message: 'Please provide all required credentials' });
    }

    //Check if user exists
    const userFound = users.find(user => user.email === email);

    if (userFound) {

        if (username != userFound.username || email != userFound.email) return res.status(404).json({ message: `Couldn't find user with username '${username}' and email '${email}'` });

        //Check if password is the same
        const isSamePassword = await bcrypt.compare(password, hashedPassword);

        if (isSamePassword) {
            //save the user info in the session
            req.session.user = {
                id: userFound.id,
                username: userFound.username,
                email: userFound.email,
                username: userFound.username
            };

            return res.status(200).json({ message: "Logged in" });
        } else {
            return res.status(400).json({ message: "Wrong password. Try again" });
        }
    } else {
        return res.status(404).json({ message: "User Not found" });
    }
});

/*
router.get("/gotham/:name", (req, res) => {
    req.session.name = req.params.name;
    res.send({message: `Hi ${req.session.name}`}) 
  });

  router.get("/gotham", (req,res) => {
    res.send({message: `I rember you ${req.session.name}`})
  })

  router.get("/leavegotham", (req,res) => {
    req.session.destroy(() => {
        res.send({})
    })
  })*/

export default router;