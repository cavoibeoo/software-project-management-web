"use client";

import React from "react";
import {
	Card,
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Paper,
	IconButton,
	Link,
} from "@mui/material";

function createData(
	id: string,
	ticketTitle: string,
	requester: string,
	assignedTo: string,
	createdDate: string,
	dueDate: string,
	priority: string,
	status: string,
	viewDetails: string
) {
	return {
		id,
		ticketTitle,
		requester,
		assignedTo,
		createdDate,
		dueDate,
		priority,
		status,
		viewDetails,
	};
}

const rows = [
	createData(
		"#JAN-854",
		"Network Infrastructure",
		"Walter Frazier",
		"Oliver Clark",
		"20 Apr 2024",
		"30 Apr 2024",
		"High",
		"finished",
		"/helpdesk/tickets/details"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const Ticket: React.FC = () => {
	// Table
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
				{/* Table */}
				<TableContainer
					component={Paper}
					sx={{
						boxShadow: "none",
						borderRadius: "7px",
					}}
					className="rmui-table border"
				>
					<Table sx={{ minWidth: 1100 }} aria-label="Table">
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
										{row.ticketTitle}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.requester}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.assignedTo}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.createdDate}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.dueDate}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.priority}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
										}}
										className="border-bottom"
									>
										<div
											className={`sine-badge ${row.status}`}
											style={{ textTransform: "capitalize" }}
										>
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
											</Link>

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
					</Table>
				</TableContainer>
			</Card>
		</>
	);
};

export default Ticket;
