import Joi from "joi";

const sprintValidationSchema = Joi.object({
    name: Joi.string().required(),
    startDate: Joi.date().default(() => new Date()),
    endDate: Joi.date().optional(),
    sprintGoal: Joi.string().optional(),
    project: Joi.string().required(),
    issues: Joi.array()
        .items(Joi.string().pattern(/^[0-9a-fA-F]{24}$/))
        .optional(),
});

const addIssueSchema = Joi.object({
    issueId: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required(),
});

const updateSprintSchema = Joi.object({
    name: Joi.string().optional(),
    startDate: Joi.date().optional(),
    endDate: Joi.date().optional(),
    sprintGoal: Joi.string().optional(),
}).strict();

export { sprintValidationSchema, addIssueSchema, updateSprintSchema };
