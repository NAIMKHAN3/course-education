import { Router } from "express";
import { verifyCourse } from "./course.validation";
import { createCourse, deleteCourse, getAllCourse, getCourseById, updateCourse } from "./course.controller";
import { verifyAdmin } from "../../middleware/verifyAdmin";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyParams } from "../../middleware/verifyParams";


const router = Router();

router.post('/', verifyJwt, verifyAdmin, verifyCourse, createCourse)
router.get('/', getAllCourse)
router.get('/:id', verifyParams, getCourseById)
router.patch('/:id', verifyParams, verifyJwt, verifyAdmin, updateCourse)
router.delete('/:id', verifyParams, verifyJwt, verifyAdmin, deleteCourse)


export default router;