"use strict";

import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as issueTypeService from "../services/issueTypeService.js";

const createIssueType = async (req, res, next) => {
    try {
        let result = await issueTypeService.createIssueType(req.params, req.body);
        res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
        next(error);
    }
};

const getIssueType = async (req, res, next) => {
    try {
        let result = await issueTypeService.getIssueType(req.params);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        let result = await issueTypeService.getById(req.params);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};
const updateIssueType = async (req, res, next) => {
    try {
        if (req?.file) req.body.img = req?.file;
        let result = await issueTypeService.updateIssueType(req.params, req.body);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};
const deleteIssueType = async (req, res, next) => {
    try {
        let result = await issueTypeService.deleteIssueType(req.params, req.body);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

export { createIssueType, getIssueType, updateIssueType, deleteIssueType, getById };
