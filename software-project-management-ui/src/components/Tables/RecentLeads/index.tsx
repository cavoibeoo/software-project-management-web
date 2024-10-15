"use client";

import * as React from "react";
import Image from "next/image";
import {
	Card,
	Box,
	Typography,
	FormControl,
	InputLabel,
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
	Checkbox,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
	id: number,
	customerImage: string,
	customerName: string,
	email: string,
	source: string,
	status: string
) {
	return {
		id,
		customerImage,
		customerName,
		email,
		source,
		status,
	};
}

const rows = [
	createData(
		1,
		"/images/users/user11.jpg",
		"David Brown",
		"david@sine.com",
		"Organic",
		"Confirmed"
	),
	createData(
		2,
		"/images/users/user12.jpg",
		"Sarah Miller",
		"sara@sine.com",
		"Social",
		"Pending"
	),
	createData(
		3,
		"/images/users/user13.jpg",
		"Michael Wilson",
		"micheal@sine.com",
		"Website",
		"in Progress"
	),
	createData(
		4,
		"/images/users/user8.jpg",
		"Amanda Clark",
		"amanda@sine.com",
		"Paid",
		"Confirmed"
	),
	createData(
		5,
		"/images/users/user14.jpg",
		"Jennifer Taylor",
		"taylor@sine.com",
		"Others",
		"rejected"
	),
	createData(
		6,
		"/images/users/user15.jpg",
		"Jhon Me",
		"joon@sine.com",
		"Organic",
		"Confirmed"
	),
	createData(
		7,
		"/images/users/user16.jpg",
		"Miller Kay",
		"miller@sine.com",
		"Social",
		"Pending"
	),
	createData(
		8,
		"/images/users/user17.jpg",
		"Clark Wilson",
		"clark@sine.com",
		"Paid",
		"Confirmed"
	),
	createData(
		9,
		"/images/users/user18.jpg",
		"Wilson Clark",
		"wilson@sine.com",
		"Website",
		"in Progress"
	),
	createData(
		10,
		"/images/users/user19.jpg",
		"David Le",
		"davidle@sine.com",
		"Organic",
		"Confirmed"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const RecentLeads: React.FC = () => {
	// Select
	const [select, setSelect] = React.useState("");
	const handleChange = (event: SelectChangeEvent) => {
		setSelect(event.target.value as string);
	};

	// Table
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
						mb: "25px",
					}}
				>
					<Typography
						variant="h3"
						sx={{
							fontSize: { xs: "16px", md: "18px" },
							fontWeight: 700,
						}}
						className="text-black"
					>
						Recent Leads
					</Typography>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<FormControl sx={{ minWidth: "115px" }} size="small">
							<InputLabel id="demo-select-small">Select</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={select}
								label="select"
								onChange={handleChange}
								className="select"
							>
								<MenuItem value={0}>This Day</MenuItem>
								<MenuItem value={0}>This Weekly</MenuItem>
								<MenuItem value={1}>This Monthly</MenuItem>
								<MenuItem value={2}>This Yearly</MenuItem>
								<MenuItem value={4}>All Time</MenuItem>
							</Select>
						</FormControl>
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
						<Table sx={{ minWidth: 750 }} aria-label="Recent Leads Table">
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
										Customer
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
										Source
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
												padding: "15px 13px",
												fontSize: "14px",
												width: "65px",
											}}
											className="border-bottom"
										>
											<Checkbox {...label} />
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
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
														src={row.customerImage}
														alt="Product"
														width={40}
														height={40}
														style={{ borderRadius: "100px" }}
													/>
												</Box>

												<Box>
													<Typography
														sx={{
															fontSize: "15px",
															fontWeight: "500",
														}}
														className="text-black"
													>
														{row.customerName}
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
											className="text-black border-bottom"
										>
											{row.source}
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
										<TableCell colSpan={6} />
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
										colSpan={6}
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
		</>
	);
};

export default RecentLeads;
