"use strict";

import User from "./../models/user.js";
// import { GET_DB } from "../config/mongodb.js";
import bcrypt from "bcrypt";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import config from "../config/environment.js";
import * as jwtUtil from "../utils/jwtUtil.js";
import { refreshToken } from "../controllers/authController.js";

const registerService = async (data) => {
    try {
        if (await GET_DB().collection("users").findOne({ email: data.email })) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "User already existed");
        }

        const salt = await bcrypt.genSalt(Number(config.salt));
        const hashedPassword = await bcrypt.hash(data.password, salt);
        const newUser = await new User({
            ...data,
            password: hashedPassword,
        }).save();

        const accessToken = await jwtUtil.generateAccessToken(newUser);
        const refreshToken = await jwtUtil.generateRefreshToken(newUser);

        return { user: newUser._id, accessToken, refreshToken };
    } catch (err) {
        throw err;
    }
};

const loginService = async (data) => {
    let user = await User.findOne({ email: data.email });
    if (!user) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "User not existed");
    }
    if (user.isDeleted) {
        throw new ApiError(StatusCodes.UNAUTHORIZED, `User ${user.name} has been disable`);
    }

    if (!(await bcrypt.compare(data.password, user.password))) {
        throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid credentials");
    }

    const accessToken = await jwtUtil.generateAccessToken(user);
    const refreshToken = await jwtUtil.generateRefreshToken(user);

    user.refreshToken = [...user.refreshToken, refreshToken];
    await user.save();
    return {
        accessToken: accessToken,
        refreshToken: refreshToken,
        messages: "Login successful",
    };
};

const refreshTokenService = async (data) => {
    let refreshToken = data?.refreshToken;
    if (!refreshToken) {
        throw new ApiError(StatusCodes.BAD_REQUEST, new Error("No refresh token provided").message);
    }

    let foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        throw new ApiError(StatusCodes.BAD_REQUEST, new Error("Invalid refresh token").message);
    }

    const newRefreshTokenArray = foundUser.refreshToken.filter((rt) => rt !== refreshToken);
    try {
        let tokenDetails = await jwtUtil.verifyRefreshToken(refreshToken);
    } catch (err) {
        foundUser.refreshToken = [...newRefreshTokenArray];
        const result = await foundUser.save();
        return { error: "Invalid refresh token" };
    }

    const accessToken = await jwtUtil.generateAccessToken(foundUser);
    const newRefreshToken = await jwtUtil.generateRefreshToken(foundUser);

    foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
    await foundUser.save();

    return {
        refreshToken: newRefreshToken,
        accessToken: accessToken,
        messages: "Refresh successfully",
    };
};

const logoutService = async (data) => {
    let refreshToken = data.refreshToken;
    let foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        throw new ApiError(StatusCodes.BAD_REQUEST, new Error("Invalid refresh token").message);
    }

    // Delete refreshToken in db
    foundUser.refreshToken = foundUser.refreshToken.filter((rt) => rt !== refreshToken);
    const result = await foundUser.save();
    return { messages: "Logout successfully" };
};

export { registerService, loginService, refreshTokenService, logoutService };
