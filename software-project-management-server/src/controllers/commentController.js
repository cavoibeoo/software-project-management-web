import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import * as workflowService from "../services/commentService.js";
import bcrypt from "bcrypt";

const getAllComments = async (req, res, next) => {
    try {
        let result = await workflowService.getAllIssueComment(req?.params);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const getById = async (req, res, next) => {
    try {
        let result = await workflowService.getCommentById(req?.params);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const createComment = async (req, res, next) => {
    try {
        // if (req?.file) req.body.avatar = req?.file;
        let result = await workflowService.createComment(req?.params, req.user, req.body);
        res.status(StatusCodes.CREATED).send(result);
    } catch (err) {
        next(err);
    }
};

const updateComment = async (req, res, next) => {
    try {
        // if (req?.file) req.body.avatar = req?.file;
        let result = await workflowService.updateComment(req?.params, req.body);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

const deleteComment = async (req, res, next) => {
    try {
        let result = await workflowService.deleteComment(req.params);
        res.status(StatusCodes.OK).send(result);
    } catch (err) {
        next(err);
    }
};

export { getAllComments, getById, createComment, updateComment, deleteComment };
