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

const getAllProject = async (data) => {
    try {
        let pageSize = data?.pageSize ? data?.pageSize : 10;
        let page = data?.page ? data?.page : 1;
        let result = await Project.find({})
            .skip((page - 1) * pageSize)
            .limit(pageSize)
            .sort({ createDate: -1 })
            .populate("author", "name email avatar ")
            .populate("actors.user", "name email avatar");
        return result.length > 0 ? result : null;
    } catch (error) {
        throw error;
    }
};

const getById = async (data, user) => {
    try {
        let prjId = getObjectId(data.prjId);
        let result = await Project.findOne({ _id: prjId })
            .populate("author", "name email avatar ")
            .populate("actors.user", "name email avatar");

        if (!result) {
            throw new ApiError(StatusCodes.NOT_FOUND, `Project ${data.prjId} not found!`);
        }

        return result ? result : null;
    } catch (error) {
        throw error;
    }
};

const getCurrentUserProjects = async (user, data, status) => {
    try {
        let userId = getObjectId(user?.userId);
        let pageSize = data?.pageSize ? data.pageSize : 10;
        let page = data?.page ? data.page : 1;

        let result = await Project.find({ "actors.user": userId, status: status })
            .skip((page - 1) * pageSize)
            .limit(pageSize)
            .sort({ createDate: -1 })
            .populate("author", "name avatar ")
            .populate("actors.user", "name avatar");
        return result.length > 0 ? result : null;
    } catch (error) {
        throw error;
    }
};

const createProject = async (user, data) => {
    try {
        let userId = getObjectId(user?.userId);
        let findUser = await User.findById(userId);
        if (!findUser) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, "User not found");
        }
        let project = await Project.findOne({ author: userId, key: data?.key });
        if (project) {
            throw new ApiError(StatusCodes.CONFLICT, "Project key already exists");
        }

        let defaultProject = data?.defaultProject
            ? await Project.findOne({ _id: getObjectId(data.defaultFrom) })
            : await Project.findOne({ isDefault: true, status: 1 });

        if (!defaultProject) {
            throw new ApiError(StatusCodes.NOT_FOUND, "Default project not found!");
        }

        project = new Project({
            ...data,
            author: userId,
            actors: [{ user: userId, role: "Admin" }],
            roles: data.roles ? data.roles : defaultProject.roles,
            workflow: data.workflow ? data.workflow : defaultProject.workflow,
            issueTypes: data.issueType ? data.issueType : defaultProject.issueTypes,
        });
        data.author = userId;

        let result = project.save();
        return result ? result : null;
    } catch (error) {
        throw error;
    }
};

const addActor = async (project, data, isAdded) => {
    try {
        let prjId = getObjectId(project?.prjId);
        let currentProject = await Project.findById(prjId);
        if (!currentProject) {
            throw new ApiError(StatusCodes.NOT_FOUND, `Project ${data.prjId} not found!`);
        }

        let user = await User.findOne({ email: data.email });
        if (!user) {
            throw new ApiError(StatusCodes.NOT_FOUND, `User ${data.userId} not found!`);
        }
        if (data?.role) {
            if (!currentProject.roles.some((role) => role.name === data.role)) {
                throw new ApiError(StatusCodes.NOT_FOUND, `Role '${data.role}'not found!`);
            }
        }

        //Check if user already in project
        let founded = currentProject.actors.some(
            (actor) => actor.user.toString() === user._id.toString()
        );
        if (founded && isAdded) {
            //If user already in project and want to add again
            throw new ApiError(StatusCodes.CONFLICT, `User ${data.email} already in project!`);
        }
        if (!founded && !isAdded) {
            //If user not in project and want to change role
            throw new ApiError(StatusCodes.NOT_FOUND, `User ${data.email} not in project!`);
        }
        if (!isAdded) {
            //remove the user then push again with new role
            currentProject.actors = currentProject.actors.filter(
                (actor) => actor.user.toString() !== user._id.toString()
            );
        }

        currentProject.actors.push({ user: user._id, role: data.role });
        let result = await currentProject.save();
        return result ? result : null;
    } catch (error) {
        throw error;
    }
};

const updateProject = async (project, data) => {
    try {
        let prjId = getObjectId(project.prjId);

        // upload img if exists then update the data in db
        let uploadedImg = data?.img
            ? await uploadImg(data?.img, "project", project._id)
            : project.img;

        let updateProject = await Project.findOneAndUpdate(
            { _id: prjId },
            {
                $set: {
                    name: data.name,
                    key: data.key,
                    img: uploadedImg,
                },
            },
            { new: true }
        )
            .populate("author", "name email avatar ")
            .populate("actors.user", "name email avatar");

        if (!updateProject) {
            throw new ApiError(StatusCodes.NOT_FOUND, `Project '${project.prjId}' not found!`);
        }

        return updateProject ? updateProject : null;
    } catch (error) {
        throw error;
    }
};

const changeProjectStatus = async (project, data, status) => {
    try {
        let prjId = getObjectId(project.prjId);
        let currentProject = await Project.findOne({ _id: prjId });

        if (currentProject.isDefault) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Cannot delete default project!");
        }

        if (!currentProject) {
            throw new ApiError(StatusCodes.NOT_FOUND, `Project '${data.projectName}' not found!`);
        }
        if (data?.projectName != currentProject.name) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Project name is not correct!");
        }

        currentProject.status = status;
        let result = await currentProject.save();
        return result ? result : null;
    } catch (error) {
        throw error;
    }
};

const hardDeleteProject = async (user, project, data) => {
    try {
        let userId = getObjectId(user?.userId);
        let prjId = getObjectId(project.prjId);
        let currentProject = await Project.findOne({ _id: prjId });

        if (currentProject.isDefault) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Cannot delete default project!");
        }

        if (!currentProject) {
            throw new ApiError(StatusCodes.NOT_FOUND, `Project '${project.prjId}' not found!`);
        }
        if (currentProject.author.toString() !== userId.toString()) {
            throw new ApiError(
                StatusCodes.UNAUTHORIZED,
                "You are not authorized to delete this project!"
            );
        }
        if (data?.projectName != currentProject.name) {
            throw new ApiError(StatusCodes.BAD_REQUEST, "Project name is not correct!");
        }

        let result = await Project.deleteOne({ _id: prjId });

        await Issue.deleteMany({ project: prjId });
        await Sprint.deleteMany({ project: prjId });

        return result.deletedCount > 0 ? { message: "Project deleted successfully" } : null;
    } catch (error) {
        throw error;
    }
};

export {
    getAllProject,
    createProject,
    getCurrentUserProjects,
    getById,
    addActor,
    changeProjectStatus,
    hardDeleteProject,
    updateProject,
};
