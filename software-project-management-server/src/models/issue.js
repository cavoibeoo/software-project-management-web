"use strict";

import mongoose from "mongoose";

const IssueSchema = mongoose.Schema(
    {
        project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
        count: { type: Number, default: 0 },
        page: Number,

        issues: [
            {
                project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
                summary: { type: String, required: true },
                key: { type: String, required: true },
                description: String,
                issueType: {
                    _id: { type: mongoose.Schema.Types.ObjectId },
                    img: { type: String },
                    name: { type: String, required: true },
                },
                fields: { type: mongoose.Schema.Types.Mixed },

                workFlow: {
                    // ref Workflow
                    type: String,
                    default: "Todo",
                },
                parent: {
                    // ref parent issue
                    type: String,
                },
                sprint: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Sprint",
                },
                comments: [
                    {
                        comment: String,
                        user: String,
                        createdAt: Date,
                    },
                ],
            },
        ],
    },
    { Timestamp: true }
);

const Issue = mongoose.model("Issue", IssueSchema);
export default Issue;
