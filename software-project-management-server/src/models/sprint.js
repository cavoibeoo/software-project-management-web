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
            default: Date.now(),
        },
        endDate: {
            type: Date,
            required: false,
        },
        sprintGoal: {
            type: String,
            required: false,
        },
        project: {
            //ref project
            type: String,
        },
    },
    { Timestamp: true }
);

const Sprint = mongoose.model("Sprint", SprintSchema);
export default Sprint;
