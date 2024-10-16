"use strict";

import express from "express";
import config from "./config/environment.js";
import { GET_DB, CONNECT_DB } from "./config/mongodb.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/index.js";
import chalk from "chalk";

const START_SERVER = () => {
    const app = express();

    app.use(express.json({ extended: true }));
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(morgan("combined"));
    const port = config.port;

    routes(app);

    app.listen(config.port, () => {
        console.log(chalk.blueBright(`Listen on http://localhost:${port}`));
    });
};

CONNECT_DB()
    .then(() => {
        console.log(chalk.blueBright("Connected to MongoDB Atlas"));
    })
    .then(() => {
        START_SERVER();
    })
    .catch((err) => {
        console.error(chalk.red("Failed to connect to MongoDB: ", err));
        process.exit(0);
    });
