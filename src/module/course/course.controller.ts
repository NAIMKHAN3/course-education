import { NextFunction, Request, Response } from "express";
import { Course } from "./course.model";

export const createCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Course.create(req.body)
        res.status(200).send({
            success: true,
            message: "course create success",
            data: result,
        })
    }
    catch (err) {
        next(err)
    }
}

export const getAllCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Course.find();
        res.status(200).send({
            success: true,
            message: "course get success",
            data: result,
        })
    }
    catch (err) {
        next(err)
    }
}

export const getCourseById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Course.findById(req.params.id);
        res.status(200).send({
            success: true,
            message: "course get success",
            data: result,
        })
    }
    catch (err) {
        next(err)
    }
}

export const deleteCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Course.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success: true,
            message: "course delete success",
            data: result,
        })
    }
    catch (err) {
        next(err)
    }
}

export const updateCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const result = await Course.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).send({
            success: true,
            message: "course update success",
            data: result,
        })
    }
    catch (err) {
        next(err)
    }
}