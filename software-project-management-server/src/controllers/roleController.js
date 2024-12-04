"use strict";

import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as roleService from "../services/roleService.js";

const addRole = async (req, res, next) => {
    try {
        let result = await roleService.addUpdateRole(
            req.params,
            req.body,
            true,
            req.user.role == "admin"
        );
        res.status(StatusCodes.CREATED).json(result);
    } catch (error) {
        next(error);
    }
};

const updateRole = async (req, res, next) => {
    try {
        let result = await roleService.addUpdateRole(
            req.params,
            req.body,
            false,
            req.user.role == "admin"
        );
        res.status(StatusCodes.OK).json(result);
    } catch (error) {
        next(error);
    }
};

const deleteRole = async (req, res, next) => {
    try {
        let result = await roleService.deleteRole(req.params, req.user.role == "admin");
        res.status(StatusCodes.NO_CONTENT).json(result);
    } catch (error) {
        next(error);
    }
};

export { addRole, updateRole, deleteRole };
