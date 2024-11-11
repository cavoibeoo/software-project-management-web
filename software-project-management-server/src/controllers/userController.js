"use strict";

import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as userService from "../services/userService.js";
import bcrypt from "bcrypt";

const getAllUsers = async (req, res, next) => {
    try {
        let result = await userService.getAllUser(req?.query);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const getCurrentUser = async (req, res, next) => {
    try {
        let result = await userService.findById(req?.user);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const updateCurrentUser = async (req, res, next) => {
    try {
        if (req?.file) req.body.avatar = req?.file;
        let result = await userService.updateOne(req?.user, req.body);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const changeUserStatus = async (req, res, next) => {
    try {
        let result = await userService.updateStatus(req.body);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const changePassword = async (req, res, next) => {
    try {
        let result = await userService.updatePasswordService(req?.user, req.body);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

export { getAllUsers, getCurrentUser, updateCurrentUser, changePassword, changeUserStatus };
