import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getTokenFromCookie } from "./CookieServices";

export function useFetchProjects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3001/api/project/my-projects",
					{
						headers: {
							Authorization: `Bearer ${getTokenFromCookie()}`,
						},
						withCredentials: true,
					}
				);
				setProjects(response.data);
			} catch (error) {
				toast.error("Please login again!");
				window.location.href = "/authentication/sign-in/";
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
						Authorization: `Bearer ${getTokenFromCookie()}`,
					},
					withCredentials: true,
				}
			);
			toast.success("Successfully created project!");
			return response.data;
		} catch (error) {
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
						Authorization: `Bearer ${getTokenFromCookie()}`,
					},
					withCredentials: true,
				}
			);
			toast.success("Successfully deleted project!");
			return response.data;
		} catch (error) {
			toast.error("Failed to delete project!");
			console.log(error);
			console.log(projectId);
			console.log(projectName);
		}
	};

	return deleteProject;
}
