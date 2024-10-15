"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
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
	MenuItem,
	Dialog,
	DialogTitle,
	Button,
	Grid,
	TextField,
	FormControl,
	InputLabel,
	styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "@/components/ProjectManagement/Search.module.css";

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
	id: string,
	userImg: string,
	userName: string,
	email: string,
	role: string,
	projectAccess: string,
	status: string
) {
	return {
		id,
		userImg,
		userName,
		email,
		role,
		projectAccess,
		status,
	};
}

const rows = [
	createData(
		"#854",
		"/images/users/user6.jpg",
		"Oliver Khan",
		"oliver@sine.com",
		"Project Manager",
		"Hotel Management System, Python Upgrade",
		"active"
	),
	createData(
		"#853",
		"/images/users/user7.jpg",
		"Carolyn Barnes",
		"carolyn@sine.com",
		"Developer",
		"Project Monitoring, Project Alpho",
		"active"
	),
	createData(
		"#852",
		"/images/users/user8.jpg",
		"Donna Miller",
		"donna@sine.com",
		"Business Analyst",
		"Aegis Accounting Service, Beja Banking Finance",
		"deactive"
	),
	createData(
		"#851",
		"/images/users/user9.jpg",
		"Barbara Cros",
		"barbara@sine.com",
		"UI/UX Designer",
		"Aoriv AI Design, Vaxo App Design",
		"active"
	),
	createData(
		"#850",
		"/images/users/user10.jpg",
		"Rebecca Block",
		"Rebecca@sine.com",
		"QA Tester",
		"Product Development, sine Dashboard Design",
		"deactive"
	),
	createData(
		"#849",
		"/images/users/user11.jpg",
		"Ramiro McCarty",
		"ramiro@sine.com",
		"Admin",
		"Hotel Management System, Python Upgrad",
		"active"
	),
	createData(
		"#848",
		"/images/users/user12.jpg",
		"Robert Fairweather",
		"robert@sine.com",
		"Editor",
		"Project Monitoring, Project Alph",
		"active"
	),
	createData(
		"#847",
		"/images/users/user13.jpg",
		"Marcelino Haddock",
		"marcelino@sine.com",
		"Project Manager",
		"Aegis Accounting Service, Beja Banking Finance",
		"active"
	),
	createData(
		"#846",
		"/images/users/user14.jpg",
		"Thomas Wilson",
		"thomas@sine.com",
		"UI/UX Designer",
		"Aoriv AI Design, Vaxo App Design",
		"deactive"
	),
	createData(
		"#845",
		"/images/users/user15.jpg",
		"Nathaniel Hulsey",
		"nathaniel@sine.com",
		"Web Developer",
		"Product Development, sine Dashboard Design",
		"deactive"
	),
	createData(
		"#844",
		"/images/users/user16.jpg",
		"Jake Khan",
		"jake@sine.com",
		"+1 555-123-4567",
		"19 Jun 2024",
		"active"
	),
	createData(
		"#843",
		"/images/users/user17.jpg",
		"Noah Barnes",
		"noah@sine.com",
		"Web Developer",
		"Product Development, sine Dashboard Design",
		"active"
	),
	createData(
		"#842",
		"/images/users/user18.jpg",
		"James Miller",
		"james@sine.com",
		"UI/UX Designer",
		"Aoriv AI Design, Vaxo App Design",
		"deactive"
	),
	createData(
		"#841",
		"/images/users/user19.jpg",
		"Connor Cros",
		"connor@sine.com",
		"Project Manager",
		"Aegis Accounting Service, Beja Banking Finance",
		"active"
	),
	createData(
		"#840",
		"/images/users/user20.jpg",
		"Liam Block",
		"liam@sine.com",
		"Editor",
		"Project Monitoring, Project Alpho",
		"deactive"
	),
	createData(
		"#839",
		"/images/users/user21.jpg",
		"Harry McCarty",
		"harry@sine.com",
		"Admin",
		"Hotel Management System, Python Upgrade",
		"active"
	),
	createData(
		"#838",
		"/images/users/user22.jpg",
		"Harry Fairweather",
		"harry@sine.com",
		"QA Tester",
		"Product Development, sine Dashboard Design",
		"active"
	),
	createData(
		"#837",
		"/images/users/user23.jpg",
		"Jacob Haddock",
		"jacob@sine.com",
		"UI/UX Designer",
		"Aoriv AI Design, Vaxo App Design",
		"active"
	),
	createData(
		"#836",
		"/images/users/user24.jpg",
		"Jacob Wilson",
		"jacob@sine.com",
		"Business Analyst",
		"Aegis Accounting Service, Beja Banking Finance",
		"deactive"
	),
	createData(
		"#835",
		"/images/users/user25.jpg",
		"Michael Hulsey",
		"michael@sine.com",
		"Developer",
		"Project Monitoring, Project Alpho",
		"deactive"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const UsersTable: React.FC = () => {
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
	const [role, setRole] = useState("");
	const handleChangeRole = (event: SelectChangeEvent) => {
		setRole(event.target.value as string);
	};

	const [projectAccess, setProjectAccess] = useState("");
	const handleChangeProjectAccess = (event: SelectChangeEvent) => {
		setProjectAccess(event.target.value as string);
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
						display: { xs: "block", sm: "flex" },
						alignItems: "center",
						justifyContent: "space-between",
						mb: "25px",
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
							placeholder="Search user here..."
						/>
					</Box>

					<Button
						onClick={handleClickOpen}
						variant="outlined"
						sx={{
							textTransform: "capitalize",
							borderRadius: "7px",
							fontWeight: "500",
							fontSize: "13px",
							padding: "6px 13px",
							mt: { xs: "10px", sm: "0" },
						}}
						color="primary"
					>
						<AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New User
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
						<Table sx={{ minWidth: 1350 }} aria-label="Table">
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
										User
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
										Role
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Project Access
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
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													gap: "12px",
												}}
											>
												<Box sx={{ flexShrink: "0" }}>
													<Image
														src={row.userImg}
														alt="Product"
														width={40}
														height={40}
														style={{ borderRadius: "100px" }}
													/>
												</Box>

												<Box>
													<Typography
														sx={{
															fontSize: { xs: "14px", lg: "15px" },
															fontWeight: "500",
														}}
														className="text-black"
													>
														{row.userName}
													</Typography>
												</Box>
											</Box>
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.email}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.role}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.projectAccess}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
											}}
											className="border-bottom"
										>
											<Box
												className={`sine-badge ${row.status}`}
												sx={{ textTransform: "capitalize" }}
											>
												{row.status}
											</Box>
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
										<TableCell colSpan={10} />
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
										colSpan={10}
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
							Add New User
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
											Eamil
										</Typography>

										<TextField
											autoComplete="eamil"
											name="eamil"
											required
											fullWidth
											id="eamil"
											label="Enter eamil"
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
											Role
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">
												Select
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={role}
												label="Select"
												onChange={handleChangeRole}
											>
												<MenuItem value={0}>Project Manager</MenuItem>
												<MenuItem value={1}>Developer</MenuItem>
												<MenuItem value={2}>Business Analyst</MenuItem>
												<MenuItem value={3}>UI/UX Designer</MenuItem>
												<MenuItem value={4}>QA Tester</MenuItem>
												<MenuItem value={5}>Admin</MenuItem>
												<MenuItem value={6}>Editor</MenuItem>
												<MenuItem value={7}>Plugin Developer</MenuItem>
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
											Project Access
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">
												Select
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={projectAccess}
												label="Select"
												onChange={handleChangeProjectAccess}
											>
												<MenuItem value={0}>Hotel Management</MenuItem>
												<MenuItem value={1}>Python Upgrade</MenuItem>
												<MenuItem value={2}>Project Monitoring</MenuItem>
												<MenuItem value={3}>Project Alpho</MenuItem>
												<MenuItem value={4}>Aegis Service</MenuItem>
												<MenuItem value={5}>Beja Banking Finance</MenuItem>
												<MenuItem value={6}>Aoriv AI Design</MenuItem>
												<MenuItem value={7}>Vaxo App Design</MenuItem>
												<MenuItem value={8}>Product Development</MenuItem>
												<MenuItem value={9}>sine Dashboard</MenuItem>
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

export default UsersTable;
