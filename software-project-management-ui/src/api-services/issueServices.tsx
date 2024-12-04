import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";

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
    }
};

export const createIssue = async (data: any) => {
    try {
        let { summary, projectId, workflow } = data;
        let issueType = data?.issueType || "Story";
        let processedData = {
            workflow,
            summary,
            issueType,
            ...(data?.sprint && { sprint: data.sprint }),
        };

        // await RefreshToken();
        const response = await axios.post(`/issue/${projectId}`, processedData, {});
        toast.success("Create issue successfully!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);

        return { error: error };
    }
};

export const updateIssue = async (data: any) => {
    try {
        let { projectId, issueId } = data;
        // let issueType = data?.issueType || "Story";
        let processedData = {
            ...(data?.summary && { summary: data.summary }),
            ...(data?.issueType && { issueType: data.issueType }),
            ...(data?.workflow && { workflow: data.workflow }),
            ...(data?.description && { description: data.description }),
            ...(data?.fields && { fields: data.fields }),
            ...(data?.sprint && { sprint: data.sprint }),
            ...(data?.assignee && { assignee: data.assignee }),
        };

        // await RefreshToken();
        const response = await axios.put(`/issue/${projectId}/${issueId}`, processedData, {});
        toast.success("Update issue successfully!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);

        return { error: error };
    }
};

export const deleteIssue = async (data: any) => {
    try {
        let { projectId, issueId } = data;

        // await RefreshToken();
        const response = await axios.delete(`/issue/${projectId}/${issueId}`, {});
        toast.success("Delete issue successfully!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);
        return { error: error };
    }
};
