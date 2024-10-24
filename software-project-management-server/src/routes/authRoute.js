"use strict";

import express from "express";
import * as userRequest from "./../validations/userValidation.js";
import * as authController from "../controllers/authController.js";
import validate from "../middlewares/validationMiddleware.js";

const router = express.Router();

router.post("/register", validate(userRequest.userCreate), authController.createUser);
router.get("/verify-email", authController.verifyUser);
router.post("/login", validate(userRequest.userLogin), authController.login);
router.get("/refresh", authController.refreshToken);
router.get("/logout", authController.logout);
router.post("/forgot-password", authController.forgotPassword);
router.post("/verify-otp", authController.verifyOtp);
router.post(
    "/change-pw-otp",
    validate(userRequest.updateOtpPassword),
    authController.changePasswordWithOtp
);

export default router;
