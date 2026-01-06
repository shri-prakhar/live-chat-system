import express, { Request ,Response } from "express";
import authRoutes from "./authRoutes" 

const app = express();
app.use(express.json());
app.use("/auth" , authRoutes)


app.listen(3000 , () => {
    console.log("server running on port 3000")
})