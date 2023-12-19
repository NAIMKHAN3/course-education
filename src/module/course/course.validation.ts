import { Joi, validate } from "express-validation";

const courseValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        duration: Joi.string().required(),
        level: Joi.string().required(),
        topics: Joi.array().items(Joi.string().required()).required(),
        schedule: Joi.object({
            startDate: Joi.string().required(),
            endDate: Joi.string().required(),
            classDays: Joi.array().items(Joi.string().required().valid("Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday")).required(),
            classTime: Joi.string().required(),
        })
        
    })
}

export const verifyCourse = validate(courseValidation)