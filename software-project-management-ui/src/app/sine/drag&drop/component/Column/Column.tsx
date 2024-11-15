import { Task } from "../Tasks/Task";
import "./Column.css";
import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export const Column: React.FC<{ tasks: { id: string; title: string }[] }> = ({
	tasks,
}) => {
	return (
		<div className="column">
			<SortableContext items={tasks} strategy={verticalListSortingStrategy}>
				{tasks.map((task) => (
					<Task key={task.id} id={task.id} title={task.title}></Task>
				))}
			</SortableContext>
		</div>
	);
};
