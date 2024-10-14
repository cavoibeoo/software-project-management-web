"use client";

import React from "react";
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
	InputLabel,
	MenuItem,
	FormControl,
} from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/components/Invoices/InvoiceTable/Search.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Image from "next/image";

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
	invoiceId: any,
	customerImg: string,
	customerName: string,
	email: string,
	issuedDate: string,
	total: string,
	quantity: number,
	walletBalance: string,
	viewLink: string
) {
	return {
		invoiceId,
		customerImg,
		customerName,
		email,
		issuedDate,
		total,
		quantity,
		walletBalance,
		viewLink,
	};
}

const rows = [
	createData(
		"#JAN-158",
		"/images/users/user6.jpg",
		"Marcia Baker",
		"marcia@sine.com",
		"$5,000",
		"10 Nov 2024",
		6,
		"$2,000",
		"/invoices/details"
	),
	createData(
		"#JAN-157",
		"/images/users/user7.jpg",
		"Carolyn Barnes",
		"barnes@sine.com",
		"$8,750",
		"11 Nov 2024",
		10,
		"$4,500",
		"/invoices/details"
	),
	createData(
		"#JAN-156",
		"/images/users/user8.jpg",
		"Donna Miller",
		"donna@sine.com",
		"$3,200",
		"12 Nov 2024",
		10,
		"$1,550",
		"/invoices/details"
	),
	createData(
		"#JAN-155",
		"/images/users/user9.jpg",
		"Barbara Cross",
		"cross@sine.com",
		"$3,750",
		"13 Nov 2024",
		4,
		"$2,490",
		"/invoices/details"
	),
	createData(
		"#JAN-154",
		"/images/users/user10.jpg",
		"Rebecca Block",
		"block@sine.com",
		"$6,000",
		"14 Nov 2024",
		2,
		"$3,599",
		"/invoices/details"
	),
	createData(
		"#JAN-153",
		"/images/users/user11.jpg",
		"Ramiro McCarty",
		"ramiro@sine.com",
		"$9,200",
		"15 Nov 2024",
		8,
		"$5,800",
		"/invoices/details"
	),
	createData(
		"#JAN-152",
		"/images/users/user12.jpg",
		"Robert Fairweather",
		"robert@sine.com",
		"$2,500",
		"16 Nov 2024",
		6,
		"$1,200",
		"/invoices/details"
	),
	createData(
		"#JAN-151",
		"/images/users/user13.jpg",
		"Marcelino Haddock",
		"marcelino@sine.com",
		"$7,300",
		"17 Nov 2024",
		9,
		"$4,850",
		"/invoices/details"
	),
	createData(
		"#JAN-150",
		"/images/users/user14.jpg",
		"Thomas Wilson",
		"thomas@sine.com",
		"$4,800",
		"18 Nov 2024",
		5,
		"$2,300",
		"/invoices/details"
	),
	createData(
		"#JAN-149",
		"/images/users/user15.jpg",
		"Nathaniel Hulsey",
		"nathaniel@sine.com",
		"$6,500",
		"19 Nov 2024",
		5,
		"$4,560",
		"/invoices/details"
	),
	createData(
		"#JAN-148",
		"/images/users/user16.jpg",
		"Baker",
		"baker@sine.com",
		"$5,400",
		"20 Nov 2024",
		8,
		"$2,400",
		"/invoices/details"
	),
	createData(
		"#JAN-147",
		"/images/users/user17.jpg",
		"Barnes",
		"barnes@sine.com",
		"$8,450",
		"21 Nov 2024",
		15,
		"$4,400",
		"/invoices/details"
	),
	createData(
		"#JAN-146",
		"/images/users/user18.jpg",
		"Miller",
		"miller@sine.com",
		"$3,400",
		"22 Nov 2024",
		22,
		"$1,450",
		"/invoices/details"
	),
	createData(
		"#JAN-145",
		"/images/users/user19.jpg",
		"Cross",
		"cross@sine.com",
		"$3,450",
		"23 Nov 2024",
		5,
		"$2,450",
		"/invoices/details"
	),
	createData(
		"#JAN-144",
		"/images/users/user20.jpg",
		"Rebecca",
		"rebecca@sine.com",
		"$6,400",
		"24 Nov 2024",
		6,
		"$3,499",
		"/invoices/details"
	),
	createData(
		"#JAN-143",
		"/images/users/user21.jpg",
		"McCarty",
		"mccarty@sine.com",
		"$9,400",
		"25 Nov 2024",
		7,
		"$5,400",
		"/invoices/details"
	),
	createData(
		"#JAN-142",
		"/images/users/user22.jpg",
		"Fairweather",
		"fairweather@sine.com",
		"$2,400",
		"26 Nov 2024",
		9,
		"$1,400",
		"/invoices/details"
	),
	createData(
		"#JAN-141",
		"/images/users/user23.jpg",
		"Marcelino",
		"marcelino@sine.com",
		"$7,400",
		"27 Nov 2024",
		3,
		"$4,450",
		"/invoices/details"
	),
	createData(
		"#JAN-140",
		"/images/users/user24.jpg",
		"Wilson",
		"wilson@sine.com",
		"$4,400",
		"28 Nov 2024",
		7,
		"$2,400",
		"/invoices/details"
	),
	createData(
		"#JAN-139",
		"/images/users/user25.jpg",
		"Hulsey",
		"hulsey@sine.com",
		"$6,400",
		"29 Nov 2024",
		8,
		"$4,460",
		"/invoices/details"
	),
].sort((b, a) => (a.invoiceId < b.invoiceId ? -1 : 1));

const InvoiceTable: React.FC = () => {
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
							placeholder="Search here....."
						/>
					</form>

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
					<Table sx={{ minWidth: 950 }} aria-label="Table">
						<TableHead className="bg-f6f7f9">
							<TableRow>
								<TableCell
									sx={{
										fontWeight: "500",
										padding: "10px 24px",
										fontSize: "14px",
									}}
									className="text-black border-bottom"
								>
									Invoice ID
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
									Issued Date
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
									Quantity
								</TableCell>

								<TableCell
									sx={{
										fontWeight: "500",
										padding: "10px 20px",
										fontSize: "14px",
									}}
									className="text-black border-bottom"
								>
									Wallet Balance
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
								<TableRow key={row.invoiceId}>
									<TableCell
										sx={{
											padding: "5px 13px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.invoiceId}
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
													src={row.customerImg}
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
										className="border-bottom"
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
										{row.issuedDate}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.total}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.quantity}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
										}}
										className="border-bottom"
									>
										{row.walletBalance}
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
											</Link>

											<IconButton
												aria-label="print"
												color="info"
												sx={{ padding: "5px" }}
											>
												<i
													className="material-symbols-outlined"
													style={{ fontSize: "16px" }}
												>
													print
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
									rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
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
			</Card>
		</>
	);
};

export default InvoiceTable;
