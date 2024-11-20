import { useEffect, useState } from "react";
import axios from "axios";
import { useFetchCookie } from "./CookieServices";

export function useFetchProjects() {
	const [projects, setProjects] = useState([]);
	const token = useFetchCookie();

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				console.log(token);
				const response = await axios.get(
					"http://localhost:3001/api/project/my-projects",
					{
						headers: {
							Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzNiMjBlNmRhNWI4NTAzY2QxODQ3NzIiLCJyb2xlIjoidXNlciIsImlhdCI6MTczMjA4OTk3MywiZXhwIjoxNzMyMDkwODczfQ.QHbtLCXa3YN71uXH9bDVDLYI8W-bzdsSnD1DmDevI3Q`,
						},
						withCredentials: true,
					}
				);
				setProjects(response.data);
			} catch (error) {
				console.error("Error fetching projects:", error);
			}
		};

		fetchProjects();
	}, [token]);

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
							Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`,
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
