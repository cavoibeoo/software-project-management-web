import { Task } from "@/type";
import { Box, Button, DialogTitle, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { deepPurple } from "@mui/material/colors";
import AssignMemberDialog from "@/app/sine/backlog/Dialogs/AssignMemberDialog/AssignMemberDialog";
type BacklogCardProps = {
	backlog: any;
	project: any;
	callUpdate: () => void;
	workflow: any;
};

const BacklogCard = ({
	backlog,
	project,
	callUpdate,
	workflow,
}: BacklogCardProps) => {
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
		id: backlog.id,
		data: {
			type: "backlog",
			backlog,
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
						className={`bg-purple-100 ${backlog.bgClass} task-card`}
						style={{
							borderWidth: "2px",
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
								<IssueDetailDialog
									issue={backlog}
									projectId={project.id}
									workflows={workflow}
									issueType={project.issueTypes}
									callUpdate={callUpdate}
									sprints={project.sprints}
									project={project}
								/>
							</Typography>

							<EditIssueDialog description={backlog.description} />
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
									src={`/images/issueType/${backlog.issueType.name}.svg`}
									alt={backlog.issueType.name}
									width={25}
									height={25}
									style={{ marginRight: 8 }}
								/>
								<Typography>{backlog.key}</Typography>
							</Box>

							<AssignMemberDialog
								actors={project.actors}
								issue={backlog}
								callUpdate={callUpdate}
							/>
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
						className={`bg-purple-100 ${backlog.bgClass} task-card`}
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
								{backlog.summary}
							</Typography>
							<EditIssueDialog description={backlog.description} />
						</Box>

						<Typography mb="15px">{backlog.description}</Typography>

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
							<Button>
								<Avatar
									src={backlog.assignee?.avatar}
									sx={{ bgcolor: deepPurple[500] }}
									// onClick={handleClickOpen}
								></Avatar>
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default BacklogCard;
