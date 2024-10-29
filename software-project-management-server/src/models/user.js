"use strict";

import mongoose from "mongoose";
import { token } from "morgan";

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: [true, "This email is already registered!"],
        },
        password: {
            type: String,
            // required: true,
        },
        avatar: {
            type: String,
            required: false,
        },
        createDate: {
            type: Date,
            default: Date.now,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },
        jobTitle: String,
        department: String,
        organization: String,
        federatedCredentials: [
            {
                _id: String,
                provider: String,
            },
        ],
        refreshToken: [String],
        isVerified: {
            type: Boolean,
            default: false,
        },
        otp: {
            code: String,
            expires: Date,
        },
    },
    { Timestamp: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
