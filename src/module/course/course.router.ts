import { Router } from "express";
import { verifyCourse } from "./course.validation";
import { createCourse, getAllCourse } from "./course.controller";
import { verifyAdmin } from "../../middleware/verifyAdmin";
import { verifyJwt } from "../../middleware/verifyJwt";


const router = Router();

router.post('/', verifyJwt, verifyAdmin, verifyCourse, createCourse)
router.get('/',  getAllCourse)


export default router;