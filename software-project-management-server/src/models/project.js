"use strict";

import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        key: { type: String, required: true },
        img: { type: String, required: false },
        createDate: { type: Date, default: Date.now },
        status: {
            type: Number, // 0 is deleted, 1 is temporarily deleted, 2 is still active
            default: 2,
        },
        createdDate: { type: Date, default: Date.now },
        author: { type: String, required: true },
        attendees: [
            {
                user: {
                    type: String,
                    required: true,
                },
                role: {
                    type: String,
                    required: true,
                },
            },
        ],
        roles: [
            {
                name: {
                    type: String,
                    required: true,
                },
                permissions: [
                    {
                        name: String,
                        allowedAPI: [String],
                    },
                ],
                isDefault: Boolean,
            },
        ],
        workflow: [
            {
                name: { type: String, required: true },
                description: String,
                isDefault: { type: Boolean, default: false },
                workflowType: {
                    type: String,
                    enum: ["Todo", "Progress", "Done"],
                    required: true,
                },
            },
        ],
        issueType: [
            {
                name: {
                    type: String,
                    required: true,
                },
                img: String,
                description: String,
                isDefault: { type: Boolean, default: false },
                fields: [
                    {
                        name: { type: String, required: true },
                        type: {
                            type: any,
                            enum: [Number, String, Array, Object, Date, Boolean],
                            required: true,
                        },
                        isRequired: {
                            type: Boolean,
                            default: false,
                        },
                        description: String,
                    },
                ],
            },
        ],
    },
    { Timestamp: true }
);

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
