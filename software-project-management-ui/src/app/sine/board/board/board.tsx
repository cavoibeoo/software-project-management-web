"use client";
import * as React from "react";
import NextLink from "next/link";
import { Box, Button, Grid } from "@mui/material";
import { useState } from "react";
import { Column, Id, Task } from "@/type";
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
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import TaskCard from "../ColumnContainer/TaskCard/TaskCard";

export default function Board() {
	const [columns, setColumns] = useState<Column[]>([]);
	const [tasks, setTasks] = useState<Task[]>([]);
	console.log(columns);

	function handleAddColumn() {
		const newColumn = {
			Id: generateId(),
			title: `Column ${columns.length + 1}`,
		};
		setColumns([...columns, newColumn]);
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
			description: "Create Sylabus program",
			daysLeft: "16 days left",
			TeamMembers: [
				{
					img: "/images/avt_quang.jpg",
				},
			],
			bgClass: "bg-primary-100",
			issueType: "Story",
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
			<Box sx={{ marginLeft: "20px" }}>
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
				<div style={{ minHeight: "78vh" }}>
					<Typography
						variant="h5"
						gutterBottom
						fontWeight="600"
						sx={{ marginTop: "20px" }}
					>
						FP Sprint 1
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
											{columns.map((column) => (
												<div
													key={column.Id}
													style={{ minWidth: "300px", minHeight: "700px" }}
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
											))}
										</SortableContext>
									</div>
								</div>
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
									{activeTask && <TaskCard task={activeTask} />}
								</DragOverlay>
								,
								{/* {createPortal(
									document.body
								)} */}
							</DndContext>
							<Button
								variant="contained"
								color="primary"
								onClick={handleAddColumn}
								sx={{ marginTop: "4vh" }}
							>
								<AddIcon />
							</Button>
						</Box>
					</div>
				</div>
			</Box>
			<Chatbot />
		</>
	);
}
