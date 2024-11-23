import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const fetchIssue = async () => {
	try {
		// await RefreshToken();
		const response = await axios.get(
			"/issue/get-all/6740b872a950648ea070aa07",
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

export const createIssue = async (data: any) => {
	try {
		let { summary } = data;
		let issueType = data?.issueType || "Story";

		// await RefreshToken();
		const response = await axios.post(
			"/issue/6740b872a950648ea070aa07",
			{
				issueType,
				summary,
			},
			{
				headers: {
					Authorization: `Bearer ${getAccessTokenFromCookie()}`,
				},
				withCredentials: true,
			}
		);
		console.log(issueType);
		console.log(summary);
		return response.data;
	} catch (error) {
		console.log(error);
		await handleTokenExpired(error);
	}
};
