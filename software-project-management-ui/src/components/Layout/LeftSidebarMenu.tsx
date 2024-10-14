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

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

	return (
		<>
			<div className="leftSidebarDark">
				<div className="left-sidebar-menu">
					<div className="logo">
						<Link href="/dashboard/ecommerce/">
							<Image
								src="/images/Sine_logo_icon.png"
								alt="logo-icon"
								width={26}
								height={26}
							/>
							<span>Sine</span>
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
								}}
							>
								MAIN
							</Typography>

							<Accordion
								expanded={expanded === "panel1"}
								onChange={handleChange("panel1")}
								className="mat-accordion"
							>
								<AccordionSummary
									className="mat-summary"
									aria-controls="panel1d-content"
									id="panel1d-header"
								>
									<i className="material-symbols-outlined">dashboard</i>
									<span className="title">Dashboard</span>
									<span className="sine-badge">5</span>
								</AccordionSummary>

								<AccordionDetails className="mat-details">
									<ul className="sidebar-sub-menu">
										<li className="sidemenu-item">
											<Link
												href="/dashboard/ecommerce/"
												className={`sidemenu-link ${
													pathname === "/dashboard/ecommerce/" ? "active" : ""
												}`}
											>
												eCommerce
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/dashboard/crm/"
												className={`sidemenu-link ${
													pathname === "/dashboard/crm/" ? "active" : ""
												}`}
											>
												CRM
												<span className="sine-badge">Hot</span>
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/dashboard/project-management/"
												className={`sidemenu-link ${
													pathname === "/dashboard/project-management/"
														? "active"
														: ""
												}`}
											>
												Project Management
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/dashboard/lms/"
												className={`sidemenu-link ${
													pathname === "/dashboard/lms/" ? "active" : ""
												}`}
											>
												LMS
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/dashboard/helpdesk/"
												className={`sidemenu-link ${
													pathname === "/dashboard/helpdesk/" ? "active" : ""
												}`}
											>
												HelpDesk
												<span className="sine-badge style-two">Top</span>
											</Link>
										</li>
									</ul>
								</AccordionDetails>
							</Accordion>

							<Accordion
								expanded={expanded === "panel2"}
								onChange={handleChange("panel2")}
								className="mat-accordion"
							>
								<AccordionSummary
									className="mat-summary"
									aria-controls="panel2d-content"
									id="panel2d-header"
								>
									<i className="material-symbols-outlined">note_stack</i>
									<span className="title">Front Pages</span>
								</AccordionSummary>

								<AccordionDetails className="mat-details">
									<ul className="sidebar-sub-menu">
										<li className="sidemenu-item">
											<Link
												href="/"
												className={`sidemenu-link ${
													pathname === "/" ? "active" : ""
												}`}
											>
												Home
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/front-pages/features/"
												className={`sidemenu-link ${
													pathname === "/front-pages/features/" ? "active" : ""
												}`}
											>
												Features
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/front-pages/team/"
												className={`sidemenu-link ${
													pathname === "/front-pages/team/" ? "active" : ""
												}`}
											>
												Our Team
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/front-pages/faq/"
												className={`sidemenu-link ${
													pathname === "/front-pages/faq/" ? "active" : ""
												}`}
											>
												FAQ’s
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/front-pages/contact/"
												className={`sidemenu-link ${
													pathname === "/front-pages/contact/" ? "active" : ""
												}`}
											>
												Contact
											</Link>
										</li>
									</ul>
								</AccordionDetails>
							</Accordion>
							<Typography
								className="sub-title"
								sx={{
									display: "block",
									fontWeight: "500",
									textTransform: "uppercase",
								}}
							>
								OTHERS
							</Typography>

							<Link href="/my-profile" className="sidebar-menu-link">
								<i className="material-symbols-outlined">account_circle</i>
								<span className="title">My Profile</span>
							</Link>

							<Accordion
								expanded={expanded === "panel23"}
								onChange={handleChange("panel23")}
								className="mat-accordion"
							>
								<AccordionSummary
									className="mat-summary"
									aria-controls="panel23d-content"
									id="panel23d-header"
								>
									<i className="material-symbols-outlined">settings</i>
									<span className="title">Settings</span>
								</AccordionSummary>

								<AccordionDetails className="mat-details">
									<ul className="sidebar-sub-menu">
										<li className="sidemenu-item">
											<Link
												href="/settings/"
												className={`sidemenu-link ${
													pathname === "/settings/" ? "active" : ""
												}`}
											>
												Account Settings
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/settings/change-password/"
												className={`sidemenu-link ${
													pathname === "/settings/change-password/"
														? "active"
														: ""
												}`}
											>
												Change Password
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/settings/connections/"
												className={`sidemenu-link ${
													pathname === "/settings/connections/" ? "active" : ""
												}`}
											>
												Connections
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/settings/privacy-policy/"
												className={`sidemenu-link ${
													pathname === "/settings/privacy-policy/"
														? "active"
														: ""
												}`}
											>
												Privacy Policy
											</Link>
										</li>

										<li className="sidemenu-item">
											<Link
												href="/settings/terms-conditions/"
												className={`sidemenu-link ${
													pathname === "/settings/terms-conditions/"
														? "active"
														: ""
												}`}
											>
												Terms & Conditions
											</Link>
										</li>
									</ul>
								</AccordionDetails>
							</Accordion>

							<Link
								href="/authentication/logout/"
								className="sidebar-menu-link"
							>
								<i className="material-symbols-outlined">logout</i>
								<span className="title">Logout</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LeftSidebarMenu;
