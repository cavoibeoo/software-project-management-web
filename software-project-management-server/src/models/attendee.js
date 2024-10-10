"use strict";

import mongoose from "mongoose";

const AttendeeSchema = mongoose.Schema(
    {
        user: {
            type: String,
            required: true,
        },
        project: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
    },
    { Timestamp: true }
);

const Attendee = mongoose.model("Attendee", AttendeeSchema);
export default Attendee;
