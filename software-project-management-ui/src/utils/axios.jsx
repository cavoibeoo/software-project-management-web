import axios from "axios";

// const BASE_URL = "https://spm-server.vercel.app/api";
const BASE_URL = "http://locahost:3001/api";

export default axios.create({
    baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});
