"use strict";

import express from "express";
import * as userRequest from "./../validations/userValidation.js";
import * as authController from "../controllers/authController.js";
import validate from "../middlewares/validationMiddleware.js";

const router = express.Router();

router.post("/register", validate(userRequest.userCreate), authController.createUser);
router.post("/login", validate(userRequest.userLogin), authController.login);
router.get("/refresh", authController.refreshToken);
router.get("/logout", authController.logout);

export default router;
