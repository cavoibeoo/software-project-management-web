import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";

// -----------------------------------Issue-----------------------------------

export const addComment = async (data: any) => {
    try {
        let { comment, projectId, issueId } = data;
        // await RefreshToken();
        const response = await axios.post(`/comment/${projectId}/${issueId}`, { comment: comment });

        toast.success("Add comment successful!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);
    }
};

export const updateComment = async (data: any) => {
    try {
        let { comment, projectId, issueId } = data;
        console.log(comment?.comment);
        const response = await axios.put(`/comment/${projectId}/${issueId}/${comment?._id}`, {
            comment: comment?.comment,
        });

        toast.success("Update comment successful!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);
    }
};

export const deleteComment = async (data: any) => {
    try {
        let { commentId, projectId, issueId } = data;
        // await RefreshToken();
        const response = await axios.delete(`/comment/${projectId}/${issueId}/${commentId}`, {});

        toast.success("Delete comment successful!");
        return response.data;
    } catch (error: any) {
        toast.error(`${error?.response?.data?.message}`);
        console.log(error);
    }
};
