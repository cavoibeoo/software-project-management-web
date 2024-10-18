"use strict";

import mongoose from "mongoose";

const IssueSchema = mongoose.Schema(
    {
        project: {
            type: String,
            required: true,
        },
        count: Number,
        page: Number,
        issues: {
            name: { type: String, required: true },
            key: { type: String, required: true },
            description: String,
            issueType: {
                //ref IssueType
                type: String,
                required: true,
            },
            fields: [
                {
                    name: {
                        type: String,
                        required: true,
                    },
                    value: {
                        type: any,
                    },
                },
            ],
            workFlow: {
                // ref Workflow
                type: String,
            },
            parent: {
                // ref parent issue
                type: String,
            },
            sprint: {
                // ref Sprint
                type: String,
            },
        },
        comments: [
            {
                comment: String,
                user: String,
                createdAt: Date,
            },
        ],
    },
    { Timestamp: true }
);

const Issue = mongoose.model("Issue", IssueSchema);
export default Issue;
