"use strict";

import mongoose from "mongoose";

const IssueTypeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
        description: {
            type: String,
        },
        isDefault: {
            type: Boolean,
        },
        fields: [
            {
                name: {
                    type: String,
                    required: true,
                },
                type: {
                    type: any,
                    enum: [Number, String, Array, Object, Date, Boolean],
                    required: true,
                },
                isRequired: {
                    type: Boolean,
                    default: false,
                },
                description: {
                    type: String,
                },
            },
        ],
        project: {
            type: String,
            required: true,
        },
    },
    { Timestamp: true }
);

const IssueType = mongoose.model("IssueType", IssueTypeSchema);
export default IssueType;
