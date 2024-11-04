"use strict";

import express from "express";
import authorization from "../middlewares/authorizationMiddleware.js";
import * as controller from "../controllers/projectController.js";
import validation from "../middlewares/validationMiddleware.js";
import * as validationSchema from "../validations/projectValidation.js";
import checkPermission from "../middlewares/checkProjectPermission.js";
import Permission from "../utils/permission.js";
import checkStatus from "../middlewares/checkProjectStatus.js";
const router = express.Router();

router.get("/", authorization(["admin"]), controller.getAllProject);
router.get("/my-projects", controller.getCurrentUserProjects);
router.post("/create", validation(validationSchema.createProject), controller.createProject);
router.get("/my-deleted-projects", controller.getSoftDeleted);

//Access project
router.get("/:prjId", checkStatus, checkPermission(), controller.getById);
router.post(
    "/add-actor/:prjId",
    checkStatus,
    checkPermission(Permission.ADD_ACTOR),
    validation(validationSchema.addMember),
    controller.addNewActor
);
router.put(
    "/change-actor-role/:prjId",
    checkStatus,
    checkPermission(Permission.EDIT_ACTOR_ROLE),
    validation(validationSchema.addMember),
    controller.changeActorRole
);

router.delete(
    "/temporary-delete/:prjId",
    checkStatus,
    checkPermission(Permission.DELETE_PROJECT),
    controller.softDeleteProject
);
router.delete(
    "/permanent-delete/:prjId",
    checkStatus,
    checkPermission(Permission.DELETE_PROJECT),
    controller.hardDeleteProject
);

router.put(
    "/recover/:prjId",
    checkStatus,
    checkPermission(Permission.RECOVER_PROJECT),
    controller.recoverDeletedProject
);

export default router;
