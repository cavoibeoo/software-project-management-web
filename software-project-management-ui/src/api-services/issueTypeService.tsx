import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";

// -----------------------------------Issue-----------------------------------

export const fetchIssueType = async (projectId: any) => {
    try {
        // await RefreshToken();
        const response = await axios.get(`/issue-type/get-all/${projectId}`, {});
        return response.data;
    } catch (error: any) {
        console.log(error);
        toast.error(`${error?.response?.data?.message}`);
    }
};

export const fetchById = async (data: any) => {
    try {
        let { projectId, issueTypeId } = data;
        // await RefreshToken();
        const response = await axios.get(`/issue-type/get-by-id/${projectId}/${issueTypeId}`);
        return response.data;
    } catch (error: any) {
        console.log(error);
        toast.error(`${error?.response?.data?.message}`);
    }
};
