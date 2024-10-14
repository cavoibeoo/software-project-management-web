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
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import styles from "@/components/Users/Search.module.css";
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
	userId: string,
	userImage: string,
	userName: string,
	email: string,
	location: string,
	phone: string,
	projects: number,
	joinDate: string
) {
	return {
		userId,
		userImage,
		userName,
		email,
		location,
		phone,
		projects,
		joinDate,
	};
}

const rows = [
	createData(
		"#JAN-158",
		"/images/users/user6.jpg",
		"Marcia Baker",
		"marcia@sine.com",
		"Washington D.C",
		"+1 555-445-4455",
		6,
		"01 Dec 2024"
	),
	createData(
		"#JAN-157",
		"/images/users/user7.jpg",
		"Carolyn Barnes",
		"carolyn@sine.com",
		"Chicago",
		"+1 555-455-9966",
		10,
		"02 Dec 2024"
	),
	createData(
		"#JAN-156",
		"/images/users/user8.jpg",
		"Donna Miller",
		"donna@sine.com",
		"San Diego",
		"+1 555-445-7788",
		4,
		"03 Dec 2024"
	),
	createData(
		"#JAN-155",
		"/images/users/user9.jpg",
		"Barbara Cros",
		"barbara@sine.com",
		"San Diego",
		"+1 555-445-778",
		4,
		"04 Dec 2024"
	),
	createData(
		"#JAN-154",
		"/images/users/user10.jpg",
		"Rebecca Block",
		"rebecca@sine.com",
		"Los Angeles",
		"+1 555-333-2288",
		2,
		"05 Dec 2024"
	),
	createData(
		"#JAN-153",
		"/images/users/user11.jpg",
		"Ramiro McCarty",
		"ramiro@sine.com",
		"Las Vegas",
		"+1 555-445-4455",
		8,
		"06 Dec 2024"
	),
	createData(
		"#JAN-152",
		"/images/users/user12.jpg",
		"Robert Fairweather",
		"robert@sine.com",
		"San Francisco",
		"+1 555-555-9922",
		6,
		"07 Dec 2024"
	),
	createData(
		"#JAN-151",
		"/images/users/user13.jpg",
		"Marcelino Haddock",
		"marcelino@sine.com",
		"Washington D.C",
		"+1 555-455-9966",
		9,
		"08 Dec 2024"
	),
	createData(
		"#JAN-150",
		"/images/users/user14.jpg",
		"Thomas Wilson",
		"thomas@sine.com",
		"San Dieg",
		"+1 555-333-2288",
		5,
		"09 Dec 2024"
	),
	createData(
		"#JAN-149",
		"/images/users/user15.jpg",
		"Nathaniel Hulsey",
		"nathaniel@sine.com",
		"Chicago",
		"+1 555-445-7788",
		6,
		"10 Dec 2024"
	),
	createData(
		"#JAN-148",
		"/images/users/user16.jpg",
		"Marcia Baker",
		"marcia@sine.com",
		"Washington D.C",
		"+1 555-543-4455",
		1,
		"11 Dec 2024"
	),
	createData(
		"#JAN-147",
		"/images/users/user17.jpg",
		"Carolyn Barnes",
		"carolyn@sine.com",
		"Chicago",
		"+1 555-763-9966",
		2,
		"12 Dec 2024"
	),
	createData(
		"#JAN-146",
		"/images/users/user18.jpg",
		"Donna Miller",
		"donna@sine.com",
		"San Diego",
		"+1 555-237-7788",
		3,
		"13 Dec 2024"
	),
	createData(
		"#JAN-145",
		"/images/users/user19.jpg",
		"Barbara Cros",
		"barbara@sine.com",
		"San Diego",
		"+1 555-963-778",
		4,
		"14 Dec 2024"
	),
	createData(
		"#JAN-144",
		"/images/users/user20.jpg",
		"Rebecca Block",
		"rebecca@sine.com",
		"Los Angeles",
		"+1 555-946-2288",
		5,
		"15 Dec 2024"
	),
	createData(
		"#JAN-143",
		"/images/users/user21.jpg",
		"Ramiro McCarty",
		"ramiro@sine.com",
		"Las Vegas",
		"+1 555-456-4455",
		6,
		"16 Dec 2024"
	),
	createData(
		"#JAN-142",
		"/images/users/user22.jpg",
		"Robert Fairweather",
		"robert@sine.com",
		"San Francisco",
		"+1 555-247-9922",
		7,
		"17 Dec 2024"
	),
	createData(
		"#JAN-141",
		"/images/users/user23.jpg",
		"Marcelino Haddock",
		"marcelino@sine.com",
		"Washington D.C",
		"+1 555-456-9966",
		8,
		"18 Dec 2024"
	),
	createData(
		"#JAN-140",
		"/images/users/user24.jpg",
		"Thomas Wilson",
		"thomas@sine.com",
		"San Dieg",
		"+1 555-987-2288",
		9,
		"19 Dec 2024"
	),
	createData(
		"#JAN-139",
		"/images/users/user25.jpg",
		"Nathaniel Hulsey",
		"nathaniel@sine.com",
		"Chicago",
		"+1 555-345-7788",
		6,
		"20 Dec 2024"
	),
].sort((b, a) => (a.userId < b.userId ? -1 : 1));

const UsersList: React.FC = () => {
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
								placeholder="Search here..."
							/>
						</Box>

						<Link href="/users/add-user">
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
								User
							</Button>
						</Link>
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
							<Table sx={{ minWidth: 1250 }} aria-label="Table">
								<TableHead className="bg-primary-50">
									<TableRow>
										<TableCell
											sx={{
												fontWeight: "500",
												padding: "10px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											User ID
										</TableCell>

										<TableCell
											sx={{
												fontWeight: "500",
												padding: "10px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											User
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
											Projects
										</TableCell>

										<TableCell
											sx={{
												fontWeight: "500",
												padding: "10px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											Join Date
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
										<TableRow key={row.userId}>
											<TableCell
												sx={{
													padding: "14px 20px",
													fontSize: "14px",
												}}
												className="border-bottom"
											>
												{row.userId}
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
															src={row.userImage}
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
															{row.userName}
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
												{row.location}
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
												{row.projects}
											</TableCell>

											<TableCell
												sx={{
													padding: "14px 20px",
													fontSize: "14px",
												}}
												className="text-black border-bottom"
											>
												{row.joinDate}
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
				</Box>
			</Card>
		</>
	);
};

export default UsersList;
