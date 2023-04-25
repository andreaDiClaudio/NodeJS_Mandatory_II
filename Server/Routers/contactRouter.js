import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

/*NODEMAILER*/
router.post('/contact', async (req, res) => {
    try {
        console.log(req.body);
        // Create a test account using createTestAccount
        let testAccount = await nodemailer.createTestAccount();

        // Create a transport object using the test account's SMTP details
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        // Send a test email
        let info = await transporter.sendMail({
            from: `${req.body.name} <${req.body.email}>`,
            to: 'Support Team <support@MandatoryII.com>',
            subject: `${req.body.subject}`,
            text: `${req.body.text}`,
        });

        // Send a response to the client
        res.status(200).json({ message: `Email sent correctly! ${nodemailer.getTestMessageUrl(info)}` });
    } catch (error) {
        console.error(error);
        res.status(500).send(`Error: ${error}`);
    }
});

export default router;