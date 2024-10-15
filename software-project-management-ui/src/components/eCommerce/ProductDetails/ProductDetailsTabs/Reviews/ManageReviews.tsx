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
	Tooltip,
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

interface Rating {
	stars: string;
}

interface Reviews {
	id: number;
	reviewerImg: string;
	reviewerName: string;
	email: string;
	ratings: Rating[];
	review: string;
	date: string;
	time: string;
	status: string;
}

function createData(
	id: number,
	reviewerImg: string,
	reviewerName: string,
	email: string,
	ratings: Rating[],
	review: string,
	date: string,
	time: string,
	status: string
): Reviews {
	return {
		id,
		reviewerImg,
		reviewerName,
		email,
		ratings,
		review,
		date,
		time,
		status,
	};
}

const rows = [
	createData(
		1,
		"/images/users/user6.jpg",
		"Olivia Clark",
		"olivia@sine.com",
		[
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
		],
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		"17 Dec 2024",
		"08:30 PM",
		"Pending"
	),
	createData(
		2,
		"/images/users/user7.jpg",
		"Zephyr Zing",
		"zephyr@sine.com",
		[
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
		],
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		"17 Dec 2024",
		"08:30 PM",
		"Pending"
	),
	createData(
		3,
		"/images/users/user8.jpg",
		"Nova Nectar",
		"nova@sine.com",
		[
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
		],
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		"17 Dec 2024",
		"08:30 PM",
		"Pending"
	),
	createData(
		4,
		"/images/users/user9.jpg",
		"Isabella Chang",
		"isabella@sine.com",
		[
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
		],
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		"17 Dec 2024",
		"08:30 PM",
		"Pending"
	),
	createData(
		5,
		"/images/users/user9.jpg",
		"Isabella Chang",
		"isabella@sine.com",
		[
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
		],
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		"17 Dec 2024",
		"08:30 PM",
		"Pending"
	),
	createData(
		6,
		"/images/users/user6.jpg",
		"Olivia Clark",
		"olivia@sine.com",
		[
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
		],
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		"17 Dec 2024",
		"08:30 PM",
		"Pending"
	),
	createData(
		7,
		"/images/users/user7.jpg",
		"Zephyr Zing",
		"zephyr@sine.com",
		[
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
		],
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		"17 Dec 2024",
		"08:30 PM",
		"Pending"
	),
	createData(
		8,
		"/images/users/user8.jpg",
		"Nova Nectar",
		"nova@sine.com",
		[
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
		],
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		"17 Dec 2024",
		"08:30 PM",
		"Pending"
	),
	createData(
		9,
		"/images/users/user9.jpg",
		"Isabella Chang",
		"isabella@sine.com",
		[
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
		],
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		"17 Dec 2024",
		"08:30 PM",
		"Pending"
	),
	createData(
		10,
		"/images/users/user9.jpg",
		"Isabella Chang",
		"isabella@sine.com",
		[
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
			{
				stars: "ri-star-fill",
			},
		],
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		"17 Dec 2024",
		"08:30 PM",
		"Pending"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const ManageReviews: React.FC = () => {
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
						Manage Reviews
					</Typography>
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
					<Table sx={{ minWidth: 1000 }} aria-label="Table">
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
									Reviewer
								</TableCell>

								<TableCell
									sx={{
										fontWeight: "500",
										padding: "10px 20px",
										fontSize: "14px",
									}}
									className="text-black border-bottom"
								>
									Review
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
											verticalAlign: "top",
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
													src={row.reviewerImg}
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
													{row.reviewerName}
												</Typography>

												<Typography
													sx={{
														fontSize: "13px",
													}}
												>
													{row.email}
												</Typography>
											</Box>
										</Box>
									</TableCell>

									<TableCell
										sx={{
											padding: "14px 20px",
											fontSize: "14px",
											verticalAlign: "top",
										}}
										className="text-black border-bottom"
									>
										<Box>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													gap: "2px",
												}}
											>
												{row.ratings.map((rating, index) => (
													<i
														key={index}
														className={rating.stars}
														style={{ color: "#ee8336", fontSize: "18px" }}
													/>
												))}
											</Box>

											<Box sx={{ width: "350px", mt: "5px" }}>
												<Typography
													sx={{
														fontSize: "13px",
													}}
												>
													{row.review}
												</Typography>
											</Box>
										</Box>
									</TableCell>

									<TableCell
										sx={{
											padding: "14px 20px",
											fontSize: "14px",
											verticalAlign: "top",
										}}
										className="border-bottom"
									>
										${row.date}
										<Typography
											sx={{
												fontSize: "13px",
											}}
										>
											{row.time}
										</Typography>
									</TableCell>

									<TableCell
										sx={{
											borderBottom: "1px solid #eceef2",
											padding: "14px 20px",
											verticalAlign: "top",
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
											verticalAlign: "top",
										}}
										className="text-black border-bottom"
									>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
											}}
										>
											<Tooltip title="Approved">
												<IconButton
													aria-label="view"
													color="primary"
													sx={{ padding: "5px" }}
												>
													<i
														className="material-symbols-outlined"
														style={{ fontSize: "16px" }}
													>
														download_done
													</i>
												</IconButton>
											</Tooltip>

											<Tooltip title="Reply">
												<IconButton
													aria-label="edit"
													color="secondary"
													sx={{ padding: "5px" }}
												>
													<i
														className="material-symbols-outlined"
														style={{ fontSize: "16px" }}
													>
														reply
													</i>
												</IconButton>
											</Tooltip>

											<Tooltip title="Delete">
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
											</Tooltip>
										</Box>
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

export default ManageReviews;
