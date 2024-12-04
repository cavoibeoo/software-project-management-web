import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";

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
        const response = await axios.get("/user/me", {});
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);

        return { error: error };
    }
};
