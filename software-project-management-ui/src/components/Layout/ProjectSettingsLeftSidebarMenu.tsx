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

const ProjectSettingsLeftSidebarMenu: React.FC<LeftSidebarProps> = ({
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
									activePage === "/your-work/" ? "active" : ""
								}`}
							>
								<i className="ri-arrow-left-circle-line"></i>
								<span className="title">Back To Projects</span>
							</Link>
							<div
								className="sidebar-menu-divider"
								style={{ marginTop: 10, marginBottom: 10 }}
							></div>
							<Link
								href="/your-work/project-setting/details"
								className="sidebar-menu-link"
							>
								<span className="title">Details</span>
							</Link>
							<Link
								href="/your-work/project-setting/access"
								className="sidebar-menu-link"
							>
								<span className="title">Access</span>
							</Link>
							<Link
								href="/your-work/project-setting/issue-types/bug"
								className="sidebar-menu-link"
							>
								<span className="title">Issue types</span>
							</Link>
							<Link
								href="/your-work/project-setting/workflows/"
								className="sidebar-menu-link"
							>
								<span className="title">Workflows</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectSettingsLeftSidebarMenu;
