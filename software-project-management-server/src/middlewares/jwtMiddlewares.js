import jwt from "jsonwebtoken";
import config from "../config/environment.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";

const auth = async (req, res, next) => {
    let token = req?.header("Authorization");
    if (!token)
        return res
            .status(401)
            .json({ error: StatusCodes.UNAUTHORIZED, message: "Access Denied: No token provided" });
    token = token.split(" ")[1];

    try {
        const tokenDetails = jwt.verify(token, config.accessTokenPrivateKey);
        req.user = tokenDetails;
        next();
    } catch (err) {
        next(new ApiError(StatusCodes.UNAUTHORIZED, new Error(err).message));
    }
};

export default auth;
