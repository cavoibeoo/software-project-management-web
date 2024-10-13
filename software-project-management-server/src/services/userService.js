"use strict";

import User from "./../models/user.js";
import db from "../mongodb.js";
import bcrypt from "bcrypt";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import config from "../config.js";
import * as jwtUtil from "../utils/jwtUtil.js";

let collection = await db.collection("users");

const getAllUser = async (record) => {
    try {
        let result = await collection.find({}).limit(10).toArray();
        return result.length > 0 ? result : null;
    } catch (error) {
        throw err;
    }
};

const registerService = async (data) => {
    try {
        if (await findByEmail(data.email)) {
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
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, new Error(err).message);
    }
};

const loginService = async (data) => {
    try {
        let user = await findByEmail(data.email);
        if (!user) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "User not existed");
        }

        if (!(await bcrypt.compare(data.password, user.password))) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid credentials");
        }

        const accessToken = await jwtUtil.generateAccessToken(user);
        const refreshToken = await jwtUtil.generateRefreshToken(user);

        return {
            accessToken: accessToken,
            refreshToken: refreshToken,
            messages: "Login successful",
        };
    } catch (err) {
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, new Error(err).message);
    }
};

const findByEmail = async (email) => {
    try {
        let result = await User.findOne({ email: email });
        return result ? result : null;
    } catch (error) {
        throw err;
    }
};

export { getAllUser, registerService, findByEmail, loginService };
