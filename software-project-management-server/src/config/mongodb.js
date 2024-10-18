"use strict";

import mongoose from "mongoose";
import config from "./environment.js";
import chalk from "chalk";
import { MongoClient, ServerApiVersion } from "mongodb";

//----------------------------native mongodb ----------------------------

// let dbInstance;
// const client = new MongoClient(config.connStr, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     },
// });

// const CONNECT_DB = async () => {
//     await client.connect();
//     dbInstance = client.db("sample_mflix");
//     // dbInstance = await client.db('')
// };

// const GET_DB = () => {
//     if (!dbInstance) {
//         throw new Error("No MongoDB instance");
//     }
//     return dbInstance;
// };

//--------------------- mongoose --------------------------------
// mongoose.connect(config.connStr);
// mongoose.Promise = global.Promise;

// const db = mongoose.connection;

// db.once("open", () => {
//     console.log(chalk.green("Connection established"));
// });

// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// db.on("close", function () {
//     console.log(chalk.red("Database disconnected, reconnecting ..."));
//     mongoose.connect(config.connStr, { server: { auto_reconnect: true } });
// });

const db = async () => {
    try {
        await mongoose.connect(config.connStr);
        console.log(chalk.blueBright("Connected to MongoDB Atlas"));
    } catch (error) {
        console.error("Error connecting to the database:", err);
        process.exit(1);
    }
};

const closeConnection = async () => {
    try {
        await mongoose.connection.close();
        console.log(chalk.red("MongoDB Atlas connection closed"));
    } catch (error) {
        console.error("Error closing connection:", err);
        throw new Error(error);
    }
};

export { db, closeConnection /*CONNECT_DB, GET_DB*/ };
