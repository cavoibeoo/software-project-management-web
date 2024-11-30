import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as workflowService from "../services/workflowService.js";
import bcrypt from "bcrypt";

const getAllWorkflows = async (req, res, next) => {
    try {
        let result = await workflowService.getAllWorkflow(req?.params);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const getWorkflowById = async (req, res, next) => {
    try {
        let result = await workflowService.getWorkflowById(req?.params);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const createWorkflow = async (req, res, next) => {
    try {
        // if (req?.file) req.body.avatar = req?.file;
        let result = await workflowService.createWorkflow(req?.params, req.body);
        res.status(StatusCodes.CREATED).send(result);
    } catch (err) {
        next(err);
    }
};

const updateWorkflow = async (req, res, next) => {
    try {
        if (req?.file) req.body.avatar = req?.file;
        let result = await workflowService.updateWorkflow(req?.params, req.body);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const deleteWorkflow = async (req, res, next) => {
    try {
        let result = await workflowService.deleteWorkflow(req.params);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

export { getAllWorkflows, getWorkflowById, updateWorkflow, deleteWorkflow, createWorkflow };
