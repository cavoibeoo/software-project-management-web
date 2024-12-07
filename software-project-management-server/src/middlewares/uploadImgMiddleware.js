import multer from "multer";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";

export const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "application/pdf" ||
            file.mimetype === "image/svg+xml" ||
            file.mimetype === "image/jpeg"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(
                new ApiError(
                    StatusCodes.BAD_REQUEST,
                    "Only .png, .jpg, .mp4, .jpeg, and .svg format allowed!"
                )
            );
        }
    },
});
