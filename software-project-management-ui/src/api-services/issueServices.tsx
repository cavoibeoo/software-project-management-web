import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const fetchIssue = async (projectId: any) => {
    try {
        // await RefreshToken();
        const response = await axios.get(`/issue/get-all/${projectId}`, {
            headers: {
                Authorization: `Bearer ${getAccessTokenFromCookie()}`,
            },
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        await handleTokenExpired(error);
    }
};

export const createIssue = async (data: any) => {
    try {
        let { summary, projectId } = data;
        let issueType = data?.issueType || "Story";

        // await RefreshToken();
        const response = await axios.post(
            `/issue/${projectId}`,
            {
                issueType,
                summary,
            },
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
