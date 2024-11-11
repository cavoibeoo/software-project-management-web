import Project from "../models/project.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import getObjectId from "../utils/objectId.js";
import Permissions from "../utils/permission.js";

const checkStatus = async (req, res, next) => {
    try {
        let id = getObjectId(req.params.prjId);
        let prj = await Project.findById(id);
        if (!prj) throw new ApiError(StatusCodes.NOT_FOUND, "Project not found");

        const isAuthor = prj.author._id == req.user.userId;
        if (prj.status == 0 && !isAuthor) {
            throw new ApiError(StatusCodes.FORBIDDEN, "Project has been temporarily deleted");
        } else if (prj.status == 2 && !isAuthor) {
            throw new ApiError(StatusCodes.FORBIDDEN, "Project has been archived");
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
};

export default checkStatus;
