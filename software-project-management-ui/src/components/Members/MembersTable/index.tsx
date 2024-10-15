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
	Checkbox,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/components/Members/MembersTable/Search.module.css";

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
	id: string,
	memberImage: string,
	memberName: string,
	email: string,
	phone: string,
	location: string,
	joiningDate: string,
	lastActive: string
) {
	return {
		id,
		memberImage,
		memberName,
		email,
		phone,
		location,
		joiningDate,
		lastActive,
	};
}

const rows = [
	createData(
		"#JAN-820",
		"/images/users/user6.jpg",
		"Oliver Khan",
		"oliver@sine.com",
		"+1 555-123-4567",
		"Washington D.C",
		"10 Oct 2024",
		"01 Dec 2024 08:23 AM"
	),
	createData(
		"#JAN-819",
		"/images/users/user7.jpg",
		"Carolyn Barnes",
		"carolyn@sine.com",
		"+1 555-987-6543",
		"Chicago",
		"11 Sep 2024",
		"02 Dec 2024 05:09 PM"
	),
	createData(
		"#JAN-818",
		"/images/users/user8.jpg",
		"Donna Miller",
		"donna@sine.com",
		"+1 555-456-7890",
		"Oklahoma City",
		"12 Aug 2024",
		"03 Dec 2024 09:30 AM"
	),
	createData(
		"#JAN-817",
		"/images/users/user9.jpg",
		"Barbara Cross",
		"barbara@sine.com",
		"+1 555-369-7878",
		"San Diego",
		"13 Jul 2024",
		"04 Dec 2024 10:22 AM"
	),
	createData(
		"#JAN-816",
		"/images/users/user10.jpg",
		"Rebecca Block",
		"rebecca@sine.com",
		"+1 555-658-4488",
		"Los Angeles",
		"14 Jun 2024",
		"05 Dec 2024 08:49 AM"
	),
	createData(
		"#JAN-815",
		"/images/users/user11.jpg",
		"Ramiro McCarty",
		"ramiro@sine.com",
		"+1 555-558-9966",
		"Las Vegas",
		"15 May 2024",
		"06 Dec 2024 04:35 PM"
	),
	createData(
		"#JAN-814",
		"/images/users/user12.jpg",
		"Robert Fairweather",
		"robert@sine.com",
		"+1 555-357-5888",
		"San Francisco",
		"16 Apr 2024",
		"07 Dec 2024 06:13 PM"
	),
	createData(
		"#JAN-813",
		"/images/users/user13.jpg",
		"Marcelino Haddock",
		"marcelino@sine.com",
		"+1 555-456-8877",
		"Washington D.C",
		"17 Mar 2024",
		"08 Dec 2024 02:20 AM"
	),
	createData(
		"#JAN-812",
		"/images/users/user14.jpg",
		"Thomas Wilson",
		"thomas@sine.com",
		"+1 555-622-4488",
		"San Diego",
		"18 Feb 2024",
		"09 Dec 2024 12:09 AM"
	),
	createData(
		"#JAN-811",
		"/images/users/user15.jpg",
		"Nathaniel Hulsey",
		"nathaniel@sine.com",
		"+1 555-225-4488",
		"Chicago",
		"19 Jan 2024",
		"10 Dec 2024 06:03 PM"
	),
	createData(
		"#JAN-810",
		"/images/users/user15.jpg",
		"Nathaniel Hulsey",
		"nathaniel@sine.com",
		"+1 555-225-4488",
		"Chicago",
		"19 Jan 2024",
		"10 Dec 2024 06:03 PM"
	),
	createData(
		"#JAN-809",
		"/images/users/user14.jpg",
		"Thomas Wilson",
		"thomas@sine.com",
		"+1 555-622-4488",
		"San Diego",
		"18 Feb 2024",
		"09 Dec 2024 12:09 AM"
	),
	createData(
		"#JAN-808",
		"/images/users/user13.jpg",
		"Marcelino Haddock",
		"marcelino@sine.com",
		"+1 555-456-8877",
		"Washington D.C",
		"17 Mar 2024",
		"08 Dec 2024 02:20 AM"
	),
	createData(
		"#JAN-807",
		"/images/users/user12.jpg",
		"Robert Fairweather",
		"robert@sine.com",
		"+1 555-357-5888",
		"San Francisco",
		"16 Apr 2024",
		"07 Dec 2024 06:13 PM"
	),
	createData(
		"#JAN-806",
		"/images/users/user11.jpg",
		"Ramiro McCarty",
		"ramiro@sine.com",
		"+1 555-558-9966",
		"Las Vegas",
		"15 May 2024",
		"06 Dec 2024 04:35 PM"
	),
	createData(
		"#JAN-805",
		"/images/users/user10.jpg",
		"Rebecca Block",
		"rebecca@sine.com",
		"+1 555-658-4488",
		"Los Angeles",
		"14 Jun 2024",
		"05 Dec 2024 08:49 AM"
	),
	createData(
		"#JAN-804",
		"/images/users/user9.jpg",
		"Barbara Cross",
		"barbara@sine.com",
		"+1 555-369-7878",
		"San Diego",
		"13 Jul 2024",
		"04 Dec 2024 10:22 AM"
	),
	createData(
		"#JAN-803",
		"/images/users/user8.jpg",
		"Donna Miller",
		"donna@sine.com",
		"+1 555-456-7890",
		"Oklahoma City",
		"12 Aug 2024",
		"03 Dec 2024 09:30 AM"
	),
	createData(
		"#JAN-802",
		"/images/users/user7.jpg",
		"Carolyn Barnes",
		"carolyn@sine.com",
		"+1 555-987-6543",
		"Chicago",
		"11 Sep 2024",
		"02 Dec 2024 05:09 PM"
	),
	createData(
		"#JAN-801",
		"/images/users/user6.jpg",
		"Oliver Khan",
		"oliver@sine.com",
		"+1 555-123-4567",
		"Washington D.C",
		"10 Oct 2024",
		"01 Dec 2024 08:23 AM"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const MembersTable: React.FC = () => {
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
				<Box mb="25px">
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
					<Table sx={{ minWidth: 750 }} aria-label="Recent Leads Table">
						<TableHead className="bg-f6f7f9">
							<TableRow
								sx={{
									"& th": {
										fontWeight: "500",
										padding: "10px 24px",
										fontSize: "14px",
									},
								}}
							>
								<TableCell className="text-black border-bottom">ID</TableCell>

								<TableCell className="text-black border-bottom">
									Member
								</TableCell>

								<TableCell className="text-black border-bottom">
									Email
								</TableCell>

								<TableCell className="text-black border-bottom">
									Phone
								</TableCell>

								<TableCell className="text-black border-bottom">
									Location
								</TableCell>

								<TableCell className="text-black border-bottom">
									Joining Date
								</TableCell>

								<TableCell className="text-black border-bottom">
									Last Active
								</TableCell>

								<TableCell className="text-black border-bottom">
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
								<TableRow
									key={row.id}
									sx={{
										"& td": {
											padding: "15px 20px",
											fontSize: "14px",
										},
									}}
								>
									<TableCell className="border-bottom">{row.id}</TableCell>

									<TableCell className="text-black border-bottom">
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
											</Box>
										</Box>
									</TableCell>

									<TableCell className="border-bottom">{row.email}</TableCell>

									<TableCell className="border-bottom">{row.phone}</TableCell>

									<TableCell className="border-bottom">
										{row.location}
									</TableCell>

									<TableCell className="border-bottom">
										{row.joiningDate}
									</TableCell>

									<TableCell className="border-bottom">
										{row.lastActive}
									</TableCell>

									<TableCell className="border-bottom">
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

export default MembersTable;
