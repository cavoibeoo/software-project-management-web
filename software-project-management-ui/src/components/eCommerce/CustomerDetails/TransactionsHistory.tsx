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
	status: string,
	amount: string,
	rewards: string,
	date: string
) {
	return {
		id,
		status,
		amount,
		rewards,
		date,
	};
}

const rows = [
	createData("#JAN-121", "Pending", "$6,855.00", "$12.00", "14 Jan 2024"),
	createData("#JAN-120", "Successful", "$258.00", "$9.00", "13 Jan 2024"),
	createData("#JAN-119", "Rejected", "$3,890.00", "$11.00", "12 Jan 2024"),
	createData("#JAN-118", "Successful", "$2,500.00", "$23.42", "11 Jan 2024"),
	createData("#JAN-117", "Successful", "$8,200.00", "$10.84", "10 Jan 2024"),
	createData("#JAN-116", "Rejected", "$640.00", "$3.21", "09 Jan 2024"),
	createData("#JAN-115", "Successful", "$9,100.00", "$43.21", "08 Jan 2024"),
	createData("#JAN-114", "Pending", "$7,300.00", "$42.42", "07 Jan 2024"),
	createData("#JAN-113", "Successful", "$2,800.00", "$11.21", "06 Jan 2024"),
	createData("#JAN-112", "Successful", "$6,600.00", "$14.32", "05 Jan 2024"),
	createData("#JAN-111", "Successful", "$2,800.00", "'$11.21", "04 Jan 2024"),
	createData("#JAN-110", "Pending", "$6,855.00", "$12.00", "14 Jan 2024"),
	createData("#JAN-109", "Successful", "$258.00", "$9.00", "13 Jan 2024"),
	createData("#JAN-108", "Rejected", "$3,890.00", "$11.00", "12 Jan 2024"),
	createData("#JAN-107", "Successful", "$2,500.00", "$23.42", "11 Jan 2024"),
	createData("#JAN-106", "Successful", "$8,200.00", "$10.84", "10 Jan 2024"),
	createData("#JAN-105", "Rejected", "$640.00", "$3.21", "09 Jan 2024"),
	createData("#JAN-104", "Successful", "$9,100.00", "$43.21", "08 Jan 2024"),
	createData("#JAN-103", "Pending", "$7,300.00", "$42.42", "07 Jan 2024"),
	createData("#JAN-102", "Successful", "$2,800.00", "$11.21", "06 Jan 2024"),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const TransactionsHistory: React.FC = () => {
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
						<Typography
							variant="h3"
							sx={{
								fontSize: { xs: "16px", md: "18px" },
								fontWeight: 700,
							}}
							className="text-black"
						>
							Transactions History
						</Typography>

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
									<MenuItem value={0}>Last Day</MenuItem>
									<MenuItem value={0}>Last Weekly</MenuItem>
									<MenuItem value={1}>Last Monthly</MenuItem>
									<MenuItem value={2}>Last Yearly</MenuItem>
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
						<Table sx={{ minWidth: 700 }} aria-label="Table">
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
										Rewards
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Date
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
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.amount}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.rewards}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.date}
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
										rowsPerPageOptions={[
											5,
											10,
											25,
											{ label: "All", value: -1 },
										]}
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
				</Box>
			</Card>
		</>
	);
};

export default TransactionsHistory;
