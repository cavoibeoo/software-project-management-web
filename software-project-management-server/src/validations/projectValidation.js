import Joi from "joi";

const createProject = Joi.object({
    defaultProject: Joi.string().optional(),
    name: Joi.string().required(),
    key: Joi.string().required(),
    img: Joi.string().optional(),
    roles: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            permissions: Joi.array().optional(),
            isDefault: Joi.boolean().default(false),
        })
    ),
    workflow: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            description: Joi.string().optional(),
            isDefault: Joi.boolean().default(false),
            workflowType: Joi.string().valid("Todo", "Progress", "Done").required(),
        })
    ),
    issueTypes: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            img: Joi.string().optional(),
            description: Joi.string().optional(),
            isDefault: Joi.boolean().default(false),
            fields: Joi.array()
                .items(
                    Joi.object({
                        name: Joi.string().required(),
                        dataType: Joi.string()
                            .valid("Number", "String", "Array", "Object", "Date", "Boolean")
                            .required(),
                        isRequired: Joi.boolean().default(false),
                        description: Joi.string().optional(),
                    })
                )
                .optional(),
        })
    ),
}).strict();

const updateProject = Joi.object({}).strict();
const addMember = Joi.object({
    email: Joi.string().email().required().max(50).trim().strict(),
    role: Joi.string().required(),
}).strict();

export { createProject, updateProject, addMember };
