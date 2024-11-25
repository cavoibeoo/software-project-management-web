import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const fetchIssue = async (projectId: any) => {
    try {
        // await RefreshToken();
        const response = await axios.get(`/issue/get-backlog/${projectId}`, {
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
        let processedData = {
            summary,
            issueType,
            ...(data?.sprint && { sprint: data.sprint }),
        };

        // await RefreshToken();
        const response = await axios.post(`/issue/${projectId}`, processedData, {
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

export const updateIssue = async (data: any) => {
    try {
        let { projectId, issueId } = data;
        let issueType = data?.issueType || "Story";
        let processedData = {
            ...(data?.issueTypeValue && { issueType: data.issueTypeValue }),
            ...(data?.workflowValue && { workflow: data.workflowValue }),
            ...(data?.descriptionValue && { description: data.descriptionValue }),
            ...(data?.issueField && { fields: data.issueField }),
            ...(data?.sprintValue && { sprint: data.sprintValue }),
            ...(data?.assignee && { assignee: data.assignee }),
        };

        console.log(processedData);

        // await RefreshToken();
        const response = await axios.put(`/issue/${projectId}/${issueId}`, processedData, {
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

export const deleteIssue = async (data: any) => {
    try {
        let { projectId, issueId } = data;

        // await RefreshToken();
        const response = await axios.delete(`/issue/${projectId}/${issueId}`, {
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
