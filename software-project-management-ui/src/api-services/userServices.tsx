import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";

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
		const response = await axios.get("/user/me", {});
		return response.data;
	} catch (error: any) {
		toast.error(`${error?.response?.data?.message}`);
		console.log(error);

		return { error: error };
	}
};

export const fetchUsers = async () => {
	try {
		const response = await axios.get("/user/");
		return response.data;
	} catch (error: any) {
		toast.error(`${error?.response?.data?.message}`);
		console.log(error);

		return { error: error };
	}
};

export const updateUserStatus = async (userId: string, isDeleted: boolean) => {
	try {
		let data = {
			userId,
			isDeleted,
		};

		console.log(data);
		const response = await axios.put(`/user/update-status`, data, {});
		toast.success("User status updated successfully");
		return response.data;
	} catch (error: any) {
		toast.error(`${error?.response?.data?.message}`);

		return { error: error };
	}
};

export const updateUserInfo = async (data: any) => {
	try {
		const formData = new FormData();
		for (const key in data) {
			formData.append(key, data[key]);
		}

		const response = await axios.put(`/user/update-info`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		toast.success("User info updated successfully");
		return response.data;
	} catch (error: any) {
		toast.error(`${error?.response?.data?.message}`);
		return { error: error };
	}
};

export const changePassword = async (data: any) => {
	try {
		const response = await axios.put(`/user/change-password`, data, {});
		toast.success("Password changed successfully");
		return response.data;
	} catch (error: any) {
		if (error.response && error.response.status === 400) {
			toast.error("Old password not correct");
		} else {
			toast.error(`${error?.response?.data?.message}`);
		}
		return { error: error };
	}
};
