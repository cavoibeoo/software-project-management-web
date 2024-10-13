import jwt from "jsonwebtoken";
import config from "../config.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";

const auth = async (req, res, next) => {
    const token = req.header("Authorization").split(" ")[1];
    if (!token)
        return res.status(401).json({ error: true, message: "Access Denied: No token provided" });

    try {
        const tokenDetails = jwt.verify(token, config.accessTokenPrivateKey);
        req.user = tokenDetails;
        next();
    } catch (err) {
        next(new ApiError(StatusCodes.UNAUTHORIZED, new Error(err).message));
    }
};

export default auth;
