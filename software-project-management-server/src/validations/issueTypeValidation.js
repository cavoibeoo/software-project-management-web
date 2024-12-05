import Joi from "joi";

const issueTypeCreate = Joi.object({
    name: Joi.string().required().max(50).trim().strict(),
    description: Joi.string().max(255).trim().strict(),
    img: Joi.string().uri().trim().strict(),
    fields: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().required().max(50).trim().strict(),
                dataType: Joi.string()
                    .valid("String", "Number", "Boolean", "Date", "Array", "Object")
                    .required()
                    .trim()
                    .strict(),
                isRequired: Joi.boolean().strict().default(false),
                description: Joi.string().max(255).trim().strict(),
            })
        )
        .strict(),
}).strict();

const issueTypeUpdate = Joi.object({
    name: Joi.string().max(50).trim().strict(),
    description: Joi.string().max(255).trim().strict().optional(),
    img: Joi.string().uri().trim().strict(),
    fields: Joi.array()
        .items(
            Joi.object({
                name: Joi.string().max(50).trim().strict(),
                dataType: Joi.string()
                    .valid("String", "Number", "Boolean", "Date", "Array", "Object")
                    .trim()
                    .strict(),
                isRequired: Joi.boolean().strict().default(false).optional(),
                description: Joi.string().max(255).trim().strict().optional().allow(""),
            })
        )
        .strict(),
});

export { issueTypeCreate, issueTypeUpdate };
