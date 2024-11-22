import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired } from "./AuthServices";

export function useFetchProjects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/api/project/my-projects",
					{
						headers: {
							Authorization: `Bearer ${getAccessTokenFromCookie()}`,
						},
						withCredentials: true,
					}
				);
				setProjects(response.data);
			} catch (error) {
				await handleTokenExpired(error);
			}
		};

		fetchProjects();
	}, []);

	return projects;
}
export function CreateProject(projectData: any) {
	const createProject = async () => {
		try {
			const response = await axios.post(
				"http://localhost:3001/api/project/create",
				projectData,
				{
					headers: {
						Authorization: `Bearer ${getAccessTokenFromCookie()}`,
					},
					withCredentials: true,
				}
			);
			toast.success("Successfully created project!");
			return response.data;
		} catch (error) {
			await handleTokenExpired(error);
			toast.error("Failed to create project!");
		}
	};

	return createProject;
}

export function DeleteProject(projectId: string, projectName: string) {
	const deleteProject = async () => {
		try {
			const response = await axios.delete(
				"http://localhost:3001/api/project/temporary-delete/" + projectId,
				{
					data: {
						projectName: projectName,
					},
					headers: {
						Authorization: `Bearer ${getAccessTokenFromCookie()}`,
					},
					withCredentials: true,
				}
			);
			toast.success("Successfully deleted project!");
			return response.data;
		} catch (error) {
			await handleTokenExpired(error);
			toast.error("Failed to delete project!");
		}
	};

	return deleteProject;
}
