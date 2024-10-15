"use client";

import React from "react";
import Image from "next/image";
import {
	Card,
	Box,
	Typography,
	Menu,
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
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

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
	memberImage: string,
	memberName: string,
	designation: string,
	tasks: number,
	statusProgress: number,
	statusProgressBg: string
) {
	return {
		id,
		memberImage,
		memberName,
		designation,
		tasks,
		statusProgress,
		statusProgressBg,
	};
}

const rows = [
	createData(
		1,
		"/images/users/user6.jpg",
		"Alex Davis",
		"Head of HR",
		55,
		50,
		"primary"
	),
	createData(
		2,
		"/images/users/user7.jpg",
		"Laura Martinez",
		"laura@sine.com",
		125,
		70,
		"success"
	),
	createData(
		3,
		"/images/users/user8.jpg",
		"Mark Thompson",
		"mark@sine.com",
		78,
		30,
		"secondary"
	),
	createData(
		4,
		"/images/users/user9.jpg",
		"Rachel White",
		"rachel@sine.com",
		95,
		90,
		"success"
	),
	createData(
		5,
		"/images/users/user10.jpg",
		"Kevin Lee",
		"kevin@sine.com",
		134,
		50,
		"warning"
	),
	createData(
		6,
		"/images/users/user11.jpg",
		"Alex Davis",
		"Head of HR",
		55,
		50,
		"primary"
	),
	createData(
		7,
		"/images/users/user17.jpg",
		"Laura Martinez",
		"laura@sine.com",
		125,
		70,
		"success"
	),
	createData(
		8,
		"/images/users/user18.jpg",
		"Mark Thompson",
		"mark@sine.com",
		78,
		30,
		"secondary"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const TeamMembers: React.FC = () => {
	// Table
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(4);

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
						Team Members
					</Typography>
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
						<Table
							sx={{ minWidth: { xs: "400px", lg: "300px" } }}
							aria-label="Recent Leads Table"
						>
							<TableHead className="bg-primary-50">
								<TableRow>
									<TableCell
										sx={{
											borderBottom: "none",
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black"
									>
										Name
									</TableCell>

									<TableCell
										sx={{
											borderBottom: "none",
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black"
									>
										Tasks
									</TableCell>

									<TableCell
										sx={{
											borderBottom: "none",
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black"
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
									<TableRow key={row.id}>
										<TableCell
											component="th"
											scope="row"
											sx={{
												borderBottom: "none",
												padding: "7px 20px",
												fontSize: "14px",
											}}
											className="text-black"
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
														src={row.memberImage}
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
														{row.memberName}
													</Typography>

													<Typography
														sx={{
															fontSize: "13px",
														}}
														className="text-body"
													>
														{row.designation}
													</Typography>
												</Box>
											</Box>
										</TableCell>

										<TableCell
											sx={{
												borderBottom: "none",
												padding: "7px 20px",
												fontSize: "14px",
											}}
											className="text-black"
										>
											{row.tasks}
										</TableCell>

										<TableCell
											sx={{
												borderBottom: "none",
												padding: "7px 20px",
											}}
										>
											<Box
												sx={{
													bgcolor: "#ecf0ff",
													width: "100%",
													height: "4px",
												}}
											>
												<Box
													sx={{
														bgcolor: `${row.statusProgressBg}.main`,
														width: `${row.statusProgress}%`,
														height: "4px",
													}}
												></Box>
											</Box>
										</TableCell>
									</TableRow>
								))}
								{emptyRows > 0 && (
									<TableRow style={{ height: 53 * emptyRows }}>
										<TableCell colSpan={3} />
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
										colSpan={3}
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

export default TeamMembers;
