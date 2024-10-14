"use strict";

import express from "express";
import * as userSchema from "./../validations/userValidation.js";
import * as userController from "../controllers/userController.js";
import userValidation from "../middlewares/validationMiddleware.js";
import authorization from "../middlewares/authorizationMiddleware.js";
const router = express.Router();

router.get("/", authorization(["admin"]), userController.getAllUsers);

export default router;
