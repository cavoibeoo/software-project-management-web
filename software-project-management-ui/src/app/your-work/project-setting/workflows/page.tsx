"use client";
import * as React from "react";
import NextLink from "next/link";
import {
	Box,
	Button,
	MenuItem,
	Select,
	DialogTitle,
	DialogContent,
	DialogActions,
	TextField,
	Dialog,
	Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ColumnWorkflow, Id, Task } from "@/type";
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
import ColumnContainer from "./ColumnContainer/ColumnContainer";
import WorkFlowCard from "./WorkFlowCard/WorkFlowCard";
import "./ColumnContainer/Column.css";

import * as workflowService from "@/api-services/workflowService";
import { useProject } from "@/app/context/ProjectContext";


export default function Page() {
	const {projectID, setProjectID} = useProject()
	const projectId = projectID;

	const [update, setUpdate] = useState(false);
	const [workflow, setWorkflow] = useState<any>();

	const callUpdate = () => {
		setUpdate(!update);
	};

	useEffect(() => {
		const fetchAPI = async () => {
			const workflow = await workflowService.fetchWorkflow(projectId);
			setWorkflow(workflow);
			console.log(workflow);

			// Convert API data to ColumnWorkflow format
			const apiColumns: ColumnWorkflow[] = workflow.map((item: any) => ({
				Id: item._id,
				title: item.name,
			}));

			setColumns(apiColumns);
		};
		fetchAPI();
	}, [update]);

	const [columns, setColumns] = useState<ColumnWorkflow[]>([
		{
			Id: generateId(),
			title: "To Do",
		},
		{
			Id: generateId(),
			title: "In Progress",
		},
		{
			Id: generateId(),
			title: "Done",
		},
	]);
	const [tasks, setTasks] = useState<Task[]>([]);
	// function handleAddColumn() {
	// 	const newColumn = {
	// 		Id: generateId(),
	// 		title: `Column ${columns.length + 1}`,
	// 	};
	// 	setColumns([...columns, newColumn]);
	// }

	const [dialogOpen, setDialogOpen] = useState(false);
	const [newColumnName, setNewColumnName] = useState("");
	const [newColumnType, setNewColumnType] = useState("");

	async function handleAddColumn() {
		await workflowService.createWorkflow(
			projectId,
			newColumnName,
			newColumnType
		);
		callUpdate();
		setDialogOpen(false);
	}

	function generateId() {
		return Math.random().toString(36).substring(2, 15);
	}
	const columnId = columns.map((column) => column.Id);

	function deleteColumn(id: Id) {
		const filteredColumns = columns.filter((column) => column.Id !== id);
		setColumns(filteredColumns);

		const newTasks = tasks.filter((task) => task.columnId !== id);
		setTasks(newTasks);
	}

	function updateColumn(id: Id, title: string) {
		const newColumns = columns.map((column) =>
			column.Id !== id ? column : { ...column, title }
		);
		setColumns(newColumns);
	}

	function createTask(columnId: Id) {
		const newTask = {
			id: generateId(),
			columnId,
			summary: `Task ${tasks.length + 1}`,
			description:
				"A brief description of the project, its objectives, and its importance to the organization.",
			daysLeft: "16 days left",
			TeamMembers: [
				{
					img: "/images/users/user16.jpg",
				},
				{
					img: "/images/users/user17.jpg",
				},
			],
			bgClass: "bg-primary-100",
		};
		setTasks([...tasks, newTask]);
	}

	function handleDragStart(event: DragStartEvent) {
		console.log(event);
		if (event.active.data.current?.type === "column") {
			setActiveColumn(event.active.data.current.column);
			return;
		}
		if (event.active.data.current?.type === "task") {
			setActiveTask(event.active.data.current.task);
			return;
		}
	}

	function handleDragEnd(event: DragEndEvent) {
		setActiveColumn(null);
		setActiveTask(null);

		const { active, over } = event;
		if (!over) return;
		const activeColumnId = active.id;
		const overColumnId = over.id;
		if (activeColumnId === overColumnId) return;

		setColumns((columns) => {
			const activeColumnIndex = columns.findIndex(
				(column) => column.Id === activeColumnId
			);
			const overColumnIndex = columns.findIndex(
				(column) => column.Id === overColumnId
			);
			return arrayMove(columns, activeColumnIndex, overColumnIndex);
		});
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
				const activeTaskIndex = tasks.findIndex(
					(task) => task.id === active.id
				);
				const overTaskIndex = tasks.findIndex((task) => task.id === over.id);

				tasks[activeTaskIndex].columnId = tasks[overTaskIndex].columnId;

				return arrayMove(tasks, activeTaskIndex, overTaskIndex);
			});
		}

		const isOverAColumn = over.data.current?.type === "column";
		if (isActiveTask && isOverAColumn) {
			setTasks((tasks) => {
				const activeTaskIndex = tasks.findIndex(
					(task) => task.id === activeColumnId
				);
				tasks[activeTaskIndex].columnId = overColumnId;

				return arrayMove(tasks, activeTaskIndex, activeTaskIndex);
			});
		}
	}

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 1,
			},
		})
	);

	const [activeColumn, setActiveColumn] = useState<any | null>(null);
	const [activeTask, setActiveTask] = useState<any | null>(null);
	return (
		<>
			<Box sx={{ marginLeft: "80px", marginTop: "7px" }}>
				<Breadcrumbs separator="›" aria-label="breadcrumb">
					<Link
						className="hover-underlined"
						key="1"
						color="inherit"
						href="/your-work/"
					>
						Projects
					</Link>
					<Link
						className="hover-underlined"
						key="2"
						color="inherit"
						href="/sine/board/"
					>
						Sine_SPM
					</Link>
					<Typography key="3" color="text.primary">
						Kanban Board
					</Typography>
				</Breadcrumbs>
				<div
					style={{ minHeight: "78vh", marginLeft: "5px", marginTop: "10px" }}
				>
					<Typography
						variant="h5"
						gutterBottom
						fontWeight="600"
						sx={{ marginTop: "20px" }}
					>
						Columns and statuses
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Use columns and statuses to define how work progresses on your
						board. Store statuses in the left panel to hide their associated
						issues from the board and backlog.
					</Typography>

					<div
						style={{
							margin: "auto",
							display: "flex",
							alignItems: "center",
							overflowX: "auto",
							overflowY: "hidden",
							width: "100%",
							paddingLeft: "40px",
							paddingRight: "40px",
							marginTop: "80px",
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
										style={{ display: "flex", gap: "5vh", marginTop: "3vh" }}
									>
										<SortableContext items={columnId}>
											{columns.map((column) => {
												const columnClass =
													column.title === "To Do"
														? "column-todo"
														: column.title === "In Progress"
															? "column-in-progress"
															: column.title === "Done"
																? "column-done"
																: "";

												return (
													<div
														key={column.Id}
														className={`column ${columnClass}`}
													>
														<ColumnContainer
															column={column}
															deleteColumn={deleteColumn}
															updateColumn={updateColumn}
															createTask={createTask}
															tasks={tasks.filter(
																(task) => task.columnId === column.Id
															)}
														/>
													</div>
												);
											})}
										</SortableContext>
									</div>
								</div>
								{createPortal(
									<DragOverlay>
										{activeColumn && (
											<ColumnContainer
												column={activeColumn}
												deleteColumn={deleteColumn}
												updateColumn={updateColumn}
												createTask={createTask}
												tasks={tasks.filter(
													(task) => task.columnId === activeColumn.Id
												)}
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
					</div>
				</div>
			</Box>
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
