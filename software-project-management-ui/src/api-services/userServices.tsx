import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Projects-----------------------------------

interface User {
    avatar: string;
    name: string;
    email: string;
    // Add other fields as needed
}

export const useFetchUser = async () => {
    try {
        // await RefreshToken();
        const response = await axios.get("/user/me", {
            headers: {
                Authorization: `Bearer ${getAccessTokenFromCookie()}`,
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        await handleTokenExpired(error);
    }
};
