"use strict";

import mongoose from "mongoose";

const WorkflowSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        isDefault: {
            type: Boolean,
        },
        type: {
            type: String,
            enum: ["Todo", "Progress", "Done"],
        },
    },
    { Timestamp: true }
);

const Workflow = mongoose.model("Workflow", WorkflowSchema);
export default Workflow;
