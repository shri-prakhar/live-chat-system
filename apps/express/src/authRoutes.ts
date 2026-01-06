import { Router } from "express";
import { signup } from "./signup";
import { login } from "./signin";
import { verify } from "./authroutes/verify";


const router:Router = Router();

router.post("/signup" , signup);
router.post("/login" , login);
router.post("/verify" , verify);


export default router