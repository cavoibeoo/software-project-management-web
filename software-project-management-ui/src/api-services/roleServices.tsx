import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const addNewRole = async (data: any) => {
    try {
        const { projectId, roleName, permissions } = data;
        const response = await axios.post(
            `/role/${projectId}`,
            { name: roleName, permissions: permissions },
            {
                headers: {
                    Authorization: `Bearer ${getAccessTokenFromCookie()}`,
                },
                withCredentials: true,
            }
        );
        toast.success("Create role successful");
        return response.data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        console.log(error);
        await handleTokenExpired(error);
        return { error: error };
    }
};

export const updateRole = async (data: any) => {
    try {
        const { projectId, roleId, roleName, permissions } = data;
        const response = await axios.put(
            `/role/${projectId}/${roleId}`,
            { name: roleName, permissions: permissions },
            {
                headers: {
                    Authorization: `Bearer ${getAccessTokenFromCookie()}`,
                },
                withCredentials: true,
            }
        );
        toast.success("Update role successful");
        return response.data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        console.log(error);
        await handleTokenExpired(error);
        return { error: error };
    }
};

export const deleteRole = async (data: any) => {
    try {
        const { projectId, roleId } = data;
        const response = await axios.delete(`/role/${projectId}/${roleId}`, {
            headers: {
                Authorization: `Bearer ${getAccessTokenFromCookie()}`,
            },
            withCredentials: true,
        });
        toast.success("Delete role successful");
        return response.data;
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        console.log(error);
        await handleTokenExpired(error);
        return { error: error };
    }
};
