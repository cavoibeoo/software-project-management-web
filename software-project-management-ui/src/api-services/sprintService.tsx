import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";

// -----------------------------------Issue-----------------------------------

export const fetchAllSprint = async (projectId: any) => {
    try {
        // await RefreshToken();
        const response = await axios.get(`/sprint/get-all/${projectId}`, {});
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);

        return { error: error };
    }
};

export const createSprint = async (projectId: any) => {
    try {
        // await RefreshToken();
        const response = await axios.post(`/sprint/${projectId}`, {});
        toast.success("Create sprint successful");
        return response.data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        console.log(error);

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
        const response = await axios.put(`/sprint/${projectId}/${sprintId}`, sprintData, {});
        toast.success("Start sprint successful");
        return response.data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        console.log(error);

        return { error: error };
    }
};

export const deleteSprint = async (sprintId: string, projectId: string) => {
    try {
        // await RefreshToken();
        const response = await axios.delete(`/sprint/${projectId}/${sprintId}`, {});

        toast.success("Delete sprint successful");
        return response.data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        console.log(error);

        return { error: error };
    }
};
