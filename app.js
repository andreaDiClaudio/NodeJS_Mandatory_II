import express from "express";
import { log } from "console";

const app = express();

app.get("/test", (req,res,next) => {
    res.send({message: "Working"});
});


const PORT = 8080;
app.listen(PORT, () => {
    log("Server is running on port", PORT);
})