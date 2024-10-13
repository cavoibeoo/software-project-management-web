import { StatusCodes } from "http-status-codes";
import ApiError from "./../utils/ApiError.js";
const validation = (schema) => async (req, res, next) => {
    try {
        const value = await schema.validateAsync(req.body, { abortEarly: false });
        next();
    } catch (err) {
        // console.log(err);
        next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(err).message));
    }
};

export default validation;
