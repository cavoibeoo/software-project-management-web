"use client";
import * as React from "react";
import {
	closestCorners,
	DndContext,
	DragOverlay,
	KeyboardSensor,
	PointerSensor,
	TouchSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { use, useState } from "react";
import { Column } from "./component/Column/Column";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

export default function ExampleDND() {
	const [tasks, setTasks] = useState([
		{ id: "1", title: "Add tests to homepage'" },
		{ id: "2", title: "Fix styling in about section'" },
		{ id: "3", title: "Learn how to center a div" },
	]);

	const getTaskPos = (id: string) => tasks.findIndex((task) => task.id === id);

	const handleDragEnd = (event: {
		active: { id: string };
		over: { id: string };
	}) => {
		const { active, over } = event;
		if (active.id === over.id) return;
		setTasks((tasks) => {
			const originalPos = getTaskPos(active.id);
			const newPos = getTaskPos(over.id);
			return arrayMove(tasks, originalPos, newPos);
		});
	};
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	return (
		<div className="App">
			<DndContext
				sensors={sensors}
				collisionDetection={closestCorners}
				onDragEnd={(event) =>
					handleDragEnd(
						event as { active: { id: string }; over: { id: string } }
					)
				}
			>
				<Column tasks={tasks}></Column>
			</DndContext>
		</div>
	);
}
