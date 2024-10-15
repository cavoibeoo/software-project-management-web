"use client";

import * as React from "react";
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
	Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/components/eCommerce/Search.module.css";
import AddIcon from "@mui/icons-material/Add";

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
	customerImage: string,
	customerName: string,
	items: string,
	created: string,
	total: string,
	vendor: string,
	status: string
) {
	return {
		orderID,
		customerImage,
		customerName,
		items,
		created,
		total,
		vendor,
		status,
	};
}

const rows = [
	createData(
		"#JAN-2345",
		"/images/users/user1.jpg",
		"Sarah Johnson",
		"120",
		"12 Jun 2024",
		"$10,490",
		"Dennis Matthews",
		"Shipped"
	),
	createData(
		"#JAN-2346",
		"/images/users/user2.jpg",
		"Michael Smith",
		"62",
		"11 Jun 2024",
		"$6,575",
		"Kathryn Turner",
		"Confirmed"
	),
	createData(
		"#JAN-2347",
		"/images/users/user3.jpg",
		"Emily Brow",
		"49",
		"10 Jun 2024",
		"$12,870",
		"John Valdez",
		"Pending"
	),
	createData(
		"#JAN-2348",
		"/images/users/user4.jpg",
		"Jason Lee",
		"25",
		"09 Jun 2024",
		"$7,89",
		"Douglas Harvey",
		"Shipped"
	),
	createData(
		"#JAN-2349",
		"/images/users/user5.jpg",
		"Ashley Davis",
		"82",
		"08 Jun 2024",
		"$4,680",
		"Susan Rader",
		"Rejected"
	),
	createData(
		"#JAN-2350",
		"/images/users/user4.jpg",
		"Sarah Johnson",
		"120",
		"12 Jun 2024",
		"$10,490",
		"Dennis Matthews",
		"Shipped"
	),
	createData(
		"#JAN-2351",
		"/images/users/user5.jpg",
		"Michael Smith",
		"62",
		"11 Jun 2024",
		"$6,575",
		"Kathryn Turner",
		"Confirmed"
	),
	createData(
		"#JAN-2352",
		"/images/users/user6.jpg",
		"Emily Brow",
		"49",
		"10 Jun 2024",
		"$12,870",
		"John Valdez",
		"Pending"
	),
	createData(
		"#JAN-2353",
		"/images/users/user7.jpg",
		"Jason Lee",
		"25",
		"09 Jun 2024",
		"$7,89",
		"Douglas Harvey",
		"Shipped"
	),
	createData(
		"#JAN-2354",
		"/images/users/user8.jpg",
		"Ashley Davis",
		"82",
		"08 Jun 2024",
		"$4,680",
		"Susan Rader",
		"Rejected"
	),
	createData(
		"#JAN-2355",
		"/images/users/user9.jpg",
		"Sarah Johnson",
		"120",
		"12 Jun 2024",
		"$10,490",
		"Dennis Matthews",
		"Shipped"
	),
	createData(
		"#JAN-2356",
		"/images/users/user10.jpg",
		"Michael Smith",
		"62",
		"11 Jun 2024",
		"$6,575",
		"Kathryn Turner",
		"Confirmed"
	),
	createData(
		"#JAN-2357",
		"/images/users/user11.jpg",
		"Emily Brow",
		"49",
		"10 Jun 2024",
		"$12,870",
		"John Valdez",
		"Pending"
	),
	createData(
		"#JAN-2358",
		"/images/users/user12.jpg",
		"Jason Lee",
		"25",
		"09 Jun 2024",
		"$7,89",
		"Douglas Harvey",
		"Shipped"
	),
	createData(
		"#JAN-2359",
		"/images/users/user13.jpg",
		"Ashley Davis",
		"82",
		"08 Jun 2024",
		"$4,680",
		"Susan Rader",
		"Rejected"
	),
	createData(
		"#JAN-2360",
		"/images/users/user14.jpg",
		"Sarah Johnson",
		"120",
		"12 Jun 2024",
		"$10,490",
		"Dennis Matthews",
		"Shipped"
	),
	createData(
		"#JAN-2361",
		"/images/users/user15.jpg",
		"Michael Smith",
		"62",
		"11 Jun 2024",
		"$6,575",
		"Kathryn Turner",
		"Confirmed"
	),
	createData(
		"#JAN-2362",
		"/images/users/user16.jpg",
		"Emily Brow",
		"49",
		"10 Jun 2024",
		"$12,870",
		"John Valdez",
		"Pending"
	),
	createData(
		"#JAN-2363",
		"/images/users/user17.jpg",
		"Jason Lee",
		"25",
		"09 Jun 2024",
		"$7,89",
		"Douglas Harvey",
		"Shipped"
	),
	createData(
		"#JAN-2364",
		"/images/users/user18.jpg",
		"Ashley Davis",
		"82",
		"08 Jun 2024",
		"$4,680",
		"Susan Rader",
		"Rejected"
	),
].sort((b, a) => (a.orderID < b.orderID ? -1 : 1));

const OrdersTable: React.FC = () => {
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
				<Box>
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
								width: "265px",
							}}
						>
							<label>
								<i className="material-symbols-outlined">search</i>
							</label>
							<input
								type="text"
								className={styles.inputSearch}
								placeholder="Search order here....."
							/>
						</Box>

						<Button
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
							<AddIcon sx={{ fontSize: "17px" }} /> Add New Order
						</Button>
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
						<Table sx={{ minWidth: 1250 }} aria-label="Table">
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
										Items
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
										Vendor
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
											className="border-bottom"
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
														style={{ borderRadius: "7px" }}
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
											{row.items}
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
											{row.total}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.vendor}
										</TableCell>

										<TableCell
											sx={{
												borderBottom: "1px solid #eceef2",
												padding: "14px 20px",
											}}
											className="border-bottom"
										>
											<div className={`sine-badge ${row.status}`}>
												{row.status}
											</div>
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
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
		</>
	);
};

export default OrdersTable;
