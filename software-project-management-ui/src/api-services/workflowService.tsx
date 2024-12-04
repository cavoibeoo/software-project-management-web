import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Issue-----------------------------------

export const fetchWorkflow = async (projectId: any) => {
	try {
		// await RefreshToken();
		const response = await axios.get(`/workflow/get-all/${projectId}`, {
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

export const createWorkflow = async (
	projectId: string,
	name: string,
	workflowType: string
) => {
	try {
		const response = await axios.post(
			`/workflow/${projectId}`,
			{ name, workflowType },
			{
				headers: {
					Authorization: `Bearer ${getAccessTokenFromCookie()}`,
				},
				withCredentials: true,
			}
		);
		console.log("projectId", projectId);
		console.log("name", name);
		console.log("workflowType", workflowType);
		toast.success("Successfully created workflow!");
		return response.data;
	} catch (error: any) {
		if (error?.response && error.response.status === 400) {
			toast.error("Workflow name already exists!");
		} else if (error?.response && error.response.status === 403) {
			toast.error("You are not allowed to create workflow!");
		} else if (error?.response && error.response.status === 500) {
			toast.error("Column name required!");
		} else {
			console.log(error);
			await handleTokenExpired(error);
		}
	}
};

export const updateWorkflow = async (
	projectId: string,
	workflowId: string,
	name: string,
	workflowType: string
) => {
	try {
		const response = await axios.put(
			`/workflow/${projectId}/${workflowId}`,
			{ name, workflowType },
			{
				headers: {
					Authorization: `Bearer ${getAccessTokenFromCookie()}`,
				},
			}
		);
		toast.success("Successfully updated workflow!");
		return response.data;
	} catch (error: any) {
		if (error?.response && error.response.status === 400) {
			toast.error("Cannot update the default column!");
		} else if (error?.response && error.response.status === 403) {
			toast.error("You are not allowed to update workflow!");
		} else {
			console.log(error);
			await handleTokenExpired(error);
		}
	}
};

export const deleteWorkflow = async (projectId: string, workflowId: string) => {
	try {
		const response = await axios.delete(
			`/workflow/${projectId}/${workflowId}`,
			{
				headers: {
					Authorization: `Bearer ${getAccessTokenFromCookie()}`,
				},
			}
		);
		toast.success("Successfully deleted workflow!");
		return response.data;
	} catch (error: any) {
		if (error?.response && error.response.status === 400) {
			toast.error("You cannot delete default column!");
		} else if (error?.response && error.response.status === 403) {
			toast.error("You are not allowed to delete workflow!");
		} else {
			console.log(error);
			await handleTokenExpired(error);
		}
	}
};
