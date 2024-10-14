"use strict";

import mongoose from "mongoose";

const ActionSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        api: {
            type: String,
            required: true,
        },
    },
    { Timestamp: true }
);

const Action = mongoose.model("Action", ActionSchema);
export default Action;
