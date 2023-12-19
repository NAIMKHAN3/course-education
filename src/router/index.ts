import { Router } from "express";
import userRouter from "../module/user/user.index";
import courseRouter from "../module/course/course.index";


const router = Router();


router.use('/user', userRouter);
router.use('/course', courseRouter);


export default router;