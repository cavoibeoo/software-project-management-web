"use strict";

import mongoose from "mongoose";
import config from "./environment.js";
import chalk from "chalk";
import { MongoClient, ServerApiVersion } from "mongodb";

let dbInstance;
const client = new MongoClient(config.connStr, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

const CONNECT_DB = async () => {
    await client.connect();
    dbInstance = client.db("sample_mflix");
    // dbInstance = await client.db('')
};

const GET_DB = () => {
    if (!dbInstance) {
        throw new Error("No MongoDB instance");
    }
    return dbInstance;
};

mongoose.connect(config.connStr);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once("open", () => {
    console.log(chalk.green("Connection established"));
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.on("close", function () {
    console.log(chalk.red("Database disconnected, reconnecting ..."));
    mongoose.connect(config.connStr, { server: { auto_reconnect: true } });
});

export { db, CONNECT_DB, GET_DB };
