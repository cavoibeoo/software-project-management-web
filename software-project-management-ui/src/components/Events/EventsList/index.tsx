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
import NextLink from "next/link";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/components/Events/EventsList/Search.module.css";
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
	eventID: string,
	eventImage: string,
	eventName: string,
	dateAndTime: string,
	location: string,
	organizer: string,
	status: string,
	detailsLink: string
) {
	return {
		eventID,
		eventImage,
		eventName,
		dateAndTime,
		location,
		organizer,
		status,
		detailsLink,
	};
}

const rows = [
	createData(
		"JAN-258",
		"/images/events/event1.jpg",
		"Annual Conference 2024",
		"01 Dec 2024 09:00 AM",
		"Convention Center",
		"ABC Corporation",
		"happening",
		"/events/details/"
	),
	createData(
		"JAN-257",
		"/images/events/event2.jpg",
		"Leadership Summit 2",
		"10 Dec 2024 03:00 AM",
		"Online",
		"Marketing Pros",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-256",
		"/images/events/event3.jpg",
		"Product Launch Webinar",
		"15 Dec 2024 06:00 PM",
		"City Sky Lounge",
		"Tech Solutions Inc.",
		"past",
		"/events/details/"
	),
	createData(
		"JAN-255",
		"/images/events/event4.jpg",
		"AI in Healthcare Symposium",
		"20 Dec 2024 09:00 AM",
		"Training Center",
		"Startup Hub",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-254",
		"/images/events/event5.jpg",
		"Tech Summit 2024",
		"25 Dec 2024 02:30 PM",
		"Tech Park Auditorium",
		"Community Foundation",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-253",
		"/images/events/event6.jpg",
		"Startup Pitch Day",
		"30 Dec 2024 11:00 AM",
		"Grand Hotel Ballroom",
		"FutureTech Solution",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-252",
		"/images/events/event7.jpg",
		"Workshop: Digital Marketing",
		"01 Jan 2024 07:00 AM",
		"Innovation Hub",
		"Leadership Institute",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-251",
		"/images/events/event8.jpg",
		"Charity Gala Dinner",
		"10 Jan 2024 03:00PM",
		"Medical Center",
		"XYZ Innovations",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-250",
		"/images/events/event9.jpg",
		"Web Development Semina",
		"20 Jan 2024 01:00 PM",
		"Corporate HQ",
		"DTech Institute",
		"past",
		"/events/details/"
	),
	createData(
		"JAN-249",
		"/images/events/event10.jpg",
		"Networking Mixer",
		"30 Jan 2024 10:00 AM",
		"Online",
		"ABC Corporation",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-248",
		"/images/events/event1.jpg",
		"Annual Conference 2024",
		"01 Dec 2024 09:00 AM",
		"Convention Center",
		"ABC Corporation",
		"happening",
		"/events/details/"
	),
	createData(
		"JAN-247",
		"/images/events/event4.jpg",
		"AI in Healthcare Symposium",
		"20 Dec 2024 09:00 AM",
		"Training Center",
		"Startup Hub",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-246",
		"/images/events/event5.jpg",
		"Tech Summit 2024",
		"25 Dec 2024 02:30 PM",
		"Tech Park Auditorium",
		"Community Foundation",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-245",
		"/images/events/event2.jpg",
		"Leadership Summit 2",
		"10 Dec 2024 03:00 AM",
		"Online",
		"Marketing Pros",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-244",
		"/images/events/event3.jpg",
		"Product Launch Webinar",
		"15 Dec 2024 06:00 PM",
		"City Sky Lounge",
		"Tech Solutions Inc.",
		"past",
		"/events/details/"
	),
	createData(
		"JAN-243",
		"/images/events/event6.jpg",
		"Startup Pitch Day",
		"30 Dec 2024 11:00 AM",
		"Grand Hotel Ballroom",
		"FutureTech Solution",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-242",
		"/images/events/event8.jpg",
		"Charity Gala Dinner",
		"10 Jan 2024 03:00PM",
		"Medical Center",
		"XYZ Innovations",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-241",
		"/images/events/event7.jpg",
		"Workshop: Digital Marketing",
		"01 Jan 2024 07:00 AM",
		"Innovation Hub",
		"Leadership Institute",
		"upcoming",
		"/events/details/"
	),
	createData(
		"JAN-240",
		"/images/events/event9.jpg",
		"Web Development Semina",
		"20 Jan 2024 01:00 PM",
		"Corporate HQ",
		"DTech Institute",
		"past",
		"/events/details/"
	),
	createData(
		"JAN-239",
		"/images/events/event10.jpg",
		"Networking Mixer",
		"30 Jan 2024 10:00 AM",
		"Online",
		"ABC Corporation",
		"upcoming",
		"/events/details/"
	),
].sort((b, a) => (a.eventID < b.eventID ? -1 : 1));

const EventsList: React.FC = () => {
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
								placeholder="Search event here..."
							/>
						</Box>

						<NextLink href="/events/create-an-event">
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
								<AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New
								Event
							</Button>
						</NextLink>
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
										Event ID
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Event
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Date and Time
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Location
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Organizer
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
									<TableRow key={row.eventID}>
										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.eventID}
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
														src={row.eventImage}
														alt="Product"
														width={40}
														height={26}
														style={{ borderRadius: "7px" }}
													/>
												</Box>

												<Box>
													<NextLink href={row.detailsLink}>
														<Typography
															sx={{
																fontSize: "15px",
																fontWeight: "500",
															}}
															className="text-black"
														>
															{row.eventName}
														</Typography>
													</NextLink>
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
											{row.dateAndTime}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.location}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.organizer}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
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
												<NextLink href={row.detailsLink}>
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
												</NextLink>

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
										<TableCell colSpan={10} />
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
										colSpan={10}
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

export default EventsList;
