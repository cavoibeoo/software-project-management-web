"use strict";

import User from "./../models/user.js";
// import { GET_DB } from "../config/mongodb.js";
import bcrypt from "bcrypt";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import config from "../config/environment.js";
import * as jwtUtil from "../utils/jwtUtil.js";
import { sendMail } from "../utils/mailer.js";
import getObjectId from "../utils/objectId.js";
import crypto from "crypto";

const registerService = async (data) => {
    try {
        //check if there are users existed
        let user = await User.findOne({ email: data.email });
        const salt = await bcrypt.genSalt(Number(config.salt));
        const hashedPassword = await bcrypt.hash(data.password, salt);
        if (user) {
            if (user?.isVerified)
                throw new ApiError(StatusCodes.BAD_REQUEST, "User already existed");
            else {
                user = await User.findOneAndUpdate(
                    { email: data.email },
                    {
                        ...data,
                        password: hashedPassword,
                    },
                    { new: true, upsert: true }
                );
            }
        } else {
            user = await new User({
                ...data,
                password: hashedPassword,
            }).save();
        }

        //send verification email
        await jwtUtil.generateAccessToken(user).then((token) => {
            let link = `${config.beURL}/api/auth/verify-email?token=${token}`;
            // console.log(link);
            let html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Email Verification</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; text-align: center;">
                    <img style="max-width: 200px;" src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-5613d.appspot.com/o/sine%2FSine.jpg?alt=media&token=74f149e7-d6a6-4625-8dd2-d3a6c97fd13d" alt="Newsletter Image">;
                    <h2 style="color: #333;">Verify Your Email</h2>
                    <p style="color: #555;">Hi ${user.name}. Thank you for signing up! Please click the button below to verify your email address:</p>
                    <p style="color: #555;">This link will be expired after 15 minutes.</p>
                    <a href="${link}" style="background-color: #77A2E6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
                    <p style="color: #999; margin-top: 20px;">If you did not request this, you can ignore this email.</p>
                </div>
            </body>
            </html>`;
            sendMail(user.email, "Verify your Email", html);
        });

        return { message: "Please verify your email" };
    } catch (err) {
        throw err;
    }
};

const loginService = async (data, isGoogle) => {
    let user;
    if (isGoogle) {
        user = data;
    } else {
        user = await User.findOne({ email: data.email });

        if (!user) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "User not existed");
        }
        if (user.isDeleted || !user?.isVerified) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, `User ${user.name} has been disable`);
        }

        if (!user?.password || !(await bcrypt.compare(data.password, user?.password))) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, "Invalid credentials");
        }
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

const isLoggedIn = async (data) => {
    try {
        if (!data?.accessToken && !data?.refreshToken) {
            return false;
        }
        if (data?.accessToken) await jwtUtil.verifyAccessToken(data?.accessToken);
        if (data?.refreshToken) await jwtUtil.verifyRefreshToken(data?.refreshToken);
        return {
            isAuthenticated: true,
            accessToken: data?.accessToken,
            refreshToken: data?.refreshToken,
        };
    } catch (error) {
        return false;
    }
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
    try {
        let refreshToken = data.refreshToken;
        let foundUser = await User.findOne({ refreshToken }).exec();
        if (!foundUser) {
            throw new ApiError(StatusCodes.BAD_REQUEST, new Error("Invalid refresh token").message);
        }

        // Delete refreshToken in db
        foundUser.refreshToken = foundUser.refreshToken.filter((rt) => rt !== refreshToken);
        const result = await foundUser.save();
        return { messages: "Logout successfully" };
    } catch (error) {
        throw error;
    }
};

const verifyEmailService = async (data) => {
    try {
        let tokenDetails = await jwtUtil.verifyAccessToken(data?.token);
        let objId = getObjectId(tokenDetails.userId);
        let user = await User.findOneAndUpdate({ _id: objId }, { isVerified: true }, { new: true });
        if (user.isVerified) {
            return { message: "Email has been verified successfully" };
        } else {
            return { message: "Email verification failed" };
        }
    } catch (error) {
        throw error;
    }
};

const forgotPasswordService = async (query, data) => {
    try {
        let user = await User.findOne({ email: query?.email });
        if (!user) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "User not existed");
        }
        if (user.isDeleted || !user.isVerified) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, `User ${user.name} has been disable`);
        }

        let otp = Math.floor(100000 + Math.random() * 900000).toString();

        const salt = await bcrypt.genSalt(Number(config.salt));
        const hashedOtp = await bcrypt.hash(otp, salt);

        user.otp.code = hashedOtp;
        user.otp.expires = new Date(new Date().getTime() + 10 * 60 * 1000); // 5 minutes
        await user.save();

        // send email
        let html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Password reset request</title>
            </head>
            <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; text-align: center;">
                    <img style="max-width: 200px;" src="https://firebasestorage.googleapis.com/v0/b/food-delivery-app-5613d.appspot.com/o/sine%2FSine.jpg?alt=media&token=74f149e7-d6a6-4625-8dd2-d3a6c97fd13d" alt="Newsletter Image">;
                    <h2 style="color: #333;">Password reset request</h2>
                    <p style="color: #555;">Hi ${user.name} We received a request to reset your password. Please click on this link to change your password.</p>
                    <p style="color: #555;">This OTP will be expired after 10 minutes.</p>
                    <a style="font-size: 24px; font-weight: bold; color: #4CAF50;">${otp}</a>
                    <p style="color: #999; margin-top: 20px;">If you did not request this, you can ignore this email.</p>
                </div>
            </body>
            </html>`;
        sendMail(user.email, "Forgot password request", html);

        return otp
            ? { message: "Please check your email." }
            : { message: "Error failed to reset password." };
    } catch (error) {
        throw error;
    }
};

const verifyOtp = async (param, data) => {
    try {
        let user = await User.findOne({ email: param?.email });
        if (!user) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "User not existed");
        }
        if (user.isDeleted || !user.isVerified) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, `User ${user.name} has been disable`);
        }
        if (user.otp.expires < new Date()) {
            throw new ApiError(StatusCodes.REQUEST_TIMEOUT, `The OTP has been expired`);
        }
        if (await bcrypt.compare(data?.otp, user.otp.code)) return { message: true };
        else throw new ApiError(StatusCodes.BAD_REQUEST, "Invalid OTP");
    } catch (error) {
        throw error;
    }
};

const changePasswordWithOtp = async (query, data) => {
    try {
        let otpVerify = await verifyOtp(query, query);
        let user = await User.findOne({ email: query?.email });

        const salt = await bcrypt.genSalt(Number(config.salt));
        const hashedPassword = await bcrypt.hash(data?.password, salt);

        user.password = hashedPassword;
        user.otp.expires = new Date();
        await user.save();
        return { message: "Password has been changed successfully" };
    } catch (error) {
        throw error;
    }
};

export {
    registerService,
    loginService,
    refreshTokenService,
    logoutService,
    verifyEmailService,
    forgotPasswordService,
    verifyOtp,
    changePasswordWithOtp,
    isLoggedIn,
};
