"use strict";

import mongoose from "mongoose";

const SprintSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
        },
        endDate: {
            type: Date,
            required: false,
        },
        status: {
            type: String,
            default: "created",
            enum: ["created", "started", "completed"],
        },
        sprintGoal: {
            type: String,
            required: false,
        },
        project: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Project",
        },
        // issues: [{ type: mongoose.Schema.Types.ObjectId }],
    },
    { Timestamp: true }
);

const Sprint = mongoose.model("Sprint", SprintSchema);
export default Sprint;
