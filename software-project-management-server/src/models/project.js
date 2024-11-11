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
                permissions: {
                    modify_project: Boolean,
                    delete_project: Boolean,
                    archive_project: Boolean,
                    add_workflow: Boolean,
                    edit_workflow: Boolean,
                    delete_workflow: Boolean,
                    add_actor: Boolean,
                    edit_actor_role: Boolean,
                    remove_actor: Boolean,
                    add_sprint: Boolean,
                    edit_sprint: Boolean,
                    delete_sprint: Boolean,
                    add_issue: Boolean,
                    edit_issue: Boolean,
                    delete_issue: Boolean,
                    add_comment: Boolean,
                    edit_comment: Boolean,
                    delete_comment: Boolean,
                },
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
                        dataType: {
                            type: mongoose.Schema.Types.Mixed,
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
