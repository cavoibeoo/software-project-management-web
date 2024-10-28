"use strict";

import express from "express";
import * as userSchema from "./../validations/userValidation.js";
import * as userController from "../controllers/userController.js";
import authorization from "../middlewares/authorizationMiddleware.js";
import validate from "../middlewares/validationMiddleware.js";
import { upload } from "../middlewares/uploadImgMiddleware.js";
const router = express.Router();

router.get("/", authorization(["admin"]), userController.getAllUsers);
router.get("/me", userController.getCurrentUser);
router.put(
    "/update-status",
    authorization(["admin"]),
    validate(userSchema.userStatus),
    userController.changeUserStatus
);
router.put(
    "/update-info",
    validate(userSchema.userUpdate),
    upload.single("avatar"),
    userController.updateCurrentUser
);
router.put(
    "/change-password",
    validate(userSchema.userUpdatePassword),
    userController.changePassword
);
export default router;
