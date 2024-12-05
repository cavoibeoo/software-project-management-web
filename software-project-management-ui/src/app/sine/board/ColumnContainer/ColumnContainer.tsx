"use client";

import { Column, Id, Issue, Task } from "@/type";
import { Box, Card } from "@mui/material";

import React, { useState, FormEvent, useMemo, useEffect, useRef } from "react";
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
import TaskCard from "./TaskCard/TaskCard";
import DeleteColumnDialog from "../Components/Dialog/DeleteColumnDialog";
import BacklogCard from "./TaskCard/BacklogCard";
import * as issueTypeService from "@/api-services/issueTypeService";
import { toast } from "react-toastify";
import * as issueService from "@/api-services/issueServices";

export default function ColumnContainer(props: {
	workflow: any;
	callUpdate: () => void;
	selectedSprint: any;
	projectId: string;
	column: Column;
	backlogs: any[];
	tasks: Task[];
	project: any;
	deleteColumn: (id: Id) => void;

	updateColumn: (
		projectId: string,
		id: string,
		description: string,
		workflowType: string
	) => void;
	createTask: (columnId: Id) => void;
}) {
	const {
		column,
		callUpdate,
		selectedSprint,
		tasks,
		backlogs,
		deleteColumn,
		project,
		updateColumn,
		workflow,
		createTask,
		projectId,
	} = props;
	// const { setNodeRef } = useDroppable({ id: "todo" });

	// Dropdown
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const [issueName, setIssueName] = useState("");
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

	const [columnName, setColumnName] = useState(column.name);

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
		id: column._id,
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
						minHeight: "400px",
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
		deleteColumn(column._id);
	}

	const [issueTypeValue, setIssueTypeValue] = useState<string>("Task");

	const handleIssueTypeValueChange = (event: SelectChangeEvent) => {
		setIssueTypeValue(event.target.value as string);
	};

	const [issueType, setIssueType] = useState<any[]>([]);

	const [update, setUpdate] = useState(false);

	useEffect(() => {
		const fetchAPI = async () => {
			const getIssueType = await issueTypeService.fetchIssueType(projectId);
			setIssueType(getIssueType);
		};
		fetchAPI();
	}, [update]);

	const issueNameRef = useRef("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		issueNameRef.current = e.target.value;
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			console.log("projectId", projectId);
			console.log("issueNameRef.current", issueNameRef.current);
			console.log("selectedSprint", selectedSprint);
			console.log("column.name", column.name);
			console.log("issueTypeValue", issueTypeValue);

			let issue = await issueService.createIssue({
				projectId: projectId,
				summary: issueNameRef.current,
				sprint: selectedSprint,
				workflow: column.name,
				issueType: issueTypeValue,
			});

			if (!issue.error) {
				callUpdate();
			}
		} catch (error) {
			console.log("error", error);
			toast.error("Failed to create backlog!");
		} finally {
			setOpenModal(false);
		}
	};
	return (
		<>
			<Card
				ref={setNodeRef}
				style={style}
				sx={{
					boxShadow: "none",
					borderRadius: "7px",
					mb: "25px",
					padding: { xs: "18px", sm: "20px", lg: "25px" },
					maxWidth: "350px",
					backgroundColor:
						column.workflowType === "Todo"
							? "#ededed"
							: column.workflowType === "Progress"
								? "#ffc05e40"
								: column.workflowType === "Done"
									? "#00c49f40"
									: "#ece8ff",
				}}
				className="rmui-card"
			>
				<Box
					{...attributes}
					{...listeners}
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						mb: "15px",
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
						{!editMode && column.name}
						{editMode && (
							<input
								style={{
									backgroundColor: "#070b13",
									borderWidth: "1px",
									borderRadius: "4px",
									padding: "6px 0px 6px 8px",
									outline: "none",
									borderColor: "rgb(5, 245, 245)",
									borderStyle: "solid",
									color: "#fff",
									fontSize: "18px",
									fontWeight: 700,
									width: "100%",
								}}
								value={columnName}
								onChange={(e: any) => setColumnName(e.target.value)}
								autoFocus
								onBlur={() => setEditMode(false)}
								onKeyDown={(e: any) => {
									if (e.key !== "Enter") return;
									updateColumn(
										projectId,
										column._id,
										columnName,
										column.workflowType
									);
									setEditMode(false);
								}}
							/>
						)}
					</Typography>

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
								Delete Column
							</MenuItem>
						</Menu>
					</Box>
				</Box>
				<div>
					<Box>
						<SortableContext items={tasksIds}>
							{tasks.map((task) => (
								<TaskCard
									key={task.id}
									task={task}
									project={project}
									callUpdate={callUpdate}
								/>
							))}
						</SortableContext>
						{backlogs
							.filter((backlog) => backlog.workflow === column.name)
							.map((backlog) => (
								<BacklogCard
									key={backlog._id}
									backlog={backlog}
									project={project}
									callUpdate={callUpdate}
									workflow={workflow}
								/>
							))}
					</Box>
				</div>
				<Box>
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
				</Box>
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
										defaultValue={issueNameRef.current}
										onChange={handleInputChange}
										autoFocus
										InputProps={{
											style: { borderRadius: 8 },
										}}
										InputLabelProps={{
											shrink: true,
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
										Issue Type*
									</Typography>

									<Select
										fullWidth
										required
										id="issueType"
										placeholder="Select Issue Type"
										value={issueTypeValue}
										onChange={handleIssueTypeValueChange}
										displayEmpty
										inputProps={{ "aria-label": "Select Issue Type" }}
										sx={{
											borderRadius: 8,
											"& .MuiSelect-select": {
												display: "flex",
												alignItems: "center",
												alignContent: "center",
											},
										}}
									>
										<MenuItem value="" disabled>
											Select Issue Type
										</MenuItem>
										{issueType?.map((type: any, index: any) => (
											<MenuItem key={index} value={type.name}>
												<div
													style={{
														paddingTop: "5px",
														display: "flex",
														justifyContent: "center",
													}}
												>
													<img
														width="20px"
														height="20px"
														style={{
															marginRight: "5px",
														}}
														src={type.img}
														alt="Issue Logo"
														className="icon_issue"
													/>
													{type.name}
												</div>
											</MenuItem>
										))}
									</Select>
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
					className="rmu-modal-header"
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
						Confirm Delete
					</Typography>

					<IconButton
						aria-label="remove"
						size="small"
						onClick={handleCloseDeleteColumnModal}
					>
						<ClearIcon />
					</IconButton>
				</Box>

				<Box className="rmu-modal-content">
					<Typography sx={{ padding: "20px" }}>
						Are you sure you want to delete this column?
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
							Delete
						</Button>
					</Box>
				</Box>
			</BootstrapDialog>
			{/* -----------------------Delete Task Dialog-------------------------*/}
		</>
	);
}
