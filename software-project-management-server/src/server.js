"use strict";

import express from "express";
import config from "./config.js";
import db from "./mongodb.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/index.js";
import chalk from "chalk";

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
