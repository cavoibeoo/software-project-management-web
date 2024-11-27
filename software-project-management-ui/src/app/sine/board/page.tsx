"use client";
import * as React from "react";
import NextLink from "next/link";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import { Column, Id, Task } from "@/type";
import ColumnContainer from "./ColumnContainer/ColumnContainer";
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
import TaskCard from "./ColumnContainer/TaskCard/TaskCard";

export default function Page() {
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
		<div style={{ minHeight: "78vh" }}>
			<div className="breadcrumb-card">
				<h5>Kanban Board</h5>

				<ul className="breadcrumb">
					<li>
						<NextLink href="/your-work/">
							<i className="material-symbols-outlined">home</i>
							Projects
						</NextLink>
					</li>
					<li>
						<NextLink href="/sine/board/">
							<i className="material-symbols-outlined">dataset</i>
							Sine_SPM
						</NextLink>
					</li>
					<li>Kanban Board</li>
				</ul>
			</div>
			<Button variant="contained" color="primary" onClick={handleAddColumn}>
				Add Task
			</Button>
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
				<DndContext
					sensors={sensors}
					onDragStart={handleDragStart}
					onDragEnd={handleDragEnd}
					onDragOver={handleDragOver}
				>
					<div className="w-[350px] min-w-[350px]">
						<div style={{ display: "flex", gap: "5vh", marginTop: "3vh" }}>
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
							{activeTask && <TaskCard task={activeTask} />}
						</DragOverlay>,
						document.body
					)}
				</DndContext>
			</div>
			{/* <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
				<Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
					<ToDo />
				</Grid>

				<Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
					<Doing />
				</Grid>

				<Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
					<Done />
				</Grid>
			</Grid> */}
		</div>
	);
}
