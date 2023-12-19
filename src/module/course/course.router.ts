import { Router } from "express";
import { verifyCourse } from "./course.validation";
import { createCourse, getAllCourse, getCourseById, updateCourse } from "./course.controller";
import { verifyAdmin } from "../../middleware/verifyAdmin";
import { verifyJwt } from "../../middleware/verifyJwt";


const router = Router();

router.post('/', verifyJwt, verifyAdmin, verifyCourse, createCourse)
router.get('/',  getAllCourse)
router.get('/:id',  getCourseById)
router.patch('/:id',  updateCourse)


export default router;