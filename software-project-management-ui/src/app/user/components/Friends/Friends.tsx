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
} from "@mui/material";
import Link from "next/link";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SearchForm from "./SearchForm";

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
			}}
			className="ml-15"
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
	image: string,
	name: string,
	activeStatus: string,
	email: string,
	viewLink: string
) {
	return {
		id,
		image,
		name,
		activeStatus,
		email,
		viewLink,
	};
}

const rows = [
	createData(
		1,
		"/images/cavoibeoLogo.png",
		"Phuocchan",
		"success",
		"phuocchan@gmail.com",
		"#"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const Friends: React.FC = () => {
	// Select
	const [select, setSelect] = React.useState("");
	const handleChange = (event: SelectChangeEvent) => {
		setSelect(event.target.value as string);
	};

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
						Collaborators
					</Typography>
				</Box>

				<SearchForm />

				{/* Table */}
				<TableContainer
					component={Paper}
					sx={{
						boxShadow: "none",
					}}
					className="rmui-table followers-table"
				>
					<Table sx={{ minWidth: 250 }} aria-label="Table">
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
											padding: "14px 0",
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
											<Box position="relative" sx={{ flexShrink: "0" }}>
												<Image
													src={row.image}
													alt="Product"
													width={44}
													height={44}
													style={{ borderRadius: "100px" }}
												/>
												<Box
													bgcolor={`${row.activeStatus}.main`}
													sx={{
														width: "10px",
														height: "10px",
														border: "2px solid #fff",
														borderRadius: "100px",
														position: "absolute",
														bottom: "5px",
													}}
													className="po-right-0"
												></Box>
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
													{row.email}
												</Typography>
											</Box>
										</Box>
									</TableCell>
								</TableRow>
							))}
							{emptyRows > 0 && (
								<TableRow style={{ height: 53 * emptyRows }}>
									<TableCell colSpan={2} />
								</TableRow>
							)}
						</TableBody>

						<TableFooter>
							<TableRow>
								<TablePagination
									rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
									colSpan={2}
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

export default Friends;
