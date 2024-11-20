import Project from "./../models/project.js";
import Issue from "../models/issue.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import User from "./../models/user.js";
import getObjectId from "../utils/getObjectId.js";
import mongoose from "mongoose";

const getAllIssue = async (data) => {
    try {
        let complexIssues = await Issue.find(
            { project: getObjectId(data?.prjId) },
            { issues: 1, _id: 0 }
        );
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
        );
        console.log(complexIssues);
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
        let issue = await Issue.findOneAndUpdate(
            { project: getObjectId(params.prjId), "issues._id": getObjectId(params.issueId) },
            { $set: { "issues.$": data } }, // Use the positional $ operator to target the matching issue
            { new: true } // Optionally return the updated document
        );
        console.log(issue);
        return issue;
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
