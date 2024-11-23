import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const fetchIssue = async () => {
    try {
        // await RefreshToken();
        const response = await axios.get(
            "http://localhost:3001/api/issue/get-all/673f4fde2856710bc3634f7e",
            {
                headers: {
                    Authorization: `Bearer ${getAccessTokenFromCookie()}`,
                },
                withCredentials: true,
            }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        await handleTokenExpired(error);
    }
};
