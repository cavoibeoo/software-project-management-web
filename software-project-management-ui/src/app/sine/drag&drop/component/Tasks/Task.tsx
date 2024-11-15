import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./Task.css";

export const Task: React.FC<{ id: string; title: string }> = ({
	id,
	title,
}) => {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	return (
		<>
			<div
				ref={setNodeRef}
				{...attributes}
				{...listeners}
				style={style}
				className="task"
			>
				{title}
				<input type="checkbox" className="checkbox" />
				{title}
				<input type="checkbox" className="checkbox" />
				{title}
			</div>
		</>
	);
};
