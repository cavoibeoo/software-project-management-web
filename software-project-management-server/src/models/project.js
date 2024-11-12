"use strict";

import mongoose, { mongo } from "mongoose";

const ProjectSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        key: { type: String, required: true },
        img: { type: String, required: false },
        status: {
            type: Number, // 0 is temporarily deleted, 1 is still active, 2 is archived
            default: 1,
        },
        isDefault: { type: Boolean, default: false },
        createdDate: { type: Date, default: Date.now },
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to User
        actors: [
            {
                _id: false,
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
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
                        type: String,
                        enum: [
                            "update_project",
                            "delete_project",
                            "archive_project",
                            "add_workflow",
                            "update_workflow",
                            "delete_workflow",
                            "add_actor",
                            "update_actor_role",
                            "remove_actor",
                            "add_sprint",
                            "update_sprint",
                            "delete_sprint",
                            "add_issue_type",
                            "update_issue_type",
                            "delete_issue_type",
                            "add_issue",
                            "update_issue",
                            "delete_issue",
                            "add_comment",
                            "update_comment",
                            "delete_comment",
                        ],
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
        issueTypes: [
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
                        dataType: {
                            type: String,
                            enum: ["String", "Number", "Boolean", "Date", "Array", "Object"],
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
