"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import {
	Card,
	Box,
	Typography,
	Button,
	MenuItem,
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
	Dialog,
	DialogTitle,
	Grid,
	TextField,
	FormControl,
	InputLabel,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import AddIcon from "@mui/icons-material/Add";
import styles from "@/components/LMS/Search.module.css";
import { styled } from "@mui/material/styles";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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

interface Ratings {
	star: string;
}

interface Instructors {
	id: string;
	image: string;
	name: string;
	designation: string;
	courses: number;
	totalEarnings: string;
	email: string;
	ratings: Ratings[];
	status: string;
}

function createData(
	id: string,
	image: string,
	name: string,
	designation: string,
	courses: number,
	totalEarnings: string,
	email: string,
	ratings: Ratings[],
	status: string
): Instructors {
	return {
		id,
		image,
		name,
		designation,
		courses,
		totalEarnings,
		email,
		ratings,
		status,
	};
}

const rows = [
	createData(
		"#A-1217",
		"/images/users/user13.jpg",
		"Olivia Clark",
		"Big Data",
		55,
		"$6,855.00",
		"olivia@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"active"
	),
	createData(
		"#A-1216",
		"/images/users/user14.jpg",
		"Ava Turner",
		"UX/UI",
		120,
		"$258.00",
		"ava@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"deactive"
	),
	createData(
		"#A-1215",
		"/images/users/user15.jpg",
		"Lucas Morgan",
		"Developer",
		86,
		"$3890.00",
		"lucas@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"active"
	),
	createData(
		"#A-1214",
		"/images/users/user16.jpg",
		"Isabella Cooper",
		"Designer",
		75,
		"$2500.00",
		"isabella@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"active"
	),
	createData(
		"#A-1213",
		"/images/users/user17.jpg",
		"Olivia Clark",
		"Big Data",
		55,
		"$6,855.00",
		"olivia@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"active"
	),
	createData(
		"#A-1212",
		"/images/users/user18.jpg",
		"Ava Turner",
		"UX/UI",
		120,
		"$258.00",
		"ava@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"deactive"
	),
	createData(
		"#A-1211",
		"/images/users/user19.jpg",
		"Lucas Morgan",
		"Developer",
		86,
		"$3890.00",
		"lucas@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"active"
	),
	createData(
		"#A-1210",
		"/images/users/user13.jpg",
		"Olivia Clark",
		"Big Data",
		55,
		"$6,855.00",
		"olivia@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"active"
	),
	createData(
		"#A-1209",
		"/images/users/user14.jpg",
		"Ava Turner",
		"UX/UI",
		120,
		"$258.00",
		"ava@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"deactive"
	),
	createData(
		"#A-1208",
		"/images/users/user15.jpg",
		"Lucas Morgan",
		"Developer",
		86,
		"$3890.00",
		"lucas@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"active"
	),
	createData(
		"#A-1207",
		"/images/users/user16.jpg",
		"Isabella Cooper",
		"Designer",
		75,
		"$2500.00",
		"isabella@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"active"
	),
	createData(
		"#A-1206",
		"/images/users/user17.jpg",
		"Olivia Clark",
		"Big Data",
		55,
		"$6,855.00",
		"olivia@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"active"
	),
	createData(
		"#A-1205",
		"/images/users/user18.jpg",
		"Ava Turner",
		"UX/UI",
		120,
		"$258.00",
		"ava@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"deactive"
	),
	createData(
		"#A-1204",
		"/images/users/user19.jpg",
		"Lucas Morgan",
		"Developer",
		86,
		"$3890.00",
		"lucas@sine.com",
		[
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
			{
				star: "ri-star-fill",
			},
		],
		"active"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const Instructors: React.FC = () => {
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
	const [openModal, setOpenModal] = useState(false);
	const handleClickOpenModal = () => {
		setOpenModal(true);
	};
	const handleCloseModal = () => {
		setOpenModal(false);
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

	const [ratings, setRatings] = useState("");
	const handleChangeRatings = (event: SelectChangeEvent) => {
		setRatings(event.target.value as string);
	};

	const [status, setStatus] = useState("");
	const handleChangeStatus = (event: SelectChangeEvent) => {
		setStatus(event.target.value as string);
	};

	return (
		<>
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
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						mb: "20px",
					}}
				>
					<Box
						component="form"
						className={styles.searchBox}
						sx={{
							width: { sm: "265px" },
						}}
					>
						<label>
							<i className="material-symbols-outlined">search</i>
						</label>
						<input
							type="text"
							className={styles.inputSearch}
							placeholder="Search instructor here..."
						/>
					</Box>

					<Box>
						<Button
							onClick={handleClickOpenModal}
							variant="outlined"
							sx={{
								textTransform: "capitalize",
								borderRadius: "7px",
								fontWeight: "500",
								fontSize: "14px",
								padding: "6px 13px",
							}}
							color="primary"
						>
							<AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New
							Instructor
						</Button>
					</Box>
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
						<Table sx={{ minWidth: 480 }} aria-label="Table">
							<TableHead className="bg-primary-50">
								<TableRow>
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
										Name
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Courses
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Total Earnings
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Email
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Ratings
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
										className="text-black border-bottom text-end"
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
												padding: "13px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.id}
										</TableCell>

										<TableCell
											sx={{
												padding: "13px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													gap: "12px",
												}}
											>
												<Box sx={{ flexShrink: "0" }}>
													<Image
														src={row.image}
														alt="instructor"
														width={44}
														height={44}
														style={{ borderRadius: "100px" }}
													/>
												</Box>

												<Box>
													<Typography
														sx={{
															fontWeight: "500",
														}}
														className="text-black"
													>
														{row.name}
													</Typography>

													<Typography className="text-body">
														{row.designation}
													</Typography>
												</Box>
											</Box>
										</TableCell>

										<TableCell
											sx={{
												padding: "13px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.courses}
										</TableCell>

										<TableCell
											sx={{
												padding: "13px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.totalEarnings}
										</TableCell>

										<TableCell
											sx={{
												padding: "13px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.email}
										</TableCell>

										<TableCell
											sx={{
												padding: "13px 20px",
											}}
											className="border-bottom"
										>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													gap: "2px",
												}}
											>
												{row.ratings.map((ratings, index) => (
													<i
														key={index}
														className={ratings.star}
														style={{ color: "#fe7a36", fontSize: "15px" }}
													></i>
												))}
											</Box>
										</TableCell>

										<TableCell
											sx={{
												padding: "13px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											<div
												className={`sine-badge ${row.status}`}
												style={{ textTransform: "capitalize" }}
											>
												{row.status}
											</div>
										</TableCell>

										<TableCell
											sx={{
												padding: "13px 20px",
												fontSize: "14px",
											}}
											className="text-end border-bottom"
										>
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
				onClose={handleCloseModal}
				aria-labelledby="customized-dialog-title"
				open={openModal}
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
							Add New Instructor
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
											Name
										</Typography>

										<TextField
											autoComplete="name"
											name="name"
											required
											fullWidth
											id="name"
											label="Enter name"
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
											Designation
										</Typography>

										<TextField
											autoComplete="designation"
											name="designation"
											required
											fullWidth
											id="designation"
											label="Enter designation"
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
											Total Earnings
										</Typography>

										<TextField
											autoComplete="totalEarnings"
											name="totalEarnings"
											required
											fullWidth
											id="totalEarnings"
											label="Enter total earnings"
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
											Email
										</Typography>

										<TextField
											autoComplete="email"
											name="email"
											required
											fullWidth
											id="email"
											label="Enter email address"
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
											Ratings
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">
												Select
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={ratings}
												label="Select"
												onChange={handleChangeRatings}
											>
												<MenuItem value={0}>5 Star</MenuItem>
												<MenuItem value={1}>4.5 Star</MenuItem>
												<MenuItem value={2}>4 Star</MenuItem>
												<MenuItem value={3}>3.5 Star</MenuItem>
												<MenuItem value={4}>3 Star</MenuItem>
												<MenuItem value={5}>2.5 Star</MenuItem>
												<MenuItem value={6}>2 Star</MenuItem>
												<MenuItem value={7}>1.5 Star</MenuItem>
												<MenuItem value={8}>1 Star</MenuItem>
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
												<MenuItem value={0}>Active</MenuItem>
												<MenuItem value={1}>Deactive</MenuItem>
											</Select>
										</FormControl>
									</Grid>

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
											Instructor Image
										</Typography>

										<TextField
											autoComplete="image"
											name="image"
											required
											fullWidth
											id="image"
											type="file"
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
													sx={{
														position: "relative",
														top: "-1px",
													}}
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

export default Instructors;
