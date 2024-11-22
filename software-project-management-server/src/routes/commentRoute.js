"use strict";

import express from "express";
import authorization from "../middlewares/authorizationMiddleware.js";
import * as controller from "../controllers/commentController.js";
import validation from "../middlewares/validationMiddleware.js";
import * as validationSchema from "../validations/issueTypeValidation.js";
import checkPermission from "../middlewares/checkProjectPermission.js";
import Permission from "../utils/permission.js";
import checkStatus from "../middlewares/checkProjectStatus.js";
import { upload } from "../middlewares/uploadImgMiddleware.js";
const router = express.Router();

router.get("/get-all/:prjId/:issueId", checkStatus, checkPermission(), controller.getAllComments);
router.get(
    "/get-by-id/:prjId/:issueId/:commentId",
    checkStatus,
    checkPermission(),
    controller.getById
);
router.post(
    "/:prjId/:issueId",
    checkStatus,
    checkPermission(Permission.ADD_COMMENT),
    // validation(validationSchema.issueTypeCreate),
    controller.createComment
);
router.put(
    "/:prjId/:issueId/:commentId",
    checkStatus,
    checkPermission(Permission.UPDATE_COMMENT),
    // validation(validationSchema.issueTypeUpdate),
    // upload.single("img"),
    controller.updateComment
);
router.delete(
    "/:prjId/:issueId/:commentId",
    checkStatus,
    checkPermission(Permission.DELETE_COMMENT),
    controller.deleteComment
);

export default router;
