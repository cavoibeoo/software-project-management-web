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

export { getAllUsers };
