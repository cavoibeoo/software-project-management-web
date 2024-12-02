"use strict";

import express from "express";
import * as userRequest from "./../validations/userValidation.js";
import * as authController from "../controllers/authController.js";
import validate from "../middlewares/validationMiddleware.js";
import passport from "passport";
import checkLogin from "../middlewares/checkLoginMiddleware.js";
import("../middlewares/googleAuthMiddleware.js");

const router = express.Router();

router.post("/register", validate(userRequest.userCreate), authController.createUser);
router.get("/verify-email", authController.verifyUser);
router.post("/login", checkLogin(), validate(userRequest.userLogin), authController.login);
router.get("/is-login", authController.isAuthenticated);
router.get("/refresh", authController.refreshToken);
router.get("/logout", authController.logout);
router.post("/forgot-password", authController.forgotPassword);
router.post("/verify-otp", authController.verifyOtp);
router.post(
    "/change-pw-otp",
    validate(userRequest.updateOtpPassword),
    authController.changePasswordWithOtp
);

//google login API
router.get(
    "/google",
    checkLogin(),
    passport.authenticate("google", {
        scope: ["email", "profile"],
    })
);
router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/auth/api/login", failureMessage: true }),
    authController.loginWithGoogle
);

export default router;
