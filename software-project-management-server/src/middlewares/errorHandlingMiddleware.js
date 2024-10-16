import { StatusCodes } from "http-status-codes";
import config from "../config/environment.js";
export const errorHandlingMiddleware = (err, req, res, next) => {
    if (!err.statusCode) err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;

    const errResponse = {
        statusCode: err.statusCode,
        message: err.message || StatusCodes[err.statusCode],
        stack: err.stack,
    };

    if (config.buildMode !== "dev") {
        delete errResponse.stack;
    } else {
        console.log(err);
    }

    return res.status(errResponse.statusCode).json(errResponse);
};
