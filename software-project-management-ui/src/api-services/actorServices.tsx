import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const addActor = async (data: any) => {
    try {
        console.log(data);
        let { role, projectId, email } = data;
        // await RefreshToken();
        const response = await axios.post(`/project/add-actor/${projectId}`, {
            email: email,
            role,
        });

        toast.success("Add member succeeded!");
        return response.data;
    } catch (error: any) {
        toast.error(`Add member failed. ${error?.response?.data?.message}`);
        console.log(error);
    }
};

export const updateActor = async (data: any) => {
    try {
        let { role, projectId, email } = data;
        // await RefreshToken();
        const response = await axios.put(`/project/change-actor-role/${projectId}`, {
            email: email,
            role,
        });

        toast.success("Update member succeeded!");
        return response.data;
    } catch (error: any) {
        toast.error(`Update member failed. ${error?.response?.data?.message}`);
        console.log(error);
    }
};

export const removeActor = async (data: any) => {
    try {
        let { projectId, userId } = data;
        const response = await axios.delete(`/project/remove-actor/${projectId}/${userId}`, {});

        toast.success("Remove member succeeded!");
        return response.data;
    } catch (error: any) {
        toast.error(`Remove member failed. ${error?.response?.data?.message}`);
        console.log(error);
    }
};
