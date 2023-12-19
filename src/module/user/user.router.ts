import { Router } from "express";
import { verifyLogin, verifyUser } from "./user.validation";
import { createUser, loginUser } from "./user.controller";

const router = Router();

router.post('/create-user', verifyUser, createUser)
router.post('/login-user', verifyLogin,  loginUser)


export default router;