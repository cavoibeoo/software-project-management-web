"use strict";

import mongoose from "mongoose";

const IssueSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        key: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        issueType: {
            //ref IssueType
            type: String,
        },
        fields: [
            {
                name: {
                    type: String,
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
    { Timestamp: true }
);

const Issue = mongoose.model("Issue", IssueSchema);
export default Issue;
