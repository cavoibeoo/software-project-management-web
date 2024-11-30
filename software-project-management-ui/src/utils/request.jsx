import axios from "axios";

export const authRequest = axios.create({
    baseURL: "https://spm-server.vercel.appapi/auth",
});

export const userService = axios.create({
    baseURL: "https://spm-server.vercel.app/api/user",
});
