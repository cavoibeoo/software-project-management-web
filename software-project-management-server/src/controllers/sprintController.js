"use strict";

import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as sprintService from "../services/sprintService.js";

const getAllSprints = async (req, res, next) => {
    try {
        let result = await sprintService.getSprints(req.params);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        let result = await sprintService.getById(req.params);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const createSprint = async (req, res, next) => {
    try {
        let result = await sprintService.createSprint(req.params);
        res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
        next(error);
    }
};

const updateSprint = async (req, res, next) => {
    try {
        let result = await sprintService.updateSprint(req.params, req.body);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const startSprint = async (req, res, next) => {
    try {
        req.body.status = "started";
        let result = await sprintService.updateSprint(req.params, req.body);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const endSprint = async (req, res, next) => {
    try {
        delete req.body;
        req.body.status = "completed";
        let result = await sprintService.updateSprint(req.params, req.body);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const addIssue = async (req, res, next) => {
    try {
        let result = await sprintService.addIssue(req.params, req.body);
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const deleteSprint = async (req, res, next) => {
    try {
        let result = await sprintService.deleteSprint(req.params);
        res.status(StatusCodes.NO_CONTENT).json(result);
    } catch (error) {
        next(error);
    }
};

export {
    getAllSprints,
    getById,
    createSprint,
    updateSprint,
    deleteSprint,
    addIssue,
    startSprint,
    endSprint,
};
