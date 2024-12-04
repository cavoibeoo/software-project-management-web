import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Projects-----------------------------------

interface User {
	avatar: string;
	name: string;
	email: string;
	// Add other fields as needed
}

export const useFetchUser = async () => {
	try {
		// await RefreshToken();
		const response = await axios.get("/user/me", {
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

export const fetchUsers = async () => {
	try {
		const response = await axios.get("/user/", {
			headers: {
				Authorization: `Bearer ${getAccessTokenFromCookie()}`,
			},
		});
		return response.data;
	} catch (error) {
		await handleTokenExpired(error);
	}
};

export const updateUserStatus = async (userId: string, isDeleted: boolean) => {
	try {
		let data = {
			userId,
			isDeleted,
		};

		console.log(data);
		const response = await axios.put(`/user/update-status`, data, {
			headers: {
				Authorization: `Bearer ${getAccessTokenFromCookie()}`,
			},
		});
		return response.data;
	} catch (error) {
		await handleTokenExpired(error);
	}
};

export const updateUserInfo = async (data: any) => {
	try {
		const response = await axios.put(`/user/update-info`, data, {
			headers: {
				Authorization: `Bearer ${getAccessTokenFromCookie()}`,
			},
		});
		toast.success("User info updated successfully");
		return response.data;
	} catch (error) {
		toast.error("Failed to update user info");
		await handleTokenExpired(error);
	}
};

export const changePassword = async (data: any) => {
	try {
		const response = await axios.put(`/user/change-password`, data, {
			headers: {
				Authorization: `Bearer ${getAccessTokenFromCookie()}`,
			},
		});
		toast.success("Password changed successfully");
		return response.data;
	} catch (error: any) {
		if (error.response && error.response.status === 400) {
			toast.error("Old password not correct");
		} else {
			toast.error("Failed to change password");
		}
		await handleTokenExpired(error);
	}
};
