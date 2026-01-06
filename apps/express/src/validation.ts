import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  password: z.string().min(6),
  role: z.enum(["admin","supervisor","agent","candidate"]).optional(),
  supervisorId: z.string().optional()
    
})

export const signinSchema = z.object({
    email: z.email(),
    password: z.string().min(6),  
})