"use strict";

import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as issueService from "../services/issueService.js";

const getAllIssue = async (req, res, next) => {
    try {
        let result = await issueService.getAllIssue(req.params);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const getBacklog = async (req, res, next) => {
    try {
        let result = await issueService.getAllIssue(req.params, true);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        let result = await issueService.getIssueById(req.params);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const createIssue = async (req, res, next) => {
    try {
        let result = await issueService.createIssue(req.params, req.body);
        res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
        next(error);
    }
};

const updateIssue = async (req, res, next) => {
    try {
        let result = await issueService.updateIssue(req.params, req.body);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};
const deleteIssue = async (req, res, next) => {
    try {
        let result = await issueService.deleteIssue(req.params);
        res.status(StatusCodes.NO_CONTENT).json(result);
    } catch (error) {
        next(error);
    }
};

export { getAllIssue, getById, createIssue, updateIssue, deleteIssue, getBacklog };
