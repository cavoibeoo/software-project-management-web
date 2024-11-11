import mongoose from "mongoose";

const getObjectId = (id) => {
    let userIdString = Buffer.isBuffer(id) ? id.toString("hex") : id;

    // Validate if it's a valid ObjectId string before casting
    if (!mongoose.Types.ObjectId.isValid(userIdString)) {
        throw new Error("Invalid ObjectId");
    }
    return userIdString;
};

export default getObjectId;
