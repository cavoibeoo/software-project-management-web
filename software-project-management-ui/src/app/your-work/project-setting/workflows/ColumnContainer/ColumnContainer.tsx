"use client";

import { Column, Id, Task } from "@/type";
import { Box, Card, Tooltip } from "@mui/material";

import React, { useState, FormEvent, useMemo } from "react";
import {
	Typography,
	Menu,
	MenuItem,
	IconButton,
	AvatarGroup,
	Avatar,
	Button,
	DialogTitle,
	Grid,
	FormControl,
	InputLabel,
	TextField,
	Dialog,
	OutlinedInput,
	Checkbox,
	ListItemText,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import WorkFlowCard from "../WorkFlowCard/WorkFlowCard";

export default function ColumnContainer(props: {
	column: Column;
	tasks: Task[];
	deleteColumn: (id: Id) => void;
	updateColumn: (id: Id, title: string) => void;
	createTask: (columnId: Id) => void;
}) {
	const { column, tasks, deleteColumn, updateColumn, createTask } = props;

	// Dropdown
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	// Modal
	const [openModal, setOpenModal] = useState(false);
	const handleClickOpenModal = () => {
		setOpenModal(true);
	};
	const handleCloseModal = () => {
		setOpenModal(false);
	};
	const handleCreateTask = (columnId: Id) => {
		createTask(columnId);
		setOpenModal(false);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setOpenModal(false);
		handleCreateTask(column.Id);
	};

	// Textarea
	const blue = {
		100: "#DAECFF",
		200: "#b6daff",
		400: "#3399FF",
		500: "#007FFF",
		600: "#0072E5",
		900: "#605DFF",
	};

	const grey = {
		50: "#F3F6F9",
		100: "#E5EAF2",
		200: "#DAE2ED",
		300: "#C7D0DD",
		400: "#B0B8C4",
		500: "#9DA8B7",
		600: "#6B7A90",
		700: "#434D5B",
		800: "#303740",
		900: "#1C2025",
	};

	const Textarea = styled(BaseTextareaAutosize)(
		({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 7px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
		border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
		box-shadow: none;

		&:hover {
			border-color: ${blue[900]};
		}

		&:focus {
			border-color: ${blue[900]};
			box-shadow: none;
		}

    // firefox
		&:focus-visible {
			outline: 0;
		}
	`
	);

	// Select team members
	const [teamMembersName, setTeamMembersName] = useState<string[]>([]);

	const handleChange = (
		event: SelectChangeEvent<typeof teamMembersName>,
		setNames: React.Dispatch<React.SetStateAction<string[]>>
	) => {
		const {
			target: { value },
		} = event;
		setNames(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		);
	};
	const [editMode, setEditMode] = useState(false);

	const tasksIds = useMemo(() => {
		return tasks.map((task) => task.id);
	}, [tasks]);

	const {
		attributes,
		listeners,
		setNodeRef,
		transition,
		transform,
		isDragging,
	} = useSortable({
		id: column.Id,
		data: {
			type: "column",
			column,
		},
		disabled: editMode,
	});

	const style = {
		transition,
		transform: CSS.Translate.toString(transform),
	};

	// Modal for Delete Confirmation
	const [openDeleteColumnModal, setOpenDeleteColumnModal] = useState(false);
	const handleClickOpenDeleteColumnModal = () => {
		setOpenDeleteColumnModal(true);
	};
	const handleCloseDeleteColumnModal = () => {
		setOpenDeleteColumnModal(false);
	};

	// Function to handle delete confirmation
	const handleConfirmDeleteColumn = () => {
		handleDeleteColumn();
		handleCloseDeleteColumnModal();
	};

	// Ensure all hooks are called before any return statement
	if (isDragging) {
		return (
			<div ref={setNodeRef} style={style} className="dragging">
				<Card
					sx={{
						boxShadow: "none",
						borderRadius: "7px",
						mb: "25px",
						padding: { xs: "18px", sm: "20px", lg: "25px" },
						minHeight: "90px",
					}}
					style={{
						opacity: 0.4,
						borderWidth: "2px",
						borderColor: "rgb(5, 245, 245)",
						borderStyle: "solid",
					}}
					className="rmui-card"
				></Card>
			</div>
		);
	}

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

	function handleDeleteColumn() {
		deleteColumn(column.Id);
	}

	return (
		<>
			<Card
				ref={setNodeRef}
				{...attributes}
				{...listeners}
				style={style}
				sx={{
					boxShadow: "none",
					borderRadius: "7px",
					mb: "25px",
					padding: { xs: "18px", sm: "20px", lg: "25px" },
					maxWidth: "300px",
				}}
				className="rmui-card"
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
					onClick={() => setEditMode(true)}
				>
					<Typography
						variant="h3"
						sx={{
							fontSize: { xs: "16px", md: "18px" },
							fontWeight: 700,
						}}
						className="text-black"
					>
						{!editMode && column.title}
						{editMode && (
							<input
								className="input-column-title"
								style={{
									padding: "6px 0px 6px 8px",
									outline: "none",
									fontSize: "18px",
									fontWeight: 700,
									width: "100%",
								}}
								value={column.title}
								onChange={(e) => updateColumn(column.Id, e.target.value)}
								autoFocus
								onBlur={() => setEditMode(false)}
								onKeyDown={(e) => {
									if (e.key !== "Enter") return;
									setEditMode(false);
								}}
							/>
						)}
					</Typography>
					{column.title === "To Do" ||
					column.title === "In Progress" ||
					column.title === "Done" ? (
						<>
							<Box>
								<IconButton onClick={() => {}} size="small">
									<Tooltip
										sx={{ background: "#fff", padding: "10px" }}
										title={
											<div
												style={{
													width: "300px",
													fontSize: "12px",
												}}
											>
												<p>
													These fields represent the tasks that should generally
													be in progress across most views.
												</p>
												<p>
													<strong>
														We recommend avoiding changes to them.
													</strong>
												</p>
											</div>
										}
										placement="top"
									>
										<span className="material-symbols-outlined">info</span>
									</Tooltip>
								</IconButton>
							</Box>
						</>
					) : (
						<>
							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,

										sx: {
											overflow: "visible",
											boxShadow: "0 4px 45px #0000001a",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem onClick={handleClickOpenDeleteColumnModal}>
										Remove Column
									</MenuItem>
								</Menu>
							</Box>
						</>
					)}
				</Box>
				<div>
					<Box>
						<SortableContext items={tasksIds}>
							{tasks.map((task) => (
								<WorkFlowCard key={task.id} task={task} />
							))}
						</SortableContext>
					</Box>
				</div>
				{/* <Box>
					<Button
						variant="outlined"
						color="primary"
						sx={{
							borderRadius: "7px",
							padding: "3.3px 11px",
							fontSize: "14px",
							fontWeight: "500",
							textTransform: "capitalize",
							boxShadow: "none",
							textAlign: "center",
						}}
						onClick={handleClickOpenModal}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "5px",
							}}
						>
							<i
								className="material-symbols-outlined"
								style={{ fontSize: "20px" }}
							>
								add
							</i>
							Add New Card
						</Box>
					</Button>
				</Box> */}
			</Card>

			{/* -----------------------Add New Task Dialog-------------------------*/}
			{/* <CreateCardDialog createTask={createTask} columnId={column.Id} /> */}
			<BootstrapDialog
				onClose={handleCloseModal}
				aria-labelledby="customized-dialog-title"
				open={openModal}
				className="rmu-modal"
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						background: "#f6f7f9",
						padding: { xs: "15px 20px", md: "25px" },
					}}
					className="rmu-modal-header"
				>
					<Typography
						id="modal-modal-title"
						variant="h6"
						sx={{
							fontWeight: "600",
							fontSize: { xs: "16px", md: "18px" },
						}}
						className="text-black"
					>
						Add New Task
					</Typography>

					<IconButton
						aria-label="remove"
						size="small"
						onClick={handleCloseModal}
					>
						<ClearIcon />
					</IconButton>
				</Box>

				<Box className="rmu-modal-content">
					<Box component="form" noValidate onSubmit={handleSubmit}>
						<Box
							sx={{
								padding: "25px",
								borderRadius: "8px",
							}}
							className="bg-white"
						>
							<Grid container alignItems="center" spacing={2}>
								<Grid item xs={12} md={12} lg={12}>
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										Task Name*
									</Typography>

									<TextField
										autoComplete="taskName"
										name="taskName"
										required
										fullWidth
										id="taskName"
										label="Task Name"
										autoFocus
										InputProps={{
											style: { borderRadius: 8 },
										}}
									/>
								</Grid>
								<Grid item xs={12} md={12} lg={5}>
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										Key*
									</Typography>

									<TextField
										autoComplete="taskKey"
										name="taskKey"
										required
										fullWidth
										id="taskKey"
										label="Task Key"
										autoFocus
										InputProps={{
											style: { borderRadius: 8 },
										}}
									/>
								</Grid>

								<Grid item xs={12} mt={1}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "end",
											gap: "10px",
										}}
									>
										<Button
											onClick={handleCloseModal}
											variant="outlined"
											color="error"
											sx={{
												textTransform: "capitalize",
												borderRadius: "8px",
												fontWeight: "500",
												fontSize: "13px",
												padding: "11px 30px",
											}}
										>
											Cancel
										</Button>

										<Button
											type="submit"
											variant="contained"
											sx={{
												textTransform: "capitalize",
												borderRadius: "8px",
												fontWeight: "500",
												fontSize: "13px",
												padding: "11px 30px",
												color: "#fff !important",
											}}
										>
											<AddIcon
												type="submit"
												sx={{
													position: "relative",
													top: "-2px",
												}}
												className="mr-5px"
											/>
											Create
										</Button>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Box>
			</BootstrapDialog>
			{/* -----------------------Delete Column Dialog-------------------------*/}
			{/* <DeleteColumnDialog deleteColumn={deleteColumn} columnId={column.Id} /> */}
			<BootstrapDialog
				onClose={handleCloseDeleteColumnModal}
				aria-labelledby="delete-dialog-title"
				open={openDeleteColumnModal}
				className="rmu-modal"
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						background: "#f6f7f9",
						padding: { xs: "15px 20px", md: "25px" },
					}}
					className="custom-delete-dialog-header"
				>
					<Typography
						id="delete-dialog-title"
						variant="h6"
						sx={{
							fontWeight: "600",
							fontSize: { xs: "16px", md: "18px" },
						}}
						className="text-black"
					>
						Confirm Remove "{column.title}" Column
					</Typography>

					<IconButton
						aria-label="remove"
						size="small"
						onClick={handleCloseDeleteColumnModal}
					>
						<ClearIcon />
					</IconButton>
				</Box>

				<Box className="custom-delete-dialog-content">
					<Typography sx={{ padding: "20px" }}>
						Are you sure you want to remove "{column.title}" column?
					</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: "end",
							gap: "10px",
							padding: "20px",
						}}
					>
						<Button
							onClick={handleCloseDeleteColumnModal}
							variant="outlined"
							color="error"
							sx={{
								textTransform: "capitalize",
								borderRadius: "8px",
								fontWeight: "500",
								fontSize: "13px",
								padding: "11px 30px",
							}}
						>
							Cancel
						</Button>

						<Button
							onClick={handleConfirmDeleteColumn}
							variant="contained"
							sx={{
								textTransform: "capitalize",
								borderRadius: "8px",
								fontWeight: "500",
								fontSize: "13px",
								padding: "11px 30px",
								color: "#fff !important",
							}}
						>
							Remove
						</Button>
					</Box>
				</Box>
			</BootstrapDialog>
			{/* -----------------------Delete Task Dialog-------------------------*/}
		</>
	);
}
