"use client";
import * as React from "react";
import NextLink from "next/link";
import {
    Box,
    Button,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Select,
    MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Column, Id, Sprint, Task } from "@/type";
import {
    DndContext,
    DragOverlay,
    DragStartEvent,
    DragEndEvent,
    useSensor,
    PointerSensor,
    useSensors,
    DragOverEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Chatbot } from "@/components/Chatbot";
import * as workflowService from "@/api-services/workflowService";
import * as projectService from "@/api-services/projectServices";
import * as sprintService from "@/api-services/sprintService";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import TaskCard from "../ColumnContainer/TaskCard/TaskCard";
import BacklogCard from "../ColumnContainer/TaskCard/BacklogCard";
import * as issueService from "@/api-services/issueServices";
import { toast } from "react-toastify";
import { useProject } from "@/app/context/ProjectContext";
import { set } from "react-hook-form";

export default function Page() {
    const { projectID, setProjectID } = useProject();
    const projectId = projectID;

    const [fetchedSprint, setFetchedSprint] = useState<Sprint[]>([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [newColumnName, setNewColumnName] = useState("");
    const [newColumnType, setNewColumnType] = useState("");
    const [workflows, setWorkflows] = useState<Column[]>([]);
    const columnId = workflows.map((column) => column._id);
    const [projectData, setProjectData] = React.useState<any>();
    const [update, setUpdate] = React.useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);

    const callUpdate = () => {
        setUpdate(!update);
    };

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 1,
            },
        })
    );

    const [activeColumn, setActiveColumn] = useState<any | null>(null);
    const [activeTask, setActiveTask] = useState<any | null>(null);
    const [activeBacklog, setActiveBacklog] = useState<any | null>(null);

    React.useEffect(() => {
        const fetchProjectData = async () => {
            let projectData = await projectService.fetchById(projectId);
            setProjectData(projectData);

            const workflow = await workflowService.fetchWorkflow(projectId);
            setWorkflows(workflow);

            const sprints = await sprintService.fetchAllSprint(projectId);
            setFetchedSprint(sprints);
        };
        fetchProjectData();
    }, [update]);

    const [sprints, setSprints] = React.useState<any[]>([]);

    useEffect(() => {
        if (fetchedSprint?.length > 0) {
            const sprintNames = fetchedSprint.map((sprint) => sprint);
            setSprints(sprintNames);
        }
    }, [fetchedSprint]);

    useEffect(() => {
        if (sprints.length > 0 && !selectedSprint) {
            let startedSprint = sprints.find((sprint) => sprint.status === "started");
            setStartedSprint(startedSprint);
            setSelectedSprint(startedSprint?.name);
            setSelectedSprintId(startedSprint?._id);
        }
    }, [sprints]);

    async function handleAddColumn() {
        await workflowService.createWorkflow(projectId, newColumnName, newColumnType);
        callUpdate();
        setDialogOpen(false);
    }

    function generateId() {
        return Math.random().toString(36).substring(2, 15);
    }

    async function deleteColumn(id: string) {
        await workflowService.deleteWorkflow(projectId, id);
        callUpdate();
    }

    async function updateColumn(
        projectId: string,
        id: string,
        title: string,
        workflowType: string
    ) {
        await workflowService.updateWorkflow(projectId, id, title, workflowType);
        callUpdate();
    }

    function createTask(columnId: Id) {
        // const newTask = {
        // 	id: generateId(),
        // 	columnId,
        // 	summary: `Task ${tasks.length + 1}`,
        // 	description: "Create Sylabus program",
        // 	daysLeft: "16 days left",
        // 	TeamMembers: [
        // 		{
        // 			img: "/images/avt_quang.jpg",
        // 		},
        // 	],
        // 	bgClass: "bg-primary-100",
        // 	issueType: "Story",
        // };
        // setTasks([...tasks, newTask]);
    }

    async function createTaskCard(projectId: string, issueType: string, summary: string) {
        await issueService.createIssue({
            projectId: projectId,
            summary: summary,
            issueType: issueType,
        });
        callUpdate();
    }

    function handleDragStart(event: DragStartEvent) {
        if (event.active.data.current?.type === "column") {
            setActiveColumn(event.active.data.current.column);
            return;
        }
        if (event.active.data.current?.type === "task") {
            setActiveTask(event.active.data.current.task);
            return;
        }
        if (event.active.data.current?.type === "backlog") {
            setActiveBacklog(event.active.data.current.backlog);
            return;
        }
    }

    function handleDragEnd(event: DragEndEvent) {
        setActiveColumn(null);
        setActiveTask(null);
        setActiveBacklog(null);
        const { active, over } = event;
        if (!over) return;
        const activeColumnId = active.id;
        const overColumnId = over.id;
        if (activeColumnId === overColumnId) return;
    }
    function handleDragOver(event: DragOverEvent) {
        const { active, over } = event;
        if (!over) return;

        const activeColumnId = active.id;
        const overColumnId = over.id;

        if (activeColumnId === overColumnId) return;

        const isActiveTask = active.data.current?.type === "task";
        const isOverTask = over.data.current?.type === "task";

        if (!isActiveTask) return;

        // Dragging a task over another task
        if (isActiveTask && isOverTask) {
            setTasks((tasks) => {
                const activeTaskIndex = tasks.findIndex((task) => task.id === active.id);
                const overTaskIndex = tasks.findIndex((task) => task.id === over.id);

                tasks[activeTaskIndex].columnId = tasks[overTaskIndex].columnId;

                return arrayMove(tasks, activeTaskIndex, overTaskIndex);
            });
        }

        const isOverAColumn = over.data.current?.type === "column";
        if (isActiveTask && isOverAColumn) {
            setTasks((tasks) => {
                const activeTaskIndex = tasks.findIndex((task) => task.id === activeColumnId);
                tasks[activeTaskIndex].columnId = overColumnId;

                return arrayMove(tasks, activeTaskIndex, activeTaskIndex);
            });
        }
    }

    const [selectedSprint, setSelectedSprint] = useState<any>(sprints.length > 0 ? sprints[0] : "");
    const [selectedSprintId, setSelectedSprintId] = useState<any>();
    const [startedSprint, setStartedSprint] = useState<any>();

    return (
        <>
            <Box sx={{ marginLeft: "20px" }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link className="hover-underlined" key="1" color="inherit" href="/your-work/">
                        Projects
                    </Link>
                    <Link className="hover-underlined" key="2" color="inherit" href="/sine/board/">
                        {projectData?.name}
                    </Link>
                    <Typography key="3" color="text.primary">
                        Kanban Board
                    </Typography>
                </Breadcrumbs>
                <div style={{ minHeight: "78vh" }}>
                    {sprints.some((sprint) => sprint.status === "started") ? null : (
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            style={{ marginTop: "20px" }}
                        >
                            No sprint has started yet!
                        </Typography>
                    )}
                    <Box>
                        <Typography
                            variant="h5"
                            gutterBottom
                            fontWeight="600"
                            sx={{
                                marginTop: "20px",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Select
                                value={selectedSprint}
                                style={{ marginTop: "20px" }}
                                onChange={(e) => {
                                    const newSelectedSprint = e.target.value;
                                    setSelectedSprint(newSelectedSprint);
                                    const sprint = sprints.find(
                                        (sprint) => sprint.name === newSelectedSprint
                                    );
                                    if (sprint) {
                                        setSelectedSprintId(sprint._id);
                                    }
                                }}
                                displayEmpty
                            >
                                {sprints.map((sprint) =>
                                    sprint?.status == "started" ? (
                                        <MenuItem key={sprint.id} value={sprint.name}>
                                            {sprint.name}
                                        </MenuItem>
                                    ) : null
                                )}
                            </Select>
                        </Typography>

                        <Box
                            style={{
                                margin: "auto",
                                display: "flex",
                                alignItems: "center",
                                overflowX: "auto",
                                overflowY: "hidden",
                                width: "100%",
                                paddingLeft: "40px",
                                paddingRight: "40px",
                            }}
                        >
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="flex-start"
                                gap="10px"
                            >
                                <DndContext
                                    sensors={sensors}
                                    onDragStart={handleDragStart}
                                    onDragEnd={handleDragEnd}
                                    onDragOver={handleDragOver}
                                >
                                    <div className="w-[350px] min-w-[350px]">
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "5vh",
                                                marginTop: "3vh",
                                            }}
                                        >
                                            <SortableContext items={columnId}>
                                                {workflows.map((column) => (
                                                    <div
                                                        key={column._id}
                                                        style={{
                                                            minWidth: "300px",
                                                            minHeight: "700px",
                                                        }}
                                                    >
                                                        <ColumnContainer
                                                            workflow={workflows}
                                                            callUpdate={callUpdate}
                                                            projectId={projectId}
                                                            project={projectData}
                                                            column={column}
                                                            selectedSprint={selectedSprintId}
                                                            backlogs={
                                                                sprints.find(
                                                                    (sprint) =>
                                                                        sprint.name ===
                                                                        selectedSprint
                                                                )?.issues || []
                                                            }
                                                            deleteColumn={() =>
                                                                deleteColumn(column._id)
                                                            }
                                                            updateColumn={updateColumn}
                                                            createTask={createTask}
                                                            tasks={tasks.filter(
                                                                (task) =>
                                                                    task.columnId === column._id
                                                            )}
                                                        />
                                                    </div>
                                                ))}
                                            </SortableContext>
                                        </div>
                                    </div>
                                    {createPortal(
                                        <DragOverlay>
                                            {activeColumn && (
                                                <ColumnContainer
                                                    workflow={workflows}
                                                    project={projectData}
                                                    callUpdate={callUpdate}
                                                    projectId={projectId}
                                                    selectedSprint={selectedSprint}
                                                    column={activeColumn}
                                                    backlogs={
                                                        sprints.find(
                                                            (sprint) =>
                                                                sprint.name === selectedSprint
                                                        )?.issues || []
                                                    }
                                                    deleteColumn={() =>
                                                        deleteColumn(activeColumn._id)
                                                    }
                                                    updateColumn={updateColumn}
                                                    createTask={createTask}
                                                    tasks={tasks.filter(
                                                        (task) => task.columnId === activeColumn.Id
                                                    )}
                                                />
                                            )}
                                            {activeTask && (
                                                <TaskCard
                                                    task={activeTask}
                                                    project={projectData}
                                                    callUpdate={callUpdate}
                                                />
                                            )}
                                            {activeBacklog && (
                                                <BacklogCard
                                                    workflow={workflows}
                                                    backlog={activeBacklog}
                                                    project={projectData}
                                                    callUpdate={callUpdate}
                                                />
                                            )}
                                        </DragOverlay>,
                                        document.body
                                    )}
                                </DndContext>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setDialogOpen(true)}
                                    sx={{ marginTop: "4vh" }}
                                >
                                    <AddIcon />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </div>
            </Box>
            <Chatbot />

            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Add New Column</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Column Name"
                        type="text"
                        fullWidth
                        value={newColumnName}
                        onChange={(e) => setNewColumnName(e.target.value)}
                    />
                    <Select
                        fullWidth
                        value={newColumnType}
                        onChange={(e) => setNewColumnType(e.target.value)}
                        displayEmpty
                    >
                        <MenuItem value="" disabled>
                            Select Column Type
                        </MenuItem>
                        <MenuItem value="Todo">Todo</MenuItem>
                        <MenuItem value="Progress">In Progress</MenuItem>
                        <MenuItem value="Done">Done</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDialogOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleAddColumn} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
