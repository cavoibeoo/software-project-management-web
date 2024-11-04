// "use strict";

import userRoute from "./userRoute.js";
import authRoute from "./authRoute.js";
import projectRoute from "./projectRoute.js";
import { errorHandlingMiddleware } from "./../middlewares/errorHandlingMiddleware.js";
import authenticate from "../middlewares/jwtMiddlewares.js";
export default (app) => {
    app.use("/api/auth", authRoute);
    app.use("/api/user", authenticate, userRoute);
    app.use("/api/project", authenticate, projectRoute);
    app.use(errorHandlingMiddleware);
};
