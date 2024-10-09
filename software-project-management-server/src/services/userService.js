"use strict";

import User from "./../models/user.js";
import db from "../../mongodb.js";

const getAllUser = async () => {
    try {
        let collection = await db.collection("users");
        let result = await collection.find({}).limit(10).toArray();
        return result.length > 0 ? result : null;
    } catch (error) {
        console.error("Error creating customer:", error);
        return null;
    }
};

const createCustomerService = async (customerData) => {
    try {
        let user = await User.create(req.body);
        return user;
    } catch (error) {
        console.error("Error creating customer:", error);
        return null;
    }
};

export { createCustomerService, getAllUser };
