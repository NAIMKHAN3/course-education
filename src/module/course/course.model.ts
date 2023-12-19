import { Schema, model } from "mongoose";
import { ICourse } from "./course.interface";


const enumDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const courseModel = new Schema<ICourse>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    topics: {
        type: [String],
        required: true,
    },
    schedule: {
        startDate: {
            type: String,
            required: true,
        },
        endDate: {
            type: String,
            required: true,
        },
        classDays: {
            type: String,
            required: true,
            enum: enumDays
        },
        classTime: {
            type: [String],
            required: true,
        },
    }
}, { timestamps: true })

export const Course = model<ICourse>('Course', courseModel)