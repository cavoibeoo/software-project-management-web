"use strict";

import express from "express";
import config from "./config/environment.js";
import { db, closeConnection } from "./config/mongodb.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/index.js";
import chalk from "chalk";
import { firebaseStorage } from "./config/firebaseApp.js";
import session from "express-session";
import passport from "passport";

const START_SERVER = () => {
    const app = express();

    // Configure express-session middleware
    app.use(
        session({
            secret: "your-secret-key", // Replace with a strong secret key
            resave: false,
            saveUninitialized: true,
            cookie: { secure: false }, // Set to true if using HTTPS
        })
    );
    app.use(passport.initialize());
    // app.use(passport.session());
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

db()
    .then(() => {})
    .then(() => {
        START_SERVER();
    })
    .catch((error) => {
        console.error(chalk.red("Failed to connect to MongoDB: ", error));
        process.exit(0);
    });
