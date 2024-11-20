"use strict";

import express from "express";
import authorization from "../middlewares/authorizationMiddleware.js";
import * as controller from "../controllers/sprintController.js";
import validation from "../middlewares/validationMiddleware.js";
import * as validationSchema from "../validations/sprintValidation.js";
import checkPermission from "../middlewares/checkProjectPermission.js";
import Permission from "../utils/permission.js";
import checkStatus from "../middlewares/checkProjectStatus.js";
const router = express.Router();

router.get("/get-all/:prjId", checkStatus, checkPermission(), controller.getAllSprints);
router.get("/get-by-id/:prjId/:sprintId", checkStatus, checkPermission(), controller.getById);
router.post(
    "/:prjId",
    checkStatus,
    checkPermission(Permission.ADD_SPRINT),
    controller.createSprint
);
router.put(
    "/:prjId/:sprintId",
    checkStatus,
    checkPermission(Permission.UPDATE_SPRINT),
    validation(validationSchema.updateSprintSchema),
    controller.updateSprint
);
router.put(
    "/add-issue/:prjId/:sprintId",
    checkStatus,
    checkPermission(Permission.UPDATE_SPRINT),
    validation(validationSchema.addIssueSchema),
    controller.addIssue
);
router.put(
    "/start-sprint/:prjId/:sprintId",
    checkStatus,
    checkPermission(Permission.UPDATE_SPRINT),
    validation(validationSchema.updateSprintSchema),
    controller.updateSprint
);
router.delete(
    "/:prjId/:sprintId",
    checkStatus,
    checkPermission(Permission.DELETE_SPRINT),
    controller.deleteSprint
);

export default router;
