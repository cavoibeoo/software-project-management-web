"use strict";

import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as userService from "../services/userService.js";
import bcrypt from "bcrypt";

const getAllUsers = async (req, res, next) => {
    try {
        let result = await userService.getAllUser();
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const createUser = async (req, res, next) => {
    try {
        let result = await userService.registerService(req.body);
        res.status(StatusCodes.CREATED).send(result);
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        let result = await userService.loginService(req.body);

        res.status(StatusCodes.OK).json(result);
    } catch (err) {
        next(new ApiError(StatusCodes.BAD_REQUEST, new Error(err).message));
    }
};

export { getAllUsers, createUser, login };
