"use strict";

import express from "express";
import authorization from "../middlewares/authorizationMiddleware.js";
import * as controller from "../controllers/issueTypeController.js";
import validation from "../middlewares/validationMiddleware.js";
import * as validationSchema from "../validations/issueTypeValidation.js";
import checkPermission from "../middlewares/checkProjectPermission.js";
import Permission from "../utils/permission.js";
import checkStatus from "../middlewares/checkProjectStatus.js";
import { upload } from "../middlewares/uploadImgMiddleware.js";
const router = express.Router();

router.get("/get-all/:prjId", checkStatus, checkPermission(), controller.getIssueType);
router.get("/get-by-id/:prjId/:issueTypeId", checkStatus, checkPermission(), controller.getById);
router.post(
    "/:prjId",
    checkStatus,
    checkPermission(Permission.ADD_ISSUE_TYPE),
    validation(validationSchema.issueTypeCreate),
    controller.createIssueType
);
router.put(
    "/:prjId/:issueTypeId",
    checkStatus,
    checkPermission(Permission.UPDATE_ISSUE_TYPE),
    validation(validationSchema.issueTypeUpdate),
    upload.single("img"),

    controller.updateIssueType
);
router.delete(
    "/:prjId/:issueTypeId",
    checkStatus,
    checkPermission(Permission.DELETE_ISSUE_TYPE),
    controller.deleteIssueType
);

export default router;
