"use strict";

import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        key: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: false,
        },
        createDate: {
            type: Date,
            default: Date.now,
        },
        status: {
            type: Number, // 0 is deleted, 1 is temporarily deleted, 2 is still active
            default: 2,
        },
        createdDate: {
            type: Date,
            default: Date.now,
        },
        author: {
            type: String,
            required: true,
        },
        attendees: [
            {
                user: {
                    type: String,
                },
                role: {
                    type: String,
                    enum: ["viewer", "member", "admin"],
                    default: "member",
                },
            },
        ],
    },
    { Timestamp: true }
);

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
