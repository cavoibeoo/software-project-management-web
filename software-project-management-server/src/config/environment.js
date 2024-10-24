import dotenv from "dotenv";

dotenv.config();

const {
    HOST,
    ATLAS_URI,
    PORT,
    BUILD_MODE,
    SALT,
    ACCESS_TOKEN_PRIVATE_KEY,
    REFRESH_TOKEN_PRIVATE_KEY,
    ACCESS_TOKEN_EXP,
    REFRESH_TOKEN_EXP,
    MAIL_HOST,
    MAIL_MAILER,
    MAIL_PORT,
    MAIL_USERNAME,
    MAIL_PASSWORD,
    MAIL_ENCRYPTION,
    MAIL_FROM_ADDRESS,
    MAIL_FROM_NAME,
} = process.env;

const config = {
    host: HOST,
    connStr: ATLAS_URI,
    port: PORT,
    buildMode: BUILD_MODE,
    salt: SALT,
    accessTokenPrivateKey: ACCESS_TOKEN_PRIVATE_KEY,
    refreshTokenPrivateKey: REFRESH_TOKEN_PRIVATE_KEY,
    refreshTokenExp: REFRESH_TOKEN_EXP,
    accessTokenExp: ACCESS_TOKEN_EXP,
    mailer: {
        host: MAIL_HOST,
        mail: MAIL_MAILER,
        port: MAIL_PORT,
        username: MAIL_USERNAME,
        password: MAIL_PASSWORD,
        encryption: MAIL_ENCRYPTION,
        from: MAIL_FROM_ADDRESS,
        from_name: MAIL_FROM_NAME,
    },
};

export default config;
