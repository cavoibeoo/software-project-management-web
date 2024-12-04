"use strict";

import express from "express";
import authorization from "../middlewares/authorizationMiddleware.js";
import * as controller from "../controllers/roleController.js";
import validation from "../middlewares/validationMiddleware.js";
import * as validationSchema from "../validations/sprintValidation.js";
import checkPermission from "../middlewares/checkProjectPermission.js";
import Permission from "../utils/permission.js";
import checkStatus from "../middlewares/checkProjectStatus.js";
const router = express.Router();

router.post("/:prjId", checkStatus, checkPermission(Permission.ADD_ROLE), controller.addRole);
router.put(
    "/:prjId/:roleId",
    checkStatus,
    checkPermission(Permission.UPDATE_ROLE),
    controller.updateRole
);
router.delete(
    "/:prjId/:roleId",
    checkStatus,
    checkPermission(Permission.DELETE_ROLE),
    controller.deleteRole
);

export default router;
