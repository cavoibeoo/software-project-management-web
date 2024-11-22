import Project from "./../models/project.js";
import Issue from "../models/issue.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import User from "./../models/user.js";
import getObjectId from "../utils/getObjectId.js";
import Sprint from "../models/sprint.js";
import mongoose from "mongoose";

const getAllIssue = async (data) => {
    try {
        let complexIssues = await Issue.find(
            { project: getObjectId(data?.prjId) },
            { issues: 1, _id: 0 }
        ).populate({
            path: "issues",
            populate: [
                { path: "assignee", model: User },
                { path: "comments.user", model: User },
            ],
            select: "name img",
        });
        let issues = [];

        complexIssues.forEach((is) => {
            is.issues.forEach((i) => {
                issues.push(i);
            });
        });
        return issues ? issues : [];
    } catch (error) {
        throw error;
    }
};

const getIssueById = async (data) => {
    try {
        let complexIssues = await Issue.findOne(
            { project: getObjectId(data.prjId), "issues._id": getObjectId(data.issueId) }
            // { issues: { $elemMatch: { key: data.issueTypeId } } }
        ).populate({
            path: "issues",
            populate: [
                { path: "assignee", model: User },
                { path: "comments.user", model: User },
            ],
            select: "name img",
        });
        return complexIssues ? complexIssues.issues[0] : {};
    } catch (error) {
        throw error;
    }
};

const createIssue = async (project, data) => {
    let projectId = getObjectId(project?.prjId);
    let dbProject = await Project.findOne({ _id: projectId });
    let dbIssues = await Issue.find({ project: projectId }).sort({ count: 1 });

    console.log(data);

    let issue = {
        summary: data?.summary,
        project: projectId,
        key: `${dbProject.key}-${dbIssues.reduce((sum, dbIssue) => sum + dbIssue?.count, 0) + 1}`,
        issueType: data.issueType,
        fields: data.fields,
    };

    let insertIssue =
        dbIssues[0]?.count < 10
            ? dbIssues[0]
            : new Issue({
                  project: dbProject._id,
                  page: dbIssues.length + 1,
                  issues: [],
              });

    insertIssue.issues.push(issue);
    insertIssue.count++;
    await insertIssue.save();

    return insertIssue;
};

const updateIssue = async (params, data) => {
    try {
        if (data?.sprint) {
            let sprint = await Sprint.findOne({ _id: getObjectId(data.sprint) });
            if (!data.sprint) {
                throw new ApiError(StatusCodes.NOT_FOUND, "Sprint not found");
            }
            data.sprint = getObjectId(data.sprint);
        }

        if (data?.workflow) {
            if (
                !(await Project.findOne({
                    _id: getObjectId(params.prjId),
                    "workflow.name": data.workflow,
                }))
            ) {
                throw new ApiError(StatusCodes.NOT_FOUND, "Workflow not found");
            }
        }

        if (data?.assignee) {
            let project = await Project.findOne({
                _id: getObjectId(params.prjId),
                actors: getObjectId(data.assignee),
            });
            if (!project) {
                throw new ApiError(
                    StatusCodes.FORBIDDEN,
                    "Assignee is not an actor of the project"
                );
            }
            data.assignee = getObjectId(data.assignee);
        }

        let foundedIssue = await Issue.findOne({
            project: getObjectId(params.prjId),
            "issues._id": getObjectId(params.issueId),
        });
        let issue = foundedIssue.issues[0];

        issue.key = data?.key || issue?.key;
        issue.summary = data?.summary || issue?.summary;
        issue.description = data?.description || issue?.description;
        issue.issueType = data?.issueType || issue?.issueType;
        issue.fields = data?.fields || issue?.fields;
        issue.workflow = data?.workflow || issue?.workflow;
        issue.parent = data?.parent || issue?.parent;
        issue.sprint = data?.sprint == "" ? null : data?.sprint || issue?.sprint;
        issue.comments = data?.comments || issue?.comments;

        return foundedIssue.save();
    } catch (error) {
        throw error;
    }
};

const deleteIssue = async (data) => {
    try {
        let issue = await Issue.findOneAndUpdate(
            { project: getObjectId(data.prjId), "issues._id": getObjectId(data.issueId) },
            { $pull: { issues: { _id: getObjectId(data.issueId) } }, $inc: { count: -1 } }, // Use $pull to remove the issue
            { new: true } // Optionally return the updated document
        );

        if (!issue) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Issue not found");
        }

        return issue;
    } catch (error) {
        throw error;
    }
};

export { getAllIssue, getIssueById, createIssue, updateIssue, deleteIssue };
