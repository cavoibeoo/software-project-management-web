"use strict";

import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as authService from "../services/authService.js";

const createUser = async (req, res, next) => {
    try {
        let result = await authService.registerService(req.body);
        res.status(StatusCodes.CREATED).send(result);
    } catch (err) {
        next(err);
    }
};

const login = async (req, res, next) => {
    try {
        let result = await authService.loginService(req.body);
        res.cookie("accessToken", result.accessToken, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000, //15 minutes
        });
        res.cookie("refreshToken", result.refreshToken, {
            httpOnly: true,
            maxAge: 15 * 24 * 60 * 60 * 1000, //15 minutes
        });
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const refreshToken = async (req, res, next) => {
    try {
        let result = await authService.refreshTokenService(req.cookies);
        if (result?.error) {
            res.clearCookie("refreshToken", { httpOnly: true, sameSite: "None" /*secure: true*/ });
            res.clearCookie("accessToken", { httpOnly: true, sameSite: "None" /*secure: true*/ });
            res.status(StatusCodes.BAD_REQUEST)
                .json({
                    error: "invalid refresh token",
                    message: "Invalid refresh token! Please login again",
                })
                .send();
        } else {
            res.cookie("refreshToken", result.refreshToken, {
                httpOnly: true,
                maxAge: 7 * 24 * 60 * 60 * 1000, //15 days
            });
            res.cookie("accessToken", result.accessToken, {
                httpOnly: true,
                maxAge: 15 * 60 * 1000, //15 min
            });
            res.status(StatusCodes.OK).json(result).send();
        }
    } catch (err) {
        next(err);
    }
};

const logout = async (req, res, next) => {
    try {
        let result = await authService.logoutService(req.cookies);
        res.clearCookie("refreshToken", { httpOnly: true, sameSite: "None" /*secure: true*/ });
        res.clearCookie("accessToken", { httpOnly: true, sameSite: "None" /*secure: true*/ });
        res.status(StatusCodes.NO_CONTENT).send(result);
    } catch (err) {
        next(err);
    }
};

export { createUser, login, refreshToken, logout };
