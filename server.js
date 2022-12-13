import express from "express";
import { connectDB } from "./config/connection.js"
import dotenv from "dotenv";
import employeeRouter from "./routes/Employee.js";
const app = express()

app.listen(8000, () => {
    console.log('app is working on 8000 port');
})
app.use(express.json());
connectDB();
dotenv.config({
    path: "./config/config.env"
});

app.get("/", (req, res) => {
    res.send("App is working fine");
})
app.use("/api", employeeRouter);