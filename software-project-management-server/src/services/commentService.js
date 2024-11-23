"use strict";

import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import User from "./../models/user.js";
import Project from "../models/project.js";
import getObjectId from "./../utils/getObjectId.js";
import Issue from "../models/issue.js";

const getAllIssueComment = async (params) => {
    try {
        console.log(params);
        const issue = await Issue.findOne(
            { project: getObjectId(params.prjId), "issues._id": getObjectId(params.issueId) },
            { "issues.$": 1 }
        ).populate({
            path: "issues.comments.user",
            select: "name avatar",
        });

        let currentTime = new Date();
        console.log(currentTime.toLocaleString());

        return issue?.issues[0].comments.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
    } catch (error) {
        throw error;
    }
};

const getCommentById = async (params) => {
    try {
        const issue = await Issue.findOne(
            { project: params.prjId, "issues._id": params.issueId },
            { "issues.$": 1 }
        ).populate({
            path: "issues.comments.user",
            select: "name avatar",
        });
        const comment = issue.issues[0].comments.id(params.commentId);
        return comment;
    } catch (error) {
        throw error;
    }
};

const createComment = async (params, author, comment) => {
    try {
        const issue = await Issue.findOneAndUpdate(
            { project: getObjectId(params.prjId), "issues._id": getObjectId(params.issueId) },
            {
                $push: {
                    "issues.$.comments": {
                        comment: comment.comment,
                        user: getObjectId(author.userId),
                        createdAt: new Date(),
                    },
                },
            },
            { new: true }
        ).populate({
            path: "issues.comments.user",
            select: "name avatar",
        });

        issue.issues[0].comments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

        if (!issue) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Issue not found");
        }

        return issue;
    } catch (error) {
        throw error;
    }
};

const updateComment = async (params, comment) => {
    try {
        const issue = await Issue.findOneAndUpdate(
            {
                project: getObjectId(params.prjId),
                "issues._id": getObjectId(params.issueId),
                "issues.comments._id": params.commentId,
            },
            {
                $set: {
                    "issues.$.comments.$[comment].comment": comment.comment,
                    "issues.$.comments.$[comment].createdAt": new Date(),
                },
            },
            {
                arrayFilters: [{ "comment._id": params.commentId }],
                new: true,
            }
        ).populate({
            path: "issues.comments.user",
            select: "name img",
        });

        if (!issue) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Comment not found");
        }

        issue.issues[0].comments.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        return issue.issues[0].comments;
    } catch (error) {
        throw error;
    }
};

const deleteComment = async (param) => {
    try {
        const issue = await Issue.findOneAndUpdate(
            {
                project: getObjectId(param.prjId),
                "issues._id": getObjectId(param.issueId),
            },
            { $pull: { "issues.$.comments": { _id: getObjectId(param.commentId) } } },
            { new: true }
        ).populate({
            path: "issues.comments.user",
            select: "name img",
        });

        if (!issue) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Comment not found");
        }

        return issue.issues[0].comments;
    } catch (error) {
        throw error;
    }
};

export { getAllIssueComment, getCommentById, createComment, updateComment, deleteComment };
