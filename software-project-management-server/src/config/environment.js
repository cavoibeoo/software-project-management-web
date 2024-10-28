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
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID,
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
    firebaseConfig: {
        apiKey: FIREBASE_API_KEY,
        authDomain: FIREBASE_AUTH_DOMAIN,
        projectId: FIREBASE_PROJECT_ID,
        storageBucket: FIREBASE_STORAGE_BUCKET,
        messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
        appId: FIREBASE_APP_ID,
        measurementId: FIREBASE_MEASUREMENT_ID,
    },
};

export default config;
