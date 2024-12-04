import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";

// -----------------------------------Projects-----------------------------------

export const fetchAllProjects = async () => {
    try {
        const response = await axios.get("/project/my-projects");
        return response.data;
    } catch (error: any) {
        console.log(error);
    }
};

export const fetchById = async (projectId: any) => {
    try {
        const response = await axios.get(`/project/${projectId}`);
        return response.data;
    } catch (error: any) {
        console.log(error);
    }
};

export const createProject = async (projectData: any) => {
    try {
        const response = await axios.post("/project/create", projectData, {});
        toast.success("Successfully created project!");
        return response.data;
    } catch (error) {
        toast.error("Failed to create project! Please try again.");
    }
};

export const moveToTrash = async (projectId: string, projectName: string) => {
    try {
        const response = await axios.delete("project/temporary-delete/" + projectId, {
            data: { projectName: projectName },
        });
        toast.success("Successfully deleted project!");
        return response.data;
    } catch (error) {
        toast.error("Failed to delete project! Please try again.");
    }
};

// -----------------------------------Trash -----------------------------------

export const fetchTrashProjects = async () => {
    try {
        // await RefreshToken();
        const response = await axios.get("/project/my-deleted-projects", {});
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const recoverProject = async (projectId: string, projectName: string) => {
    try {
        const response = await axios.put("/project/recover/" + projectId, {
            projectName: projectName,
        });
        toast.success("Successfully recovered project!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);

        return { error: error };
    }
};

export const deleteProject = async (projectId: string, projectName: string) => {
    try {
        const response = await axios.delete("/project/permanent-delete/" + projectId, {
            data: {
                projectName: projectName,
            },
        });
        toast.success("Successfully deleted project!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);

        return { error: error };
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
                "Content-Type": "multipart/form-data",
            },
        });
        toast.success("Successfully updated project!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);

        return { error: error };
    }
};
