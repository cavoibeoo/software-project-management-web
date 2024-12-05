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

export const addIssueType = async (data: any) => {
    try {
        let { projectId, issueTypeName } = data;

        const response = await axios.post(`/issue-type/${projectId}`, {
            name: issueTypeName,
        });

        toast.success("Update issue type successful!");
        return response.data;
    } catch (error: any) {
        console.log(error);
        toast.error(`${error?.response?.data?.message}`);
    }
};

export const updateIssueType = async (data: any) => {
    try {
        let { projectId, issueTypeId, updateData } = data;

        let preprocessData = {
            ...(updateData?.name && { name: updateData?.name }),
            ...(updateData?.description && { description: updateData?.description }),
            ...(updateData?.fields && {
                fields: updateData.fields.map(
                    ({
                        _id,
                        isDefault,
                        ...rest
                    }: {
                        _id?: string;
                        isDefault?: boolean;
                        [key: string]: any;
                    }) => rest
                ),
            }),
        };

        const response = await axios.put(`/issue-type/${projectId}/${issueTypeId}`, preprocessData);
        toast.success("Update issue type successful!");
        return response.data;
    } catch (error: any) {
        console.log(error);
        toast.error(`${error?.response?.data?.message}`);
    }
};

export const deleteIssueType = async (data: any) => {
    try {
        let { projectId, issueTypeId, newIssueType } = data;
        const response = await axios.delete(`/issue-type/${projectId}/${issueTypeId}`, {
            data: { newIssueType: newIssueType },
        });
        return response.data;
    } catch (error: any) {
        console.log(error);
        toast.error(`${error?.response?.data?.message}`);
        return { error: error };
    }
};
