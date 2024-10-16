"use client";

import React, { useState, FormEvent } from "react";
import {
	Card,
	Box,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TablePagination,
	TableRow,
	Paper,
	IconButton,
	TableHead,
	Checkbox,
	InputLabel,
	MenuItem,
	FormControl,
	Dialog,
	DialogTitle,
	Grid,
	Button,
	TextField,
} from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import styles from "@/components/Apps/ToDoList/ToDoList.module.css";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

interface TablePaginationActionsProps {
	count: number;
	page: number;
	rowsPerPage: number;
	onPageChange: (
		event: React.MouseEvent<HTMLButtonElement>,
		newPage: number
	) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleBackButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, page - 1);
	};

	const handleNextButtonClick = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		onPageChange(event, page + 1);
	};

	return (
		<Box
			sx={{
				flexShrink: 0,
				display: "flex",
				gap: "10px",
				padding: "0 20px",
			}}
		>
			<IconButton
				onClick={handleBackButtonClick}
				disabled={page === 0}
				aria-label="previous page"
				sx={{
					borderRadius: "4px",
					padding: "6px",
				}}
				className="border"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowRight />
				) : (
					<KeyboardArrowLeft />
				)}
			</IconButton>

			<IconButton
				onClick={handleNextButtonClick}
				disabled={page >= Math.ceil(count / rowsPerPage) - 1}
				aria-label="next page"
				sx={{
					borderRadius: "4px",
					padding: "6px",
				}}
				className="border"
			>
				{theme.direction === "rtl" ? (
					<KeyboardArrowLeft />
				) : (
					<KeyboardArrowRight />
				)}
			</IconButton>
		</Box>
	);
}

function createData(
	id: any,
	ticketTitle: string,
	assignedTo: string,
	dueDate: string,
	priority: string,
	status: string,
	viewLink: string
) {
	return {
		id,
		ticketTitle,
		assignedTo,
		dueDate,
		priority,
		status,
		viewLink,
	};
}

const rows = [
	createData(
		"#850",
		"Network Infrastructure",
		"Oliver Clark",
		"30 Apr 2024",
		"High",
		"Finished",
		"/helpdesk/tickets/details"
	),
	createData(
		"#851",
		"Cloud Migration",
		"Ethan Baker",
		"25 Apr 2024",
		"Low",
		"Pending",
		"/helpdesk/tickets/details"
	),
	createData(
		"#852",
		"Website Revamp",
		"Sophia Carter",
		"20 Apr 2024",
		"Medium",
		"In Progress",
		"/helpdesk/tickets/details"
	),
	createData(
		"#853",
		"Mobile Application",
		"Ava Cooper",
		"15 Apr 2024",
		"High",
		"Finished",
		"/helpdesk/tickets/details"
	),
	createData(
		"#854",
		"System Deployment",
		"Isabella Evans",
		"10 Apr 2024",
		"Low",
		"Cancelled",
		"/helpdesk/tickets/details"
	),
	createData(
		"#855",
		"Network Infrastructure",
		"Oliver Clark",
		"30 Apr 2024",
		"High",
		"Finished",
		"/helpdesk/tickets/details"
	),
	createData(
		"#856",
		"Cloud Migration",
		"Ethan Baker",
		"25 Apr 2024",
		"Low",
		"Pending",
		"/helpdesk/tickets/details"
	),
	createData(
		"#857",
		"Website Revamp",
		"Sophia Carter",
		"20 Apr 2024",
		"Medium",
		"In Progress",
		"/helpdesk/tickets/details"
	),
	createData(
		"#858",
		"Mobile Application",
		"Ava Cooper",
		"15 Apr 2024",
		"High",
		"Finished",
		"/helpdesk/tickets/details"
	),
	createData(
		"#869",
		"System Deployment",
		"Isabella Evans",
		"10 Apr 2024",
		"Low",
		"Cancelled",
		"/helpdesk/tickets/details"
	),
	createData(
		"#870",
		"Hotel Management System",
		"Jhon Evans",
		"15 Apr 2024",
		"High",
		"Finished",
		"/helpdesk/tickets/details"
	),
	createData(
		"#871",
		"Send Proposal to APR Ltd",
		"Roberto Cruz",
		"25 Apr 2024",
		"Low",
		"Pending",
		"/helpdesk/tickets/details"
	),
	createData(
		"#872",
		"Python Upgrade",
		"Juli Johnso",
		"20 Apr 2024",
		"Medium",
		"In Progress",
		"/helpdesk/tickets/details"
	),
	createData(
		"#873",
		"Schedule meeting with sine",
		"Catalina Engles",
		"15 Apr 2024",
		"High",
		"Finished",
		"/helpdesk/tickets/details"
	),
	createData(
		"#874",
		"Engineering Lite Touch",
		"Louis Nagle",
		"10 Apr 2024",
		"Low",
		"Cancelled",
		"/helpdesk/tickets/details"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const ToDoList: React.FC = () => {
	// Table
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// Modal
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// const data = new FormData(event.currentTarget);
		// console.log();
	};

	// Select
	const [assignedTo, setAssignedTo] = useState("");
	const handleChangeAssignedTo = (event: SelectChangeEvent) => {
		setAssignedTo(event.target.value as string);
	};

	const [priority, setPriority] = useState("");
	const handleChangePriority = (event: SelectChangeEvent) => {
		setPriority(event.target.value as string);
	};

	const [status, setStatus] = useState("");
	const handleChangeStatus = (event: SelectChangeEvent) => {
		setStatus(event.target.value as string);
	};

	return (
		<>
			<ul className="breadcrumb">
				<li>View All Projects</li>
			</ul>
			<Card
				sx={{
					boxShadow: "none",
					borderRadius: "7px",
					mb: "25px",
					padding: { xs: "18px", sm: "20px", lg: "25px" },
				}}
				className="rmui-card"
			>
				<Box
					sx={{
						display: { xs: "block", sm: "flex" },
						alignItems: "center",
						justifyContent: "space-between",
						mb: "25px",
					}}
				>
					<form className={styles.searchBox}>
						<label>
							<i className="material-symbols-outlined">search</i>
						</label>
						<input
							type="text"
							className={styles.inputSearch}
							placeholder="Search task here..."
						/>
					</form>

					<Button
						onClick={handleClickOpen}
						variant="outlined"
						sx={{
							textTransform: "capitalize",
							borderRadius: "7px",
							fontWeight: "500",
							fontSize: "13px",
							padding: "6px 13px",
						}}
						color="primary"
					>
						<AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New Task
					</Button>
				</Box>

				{/* Table */}
				<Box
					sx={{
						marginLeft: "-25px",
						marginRight: "-25px",
					}}
				>
					<TableContainer
						component={Paper}
						sx={{
							boxShadow: "none",
							borderRadius: "0",
						}}
						className="rmui-table"
					>
						<Table sx={{ minWidth: 1000 }} aria-label="To Do List Table">
							<TableHead className="bg-primary-50">
								<TableRow>
									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 24px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										#
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										ID
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Ticket Title
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Assigned To
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Due Date
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Priority
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Status
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Action
									</TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								{(rowsPerPage > 0
									? rows.slice(
											page * rowsPerPage,
											page * rowsPerPage + rowsPerPage
									  )
									: rows
								).map((row) => (
									<TableRow key={row.id}>
										<TableCell
											sx={{
												padding: "5px 13px",
												fontSize: "14px",
												width: "65px",
											}}
											className="border-bottom"
										>
											<Checkbox {...label} sx={{ padding: "8px" }} />
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.id}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.ticketTitle}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.assignedTo}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.dueDate}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.priority}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
											}}
											className="border-bottom"
										>
											<div className={`sine-badge ${row.status}`}>
												{row.status}
											</div>
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
											}}
											className="border-bottom"
										>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
												}}
											>
												<Link href={row.viewLink}>
													<IconButton
														aria-label="view"
														color="primary"
														sx={{ padding: "5px" }}
													>
														<i
															className="material-symbols-outlined"
															style={{ fontSize: "16px" }}
														>
															visibility
														</i>
													</IconButton>

													<IconButton
														aria-label="edit"
														color="secondary"
														sx={{ padding: "5px" }}
													>
														<i
															className="material-symbols-outlined"
															style={{ fontSize: "16px" }}
														>
															edit
														</i>
													</IconButton>
												</Link>

												<IconButton
													aria-label="delete"
													color="error"
													sx={{ padding: "5px" }}
												>
													<i
														className="material-symbols-outlined"
														style={{ fontSize: "16px" }}
													>
														delete
													</i>
												</IconButton>
											</Box>
										</TableCell>
									</TableRow>
								))}
								{emptyRows > 0 && (
									<TableRow style={{ height: 53 * emptyRows }}>
										<TableCell colSpan={8} />
									</TableRow>
								)}
							</TableBody>

							<TableFooter>
								<TableRow>
									<TablePagination
										rowsPerPageOptions={[
											5,
											10,
											25,
											{ label: "All", value: -1 },
										]}
										colSpan={8}
										count={rows.length}
										rowsPerPage={rowsPerPage}
										page={page}
										slotProps={{
											select: {
												inputProps: {
													"aria-label": "rows per page",
												},
												native: true,
											},
										}}
										onPageChange={handleChangePage}
										onRowsPerPageChange={handleChangeRowsPerPage}
										ActionsComponent={TablePaginationActions}
										sx={{
											border: "none",
										}}
									/>
								</TableRow>
							</TableFooter>
						</Table>
					</TableContainer>
				</Box>
			</Card>

			{/* Modal */}
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				className="rmu-modal"
			>
				<Box>
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

						<IconButton aria-label="remove" size="small" onClick={handleClose}>
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
											Task Name
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

									<Grid item xs={12} md={12} lg={6}>
										<Typography
											component="h5"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "12px",
											}}
											className="text-black"
										>
											Assigned To
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">
												Select
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={assignedTo}
												label="Select"
												onChange={handleChangeAssignedTo}
											>
												<MenuItem value={0}>Shawn Kennedy</MenuItem>
												<MenuItem value={1}>Roberto Cruz</MenuItem>
												<MenuItem value={2}>Juli Johnson</MenuItem>
												<MenuItem value={3}>Catalina Engles</MenuItem>
												<MenuItem value={4}>Louis Nagle</MenuItem>
												<MenuItem value={5}>Michael Marquez</MenuItem>
											</Select>
										</FormControl>
									</Grid>

									<Grid item xs={12} md={12} lg={6}>
										<Typography
											component="h5"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "12px",
											}}
											className="text-black"
										>
											Due Date
										</Typography>

										<LocalizationProvider dateAdapter={AdapterDayjs}>
											<DatePicker
												sx={{
													width: "100%",

													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											/>
										</LocalizationProvider>
									</Grid>

									<Grid item xs={12} md={12} lg={6}>
										<Typography
											component="h5"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "12px",
											}}
											className="text-black"
										>
											Priority
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">
												Select
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={priority}
												label="Select"
												onChange={handleChangePriority}
											>
												<MenuItem value={0}>High</MenuItem>
												<MenuItem value={1}>Medium</MenuItem>
												<MenuItem value={2}>Low</MenuItem>
											</Select>
										</FormControl>
									</Grid>

									<Grid item xs={12} md={12} lg={6}>
										<Typography
											component="h5"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "12px",
											}}
											className="text-black"
										>
											Status
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">
												Select
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={status}
												label="Select"
												onChange={handleChangeStatus}
											>
												<MenuItem value={0}>In Progress</MenuItem>
												<MenuItem value={1}>Pending</MenuItem>
												<MenuItem value={2}>Finished</MenuItem>
												<MenuItem value={3}>Cancelled</MenuItem>
											</Select>
										</FormControl>
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
												onClick={handleClose}
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
													sx={{
														position: "relative",
														top: "-2px",
													}}
													className="mr-5px"
												/>{" "}
												Create
											</Button>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Box>
				</Box>
			</BootstrapDialog>
		</>
	);
};

export default ToDoList;
