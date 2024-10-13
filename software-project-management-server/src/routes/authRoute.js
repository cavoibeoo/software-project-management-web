"use strict";

import express from "express";
import * as userSchema from "./../validations/userValidation.js";
import * as userController from "../controllers/userController.js";
import userValidation from "../middlewares/validationMiddleware.js";

const router = express.Router();

router.post("/register", userValidation(userSchema.userCreateSchema), userController.createUser);
router.post("/login", userValidation(userSchema.userLoginSchema), userController.login);

export default router;
