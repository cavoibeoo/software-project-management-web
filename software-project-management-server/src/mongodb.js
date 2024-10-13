"use strict";

import mongoose from "mongoose";
import config from "./config.js";
import chalk from "chalk";
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

export default db;
