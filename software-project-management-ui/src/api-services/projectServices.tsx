import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Projects-----------------------------------

export const fetchAllProjects = async () => {
    try {
        const response = await axios.get("/project/my-projects", {
            headers: { Authorization: `Bearer ${getAccessTokenFromCookie()}` },
            withCredentials: true,
        });
        return response.data;
    } catch (error: any) {
        if (error?.response?.status === 401) {
            await handleTokenExpired(error);
        }
    }
};

export const fetchById = async (projectId: any) => {
    try {
        const response = await axios.get(`/project/${projectId}`, {
            headers: { Authorization: `Bearer ${getAccessTokenFromCookie()}` },
            withCredentials: true,
        });
        return response.data;
    } catch (error: any) {
        if (error?.response?.status === 401) {
            await handleTokenExpired(error);
        }
    }
};

export const createProject = async (projectData: any) => {
    try {
        const response = await axios.post("/project/create", projectData, {
            headers: {
                Authorization: `Bearer ${getAccessTokenFromCookie()}`,
            },
            withCredentials: true,
        });
        toast.success("Successfully created project!");
        return response.data;
    } catch (error) {
        await handleTokenExpired(error);
        toast.error("Failed to create project!");
    }
};

export const moveToTrash = async (projectId: string, projectName: string) => {
    try {
        const response = await axios.delete("project/temporary-delete/" + projectId, {
            data: {
                projectName: projectName,
            },
            headers: {
                Authorization: `Bearer ${getAccessTokenFromCookie()}`,
            },
            withCredentials: true,
        });
        toast.success("Successfully deleted project!");
        return response.data;
    } catch (error) {
        await handleTokenExpired(error);
        toast.error("Failed to delete project!");
    }
};

// -----------------------------------Trash -----------------------------------

export const fetchTrashProjects = async () => {
    try {
        // await RefreshToken();
        const response = await axios.get("/project/my-deleted-projects", {
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

export const recoverProject = async (projectId: string, projectName: string) => {
    try {
        await RefreshToken();

        const response = await axios.put(
            "/project/recover/" + projectId,
            {
                projectName: projectName,
            },
            {
                headers: {
                    Authorization: `Bearer ${getAccessTokenFromCookie()}`,
                },
            }
        );
        toast.success("Successfully recovered project!");
        return response.data;
    } catch (error) {
        await handleTokenExpired(error);
        toast.error("Failed to recover project!");
    }
};

export const deleteProject = async (projectId: string, projectName: string) => {
    try {
        const response = await axios.delete("/project/permanent-delete/" + projectId, {
            data: {
                projectName: projectName,
            },
            headers: {
                Authorization: `Bearer ${getAccessTokenFromCookie()}`,
            },
            withCredentials: true,
        });
        toast.success("Successfully deleted project!");
        return response.data;
    } catch (error) {
        await handleTokenExpired(error);
        toast.error("Failed to delete project!");
    }
};

// -----------------------------------update Project-----------------------------------
export const updateProject = async (projectId: any, projectData: any) => {
    try {
        const formData = new FormData();
        for (const key in projectData) {
            formData.append(key, projectData[key]);
        }

        const response = await axios.put(`/project/update/${projectId}`, formData, {
            headers: {
                Authorization: `Bearer ${getAccessTokenFromCookie()}`,
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });
        toast.success("Successfully updated project!");
        return response.data;
    } catch (error: any) {
        console.log(error);
        toast.error(error?.response?.data?.message);
        await handleTokenExpired(error);
    }
};
