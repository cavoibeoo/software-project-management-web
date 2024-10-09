// "use strict";

import user from "./userRoute.js";

export default (app) => {
    app.use("/api/user", user);
};
