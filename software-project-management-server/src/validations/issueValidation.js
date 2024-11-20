import Joi from "joi";
import mongoose from "mongoose";

const createSchema = Joi.object({
    summary: Joi.string().required(),
    description: Joi.string().optional(),
    issueType: Joi.string().required(),
    fields: Joi.any().optional(),
    workFlow: Joi.string().optional(),
    parent: Joi.string().optional(),
    sprint: Joi.string().optional(),
    comments: Joi.array()
        .items(
            Joi.object({
                comment: Joi.string().optional(),
                user: Joi.string().optional(),
                createdAt: Joi.date().optional(),
            })
        )
        .optional(),
}).strict();

const updateSchema = Joi.object({
    summary: Joi.string().optional(),
    description: Joi.string().optional(),
    issueType: Joi.string().optional(),
    fields: Joi.any().optional(),
    workFlow: Joi.string().optional(),
    parent: Joi.string().optional(),
    sprint: Joi.string().optional(),
    comments: Joi.array()
        .items(
            Joi.object({
                comment: Joi.string().optional(),
                user: Joi.string().optional(),
                createdAt: Joi.date().optional(),
            })
        )
        .optional(),
}).strict();

export { createSchema, updateSchema };
