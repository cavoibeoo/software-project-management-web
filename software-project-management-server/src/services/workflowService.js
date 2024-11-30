"use strict";

import Sprint from "./../models/sprint.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import User from "./../models/user.js";
import Project from "../models/project.js";
import getObjectId from "./../utils/getObjectId.js";
import Issue from "../models/issue.js";

const getAllWorkflow = async (project) => {
    try {
        const queryProject = await Project.findById(project.prjId);
        return queryProject?.workflow;
    } catch (error) {
        throw error;
    }
};

const getWorkflowById = async (project) => {
    try {
        const queryProject = await Project.findById(project.prjId);
        return queryProject.workflow.id(project.workflowId);
    } catch (error) {
        throw error;
    }
};

const createWorkflow = async (project, workflow, isDefault = false) => {
    try {
        const queryProject = await Project.findById(project.prjId);
        const existingWorkflow = queryProject.workflow.find((w) => w.name === workflow.name);
        if (existingWorkflow) {
            throw new ApiError(
                StatusCodes.BAD_REQUEST,
                "Workflow with the same name already exists"
            );
        }
        let insertWorkflow = {
            name: workflow.name,
            isDefault: isDefault,
            workflowType: workflow.workflowType,
            description: workflow.description,
        };
        queryProject.workflow.push(insertWorkflow);
        await queryProject.save();
        return queryProject.workflow;
    } catch (error) {
        throw error;
    }
};

const updateWorkflow = async (project, workflow) => {
    try {
        const queryProject = await Project.findById(project.prjId);
        const existingWorkflow = queryProject.workflow.id(project.workflowId);
        const previousWorkflow = { ...existingWorkflow.toObject() };
        if (existingWorkflow.isDefault) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Cannot update the default workflow");
        }

        existingWorkflow.name = workflow.name;
        existingWorkflow.workflowType = workflow.workflowType;
        existingWorkflow.description = workflow.description;
        await queryProject.save();

        await Issue.updateMany(
            { project: project.prjId, "issues.workflow": previousWorkflow.name },
            { $set: { "issues.$.workflow": workflow.name } },
            { multi: true },
            { new: true }
        );

        return queryProject.workflow;
    } catch (error) {
        throw error;
    }
};

const deleteWorkflow = async (param) => {
    try {
        const project = await Project.findById(param.prjId);
        const workflow = project.workflow.id(param?.workflowId);

        if (workflow?.isDefault) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Cannot delete the default workflow");
        }

        project.workflow.pull(workflow);
        await project.save();

        await Issue.updateMany(
            { project: getObjectId(param.prjId), "issues.workflow": workflow.name },
            { $set: { "issues.$.workflow": "Todo" } }
        );

        return project.workflow;
    } catch (error) {
        throw error;
    }
};

export { getAllWorkflow, getWorkflowById, updateWorkflow, deleteWorkflow, createWorkflow };
