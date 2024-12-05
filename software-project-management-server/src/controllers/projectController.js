"use strict";

import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as projectService from "../services/projectService.js";

const getAllProject = async (req, res, next) => {
    try {
        let result = await projectService.getAllProject(req?.query);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        let result = await projectService.getById(req?.params, req.user);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const getCurrentUserProjects = async (req, res, next) => {
    try {
        let result = await projectService.getCurrentUserProjects(req.user, req?.query, 1);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const getSoftDeleted = async (req, res, next) => {
    try {
        let result = await projectService.getCurrentUserProjects(req.user, req.body, 0);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const createProject = async (req, res, next) => {
    try {
        let result = await projectService.createProject(req.user, req.body);
        res.status(StatusCodes.CREATED).send(result);
    } catch (err) {
        next(err);
    }
};

const createDefaultProject = async (req, res, next) => {
    try {
        req.body.isDefault = true;
        let result = await projectService.createProject(req.user, req.body);
        res.status(StatusCodes.CREATED).send(result);
    } catch (err) {
        next(err);
    }
};

const addNewActor = async (req, res, next) => {
    try {
        let result = await projectService.addActor(req.params, req.body, true);
        res.status(StatusCodes.CREATED).send(result);
    } catch (err) {
        next(err);
    }
};

const changeActorRole = async (req, res, next) => {
    try {
        let result = await projectService.addActor(req.params, req.body, false);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const removeActor = async (req, res, next) => {
    try {
        let result = await projectService.removeActor(req.params);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const updateProject = async (req, res, next) => {
    try {
        if (req?.file) req.body.img = req?.file;

        let result = await projectService.updateProject(req.params, req.body);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const archivedProject = async (req, res, next) => {
    try {
        let result = await projectService.changeProjectStatus(req.params, req.body, 2);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const softDeleteProject = async (req, res, next) => {
    try {
        let result = await projectService.changeProjectStatus(req.params, req.body, 0);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const hardDeleteProject = async (req, res, next) => {
    try {
        let result = await projectService.hardDeleteProject(req.user, req.params, req.body);

        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const recoverDeletedProject = async (req, res, next) => {
    try {
        let result = await projectService.changeProjectStatus(req.params, req.body, 1);

        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

export {
    getAllProject,
    createProject,
    getCurrentUserProjects,
    getSoftDeleted,
    getById,
    addNewActor,
    changeActorRole,
    removeActor,
    softDeleteProject,
    hardDeleteProject,
    recoverDeletedProject,
    archivedProject,
    createDefaultProject,
    updateProject,
};
