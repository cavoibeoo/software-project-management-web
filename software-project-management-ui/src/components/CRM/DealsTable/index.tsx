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
	styled,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import styles from "@/components/CRM/Search.module.css";
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
	id: string,
	companyName: string,
	contactPerson: string,
	amount: string,
	stage: string,
	probability: number,
	createdAt: string,
	closeDate: string
) {
	return {
		id,
		companyName,
		contactPerson,
		amount,
		stage,
		probability,
		createdAt,
		closeDate,
	};
}

const rows = [
	createData(
		"#854",
		"Tech Solutions",
		"Shawn Kennedy",
		"oliver@sine.com",
		"$25,000.00",
		80,
		"15 Nov 2024",
		"08 Nov 2024 10:30 AM"
	),
	createData(
		"#853",
		"Acma Industries",
		"Roberto Cruz",
		"$15,000.00",
		"Presentation",
		50,
		"14 Nov 2024",
		"09 Nov 2024 02:15 PM"
	),
	createData(
		"#852",
		"Synergy Ltd",
		"Juli Johnson",
		"$30,000.00",
		"Negotiation",
		75,
		"13 Nov 2024",
		"10 Nov 2024 09:45 AM"
	),
	createData(
		"#851",
		"Tech Enterprises",
		"Catalina Engles",
		"$20,000.00",
		"Discovery",
		90,
		"12 Nov 2024",
		"11 Nov 2024 03:45 PM"
	),
	createData(
		"#850",
		"Synetic Solutions",
		"Louis Nagle",
		"$40,000.00",
		"Contract Sent",
		60,
		"13 Nov 2024",
		"12 Nov 2024 01:00 PM"
	),
	createData(
		"#849",
		"GlobalTech Solutions",
		"Patrick Madsen",
		"$50,000.00",
		"Proposal",
		55,
		"19 Nov 2024",
		"13 Nov 2024 01:00 PM"
	),
	createData(
		"#848",
		"Quantum Solutions",
		"Lillian McCreary",
		"$45,000.00",
		"Negotiation",
		79,
		"26 Nov 2024",
		"14 Nov 2024 01:00 PM"
	),
	createData(
		"#847",
		"Synetic Pinnacle Ltd",
		"Beverly Caulkins",
		"$35,000.00",
		"Presentation",
		85,
		"23 Nov 2024",
		"15 Nov 2024 01:00 PM"
	),
	createData(
		"#846",
		"IT Solutions",
		"Alina Smith",
		"$23,423.00",
		"Proposal",
		11,
		"14 Nov 2024",
		"08 Nov 2024 10:30 AM"
	),
	createData(
		"#845",
		"sine Admin",
		"David Warner",
		"$12,421.00",
		"Discovery",
		53,
		"11 Nov 2024",
		"07 Nov 2024 10:30 AM"
	),
	createData(
		"#845",
		"sine Admin",
		"David Warner",
		"$12,421.00",
		"Discovery",
		53,
		"11 Nov 2024",
		"07 Nov 2024 10:30 AM"
	),
	createData(
		"#844",
		"HiTech",
		"Alina Smith",
		"$23,423.00",
		"Proposal",
		11,
		"14 Nov 2024",
		"08 Nov 2024 10:30 AM"
	),
	createData(
		"#843",
		"Tech Solutions",
		"Shawn Kennedy",
		"oliver@sine.com",
		"$25,000.00",
		80,
		"15 Nov 2024",
		"08 Nov 2024 10:30 AM"
	),
	createData(
		"#842",
		"Acma Industries",
		"Roberto Cruz",
		"$15,000.00",
		"Presentation",
		50,
		"14 Nov 2024",
		"09 Nov 2024 02:15 PM"
	),
	createData(
		"#841",
		"Synergy Ltd",
		"Juli Johnson",
		"$30,000.00",
		"Negotiation",
		75,
		"13 Nov 2024",
		"10 Nov 2024 09:45 AM"
	),
	createData(
		"#840",
		"Tech Enterprises",
		"Catalina Engles",
		"$20,000.00",
		"Discovery",
		90,
		"12 Nov 2024",
		"11 Nov 2024 03:45 PM"
	),
	createData(
		"#839",
		"Synetic Solutions",
		"Louis Nagle",
		"$40,000.00",
		"Contract Sent",
		60,
		"13 Nov 2024",
		"12 Nov 2024 01:00 PM"
	),
	createData(
		"#838",
		"GlobalTech Solutions",
		"Patrick Madsen",
		"$50,000.00",
		"Proposal",
		55,
		"19 Nov 2024",
		"13 Nov 2024 01:00 PM"
	),
	createData(
		"#837",
		"Quantum Solutions",
		"Lillian McCreary",
		"$45,000.00",
		"Negotiation",
		79,
		"26 Nov 2024",
		"14 Nov 2024 01:00 PM"
	),
	createData(
		"#836",
		"Synetic Pinnacle Ltd",
		"Beverly Caulkins",
		"$35,000.00",
		"Presentation",
		85,
		"23 Nov 2024",
		"15 Nov 2024 01:00 PM"
	),
	createData(
		"#835",
		"IT Solutions",
		"Alina Smith",
		"$23,423.00",
		"Proposal",
		11,
		"14 Nov 2024",
		"08 Nov 2024 10:30 AM"
	),
	createData(
		"#834",
		"sine Admin",
		"David Warner",
		"$12,421.00",
		"Discovery",
		53,
		"11 Nov 2024",
		"07 Nov 2024 10:30 AM"
	),
	createData(
		"#833",
		"sine Admin",
		"David Warner",
		"$12,421.00",
		"Discovery",
		53,
		"11 Nov 2024",
		"07 Nov 2024 10:30 AM"
	),
	createData(
		"#832",
		"ET Admin",
		"Alina Smith",
		"$23,423.00",
		"Proposal",
		11,
		"14 Nov 2024",
		"08 Nov 2024 10:30 AM"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const DealsTable: React.FC = () => {
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
	const [stage, setStage] = useState("");
	const handleChangeStage = (event: SelectChangeEvent) => {
		setStage(event.target.value as string);
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
							placeholder="Search deals here....."
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
						}}
						color="primary"
					>
						<AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New Deals
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
										Company Name
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Contact Person
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Amount
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Stage
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Probability
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Created At
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Close Date
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
											{row.companyName}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.contactPerson}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.amount}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.stage}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.probability}%
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.createdAt}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
											}}
											className="border-bottom"
										>
											{row.closeDate}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
											}}
											className="border-bottom "
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
							Add New Deal
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
											Company Name
										</Typography>

										<TextField
											autoComplete="companyName"
											name="companyName"
											required
											fullWidth
											id="companyName"
											label="Enter company name"
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
											Contact Person
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
											Amount
										</Typography>

										<TextField
											autoComplete="amount"
											name="amount"
											required
											fullWidth
											id="amount"
											label="Enter amount"
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
											Stage
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">
												Select
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={stage}
												label="Select"
												onChange={handleChangeStage}
											>
												<MenuItem value={0}>Proposal</MenuItem>
												<MenuItem value={1}>Presentation</MenuItem>
												<MenuItem value={2}>Negotiation</MenuItem>
												<MenuItem value={3}>Discovery</MenuItem>
												<MenuItem value={4}>Acma Industries</MenuItem>
												<MenuItem value={5}>Contract Sent</MenuItem>
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
											Close Date
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

export default DealsTable;
