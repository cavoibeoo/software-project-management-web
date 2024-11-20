import Project from "./../models/project.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import User from "./../models/user.js";
import getObjectId from "../utils/getObjectId.js";

const getIssueType = async (data) => {
    try {
        let prjId = getObjectId(data?.prjId);
        let result = await Project.findById(prjId);
        if (!result) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Project not found");
        }
        return result.issueTypes ? result.issueTypes : null;
    } catch (error) {
        throw error;
    }
};

const getById = async (data) => {
    try {
        let prjId = getObjectId(data?.prjId);
        let issueTypeId = getObjectId(data?.issueTypeId);
        let result = await Project.findOne(
            {
                "issueTypes._id": issueTypeId,
                _id: prjId,
            },
            { "issueTypes.$": 1 }
        );
        if (!result) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Issue type not found");
        }

        return result.issueTypes[0];
    } catch (error) {
        throw error;
    }
};

const createIssueType = async (project, data) => {
    try {
        let prjId = getObjectId(project?.prjId);
        let result = await Project.findById(prjId);
        let foundIssue = result.issueTypes.some((issue) => issue.name === data?.name);
        if (foundIssue) {
            throw new ApiError(StatusCodes.CONFLICT, "Issue type already exists");
        }
        let defaultFields = [
            {
                name: "Summary",
                isRequired: true,
                dataType: "String",
                isDefault: true,
            },
            {
                name: "Description",
                isRequired: false,
                dataType: "String",
            },
            {
                name: "Assignee",
                isRequired: false,
                dataType: "Object",
            },
            {
                name: "Parent",
                isRequired: false,
                dataType: "Object",
            },
            {
                name: "Sprint",
                isRequired: false,
                dataType: "Object",
            },
        ];
        let issueType = {
            name: data?.name,
            description: data?.description,
            isDefault: data?.isDefault,
            fields: defaultFields,
        };
        result.issueTypes.push(issueType);
        await result.save();
        return result.issueTypes;
    } catch (error) {
        throw error;
    }
};

const updateIssueType = async (project, data) => {
    try {
        let prjId = getObjectId(project?.prjId);
        let foundProject = await Project.findOne({
            _id: prjId,
            "issueTypes._id": getObjectId(project?.issueTypeId),
        });

        let issueType = foundProject.issueTypes.id(getObjectId(project?.issueTypeId));

        if (!issueType) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Issue type not found");
        }

        issueType.name = data?.name || issueType.name;
        issueType.description = data?.description || issueType.description;
        if (data?.fields) {
            issueType.fields = data?.fields;
            if (!data.fields.some((f) => f.name == "Summary" && f.isDefault == true))
                issueType.fields.push({
                    name: "Summary",
                    isRequired: true,
                    dataType: "String",
                    isDefault: true,
                });
        }

        await foundProject.save();
        return issueType;
    } catch (error) {
        throw error;
    }
};

const deleteIssueType = async (data) => {
    try {
        let prjId = getObjectId(data?.prjId);
        let issueTypeId = getObjectId(data?.issueTypeId);
        let project = await Project.findOne({ _id: prjId, "issueTypes._id": issueTypeId });
        if (!project) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Issue type not found.");
        }
        if (project.issueTypes.id(issueTypeId).isDefault) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Cannot delete default issue type.");
        }

        project.issueTypes = project.issueTypes.pull({ _id: issueTypeId });
        await project.save();

        return project.issueTypes;
    } catch (error) {
        throw error;
    }
};

export { getIssueType, getById, createIssueType, updateIssueType, deleteIssueType };
