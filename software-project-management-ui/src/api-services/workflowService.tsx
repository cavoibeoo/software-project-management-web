import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";

// -----------------------------------Issue-----------------------------------

export const fetchWorkflow = async (projectId: any) => {
    try {
        // await RefreshToken();
        const response = await axios.get(`/workflow/get-all/${projectId}`, {});
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);

        return { error: error };
    }
};
