"use strict";

import express from "express";
import * as controller from "../controllers/issueController.js";

//middlewares
import authorization from "../middlewares/authorizationMiddleware.js";
import validation from "../middlewares/validationMiddleware.js";
import * as validationSchema from "../validations/issueValidation.js";
import checkPermission from "../middlewares/checkProjectPermission.js";
import Permission from "../utils/permission.js";
import checkStatus from "../middlewares/checkProjectStatus.js";
import checkIssueFields from "./../middlewares/checkIssueMiddleware.js";

const router = express.Router();

router.get("/get-all/:prjId", checkStatus, checkPermission(), controller.getAllIssue);
router.get("/get-backlog/:prjId", checkStatus, checkPermission(), controller.getBacklog);
router.get("/get-by-id/:prjId/:issueId", checkStatus, checkPermission(), controller.getById);
router.post(
    "/:prjId",
    checkStatus,
    checkPermission(Permission.ADD_ISSUE),
    validation(validationSchema.createSchema),
    checkIssueFields,
    controller.createIssue
);
router.put(
    "/:prjId/:issueId",
    checkStatus,
    checkPermission(Permission.UPDATE_ISSUE),
    validation(validationSchema.updateSchema),
    checkIssueFields,
    controller.updateIssue
);
router.delete(
    "/:prjId/:issueId",
    checkStatus,
    checkPermission(Permission.DELETE_ISSUE),
    controller.deleteIssue
);

export default router;
