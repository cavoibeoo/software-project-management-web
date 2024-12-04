"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ProjectContext = createContext();

export const useProject = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
	const [projectID, setProjectID] = useState(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("projectID") || "";
		}
		return "";
	});

	useEffect(() => {
		if (projectID) {
			localStorage.setItem("projectID", projectID);
		}
	}, [projectID]);

	return (
		<ProjectContext.Provider value={{ projectID, setProjectID }}>
			{children}
		</ProjectContext.Provider>
	);
};
