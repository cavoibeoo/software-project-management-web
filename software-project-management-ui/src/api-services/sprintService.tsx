import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const fetchAllSprint = async () => {
	try {
		// await RefreshToken();
		const response = await axios.get(
			"/sprint/get-all/6740b872a950648ea070aa07",
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

export const createSprint = async () => {
	try {
		// await RefreshToken();
		const response = await axios.post(
			"/sprint/6740b872a950648ea070aa07",
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

export const deleteSprint = async (sprintId: string) => {
	try {
		// await RefreshToken();
		const response = await axios.delete(
			`/sprint/6740b872a950648ea070aa07/${sprintId}`,
			{
				headers: {
					Authorization: `Bearer ${getAccessTokenFromCookie()}`,
				},
				withCredentials: true,
			}
		);
		console.log(sprintId);
		return response.data;
	} catch (error) {
		console.log(error);
		await handleTokenExpired(error);
	}
};
