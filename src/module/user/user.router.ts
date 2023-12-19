import { Router } from "express";
import { verifyUser } from "./user.validation";
import { createUser } from "./user.controller";

const router = Router();

router.post('/create-user', verifyUser, createUser)


export default router;