"use strict";

import User from "../models/user.js";
import db from "../../mongodb.js";
import * as userService from "./../services/userService.js";

const getAllUsers = async (req, res) => {
    try {
        // let collection = await db.collection("users");
        // let result = await collection.find({}).limit(10).toArray();

        let result = await userService.getAllUsers();

        res.send(result).status(200);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

const createUser = async (req, res) => {
    try {
        let user = userService.createCustomerService(req.body);
        res.send(user).status(200);
    } catch (err) {
        res.status(500).send({ error: err });
    }
};

export { getAllUsers, createUser };
