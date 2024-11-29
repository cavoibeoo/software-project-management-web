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

const ProjectLeftSidebarMenu: React.FC<LeftSidebarProps> = ({
	toggleActive,
}) => {
	const pathname = usePathname();

	const [expanded, setExpanded] = React.useState<string | false>("panel1");

	// Thêm trạng thái để theo dõi trang hiện tại
	const [activePage, setActivePage] = React.useState<string>(pathname);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};

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
							<Link
								href="/your-work/"
								className={`sidebar-menu-link ${
									activePage === "/my-profile" ? "active" : ""
								}`}
							>
								<i className="material-symbols-outlined">
									<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
										<path
											d="m12.44 3.102.115.066 9 6a1 1 0 0 1-1.009 1.723l-.1-.059-.446-.297V18a2 2 0 0 1-1.85 1.994L18 20h-3a2 2 0 0 1-1.995-1.85L13 18v-4h-2v4a2 2 0 0 1-1.85 1.994L9 20H6a2 2 0 0 1-1.995-1.85L4 18v-7.465l-.445.297a1 1 0 0 1-1.317-.184l-.07-.093a1 1 0 0 1 .184-1.317l.093-.07 9-6a1 1 0 0 1 .994-.066Zm-.44 2.1-6 4V18h3v-4a2 2 0 0 1 1.85-1.995L11 12h2a2 2 0 0 1 1.995 1.85L15 14v4h3V9.202l-6-4Z"
											fill="currentColor"
										></path>
									</svg>
								</i>
								<span className="title">Projects</span>
							</Link>
							<Link
								href="/your-work/user-management/"
								className="sidebar-menu-link"
							>
								<i className="material-symbols-outlined">person</i>
								<span className="title">User Management</span>
							</Link>
							<div
								style={{
									borderTopWidth: "1px",
									borderStyle: "solid none none",
									borderColor: "#040d1d24",
									marginBottom: "5px",
								}}
							></div>
							<Link href="/your-work/trash/" className="sidebar-menu-link">
								<i className="material-symbols-outlined">delete_sweep</i>
								<span className="title">Trashs</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectLeftSidebarMenu;
