import { Task } from "@/type";
import { Box, Button, DialogTitle, styled } from "@mui/material";
import React, { useState } from "react";
import {
	Typography,
	IconButton,
	AvatarGroup,
	Avatar,
	FormControl,
	InputLabel,
	TextField,
	Dialog,
	OutlinedInput,
	Checkbox,
	ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import PropTypes from "prop-types";
import IssueDetailDialog from "@/app/sine/backlog/Dialogs/IssueDetailDialog/IssueDetailDialog";
import EditIssueDialog from "../../Components/Dialog/EditIssueDialog/EditIssueDialog";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
type TaskCardProps = {
	task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
	// Modal for Delete Confirmation
	const [openDeleteTaskModal, setOpenDeleteTaskModal] = useState(false);
	const handleClickOpenDeleteTaskModal = () => {
		setOpenDeleteTaskModal(true);
	};
	const handleCloseDeleteTaskModal = () => {
		setOpenDeleteTaskModal(false);
	};

	// Modal
	interface BootstrapDialogTitleProps {
		children?: React.ReactNode;
		onClose: () => void;
	}

	const BootstrapDialog = styled(Dialog)(({ theme }) => ({
		"& .MuiDialogContent-root": {
			padding: theme.spacing(2),
		},
		"& .MuiDialogActions-root": {
			padding: theme.spacing(1),
		},
	}));

	function BootstrapDialogTitle(props: BootstrapDialogTitleProps) {
		const { children, onClose, ...other } = props;

		return (
			<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
				{children}
				{onClose ? (
					<IconButton
						aria-label="close"
						onClick={onClose}
						sx={{
							position: "absolute",
							right: 8,
							top: 8,
							color: (theme) => theme.palette.grey[500],
						}}
					>
						<CloseIcon />
					</IconButton>
				) : null}
			</DialogTitle>
		);
	}

	BootstrapDialogTitle.propTypes = {
		children: PropTypes.node,
		onClose: PropTypes.func.isRequired,
	};
	// End Modal

	const {
		attributes,
		listeners,
		setNodeRef,
		transition,
		transform,
		isDragging,
	} = useSortable({
		id: task.id,
		data: {
			type: "task",
			task,
		},
	});

	const style = {
		transition,
		transform: CSS.Translate.toString(transform),
	};

	if (isDragging) {
		return (
			<Box ref={setNodeRef} style={style}>
				<Box>
					<Box
						className={`bg-purple-100 ${task.bgClass} task-card`}
						style={{
							opacity: 0.3,
							borderWidth: "2px",
							borderColor: "rgb(5, 245, 245)",
							borderStyle: "solid",
						}}
						sx={{
							padding: "25px",
							borderRadius: "7px",
							marginBottom: "25px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "17px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="15px"
								className="text-black"
							>
								{task.description}
							</Typography>
							<EditIssueDialog description={task.description} />
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mt: "23px",
							}}
						>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<img
									src="/images/issueType/Task.svg"
									alt="Task"
									width={25}
									height={25}
									style={{ marginRight: 8 }}
								/>
								<Typography>WIH-1</Typography>
							</Box>

							<AvatarGroup
								max={3}
								sx={{
									"& .MuiAvatar-root": {
										border: "2px solid #fff",
										backgroundColor: "#f0f0f0",
										color: "#000",
										width: "28px",
										height: "28px",
									},
									"& .MuiAvatarGroup-avatar": {
										backgroundColor: "#605dff", // Custom background color for the total avatar
										color: "#fff", // Custom color for the text
										fontSize: "10px",
									},
								}}
							>
								{task.TeamMembers.map((member, i) => (
									<Avatar key={i} alt="Remy Sharp" src={member.img} />
								))}
							</AvatarGroup>
						</Box>
					</Box>
				</Box>
			</Box>
		);
	}

	return (
		<>
			<Box ref={setNodeRef} style={style} {...listeners} {...attributes}>
				<Box>
					<Box
						className={`bg-purple-100 ${task.bgClass} task-card`}
						sx={{
							padding: "25px",
							borderRadius: "7px",
							marginBottom: "25px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "17px",
							}}
						>
							<Typography
								variant="h4"
								fontWeight={600}
								fontSize="15px"
								className="text-black"
							>
								{task.summary}
							</Typography>
							<EditIssueDialog description={task.description} />
						</Box>

						<Typography mb="15px">{task.description}</Typography>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mt: "23px",
							}}
						>
							<Box sx={{ display: "flex", alignItems: "center" }}>
								<img
									src="/images/issueType/Task.svg"
									alt="Task"
									width={25}
									height={25}
									style={{ marginRight: 8 }}
								/>
								<Typography>WIH-1</Typography>
							</Box>

							<AvatarGroup
								max={3}
								sx={{
									"& .MuiAvatar-root": {
										border: "2px solid #fff",
										backgroundColor: "#f0f0f0",
										color: "#000",
										width: "28px",
										height: "28px",
									},
									"& .MuiAvatarGroup-avatar": {
										backgroundColor: "#605dff", // Custom background color for the total avatar
										color: "#fff", // Custom color for the text
										fontSize: "10px",
									},
								}}
							>
								{task.TeamMembers.map((member, i) => (
									<Avatar key={i} alt="Remy Sharp" src={member.img} />
								))}
							</AvatarGroup>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default TaskCard;
