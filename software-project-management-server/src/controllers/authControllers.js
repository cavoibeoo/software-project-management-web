"use strict";

import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as userService from "../services/userService.js";

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

export { createUser, login };
