import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";

// Modify auth to return a middleware function
const auth = (roles) => {
    return async (req, res, next) => {
        try {
            // console.log(roles);
            roles.push("user"); // Allow 'user' by default
            if (req.user && req.user.role && req.user.role.includes(...roles)) {
                next(); // If authorized, proceed to next middleware or controller
            } else {
                res.status(403).json({ error: true, message: "You are not authorized" });
            }
        } catch (err) {
            next(new ApiError(StatusCodes.UNAUTHORIZED, new Error(err).message));
        }
    };
};

export default auth;
