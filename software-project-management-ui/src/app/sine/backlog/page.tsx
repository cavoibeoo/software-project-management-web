"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { deepOrange, deepPurple } from "@mui/material/colors";
import {
	AvatarGroup,
	Breadcrumbs,
	Button,
	Dialog,
	Fade,
	IconButton,
	Link,
	Select,
	Menu,
	MenuItem,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Tooltip,
	FormControlLabel,
	Switch,
	LinearProgress,
} from "@mui/material";
import styles from "@/components/Apps/FileManager/Sidebar/SearchForm/Search.module.css";
import { Card, Typography, Avatar, Badge, styled, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormDialog from "../backlog/Dialogs/AddMemberDialog/AddMemberDialog";
import StartSprintDialog from "./Dialogs/StartSprintDialog/StartSprintDialog";
import { FormEvent, useState, useEffect } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { BacklogList } from "./BacklogList/BacklogList";
import NextLink from "next/link";
import {
	DndContext,
	KeyboardSensor,
	TouchSensor,
	useSensor,
	PointerSensor,
	useSensors,
	closestCorners,
	DragOverlay,
	defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import { arrayMove } from "@dnd-kit/sortable";
import "../drag&drop/component/Column/Column.css";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { toast } from "react-toastify";

import * as issueService from "@/api-services/issueServices";
import * as sprintService from "@/api-services/sprintService";
import * as projectService from "@/api-services/projectServices";
import * as workflowService from "@/api-services/workflowService";
import * as issueTypeService from "@/api-services/issueTypeService";
import { Chatbot } from "@/components/Chatbot";
type Issue = {
	_id: string;
	key: string;
	summary: string;
	// Add other properties if necessary
};

type Sprint = {
	_id: string;
	name: string;
	status: string;
	startDate: Date;
	endDate: Date;
	sprintGoal: string;
	issues: [any];
};

export default function Page() {
    // Fetch sprint onloading
    const [issue, setIssue] = useState<Issue[]>([]);
    const [fetchedSprint, setFetchedSprint] = useState<Sprint[]>([]);
    const [project, setProject] = useState<any>();
    const [workflow, setWorkflow] = useState<any>();
    const [issueType, setIssueType] = useState<any>();
    const [actors, setActors] = useState<any>();

    const [update, setUpdate] = useState(false);
    const [currentDeleteSprintId, setCurrentDeleteSprintId] = useState<string | null>(null);

    const router = useRouter();
    const searchParams = useSearchParams();
    const projectId = searchParams.get("projectId");

    const callUpdate = () => {
        setUpdate(!update);
    };

    useEffect(() => {
        const fetchProject = async () => {
            const result = await projectService.fetchById(projectId);
            setProject(result);
            setActors(result.actors);
        };
        fetchProject();
    }, []);

    useEffect(() => {
        const fetchAPI = async () => {
            const sprints = await sprintService.fetchAllSprint(projectId);
            setFetchedSprint(sprints);

            const issues = await issueService.fetchIssue(projectId);
            setIssue(issues);

            const workflow = await workflowService.fetchWorkflow(projectId);
            setWorkflow(workflow);

            const getIssueType = await issueTypeService.fetchIssueType(projectId);
            setIssueType(getIssueType);
        };
        fetchAPI();
    }, [update]);

    useEffect(() => {
        if (fetchedSprint?.length > 0) {
            const sprintNames = fetchedSprint.map((sprint) => sprint);
            setSprints(sprintNames);
        }
    }, [fetchedSprint]);

    const [issueName, setIssueName] = useState("");

    useEffect(() => {
        if (issue?.length > 0) {
            const mappedBacklogs = issue.map((item) => item);
            setBacklogs(mappedBacklogs);
        }
    }, [issue]);

    const handleDeleteSprint = async (projectId: string) => {
        let sprintId = currentDeleteSprintId;
        if (sprintId) {
            setOpenNotification(false);
            await sprintService.deleteSprint(sprintId, projectId);
            setUpdate(!update);
        }
    };
    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            backgroundColor: "#44b700",
            color: "#44b700",
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""',
            },
        },
        "@keyframes ripple": {
            "0%": {
                transform: "scale(.8)",
                opacity: 1,
            },
            "100%": {
                transform: "scale(2.4)",
                opacity: 0,
            },
        },
    }));

    const [isEpicVisible, setIsEpicVisible] = React.useState(true);
    const [expanded, setExpanded] = React.useState<string | string[]>([]);
    const [sprints, setSprints] = React.useState<any[]>([]);
    const [newbacklogs, setNewBacklogs] = React.useState<string[]>([]);

    const handleAccordionChange = (panel: string) => (event: React.SyntheticEvent) => {
        setExpanded((prev) =>
            Array.isArray(prev)
                ? prev.includes(panel)
                    ? prev.filter((p) => p !== panel)
                    : [...prev, panel]
                : prev === panel
                  ? []
                  : [panel]
        );
    };

    const handleCreateSprint = async () => {
        setLoading(true);
        await sprintService.createSprint(projectId);
        // console.log(sprint);
        setTimeout(() => {
            setUpdate(!update);
            setLoading(false);
        }, 1000);
        console.log(sprints);
        // setSprints((prev) => [...prev, `Sprint ${prev.length + 1}`]);
    };

    const handleCreateBacklog = () => {
        setNewBacklogs((prev) => [...prev, `Backlog ${prev.length + 1}`]);
        setShowCreateBacklogButton(false);
    };

    const [loading, setLoading] = useState(false);
    const [showCreateBacklogButton, setShowCreateBacklogButton] = React.useState(true);

    const handleRemoveBacklog = () => {
        setNewBacklogs((prev) => prev.slice(0, -1));
        setShowCreateBacklogButton(true);
    };

    const handleBacklogSubmit = async () => {
        setLoading(true);
        let issue = await issueService.createIssue({
            projectId: project._id,
            summary: issueName,
        });
        setUpdate(!update);
        setTimeout(() => {
            toast.success("Create Backlog Successful!");
            setLoading(false);
            setIssueName(""); // Clear the input after submission
        }, 2000);
    };
    React.useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            // if (event.key === "`") {
            //     setIsEpicVisible((prev) => !prev);
            // }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, []);
    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsEpicVisible(event.target.checked);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [openNotification, setOpenNotification] = useState(false);
    const handleClickOpenNotification = (sprintName: any) => {
        setOpenNotification(true);
    };
    const handleCloseNotification = () => {
        setOpenNotification(false);
    };
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        "& .MuiDialogContent-root": {
            padding: theme.spacing(2),
        },
        "& .MuiDialogActions-root": {
            padding: theme.spacing(1),
        },
    }));
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const [backlogs, setBacklogs] = useState<any[]>([]);

    const getTaskPos = (id: string) => backlogs.findIndex((backlog) => backlog.id === id);

    const handleOnDragStart = (event: any) => {
        console.log("Start Drag", event);
        setactiveDragItemId(event?.active?.id);
        setactiveDragItemData(event?.active?.data?.current);
    };

    const handleDragEnd = (event: { active: { id: string }; over: { id: string } }) => {
        const { active, over } = event;
        if (active.id === over.id) return;
        setBacklogs((backlogs) => {
            const originalPos = getTaskPos(active.id);
            const newPos = getTaskPos(over.id);
            return arrayMove(backlogs, originalPos, newPos);
        });
        console.log("setactiveDragItemId", activeDragItemId);
        console.log("setactiveDragItemData", activeDragItemData);
        setactiveDragItemId(null);
        setactiveDragItemData(null);
    };
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 3,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                distance: 3,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const [activeDragItemId, setactiveDragItemId] = useState(null);
    const [activeDragItemData, setactiveDragItemData] = useState(null);

    const dropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({
            styles: { active: { opacity: "0.5" } },
        }),
    };

    return (
        <>
            <div style={{ minHeight: "78vh" }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link className="hover-underlined" key="1" color="inherit" href="/your-work/">
                        Projects
                    </Link>
                    <Link className="hover-underlined" key="2" color="inherit" href="/sine/board/">
                        Sine_SPM
                    </Link>
                    <Typography key="3" color="text.primary">
                        Backlog
                    </Typography>
                </Breadcrumbs>
                <Typography variant="h5" gutterBottom sx={{ fontSize: "26px", fontWeight: "500" }}>
                    Backlog
                </Typography>
                <Box display="flex" alignItems="center" gap="10px">
                    <Box
                        display="flex"
                        alignItems="center"
                        className={styles.searchBox}
                        style={{ maxWidth: "20%" }}
                    >
                        <Box display="flex" alignItems="center" height={"100%"}>
                            <i className="material-symbols-outlined" style={{ top: "34%" }}>
                                search
                            </i>
                        </Box>
                        <input
                            type="text"
                            className={styles.inputSearch}
                            placeholder="Search"
                            id="searchboxColor"
                            style={{
                                border: "1px solid #a6adba",
                                marginBottom: "20px",
                                fontSize: "0.96875rem",
                                marginLeft: "8px",
                            }}
                        />
                    </Box>

                    <Box display="flex" alignItems="center" sx={{ marginBottom: "20px" }}>
                        <AvatarGroup sx={{ marginRight: "5px" }} max={4}>
                            {actors?.map((actor: any) => (
                                <Avatar
                                    src={actor?.user?.avatar}
                                    key={actor.user?._id}
                                    className="avatar-hover"
                                    sx={{ bgcolor: deepOrange[500] }}
                                >
                                    {actor?.user?.name.charAt(0)}
                                </Avatar>
                            ))}
                        </AvatarGroup>
                        {project ? (
                            <FormDialog project={project} callUpdate={callUpdate}></FormDialog>
                        ) : null}
                    </Box>
                    <FormControlLabel
                        control={<Switch checked={isEpicVisible} onChange={handleSwitchChange} />}
                        sx={{ marginLeft: "auto", marginRight: "10vh" }}
                        label="Epic"
                    ></FormControlLabel>
                </Box>

                <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
                    {isEpicVisible && (
                        <Grid item xs={12} sm={12} md={5} lg={4} xl={2.5}>
                            <Card
                                sx={{
                                    boxShadow: "none",
                                    borderRadius: "7px",
                                    mb: "25px",
                                    padding: { xs: "8px", sm: "10px", lg: "15px" },
                                }}
                                className="rmui-card"
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        mb: "25px",
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: { xs: "16px", md: "16px" },
                                            fontWeight: 500,
                                        }}
                                        className="text-black"
                                    >
                                        Epic
                                    </Typography>
                                    <Tooltip title="close" placement="right">
                                        <Button
                                            onClick={() => setIsEpicVisible(false)}
                                            sx={{
                                                minWidth: "auto",
                                                padding: "4px",
                                                color: "inherit",
                                            }}
                                        >
                                            <span className="material-symbols-outlined">close</span>
                                        </Button>
                                    </Tooltip>
                                </Box>
                                <Box sx={{ width: "100%" }}>
                                    <Stack spacing={1}>
                                        <Accordion
                                            expanded={
                                                Array.isArray(expanded) &&
                                                expanded.includes("panel1")
                                            }
                                            onChange={handleAccordionChange("panel1")}
                                            sx={{
                                                backgroundColor:
                                                    Array.isArray(expanded) &&
                                                    expanded.includes("panel1")
                                                        ? "#cce0ff"
                                                        : "inherit",
                                                "&:hover": {
                                                    backgroundColor: "#cce0ff",
                                                },
                                            }}
                                            className="epicCard"
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1-content"
                                                id="panel1-header"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                Design Login Page
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    No issues
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Start date:{" "}
                                                    <span style={{ fontWeight: "normal" }}>
                                                        None
                                                    </span>
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Due date:{" "}
                                                    <span style={{ fontWeight: "normal" }}>
                                                        None
                                                    </span>
                                                </Typography>
                                                <Button
                                                    variant="contained"
                                                    style={{ marginTop: "10px" }}
                                                >
                                                    View all details
                                                </Button>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion
                                            expanded={
                                                Array.isArray(expanded) &&
                                                expanded.includes("panel2")
                                            }
                                            onChange={handleAccordionChange("panel2")}
                                            sx={{
                                                backgroundColor:
                                                    Array.isArray(expanded) &&
                                                    expanded.includes("panel2")
                                                        ? "#cce0ff"
                                                        : "inherit",
                                                "&:hover": {
                                                    backgroundColor: "#cce0ff",
                                                },
                                            }}
                                            className="epicCard"
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel2-content"
                                                id="panel2-header"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                Design Login Page
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    No issues
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Start date:{" "}
                                                    <span style={{ fontWeight: "normal" }}>
                                                        None
                                                    </span>
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Due date:{" "}
                                                    <span style={{ fontWeight: "normal" }}>
                                                        None
                                                    </span>
                                                </Typography>
                                                <Button
                                                    variant="contained"
                                                    style={{ marginTop: "10px" }}
                                                >
                                                    View all details
                                                </Button>
                                            </AccordionDetails>
                                        </Accordion>
                                        <Accordion
                                            expanded={
                                                Array.isArray(expanded) &&
                                                expanded.includes("panel3")
                                            }
                                            onChange={handleAccordionChange("panel3")}
                                            sx={{
                                                backgroundColor:
                                                    Array.isArray(expanded) &&
                                                    expanded.includes("panel3")
                                                        ? "#cce0ff"
                                                        : "inherit",
                                                "&:hover": {
                                                    backgroundColor: "#cce0ff",
                                                },
                                            }}
                                            className="epicCard"
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel3-content"
                                                id="panel3-header"
                                                sx={{ fontWeight: "bold" }}
                                            >
                                                Design Dashboard Page
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    No issues
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Start date:{" "}
                                                    <span style={{ fontWeight: "normal" }}>
                                                        None
                                                    </span>
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Due date:{" "}
                                                    <span style={{ fontWeight: "normal" }}>
                                                        None
                                                    </span>
                                                </Typography>
                                                <Button
                                                    variant="contained"
                                                    style={{ marginTop: "10px" }}
                                                >
                                                    View all details
                                                </Button>
                                            </AccordionDetails>
                                        </Accordion>
                                    </Stack>
                                </Box>
                            </Card>
                        </Grid>
                    )}
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={isEpicVisible ? 7 : 12}
                        lg={isEpicVisible ? 8 : 12}
                        xl={isEpicVisible ? 9 : 12}
                    >
                        <Box>
                            <DndContext
                                modifiers={[restrictToVerticalAxis]}
                                sensors={sensors}
                                collisionDetection={closestCorners}
                                onDragEnd={(event) =>
                                    handleDragEnd(
                                        event as {
                                            active: { id: string };
                                            over: { id: string };
                                        }
                                    )
                                }
                            >
                                {sprints.map((sprint, index) => (
                                    <Card
                                        key={sprint._id}
                                        sx={{
                                            boxShadow: "none",
                                            borderRadius: "7px",
                                            mb: "10px",
                                            padding: { xs: "8px", sm: "10px", lg: "15px" },
                                        }}
                                        className="rmui-card"
                                    >
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="space-between"
                                        >
                                            <Box display="flex">
                                                <StartSprintDialog
                                                    project={project}
                                                    sprint={sprint}
                                                    callUpdate={callUpdate}
                                                />
                                            </Box>
                                            <Box
                                                display="flex"
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                }}
                                            >
                                                <Button
                                                    id="fade-button"
                                                    aria-controls={open ? "fade-menu" : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? "true" : undefined}
                                                    onClick={(event) => {
                                                        setAnchorEl(event.currentTarget);
                                                        setCurrentDeleteSprintId(sprint._id);
                                                    }}
                                                >
                                                    <span className="material-symbols-outlined">
                                                        more_horiz
                                                    </span>
                                                </Button>
                                                <Menu
                                                    key={sprint._id}
                                                    id={`fade-menu-${sprint._id}`}
                                                    MenuListProps={{
                                                        "aria-labelledby": "fade-button",
                                                    }}
                                                    anchorEl={anchorEl}
                                                    open={open}
                                                    onClose={handleClose}
                                                    TransitionComponent={Fade}
                                                >
                                                    <MenuItem onClick={handleClose}>
                                                        Project settings
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={async () => {
                                                            await handleClickOpenNotification(
                                                                currentDeleteSprintId
                                                            );
                                                        }}
                                                    >
                                                        Delete sprint
                                                    </MenuItem>
                                                </Menu>
                                            </Box>
                                        </Box>

                                        <Accordion
                                            expanded={
                                                Array.isArray(expanded)
                                                    ? expanded.includes(sprint.name)
                                                    : expanded === sprint.name
                                            }
                                            onChange={handleAccordionChange(sprint.name)}
                                            className="accordionItem"
                                            sx={{
                                                backgroundColor:
                                                    expanded === sprint.name
                                                        ? "#e9ebee"
                                                        : "inherit",
                                                "&:hover": {
                                                    backgroundColor: "#e9ebee",
                                                },
                                                boxShadow: "none",
                                                border: "none",
                                                padding: { xs: "0px", sm: "0px", lg: "0px" },
                                                flexGrow: 1, // Đảm bảo accordion chiếm không gian còn lại
                                            }}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel4-content"
                                                id="panel4-header"
                                                sx={{ fontWeight: "500", fontSize: "15px" }}
                                            >
                                                {sprint.name}
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <BacklogList
                                                    backlogs={sprint.issues || []}
                                                    projectId={projectId}
                                                    callUpdate={callUpdate}
                                                    sprintId={sprint._id}
                                                    workflow={workflow}
                                                    issueType={issueType}
                                                    sprints={sprints}
                                                    project={project}
                                                ></BacklogList>
                                            </AccordionDetails>
                                        </Accordion>
                                        <BootstrapDialog
                                            onClose={handleCloseNotification}
                                            aria-labelledby="customized-dialog-title"
                                            open={openNotification}
                                            className="rmu-modal"
                                        >
                                            <Box>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        background: "#ff6666",
                                                        padding: { xs: "15px 20px", md: "25px" },
                                                    }}
                                                    className="rmu-modal-header"
                                                >
                                                    <Typography
                                                        id="modal-modal-title"
                                                        variant="h6"
                                                        sx={{
                                                            fontWeight: "600",
                                                            fontSize: { xs: "16px", md: "18px" },
                                                            color: "#fff !important",
                                                        }}
                                                        className="text-black"
                                                    >
                                                        Delete sprint
                                                    </Typography>

                                                    <IconButton
                                                        aria-label="remove"
                                                        size="small"
                                                        onClick={handleCloseNotification}
                                                    >
                                                        <ClearIcon />
                                                    </IconButton>
                                                </Box>

                                                <Box className="rmu-modal-content">
                                                    <Box
                                                        component="form"
                                                        noValidate
                                                        onSubmit={handleSubmit}
                                                    >
                                                        <Box
                                                            sx={{
                                                                padding: "25px",
                                                                borderRadius: "8px",
                                                            }}
                                                            className="bg-white"
                                                        >
                                                            <Grid
                                                                container
                                                                alignItems="center"
                                                                spacing={2}
                                                            >
                                                                <Grid item xs={12} mt={1}>
                                                                    <Box
                                                                        sx={{
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            gap: "10px",
                                                                        }}
                                                                    >
                                                                        <Button
                                                                            onClick={
                                                                                handleCloseNotification
                                                                            }
                                                                            variant="outlined"
                                                                            color="error"
                                                                            sx={{
                                                                                textTransform:
                                                                                    "capitalize",
                                                                                borderRadius: "8px",
                                                                                fontWeight: "500",
                                                                                fontSize: "13px",
                                                                                padding:
                                                                                    "11px 30px",
                                                                            }}
                                                                        >
                                                                            Cancel
                                                                        </Button>

                                                                        <Button
                                                                            onClick={() =>
                                                                                handleDeleteSprint(
                                                                                    project._id
                                                                                )
                                                                            }
                                                                            type="submit"
                                                                            variant="contained"
                                                                            sx={{
                                                                                textTransform:
                                                                                    "capitalize",
                                                                                borderRadius: "8px",
                                                                                fontWeight: "500",
                                                                                fontSize: "13px",
                                                                                padding:
                                                                                    "11px 30px",
                                                                                color: "#fff !important",
                                                                            }}
                                                                        >
                                                                            Delete
                                                                        </Button>
                                                                    </Box>
                                                                </Grid>
                                                            </Grid>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </BootstrapDialog>
                                    </Card>
                                ))}
                                <Box>
                                    {loading ? (
                                        <LinearProgress
                                            sx={{
                                                width: "100%",
                                            }}
                                            color="success"
                                        />
                                    ) : (
                                        <Button
                                            variant="outlined"
                                            size="medium"
                                            sx={{ marginBottom: "10px" }}
                                            onClick={handleCreateSprint}
                                        >
                                            Create Sprint
                                        </Button>
                                    )}
                                </Box>
                                <Card
                                    sx={{
                                        boxShadow: "none",
                                        borderRadius: "7px",
                                        mb: "10px",
                                        padding: { xs: "8px", sm: "10px", lg: "15px" },
                                        backgroundColor: "#f6f7f9",
                                    }}
                                    className="backlogCard"
                                >
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontSize: { xs: "16px", md: "16px" },
                                                fontWeight: 500,
                                                flexGrow: 1,
                                            }}
                                            className="text-black"
                                        >
                                            <Accordion
                                                expanded={
                                                    Array.isArray(expanded)
                                                        ? expanded.includes("panel5")
                                                        : expanded === "panel5"
                                                }
                                                onChange={handleAccordionChange("panel5")}
                                                className="backlogItembg"
                                                sx={{
                                                    backgroundColor:
                                                        expanded === "panel5"
                                                            ? "#e9ebee"
                                                            : "inherit",
                                                    "&:hover": {
                                                        backgroundColor: "#e9ebee",
                                                    },
                                                    boxShadow: "none",
                                                    border: "none",
                                                    padding: { xs: "0px", sm: "0px", lg: "0px" },
                                                    flexGrow: 1,
                                                }}
                                            >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel5-content"
                                                    id="panel5-header"
                                                    sx={{ fontWeight: "500", fontSize: "15px" }}
                                                >
                                                    Backlog
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <BacklogList
                                                        backlogs={backlogs || []}
                                                        projectId={projectId}
                                                        callUpdate={callUpdate}
                                                        sprintId={null}
                                                        workflow={workflow}
                                                        issueType={issueType}
                                                        sprints={sprints}
                                                        project={project}
                                                    ></BacklogList>
                                                </AccordionDetails>
                                            </Accordion>
                                        </Typography>
                                    </Box>
                                </Card>
                            </DndContext>
                        </Box>
                    </Grid>
                </Grid>
            </div>
            <Chatbot />
        </>
    );
}
