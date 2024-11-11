import Joi from "joi";

const userCreate = Joi.object({
    name: Joi.string().required().max(50).trim().strict(),
    email: Joi.string().email().required().max(50).trim().strict(),
    password: Joi.string()
        .required()
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
}).strict();

const userLogin = Joi.object({
    email: Joi.string().email().required().max(50).email().trim().strict(),
    password: Joi.string().max(50).required().min(6).max(50).trim().strict(),
});

const userRefresh = Joi.object({
    refreshToken: Joi.string().required().trim().strict(),
});

const userUpdate = Joi.object({
    avatar: Joi.string().trim().strict(),
    name: Joi.string().max(50).trim().strict(),
    jobTitle: Joi.string().max(50),
    department: Joi.string().max(50),
    organization: Joi.string().max(50),
}).strict();

const userStatus = Joi.object({
    userId: Joi.string().required().trim().strict(),
    isDeleted: Joi.boolean().required(),
}).strict();

const userUpdatePassword = Joi.object({
    oldPassword: Joi.string().max(50).min(6).trim().strict(),
    newPassword: Joi.string()
        .required()
        .min(6)
        .max(50)
        .trim()
        .strict()
        .pattern(
            new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")
        ),
    confirmPassword: Joi.string().valid(Joi.ref("newPassword")).required(),
}).strict();

const updateOtpPassword = Joi.object({
    password: Joi.string()
        .required()
        .min(6)
        .max(50)
        .trim()
        .strict()
        .pattern(
            new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$")
        ),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export {
    userCreate,
    userLogin,
    userRefresh,
    userUpdate,
    userStatus,
    userUpdatePassword,
    updateOtpPassword,
};
