"use strict";

import mongoose from "mongoose";

const ProjectRoleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        privilege: [
            {
                action: {
                    //ref action
                    type: String,
                    required: true,
                },
                isAllowed: {
                    type: Boolean,
                    default: true,
                },
            },
        ],
        project: {
            type: String,
            required: true,
        },
        isDefault: {
            type: Boolean,
        },
    },
    { Timestamp: true }
);

const ProjectRole = mongoose.model("ProjectRole", ProjectRoleSchema);
export default ProjectRole;
