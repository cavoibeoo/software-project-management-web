// File path: /styles/left-sidebar-menu.scss

"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Typography } from "@mui/material";

import { useProject } from "@/app/context/ProjectContext";
import * as projectServices from "@/api-services/projectServices";

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

const IssueTypeLeftSidebarMenu: React.FC<LeftSidebarProps> = ({ toggleActive }) => {
    const pathname = usePathname();
    const { projectID, setProjectID, setIssueTypeId } = useProject();
    const [project, setProject] = React.useState<any | null>();

    React.useEffect(() => {
        const fetchApi = async () => {
            const data = await projectServices.fetchById(projectID);
            console.log(projectID);
            console.log("issuetype navbar: ", data);
            setProject(data);
        };
        fetchApi();
    }, [projectID]);

    const [expanded, setExpanded] = React.useState<string | false>("panel1");

    // Thêm trạng thái để theo dõi trang hiện tại
    const [activePage, setActivePage] = React.useState<string>(pathname);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
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
                        <Box
                            className="sidebar-menu"
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <Link
                                href="/your-work/project-setting/details/"
                                className={`sidebar-menu-link ${
                                    activePage === "/your-work/project-setting/details/"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <i className="ri-arrow-left-circle-line"></i>
                                <span className="title">Project Settings</span>
                            </Link>
                            <div
                                className="sidebar-menu-divider"
                                style={{ marginTop: 10, marginBottom: 10 }}
                            ></div>
                            {project?.issueTypes?.map((issueType: any) => (
                                <Link
                                    onClick={() => setIssueTypeId(issueType._id)}
                                    style={{ display: "flex", alignItems: "center", gap: 20 }}
                                    href="/your-work/project-setting/issue-types/bug"
                                    className="sidebar-menu-link"
                                >
                                    <img
                                        style={{ width: "25px", height: "25px" }}
                                        src={issueType?.img}
                                        alt="BugIcon"
                                    />
                                    <span className="title">{issueType?.name}</span>
                                </Link>
                            ))}

                            <div
                                className="sidebar-menu-divider"
                                style={{ marginTop: 10, marginBottom: 10 }}
                            ></div>
                            <Link
                                style={{ display: "flex", alignItems: "center", gap: 20 }}
                                href="/your-work/project-setting/issue-types/add-more"
                                className="sidebar-menu-link"
                            >
                                <span className="material-symbols-outlined">add</span>
                                <span className="title">Add More</span>
                            </Link>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    );
};

export default IssueTypeLeftSidebarMenu;
