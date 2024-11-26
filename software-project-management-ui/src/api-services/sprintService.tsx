import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const fetchAllSprint = async (projectId: any) => {
    try {
        // await RefreshToken();
        const response = await axios.get(`/sprint/get-all/${projectId}`, {
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

export const createSprint = async (projectId: any) => {
    try {
        // await RefreshToken();
        const response = await axios.post(
            `/sprint/${projectId}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${getAccessTokenFromCookie()}`,
                },
                withCredentials: true,
            }
        );
        toast.success("Create sprint successful");
        return response.data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        console.log(error);
        await handleTokenExpired(error);
        return { error: error };
    }
};

export const updateSprint = async (data: any) => {
    try {
        let { projectId, sprintId } = data;
        const sprintData = {
            name: data?.name,
            startDate: data?.startDate, // Ensure this is a Date object
            endDate: data?.endDate, // Ensure this is a Date object
            sprintGoal: data?.goal,
            status: data?.status,
        };

        console.log(sprintData.startDate);

        // await RefreshToken();
        const response = await axios.put(`/sprint/${projectId}/${sprintId}`, sprintData, {
            headers: {
                Authorization: `Bearer ${getAccessTokenFromCookie()}`,
            },
            withCredentials: true,
        });
        toast.success("Start sprint successful");
        return response.data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        console.log(error);
        await handleTokenExpired(error);
        return { error: error };
    }
};

export const deleteSprint = async (data: any) => {
    try {
        let { sprintId, projectId } = data;
        // await RefreshToken();
        const response = await axios.delete(`/sprint/${projectId}/${sprintId}`, {
            headers: {
                Authorization: `Bearer ${getAccessTokenFromCookie()}`,
            },
            withCredentials: true,
        });
        toast.success("Delete sprint successful");
        return response.data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        console.log(error);
        await handleTokenExpired(error);
        return { error: error };
    }
};
