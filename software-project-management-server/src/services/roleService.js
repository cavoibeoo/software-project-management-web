"use strict";

import Project from "./../models/project.js";
import User from "./../models/user.js";
import Issue from "../models/issue.js";
import Sprint from "../models/sprint.js";

import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../config/environment.js";
import uploadImg from "../utils/uploadFirebaseImg.js";
import getObjectId from "../utils/getObjectId.js";
import Permission from "../utils/permission.js";

const addUpdateRole = async (params, data, isAdded, isAdmin) => {
    try {
        let prjId = getObjectId(params?.prjId);
        let currentProject = await Project.findById(prjId);

        if (currentProject?.roles.some((role) => role.name === data?.name)) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Role already exists");
        }

        let newRole = {
            name: data.name,
            permissions: data.permissions,
            isDefault: isAdmin,
        };

        if (isAdded) {
            currentProject.roles.push(newRole);
        } else {
            let roleIndex = currentProject.roles.findIndex(
                (role) => role._id == getObjectId(params?.roleId)
            );

            if (currentProject.roles[roleIndex].isDefault && !isAdmin) {
                throw new ApiError(StatusCodes.BAD_REQUEST, "Cannot modify default role");
            }

            if (roleIndex !== -1) {
                currentProject.roles[roleIndex].name =
                    data?.name || currentProject.roles[roleIndex].name;
                currentProject.roles[roleIndex].permissions =
                    data?.permissions || currentProject.roles[roleIndex].permissions;
            } else {
                throw new ApiError(StatusCodes.NOT_FOUND, "Role not found");
            }
        }
        let result = await currentProject.save();
        return result ? result : null;
    } catch (error) {
        throw error;
    }
};

const deleteRole = async (params, isAdmin) => {
    try {
        let prjId = getObjectId(params?.prjId);
        let currentProject = await Project.findById(prjId);

        let roleIndex = currentProject.roles.findIndex(
            (role) => role._id == getObjectId(params?.roleId)
        );
        if (roleIndex === -1) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Role not found");
        }
        if (currentProject.roles[roleIndex].isDefault && !isAdmin) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Cannot delete default role");
        }
        currentProject.actors.forEach((actor) => {
            if (actor.role === currentProject.roles[roleIndex].name) {
                actor.role = "Member";
            }
        });
        currentProject.roles.splice(roleIndex, 1);
        let result = await currentProject.save();
        return result ? result : null;
    } catch (error) {
        throw error;
    }
};

export { addUpdateRole, deleteRole };
