import jwt from "jsonwebtoken";
import User from "../models/user.js";
import config from "../config/environment.js";

const generateToken = async (user, secret, exp) => {
    try {
        const token = jwt.sign({ userId: user._id, role: user.role }, secret, {
            expiresIn: Number(exp),
        });
        return token;
    } catch (err) {
        throw err;
    }
};

const generateAccessToken = async (user) => {
    try {
        return generateToken(user, config.accessTokenPrivateKey, config.accessTokenExp);
    } catch (err) {
        throw err;
    }
};

const generateRefreshToken = async (user) => {
    try {
        return generateToken(user, config.refreshTokenPrivateKey, config.refreshTokenExp);
    } catch (err) {
        throw err;
    }
};

const verifyRefreshToken = async (token) => {
    try {
        return jwt.verify(token, config.refreshTokenPrivateKey);
    } catch (err) {
        return false;
    }
};

const verifyAccessToken = async (token) => {
    try {
        return jwt.verify(token, config.accessTokenPrivateKey);
    } catch (err) {
        throw err;
    }
};

export { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken };
