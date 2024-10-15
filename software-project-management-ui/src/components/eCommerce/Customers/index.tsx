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
	FormControl,
	InputLabel,
	MenuItem,
	Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/components/eCommerce/Search.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
	id: string,
	customerImage: string,
	customerName: string,
	email: string,
	phone: string,
	lastLogin: string,
	totalSpend: string,
	totalOrders: number,
	status: string,
	viewDetails: string
) {
	return {
		id,
		customerImage,
		customerName,
		email,
		phone,
		lastLogin,
		totalSpend,
		totalOrders,
		status,
		viewDetails,
	};
}

const rows = [
	createData(
		"#JAN-854",
		"/images/users/user6.jpg",
		"Oliver Khan",
		"oliver@sine.com",
		"+1 555-123-4567",
		"10 Oct 2024",
		"$6,855.00",
		125,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-853",
		"/images/users/user7.jpg",
		"Carolyn Barnes",
		"carolyn@sine.com",
		"+1 555-987-6543",
		"11 Sep 2024",
		"$2,800.00",
		99,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-852",
		"/images/users/user8.jpg",
		"Donna Miller",
		"donna@sine.com",
		"+1 555-456-7890",
		"12 Aug 2024",
		"$258.00",
		145,
		"Deactive",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-851",
		"/images/users/user9.jpg",
		"Barbara Cross",
		"barbara@sine.com",
		"+1 555-369-7878",
		"13 Jul 2024",
		"$3,890.00",
		279,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-850",
		"/images/users/user10.jpg",
		"Rebecca Block",
		"rebecca@sine.com",
		"+1 555-658-4488",
		"14 Jun 2024",
		"$2,500.00",
		169,
		"Deactive",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-849",
		"/images/users/user11.jpg",
		"Ramiro McCarty",
		"ramiro@sine.com",
		"+1 555-558-9966",
		"15 May 2024",
		"$8,200.00",
		46,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-848",
		"/images/users/user12.jpg",
		"Robert Fairweather",
		"robert@sine.com",
		"+1 555-357-5888",
		"16 Apr 2024",
		"$640.00",
		184,
		"Deactive",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-847",
		"/images/users/user13.jpg",
		"Marcelino Haddock",
		"marcelino@sine.com",
		"+1 555-456-8877",
		"17 Mar 2024",
		"$9,100.00",
		166,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-846",
		"/images/users/user14.jpg",
		"Thomas Wilson",
		"thomas@sine.com",
		"+1 555-622-4488",
		"18 Feb 2024",
		"$7,300.00",
		75,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-845",
		"/images/users/user15.jpg",
		"Nathaniel Hulsey",
		"nathaniel@sine.com",
		"+1 555-357-5888",
		"16 Apr 2024",
		"$640.00",
		184,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-844",
		"/images/users/user16.jpg",
		"Oliver Khan",
		"oliver@sine.com",
		"+1 555-123-4567",
		"10 Oct 2024",
		"$6,855.00",
		125,
		"Deactive",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-843",
		"/images/users/user17.jpg",
		"Carolyn Barnes",
		"carolyn@sine.com",
		"+1 555-987-6543",
		"11 Sep 2024",
		"$2,800.00",
		99,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-842",
		"/images/users/user18.jpg",
		"Donna Miller",
		"donna@sine.com",
		"+1 555-456-7890",
		"12 Aug 2024",
		"$258.00",
		145,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-841",
		"/images/users/user19.jpg",
		"Megan Cross",
		"megan@sine.com",
		"+1 555-369-7878",
		"13 Jul 2024",
		"$3,890.00",
		279,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-840",
		"/images/users/user20.jpg",
		"Lauren Block",
		"lauren@sine.com",
		"+1 555-658-4488",
		"14 Jun 2024",
		"$2,500.00",
		169,
		"Deactive",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-839",
		"/images/users/user21.jpg",
		"Michelle McCarty",
		"michelle@sine.com",
		"+1 555-558-9966",
		"15 May 2024",
		"$8,200.00",
		46,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-838",
		"/images/users/user22.jpg",
		"Sophie Fairweather",
		"sophie@sine.com",
		"+1 555-357-5888",
		"16 Apr 2024",
		"$640.00",
		184,
		"Deactive",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-837",
		"/images/users/user23.jpg",
		"Tracy Haddock",
		"tracy@sine.com",
		"+1 555-456-8877",
		"17 Mar 2024",
		"$9,100.00",
		166,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-836",
		"/images/users/user24.jpg",
		"Charlotte Wilson",
		"charlotte@sine.com",
		"+1 555-622-4488",
		"18 Feb 2024",
		"$7,300.00",
		75,
		"Active",
		"/ecommerce/customers/details"
	),
	createData(
		"#JAN-835",
		"/images/users/user25.jpg",
		"Sarah Hulsey",
		"sarah@sine.com",
		"+1 555-357-5888",
		"16 Apr 2024",
		"$640.00",
		184,
		"Deactive",
		"/ecommerce/customers/details"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const Customers: React.FC = () => {
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

	// Select
	const [select, setSelect] = React.useState("");
	const handleChange = (event: SelectChangeEvent) => {
		setSelect(event.target.value as string);
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
								placeholder="Search customers here....."
							/>
						</Box>

						<Box>
							<FormControl sx={{ minWidth: 115 }} size="small">
								<InputLabel id="demo-select-small">Select</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={select}
									label="select"
									onChange={handleChange}
									className="select"
								>
									<MenuItem value={0}>Weekly</MenuItem>
									<MenuItem value={1}>Monthly</MenuItem>
									<MenuItem value={2}>Yearly</MenuItem>
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
						<Table sx={{ minWidth: 1300 }} aria-label="Table">
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
										Phone
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Last Login
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Total Spend
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Total Orders
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
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.id}
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
											{row.email}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.phone}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.lastLogin}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.totalSpend}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.totalOrders}
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
												<Link href={row.viewDetails}>
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
												</Link>

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
										<TableCell colSpan={9} />
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
										colSpan={9}
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

export default Customers;
