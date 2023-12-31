import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt'
import { User } from './user.model';
import createToken from '../../utils/token.utils';
export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const findUser = await User.findOne({ email: req.body.email })
        if (findUser) {
            return res.status(400).send({
                success: false,
                message: "User already exist",

            })
        }
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const result = await User.create(req.body)
        const user = {
            _id: result._id,
            name: result.name,
            email: result.email,
            role: result.role
        }



        const accessToken = createToken("ACCESS", user)
        const refreshToken = createToken("REFRESH", user)

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/'
        })


        res.status(201).send({
            success: true,
            message: "User created success",
            data: user,
            accessToken
        })
    }
    catch (err) {
        next(err)
    }
}

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const findUser = await User.findOne({ email: req.body.email })
        if (!findUser) {
            return res.status(400).send({
                success: false,
                message: "User not found",

            })
        }
        const isPasswordMatch = await bcrypt.compare( req.body.password, findUser.password)
        if (!isPasswordMatch) {
            return res.status(400).send({
                success: false,
                message: "Password incorrect",

            })
        }
        const user = {
            _id: findUser._id,
            name: findUser.name,
            email: findUser.email,
            role: findUser.role
        }



        const accessToken = createToken("ACCESS", user)
        const refreshToken = createToken("REFRESH", user)

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/'
        })


        res.status(200).send({
            success: true,
            message: "User login success",
            data: user,
            accessToken
        })
    }
    catch (err) {
        next(err)
    }
}