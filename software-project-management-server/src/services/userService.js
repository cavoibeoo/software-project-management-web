"use strict";

import User from "./../models/user.js";
// import { GET_DB } from "../config/mongodb.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../config/environment.js";

const getAllUser = async (record) => {
    try {
        // let collection = await GET_DB().collection("users");
        // let result = await collection.find({}).limit(10).toArray();
        let result = await User.find({}).limit(10);
        return result.length > 0 ? result : null;
    } catch (err) {
        throw err;
    }
};

const findById = async (data) => {
    try {
        let userIdString = Buffer.isBuffer(data?.userId)
            ? data.userId.toString("hex")
            : data?.userId;

        // Validate if it's a valid ObjectId string before casting
        if (!mongoose.Types.ObjectId.isValid(userIdString)) {
            throw new Error("Invalid ObjectId");
        }

        let result = await User.findOne({ _id: userIdString });
        if (!result) {
            throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
        }
        // let response = ({ name, email, role, createdDate } = result);
        return (({ name, email, role, createDate, jobTitle, department, organization }) => ({
            name,
            email,
            role,
            createDate,
            jobTitle,
            department,
            organization,
        }))(result);
    } catch (err) {
        throw err;
    }
};

const updateOne = async (user, data) => {
    try {
        let userIdString = Buffer.isBuffer(user?.userId)
            ? user.userId.toString("hex")
            : user?.userId;

        // Validate if it's a valid ObjectId string before casting
        if (!mongoose.Types.ObjectId.isValid(userIdString)) {
            throw new Error("Invalid ObjectId");
        }

        let result = await User.findOneAndUpdate({ _id: userIdString }, data, { new: true });
        if (!result) {
            throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
        }

        // let response = ({ name, email, role, createdDate } = result);
        return (({
            _id,
            name,
            email,
            role,
            createDate,
            jobTitle,
            department,
            organization,
            isDeleted,
        }) => ({
            _id,
            name,
            email,
            role,
            createDate,
            jobTitle,
            department,
            organization,
            isDeleted,
        }))(result);
    } catch (err) {
        throw err;
    }
};

const updateStatus = async (data) => {
    try {
        let userIdString = Buffer.isBuffer(data?.userId)
            ? data.userId.toString("hex")
            : data?.userId;

        // Validate if it's a valid ObjectId string before casting
        if (!mongoose.Types.ObjectId.isValid(userIdString)) {
            throw new Error("Invalid ObjectId");
        }

        let result = await User.findOne({ _id: userIdString });
        if (!result) {
            throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
        }

        if (data?.isDeleted) result.refreshToken = [];
        result.isDeleted = data?.isDeleted;
        result.save();

        return { message: data?.isDeleted ? "User has been disabled" : "User has been enabled" };
    } catch (err) {
        throw err;
    }
};

const updatePasswordService = async (user, data) => {
    try {
        let userIdString = Buffer.isBuffer(user?.userId)
            ? user.userId.toString("hex")
            : user?.userId;

        // Validate if it's a valid ObjectId string before casting
        if (!mongoose.Types.ObjectId.isValid(userIdString)) {
            throw new Error("Invalid ObjectId");
        }

        let foundUser = await User.findOne({ _id: userIdString });

        if (!foundUser) {
            throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
        }
        if (!(await bcrypt.compare(data?.oldPassword, foundUser.password))) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Wrong old password");
        }
        if (data?.newPassword == data?.oldPassword) {
            throw new ApiError(
                StatusCodes.BAD_REQUEST,
                "New password must be different from old password"
            );
        }

        const salt = await bcrypt.genSalt(Number(config.salt));
        const hashedPassword = await bcrypt.hash(data?.newPassword, salt);
        foundUser.password = hashedPassword;
        foundUser.save();

        // let response = ({ name, email, role, createdDate } = result);
        return { message: "Password changed successfully" };
    } catch (err) {
        throw err;
    }
};

const findByEmail = async (email) => {
    try {
        let result = await User.findOne({ email: email });
        return result ? result : null;
    } catch (err) {
        throw err;
    }
};

export { getAllUser, findByEmail, findById, updateOne, updateStatus, updatePasswordService };
