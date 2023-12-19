import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userModel = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "Admin"
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const User = model<IUser>('User', userModel)