import Joi from "joi";

const userCreateSchema = Joi.object({
    name: Joi.string().required().max(50).trim().strict(),
    email: Joi.string().email().required().max(50).trim().strict(),
    password: Joi.string()
        .min(8)
        .required()
        .pattern(new RegExp("^"))
        .min(6)
        .max(50)
        .trim()
        .strict()
        .pattern(
            new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")
        ),
    role: Joi.string().valid("admin", "user").trim().strict(),
    avatar: Joi.string().trim().strict(),
    isDeleted: Joi.boolean(),
});

const userLoginSchema = Joi.object({
    email: Joi.string().email().required().max(50).email().trim().strict(),
    password: Joi.string().max(50).required().min(6).max(50).trim().strict(),
});

export { userCreateSchema, userLoginSchema };
