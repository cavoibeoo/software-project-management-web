"use strict";

import User from "./../models/user.js";
import db from "../mongodb.js";
import bcrypt from "bcrypt";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import config from "../config.js";
import * as jwtUtil from "../utils/jwtUtil.js";
import { token } from "morgan";

let collection = await db.collection("users");

const getAllUser = async (record) => {
    try {
        let result = await collection.find({}).limit(10).toArray();
        return result.length > 0 ? result : null;
    } catch (error) {
        throw err;
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

export { getAllUser, findByEmail };
