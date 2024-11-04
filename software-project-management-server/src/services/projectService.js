"use strict";

import Project from "./../models/project.js";
import ApiError from "../utils/ApiError.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "../config/environment.js";
import uploadImg from "../utils/uploadFirebaseImg.js";
import User from "./../models/user.js";
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
        project = new Project({
            ...data,
            author: userId,
            actors: [{ user: userId, role: "Admin" }],
            roles: [
                {
                    name: "Admin",
                    permissions: {
                        modify_project: true,
                        delete_project: true,
                        archive_project: true,
                        add_workflow: true,
                        edit_workflow: true,
                        delete_workflow: true,
                        add_actor: true,
                        edit_actor_role: true,
                        remove_actor: true,
                        add_sprint: true,
                        edit_sprint: true,
                        delete_sprint: true,
                        add_issue: true,
                        edit_issue: true,
                        delete_issue: true,
                        add_comment: true,
                        edit_comment: true,
                        delete_comment: true,
                    },

                    isDefault: true,
                },
                {
                    name: "Member",
                    permissions: {
                        modify_project: false,
                        delete_project: false,
                        archive_project: false,
                        add_workflow: false,
                        edit_workflow: false,
                        delete_workflow: false,
                        add_actor: false,
                        edit_actor_role: false,
                        remove_actor: false,
                        add_sprint: true,
                        edit_sprint: true,
                        delete_sprint: true,
                        add_issue: true,
                        edit_issue: true,
                        delete_issue: true,
                        add_comment: true,
                        edit_comment: true,
                        delete_comment: true,
                    },

                    isDefault: true,
                },
                {
                    name: "Viewer",
                    permissions: {
                        modify_project: false,
                        delete_project: false,
                        archive_project: false,
                        add_workflow: false,
                        edit_workflow: false,
                        delete_workflow: false,
                        add_actor: false,
                        edit_actor_role: false,
                        remove_actor: false,
                        add_sprint: false,
                        edit_sprint: false,
                        delete_sprint: false,
                        add_issue: false,
                        edit_issue: false,
                        delete_issue: false,
                        add_comment: false,
                        edit_comment: false,
                        delete_comment: false,
                    },

                    isDefault: true,
                },
            ],
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

const changeProjectStatus = async (project, data, status) => {
    try {
        let prjId = getObjectId(project.prjId);
        let currentProject = await Project.findOne({ _id: prjId });

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
};
