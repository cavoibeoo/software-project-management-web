"use strict";
import Sprint from "./../models/sprint.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import User from "./../models/user.js";
import Project from "../models/project.js";
import Issue from "../models/issue.js";
import getObjectId from "./../utils/getObjectId.js";

const getSprints = async (project) => {
    try {
        let sprint = await Sprint.find({ project: getObjectId(project.prjId) });
        sprint = sprint.map((s) => s.toObject());
        for (const s of sprint) {
            s.issues = [];
            let issues = await Issue.find({
                "issues.sprint": getObjectId(s._id),
                project: getObjectId(s.project),
            })
                .populate("issues.assignee", "_id name email avatar")
                .populate("issues.comments.user", "_id name email avatar")
                .populate("issues.sprint", "_id name");
            issues.forEach((is) => {
                is?.issues.forEach((i) => {
                    if (i.sprint && i?.sprint.equals(s._id)) s.issues.push(i);
                });
            });
        }
        return sprint;
    } catch (error) {
        throw error;
    }
};

const getById = async (data) => {
    try {
        let foundSprint = await Sprint.findOne({
            _id: getObjectId(data?.sprintId),
            project: getObjectId(data?.prjId),
        });
        let complexIssues = await Issue.find({
            "issues.sprint": getObjectId(data?.sprintId),
            project: getObjectId(data?.prjId),
        });

        if (!foundSprint) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Sprint not found");
        }
        foundSprint = foundSprint.toObject();
        foundSprint.issues = [];

        complexIssues.forEach((is) => {
            is?.issues.forEach((i) => {
                if (i.sprint == getObjectId(data?.sprintId)) foundSprint.issues.push(i);
            });
        });

        if (!foundSprint) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Sprint not found");
        }
        return foundSprint;
    } catch (error) {
        throw error;
    }
};

const createSprint = async (project) => {
    try {
        let findProject = await Project.findById(getObjectId(project.prjId));
        let findSprint = await Sprint.find({
            project: getObjectId(findProject._id),
        });
        let newSprint = new Sprint({
            name: `${findProject.key}-Sprint ${findSprint.length + 1}`,
            project: getObjectId(findProject._id),
        });
        return await newSprint.save();
    } catch (error) {
        throw error;
    }
};

const updateSprint = async (queryParam, sprint) => {
    try {
        let findSprint = await Sprint.find({
            project: getObjectId(queryParam.prjId),
            _id: getObjectId(queryParam.sprintId),
        });
        if (!findSprint) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Sprint not found");
        }

        if (sprint.status && sprint.status === "completed") {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Cannot update a completed sprint");
        }

        if (sprint.status === "started" && !findSprint.issues.length == 0) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Cannot start a sprint with no issues");
        }

        let updatedSprint = await Sprint.findOneAndUpdate(
            { _id: getObjectId(queryParam.sprintId) },
            { $set: sprint },
            { new: true }
        );
        return updatedSprint;
    } catch (error) {
        throw error;
    }
};

const addIssue = async (params, data) => {
    try {
        try {
            if (
                !(await Sprint.findOne({
                    project: params.prjId,
                    _id: getObjectId(params.sprintId),
                }))
            ) {
                throw new ApiError(StatusCodes.NOT_FOUND, "Sprint not found");
            }

            let foundedIssue = await Issue.findOneAndUpdate(
                {
                    project: getObjectId(params.prjId),
                    "issues._id": getObjectId(data.issueId),
                },
                {
                    $set: { "issues.$.sprint": getObjectId(params.sprintId) },
                }
            );
            if (!foundedIssue) {
                throw new ApiError(StatusCodes.NOT_FOUND, "Issue not found");
            }

            return foundedIssue.save();
        } catch (error) {
            throw error;
        }
    } catch (error) {
        throw error;
    }
};

const deleteSprint = async (params) => {
    try {
        let sprintId = getObjectId(params?.sprintId);
        let prjId = getObjectId(params?.prjId);
        let findSprint = await Sprint.findById(getObjectId(sprintId));
        if (!findSprint) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Sprint not found");
        }
        if (findSprint.status === "started") {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Cannot delete a started sprint");
        }

        await Issue.updateMany(
            { project: prjId, "issues.sprint": sprintId },
            { $unset: { "issues.$.sprint": "" } }
        );

        await Sprint.findByIdAndDelete(sprintId);
    } catch (error) {
        throw error;
    }
};

export { createSprint, getSprints, getById, updateSprint, deleteSprint, addIssue };
