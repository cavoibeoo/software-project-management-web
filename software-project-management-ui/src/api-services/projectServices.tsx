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
export function CreateProject() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const createProject = async () => {
			try {
				const projectData = {
					name: "Faker",
					key: "faker",
					img: "https://example.com/sample-project-image.png",
				};
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
				setProjects(response.data);
			} catch (error) {
				console.error("Error creating project:", error);
			}
		};

		createProject();
	}, []);

	return projects;
}
