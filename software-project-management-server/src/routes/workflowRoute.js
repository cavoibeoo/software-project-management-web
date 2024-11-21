"use strict";

import express from "express";
import authorization from "../middlewares/authorizationMiddleware.js";
import * as controller from "../controllers/workflowController.js";
import validation from "../middlewares/validationMiddleware.js";
import * as validationSchema from "../validations/issueTypeValidation.js";
import checkPermission from "../middlewares/checkProjectPermission.js";
import Permission from "../utils/permission.js";
import checkStatus from "../middlewares/checkProjectStatus.js";
import { upload } from "../middlewares/uploadImgMiddleware.js";
const router = express.Router();

router.get("/get-all/:prjId", checkStatus, checkPermission(), controller.getAllWorkflows);
router.get(
    "/get-by-id/:prjId/:workflowId",
    checkStatus,
    checkPermission(),
    controller.getWorkflowById
);
router.post(
    "/:prjId",
    checkStatus,
    checkPermission(Permission.ADD_WORKFLOW),
    // validation(validationSchema.issueTypeCreate),
    controller.createWorkflow
);
router.put(
    "/:prjId/:workflowId",
    checkStatus,
    checkPermission(Permission.UPDATE_WORKFLOW),
    // validation(validationSchema.issueTypeUpdate),
    // upload.single("img"),
    controller.updateWorkflow
);
router.delete(
    "/:prjId/:workflowId",
    checkStatus,
    checkPermission(Permission.DELETE_WORKFLOW),
    controller.deleteWorkflow
);

export default router;
