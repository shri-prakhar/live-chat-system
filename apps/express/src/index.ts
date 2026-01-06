import prisma from "@repo/db"
import express, { Request ,Response } from "express";

const app = express();
app.use(express.json());
app.use("/api/v1" , authRoutes)
