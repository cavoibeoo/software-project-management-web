"use client";
import { useState, createContext, Dispatch, SetStateAction } from "react";

// Định nghĩa kiểu dữ liệu cho context
interface ProjectNameContextType {
	projectName: string;
	setProjectName: Dispatch<SetStateAction<string>>;
}

const ProjectNameContext = createContext<ProjectNameContextType | undefined>(
	undefined
);

function ProjectNameProvider({ children }: { children: React.ReactNode }) {
	const [projectName, setProjectName] = useState("SINE_PSM");

	const value = {
		projectName,
		setProjectName,
	};

	return (
		<ProjectNameContext.Provider value={value}>
			{children}
		</ProjectNameContext.Provider>
	);
}

export { ProjectNameContext, ProjectNameProvider };
