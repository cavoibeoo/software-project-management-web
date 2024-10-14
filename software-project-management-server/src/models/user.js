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
            required: true,
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
        // tokens: {
        //     refreshToken: {
        //         token: String,
        //         expires: Date,
        //     },
        //     accessToken: {},
        // },
    },
    { Timestamp: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
