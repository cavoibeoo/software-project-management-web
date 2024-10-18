"use client";

import React, { useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import LeftSidebarMenu from "@/components/Layout/LeftSidebarMenu";
import ProjectLeftSidebarMenu from "@/components/Layout/ProjectLeftSidebarMenu";
import TopNavbar from "./../components/Layout/TopNavbar/index";
import Footer from "@/components/Layout/Footer";
import ControlPanel from "@/components/Layout/ControlPanel";

interface LayoutProviderProps {
	children: ReactNode;
}

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
	const [active, setActive] = useState<boolean>(false);
	const pathname = usePathname();

	const toggleActive = () => {
		setActive(!active);
	};

	const isAuthPage = [
		"/authentication/sign-in/",
		"/authentication/sign-up/",
		"/authentication/forgot-password/",
		"/authentication/reset-password/",
		"/authentication/confirm-email/",
		"/authentication/lock-screen/",
		"/authentication/logout/",
		"/coming-soon/",
		"/",
		"/front-pages/features/",
		"/front-pages/team/",
		"/front-pages/faq/",
		"/front-pages/contact/",
		"/your-work/",
	].includes(pathname);

	const isProjectPage = ["/your-work/", "/your-work/trash/"].includes(pathname);

	return (
		<>
			<div className={`main-wrapper-content ${active ? "active" : ""}`}>
				{!isAuthPage && (
					<>
						<TopNavbar toggleActive={toggleActive} />

						<LeftSidebarMenu toggleActive={toggleActive} />
					</>
				)}
				{isProjectPage && (
					<>
						<TopNavbar toggleActive={toggleActive} />
						<ProjectLeftSidebarMenu toggleActive={toggleActive} />
					</>
				)}

				<div className="main-content">
					{children}

					{!isAuthPage && <Footer />}
				</div>
			</div>

			<div
				style={{
					position: "fixed",
					bottom: "15px",
					right: "15px",
					zIndex: "-5",
					opacity: 0,
					visibility: "hidden",
				}}
			>
				<ControlPanel />
			</div>
		</>
	);
};

export default LayoutProvider;
