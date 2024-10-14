import dotenv from "dotenv";

dotenv.config();

const {
    ATLAS_URI,
    PORT,
    BUILD_MODE,
    SALT,
    ACCESS_TOKEN_PRIVATE_KEY,
    REFRESH_TOKEN_PRIVATE_KEY,
    ACCESS_TOKEN_EXP,
    REFRESH_TOKEN_EXP,
} = process.env;

const config = {
    connStr: ATLAS_URI,
    port: PORT,
    buildMode: BUILD_MODE,
    salt: SALT,
    accessTokenPrivateKey: ACCESS_TOKEN_PRIVATE_KEY,
    refreshTokenPrivateKey: REFRESH_TOKEN_PRIVATE_KEY,
    refreshTokenExp: REFRESH_TOKEN_EXP,
    accessTokenExp: ACCESS_TOKEN_EXP,
};

export default config;
