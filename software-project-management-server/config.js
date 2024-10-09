import dotenv from "dotenv";

dotenv.config();

const { ATLAS_URI, PORT } = process.env;

const config = {
    connStr: ATLAS_URI,
    port: PORT,
};

export default config;
