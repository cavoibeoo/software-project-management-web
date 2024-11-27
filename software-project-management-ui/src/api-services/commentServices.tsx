import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const addComment = async (data: any) => {
    try {
        let { comment, projectId, issueId } = data;
        // await RefreshToken();
        const response = await axios.post(
            `/comment/${projectId}/${issueId}`,
            { comment: comment },
            {
                headers: {
                    Authorization: `Bearer ${getAccessTokenFromCookie()}`,
                },
                withCredentials: true,
            }
        );

        toast.success("Add comment successful!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);
        await handleTokenExpired(error);
    }
};

export const updateComment = async (data: any) => {
    try {
        let { comment, projectId, issueId } = data;
        console.log(comment?.comment);
        const response = await axios.put(
            `/comment/${projectId}/${issueId}/${comment?._id}`,
            { comment: comment?.comment },
            {
                headers: {
                    Authorization: `Bearer ${getAccessTokenFromCookie()}`,
                },
                withCredentials: true,
            }
        );

        toast.success("Update comment successful!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);
        await handleTokenExpired(error);
    }
};

export const deleteComment = async (data: any) => {
    try {
        let { commentId, projectId, issueId } = data;
        // await RefreshToken();
        const response = await axios.delete(`/comment/${projectId}/${issueId}/${commentId}`, {
            headers: {
                Authorization: `Bearer ${getAccessTokenFromCookie()}`,
            },
            withCredentials: true,
        });

        toast.success("Delete comment successful!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);
        await handleTokenExpired(error);
    }
};
