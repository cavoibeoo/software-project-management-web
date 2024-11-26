import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const fetchAllSprint = async (projectId: any) => {
	try {
		// await RefreshToken();
		const response = await axios.get(`/sprint/get-all/${projectId}`, {
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

export const createSprint = async (projectId: any) => {
	try {
		// await RefreshToken();
		const response = await axios.post(
			`/sprint/${projectId}`,
			{},
			{
				headers: {
					Authorization: `Bearer ${getAccessTokenFromCookie()}`,
				},
				withCredentials: true,
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
		await handleTokenExpired(error);
	}
};

export const deleteSprint = async (sprintId: string, projectId: string) => {
	try {
		// await RefreshToken();
		const response = await axios.delete(`/sprint/${projectId}/${sprintId}`, {
			headers: {
				Authorization: `Bearer ${getAccessTokenFromCookie()}`,
			},
			withCredentials: true,
		});
		console.log(projectId);
		console.log(sprintId);
		return response.data;
	} catch (error) {
		console.log(error);
		await handleTokenExpired(error);
	}
};
