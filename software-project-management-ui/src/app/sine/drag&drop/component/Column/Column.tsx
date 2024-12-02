import { Task } from "../Tasks/Task";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export const Column: React.FC<{ tasks: { id: string; title: string }[] }> = ({
	tasks,
}) => {
	return (
		<div
			style={{
				backgroundColor: "#f2f2f3",
				borderRadius: "5px",
				padding: "15px",
				width: "89%",
				maxWidth: "seepx",
				display: "flex",
				flexDirection: "column",
				gap: "15px",
			}}
		>
			<SortableContext items={tasks} strategy={verticalListSortingStrategy}>
				{tasks.map((task) => (
					<Task key={task.id} id={task.id} title={task.title}></Task>
				))}
			</SortableContext>
		</div>
	);
};
