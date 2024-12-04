import { useEffect, useState } from "react";
import axios from "@/utils/axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";

// -----------------------------------Issue-----------------------------------

export const fetchWorkflow = async (projectId: any) => {
	try {
		const response = await axios.get(`/workflow/get-all/${projectId}`, {});
		return response.data;
	} catch (error: any) {
		toast.error(`${error?.response?.data?.message}`);

		return { error: error };
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
				withCredentials: true,
			}
		);
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
			toast.error(`${error?.response?.data?.message}`);
			console.log(error);
			return { error: error };
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
			{}
		);
		toast.success("Successfully updated workflow!");
		return response.data;
	} catch (error: any) {
		if (error?.response && error.response.status === 400) {
			toast.error("Cannot update the default column!");
		} else if (error?.response && error.response.status === 403) {
			toast.error("You are not allowed to update workflow!");
		} else {
			toast.error(`${error?.response?.data?.message}`);
			console.log(error);
			return { error: error };
		}
	}
};

export const deleteWorkflow = async (projectId: string, workflowId: string) => {
	try {
		const response = await axios.delete(
			`/workflow/${projectId}/${workflowId}`,
			{}
		);
		toast.success("Successfully deleted workflow!");
		return response.data;
	} catch (error: any) {
		if (error?.response && error.response.status === 400) {
			toast.error("You cannot delete default column!");
		} else if (error?.response && error.response.status === 403) {
			toast.error("You are not allowed to delete workflow!");
		} else {
			toast.error(`${error?.response?.data?.message}`);
			console.log(error);
			return { error: error };
		}
	}
};
