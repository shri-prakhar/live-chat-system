import { Request, Response } from "express";
import { signupSchema } from "./validation";
import { prisma } from "@repo/db"
import { hashpassword } from "./hash";
 
export const signup =  async (req:Request , res: Response)=>{
    try{
        const {email , name  , password , role , supervisorId}= signupSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({
        where:{
            email
        }
    });
    
    if (existingUser){
        res.status(400).json({message:"user already exists!!"});
        return 
    }

    const hashedpassword = await hashpassword(password , 8)

    const user = await prisma.user.create({
        data:{
            name,
            email,
            password:hashedpassword,
            role,
            supervisorId
        }
    })

    res.status(201).json({success :"true" , "data" : user})


}catch(err:unknown){
        if (err instanceof Error){
            res.status(400).json({message:err.message});
        }else {
            console.log("unknown error")
        }
    }};