// File path: /styles/left-sidebar-menu.scss

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ProjectNameContext } from "@/providers/ProjectNameProvider";

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&::before": {
		display: "none",
	},
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#3a4252" : "#f6f7f9",
	flexDirection: "row-reverse",
	"& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
		transform: "rotate(90deg)",
	},
	"& .MuiAccordionSummary-content": {
		// marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	// borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface LeftSidebarProps {
	toggleActive: () => void;
}

const LeftSidebarMenu: React.FC<LeftSidebarProps> = ({ toggleActive }) => {
	const pathname = usePathname();

	const [expanded, setExpanded] = React.useState<string | false>("panel1");

	// Thêm trạng thái để theo dõi trang hiện tại
	const [activePage, setActivePage] = React.useState<string>(pathname);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	const projectName = useContext(ProjectNameContext);

	// Cập nhật activePage khi pathname thay đổi
	React.useEffect(() => {
		setActivePage(pathname);
	}, [pathname]);

	return (
		<>
			<div className="leftSidebarDark">
				<div className="left-sidebar-menu">
					<div className="logo">
						<Link href="/">
							<Image
								src="/images/Sine_logo_icon.png"
								alt="logo-icon"
								width={26}
								height={26}
							/>
							<span>{projectName?.projectName}</span>
						</Link>
					</div>

					<Box className="burger-menu" onClick={toggleActive}>
						<span className="top-bar"></span>
						<span className="middle-bar"></span>
						<span className="bottom-bar"></span>
					</Box>

					<div className="sidebar-inner">
						<div className="sidebar-menu">
							<Typography
								className="sub-title"
								sx={{
									display: "block",
									fontWeight: "500",
									textTransform: "uppercase",
									color: "44546f",
								}}
							>
								PLANNING
							</Typography>

							<Link
								href={"/sine/timeline/"}
								className={`sidebar-menu-link ${
									activePage === "/my-profile" ? "active" : ""
								}`}
							>
								<i className="material-symbols-outlined">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										role="presentation"
									>
										<path
											fill="currentcolor"
											fillRule="evenodd"
											d="M6 2h10a3 3 0 0 1 0 6H6a3 3 0 1 1 0-6m0 2a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2zm4 5h8a3 3 0 0 1 0 6h-8a3 3 0 0 1 0-6m0 2a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-4 5h6a3 3 0 0 1 0 6H6a3 3 0 0 1 0-6m0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z"
										></path>
									</svg>
								</i>
								<span className="title">TimeLine</span>
							</Link>
							<Link
								// href={`/projects/${projectName?.projectName}/backlog`}
								href={"/sine/backlog/"}
								className="sidebar-menu-link"
							>
								<i className="material-symbols-outlined">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										role="presentation"
									>
										<g fill="currentcolor">
											<path d="M5 19.002C5 19 17 19 17 19v-2.002C17 17 5 17 5 17zm-2-2.004C3 15.894 3.895 15 4.994 15h12.012c1.101 0 1.994.898 1.994 1.998v2.004A1.997 1.997 0 0 1 17.006 21H4.994A2 2 0 0 1 3 19.002z"></path>
											<path d="M5 15h12v-2H5zm-2-4h16v6H3z"></path>
											<path d="M7 11.002C7 11 19 11 19 11V8.998C19 9 7 9 7 9zM5 8.998C5 7.894 5.895 7 6.994 7h12.012C20.107 7 21 7.898 21 8.998v2.004A1.997 1.997 0 0 1 19.006 13H6.994A2 2 0 0 1 5 11.002z"></path>
											<path d="M5 5v2h12V5zm-2-.002C3 3.894 3.895 3 4.994 3h12.012C18.107 3 19 3.898 19 4.998V9H3z"></path>
										</g>
									</svg>
								</i>
								<span className="title">Backlog</span>
							</Link>
							<Link href={"/sine/board/"} className="sidebar-menu-link">
								<i className="material-symbols-outlined">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										role="presentation"
									>
										<g fill="currentcolor">
											<path d="M4 18h16.008C20 18 20 6 20 6H3.992C4 6 4 18 4 18M2 5.994C2 4.893 2.898 4 3.99 4h16.02C21.108 4 22 4.895 22 5.994v12.012A1.997 1.997 0 0 1 20.01 20H3.99A1.994 1.994 0 0 1 2 18.006z"></path>
											<path d="M8 6v12h2V6zm6 0v12h2V6z"></path>
										</g>
									</svg>
								</i>
								<span className="title">Board</span>
							</Link>
							<Link href={`/sine/calendar/`} className="sidebar-menu-link">
								<i className="material-symbols-outlined">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										role="presentation"
									>
										<path
											fill="currentcolor"
											fillRule="evenodd"
											d="M4.995 5h14.01C20.107 5 21 5.895 21 6.994v12.012A1.994 1.994 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.006V6.994C3 5.893 3.892 5 4.995 5M5 9v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9zm1-5a1 1 0 0 1 2 0v1H6zm10 0a1 1 0 0 1 2 0v1h-2zm-9 9v-2.001h2V13zm8 0v-2.001h2V13zm-4 0v-2.001h2.001V13zm-4 4v-2h2v2zm4 0v-2h2.001v2zm4 0v-2h2v2z"
										></path>
									</svg>
								</i>
								<span className="title">Calendar</span>
								{/* <span className="sine-badge">NEW</span> */}
							</Link>
							<Link href={`/sine/list/`} className="sidebar-menu-link">
								<i className="material-symbols-outlined">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										role="presentation"
									>
										<g fill="currentcolor" fillRule="evenodd">
											<rect width="8" height="2" x="10" y="15" rx="1"></rect>
											<rect width="2" height="2" x="6" y="15" rx="1"></rect>
											<rect width="8" height="2" x="10" y="11" rx="1"></rect>
											<rect width="2" height="2" x="6" y="11" rx="1"></rect>
											<rect width="8" height="2" x="10" y="7" rx="1"></rect>
											<rect width="2" height="2" x="6" y="7" rx="1"></rect>
										</g>
									</svg>
								</i>
								<span className="title">List</span>
							</Link>
							<div
								style={{
									borderTopWidth: "1px",
									borderStyle: "solid none none",
									borderColor: "#040d1d24",
									marginBottom: "5px",
								}}
							></div>
							<Link href={`/sine/document-page`} className="sidebar-menu-link">
								<i className="material-symbols-outlined">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										role="presentation"
									>
										<g fill="currentcolor" fillRule="evenodd">
											<rect width="8" height="2" x="8" y="6" rx="1"></rect>
											<rect width="8" height="2" x="8" y="9" rx="1"></rect>
											<rect width="4" height="2" x="8" y="12" rx="1"></rect>
											<path
												fillRule="nonzero"
												d="M7 4v16h10V4zm-2-.01C5 2.892 5.897 2 7.006 2h9.988C18.102 2 19 2.898 19 3.99v16.02c0 1.099-.897 1.99-2.006 1.99H7.006A2.003 2.003 0 0 1 5 20.01z"
											></path>
										</g>
									</svg>
								</i>
								<span className="title">Documents Page</span>
							</Link>
							<Link
								href={`/sine/project-settings/`}
								className="sidebar-menu-link"
							>
								<i className="material-symbols-outlined">
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										role="presentation"
									>
										<path
											fill="currentcolor"
											fillRule="evenodd"
											d="M11.701 16.7a5.002 5.002 0 1 1 0-10.003 5.002 5.002 0 0 1 0 10.004m8.368-3.117a1.995 1.995 0 0 1-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 0 0 .315-.574 9 9 0 0 0-.836-1.993.48.48 0 0 0-.598-.195 2.04 2.04 0 0 1-1.29.08 1.99 1.99 0 0 1-1.404-1.395 2.04 2.04 0 0 1 .076-1.297.48.48 0 0 0-.196-.597 9 9 0 0 0-1.975-.826.48.48 0 0 0-.574.314 1.995 1.995 0 0 1-1.885 1.346 1.99 1.99 0 0 1-1.884-1.345.48.48 0 0 0-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 0 0-.198.582A2.002 2.002 0 0 1 4.445 7.06a.48.48 0 0 0-.595.196 9 9 0 0 0-.833 1.994.48.48 0 0 0 .308.572 1.995 1.995 0 0 1 1.323 1.877c0 .867-.552 1.599-1.324 1.877a.48.48 0 0 0-.308.57 9 9 0 0 0 .723 1.79.477.477 0 0 0 .624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 0 0 .168.628 9 9 0 0 0 2.11.897.474.474 0 0 0 .57-.313 1.995 1.995 0 0 1 1.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 0 0 .57.313 9 9 0 0 0 2.084-.883.473.473 0 0 0 .167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 0 0 .628-.19 9 9 0 0 0 .728-1.793.48.48 0 0 0-.314-.573"
										></path>
									</svg>
								</i>
								<span className="title">Project Settings</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LeftSidebarMenu;
