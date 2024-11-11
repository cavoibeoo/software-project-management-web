"use strict";

import User from "./../models/user.js";
// import { GET_DB } from "../config/mongodb.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../config/environment.js";
import uploadImg from "../utils/uploadFirebaseImg.js";
import getObjectId from "../utils/objectId.js";

const getAllUser = async (data) => {
    try {
        let pageSize = data?.pageSize ? data?.pageSize : 10;
        let page = data?.page ? data?.page : 1;
        let result = await User.find({}, "-password -federatedCredentials -refreshToken")
            .skip((page - 1) * pageSize)
            .limit(pageSize)
            .sort({ createDate: -1 });
        return result.length > 0 ? result : null;
    } catch (err) {
        throw err;
    }
};

const findById = async (data) => {
    try {
        let result = await User.findById(data?.userId).select(
            "-password -federatedCredentials -refreshToken -otp -isVerified"
        );
        if (!result) {
            throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
        }
        // let response = ({ name, email, role, createdDate } = result);
        return result ? result : null;
    } catch (err) {
        throw err;
    }
};

const updateOne = async (user, data) => {
    try {
        let userIdString = getObjectId(user?.userId);

        if (data?.avatar) {
            let avatarUrl = await uploadImg(data?.avatar, "userAvatar", user?.userId);
            data.avatar = avatarUrl;
        }

        let result = await User.findOneAndUpdate({ _id: userIdString }, data, {
            new: true,
            select: "-password -federatedCredentials -refreshToken -otp -isVerified",
        });
        if (!result) {
            throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
        }

        return result ? result : null;
    } catch (err) {
        throw err;
    }
};

const updateStatus = async (data) => {
    try {
        let result = await User.findById(data?.userId);
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
        let foundUser = await User.findById(user?.userId);

        if (!foundUser) {
            throw new ApiError(StatusCodes.NOT_FOUND, "User not found");
        }
        if (foundUser?.password) {
            if (!(await bcrypt.compare(data?.oldPassword, foundUser.password))) {
                throw new ApiError(StatusCodes.BAD_REQUEST, "Wrong old password");
            }
            if (data?.newPassword == data?.oldPassword) {
                throw new ApiError(
                    StatusCodes.BAD_REQUEST,
                    "New password must be different from old password"
                );
            }
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
