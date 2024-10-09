"use strict";

import mongoose from "mongoose";

const LogSchema = mongoose.Schema(
    {
        action: {
            type: String,
            required: true,
        },
        time: {
            type: Date,
            default: Date.now,
        },
        description: {
            type: String,
        },
        actor: {
            type: String,
            required: true,
        },
        project: {
            type: String,
            required: true,
        },
    },
    { Timestamp: true }
);

const Log = mongoose.model("Log", LogSchema);
export default Log;
