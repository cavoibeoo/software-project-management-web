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
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/components/Dashboard/eCommerce/RecentOrders/RecentOrders.module.css";

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
				padding: "14px 20px",
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
	orderID: string,
	customerName: string,
	customerImage: string,
	created: string,
	total: number,
	status: string
) {
	return {
		orderID,
		customerName,
		customerImage,
		created,
		total,
		status,
	};
}

const rows = [
	createData(
		"#JAN-2345",
		"Sarah Johnson",
		"/images/users/user1.jpg",
		"12 Jun 2024",
		10490,
		"Shipped"
	),
	createData(
		"#JAN-1323",
		"Michael Smith",
		"/images/users/user2.jpg",
		"11 Jun 2024",
		6575,
		"Confirmed"
	),
	createData(
		"#DEC-1234",
		"Emily Brown",
		"/images/users/user3.jpg",
		"10 Jun 2024",
		12870,
		"Pending"
	),
	createData(
		"#DEC-3567",
		"Jason Lee",
		"/images/users/user4.jpg",
		"09 Jun 2024",
		7895,
		"Shipped"
	),
	createData(
		"#DEC-1098",
		"Ashley Davis",
		"/images/users/user5.jpg",
		"08 Jun 2024",
		4680,
		"Rejected"
	),
	createData(
		"#JAN-2346",
		"Oliver Johnson",
		"/images/users/user6.jpg",
		"07 Jun 2024",
		490,
		"Pending"
	),
	createData(
		"#JAN-2347",
		"Jake Noah",
		"/images/users/user7.jpg",
		"06 Jun 2024",
		9678,
		"Confirmed"
	),
	createData(
		"#JAN-2348",
		"Callum Mason",
		"/images/users/user8.jpg",
		"05 Jun 2024",
		6097,
		"Shipped"
	),
	createData(
		"#JAN-2349",
		"Robert Kyle",
		"/images/users/user9.jpg",
		"04 Jun 2024",
		7097,
		"Confirmed"
	),
	createData(
		"#JAN-2350",
		"Thomas Joe",
		"/images/users/user10.jpg",
		"03 Jun 2024",
		5097,
		"Confirmed"
	),
].sort((b, a) => (a.orderID < b.orderID ? -1 : 1));

const RecentOrders: React.FC = () => {
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
						display: { xs: "block", sm: "flex" },
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
						Recent Orders
					</Typography>

					<Box
						sx={{
							display: { xs: "block", sm: "flex" },
							alignItems: "center",
							gap: "20px",
						}}
					>
						<form className={styles.searchBox}>
							<label>
								<i className="material-symbols-outlined">search</i>
							</label>
							<input
								type="text"
								className={styles.inputSearch}
								placeholder="Search here....."
							/>
						</form>

						<FormControl
							sx={{ minWidth: { xs: "100%", sm: "115px" } }}
							size="small"
						>
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
				<TableContainer
					component={Paper}
					sx={{
						boxShadow: "none",
						borderRadius: "7px",
					}}
					className="rmui-table border"
				>
					<Table sx={{ minWidth: 650 }} aria-label="Recent Orders Table">
						<TableHead className="bg-f6f7f9">
							<TableRow>
								<TableCell
									sx={{
										fontWeight: "500",
										padding: "10px 20px",
										fontSize: "14px",
									}}
									className="text-black border-bottom"
								>
									Order ID
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
									Created
								</TableCell>

								<TableCell
									sx={{
										fontWeight: "500",
										padding: "10px 20px",
										fontSize: "14px",
									}}
									className="text-black border-bottom"
								>
									Total
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
								<TableRow key={row.orderID}>
									<TableCell
										sx={{
											padding: "14px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										{row.orderID}
									</TableCell>

									<TableCell
										sx={{
											padding: "14px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "13px",
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
											padding: "14px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										{row.created}
									</TableCell>

									<TableCell
										sx={{
											padding: "14px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										${row.total}
									</TableCell>

									<TableCell
										sx={{
											padding: "14px 20px",
										}}
										className="border-bottom"
									>
										<div className={`sine-badge ${row.status}`}>
											{row.status}
										</div>
									</TableCell>
								</TableRow>
							))}
							{emptyRows > 0 && (
								<TableRow style={{ height: 53 * emptyRows }}>
									<TableCell colSpan={5} />
								</TableRow>
							)}
						</TableBody>

						<TableFooter>
							<TableRow>
								<TablePagination
									rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
									colSpan={5}
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
			</Card>
		</>
	);
};

export default RecentOrders;
