import Project from "../models/project.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import getObjectId from "../utils/objectId.js";
import Permissions from "../utils/permission.js";

const checkPermission = (requiredPermissions) => {
    return async (req, res, next) => {
        try {
            let id = getObjectId(req.params.prjId);
            let prj = await Project.findById(id);
            if (!prj) throw new ApiError(StatusCodes.NOT_FOUND, "Project not found");

            const isActor = prj.actors.find((actor) => actor.user._id == req.user.userId);

            // Check if the user is an actor in the project
            if (!isActor) {
                throw new ApiError(
                    StatusCodes.FORBIDDEN,
                    "You have no permission to access this project"
                );
                // res.status(StatusCodes.FORBIDDEN).json({
                //     status: StatusCodes.FORBIDDEN,
                //     message: "You have no permission to access this project",
                // });
            }
            // Check if the user has the required permission
            if (requiredPermissions) {
                console.log(prj.roles);
                console.log(isActor.role);
                console.log(requiredPermissions);
                if (
                    !prj.roles.some(
                        (role) =>
                            role.name == isActor.role &&
                            role.permissions.includes(requiredPermissions)
                    )
                ) {
                    throw new ApiError(StatusCodes.FORBIDDEN, "Insufficient permissions");
                }
            }

            next();
        } catch (error) {
            next(error);
        }
    };
};

export default checkPermission;
