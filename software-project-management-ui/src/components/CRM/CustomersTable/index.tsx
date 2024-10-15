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
	Checkbox,
	MenuItem,
	Menu,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import styles from "@/components/CRM/Search.module.css";
import Image from "next/image";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
	customerImg: string,
	customerName: string,
	email: string,
	phone: string,
	lastLogin: string,
	received: string,
	due: string,
	status: string
) {
	return {
		id,
		customerImg,
		customerName,
		email,
		phone,
		lastLogin,
		received,
		due,
		status,
	};
}

const rows = [
	createData(
		"#854",
		"/images/users/user6.jpg",
		"Oliver Khan",
		"oliver@sine.com",
		"+1 555-123-4567",
		"19 Jun 2024",
		"$6,855",
		"$125",
		"active"
	),
	createData(
		"#853",
		"/images/users/user7.jpg",
		"Carolyn Barnes",
		"carolyn@sine.com",
		"+1 555-987-6543",
		"18 Jun 2024",
		"$258",
		"$99",
		"active"
	),
	createData(
		"#852",
		"/images/users/user8.jpg",
		"Donna Miller",
		"donna@sine.com",
		"+1 555-456-7890",
		"17 Jun 2024",
		"$3,890",
		"$0",
		"deactive"
	),
	createData(
		"#851",
		"/images/users/user9.jpg",
		"Barbara Cros",
		"barbara@sine.com",
		"+1 555-369-7878",
		"16 Jun 2024",
		"$2,500",
		"$279",
		"active"
	),
	createData(
		"#850",
		"/images/users/user10.jpg",
		"Rebecca Block",
		"rebecca@sine.com",
		"+1 555-658-4488",
		"15 Jun 2024",
		"$8,200",
		"$0",
		"deactive"
	),
	createData(
		"#849",
		"/images/users/user11.jpg",
		"Ramiro McCarty",
		"ramiro@sine.com",
		"+1 555-558-9966",
		"14 Jun 2024",
		"$640",
		"$46",
		"active"
	),
	createData(
		"#848",
		"/images/users/user12.jpg",
		"Robert Fairweather",
		"robert@sine.com",
		"+1 555-357-5888",
		"13 Jun 2024",
		"$9,100",
		"$184",
		"active"
	),
	createData(
		"#847",
		"/images/users/user13.jpg",
		"Marcelino Haddock",
		"marcelino@sine.com",
		"+1 555-456-8877",
		"12 Jun 2024",
		"$7,300",
		"$166",
		"active"
	),
	createData(
		"#846",
		"/images/users/user14.jpg",
		"Thomas Wilson",
		"thomas@sine.com",
		"+1 555-622-4488",
		"11 Jun 2024",
		"$6,600",
		"$0",
		"deactive"
	),
	createData(
		"#845",
		"/images/users/user15.jpg",
		"Nathaniel Hulsey",
		"nathaniel@sine.com",
		"+1 555-225-4488",
		"10 Jun 2024",
		"$2,800",
		"$55",
		"deactive"
	),
	createData(
		"#844",
		"/images/users/user16.jpg",
		"Jake Khan",
		"jake@sine.com",
		"+1 555-123-4567",
		"19 Jun 2024",
		"$2,800",
		"$55",
		"active"
	),
	createData(
		"#843",
		"/images/users/user17.jpg",
		"Noah Barnes",
		"noah@sine.com",
		"+1 555-987-6543",
		"18 Jun 2024",
		"$6,600",
		"$0",
		"active"
	),
	createData(
		"#842",
		"/images/users/user18.jpg",
		"James Miller",
		"james@sine.com",
		"+1 555-456-7890",
		"17 Jun 2024",
		"$7,300",
		"$166",
		"deactive"
	),
	createData(
		"#841",
		"/images/users/user19.jpg",
		"Connor Cros",
		"connor@sine.com",
		"+1 555-369-7878",
		"16 Jun 2024",
		"$9,100",
		"$184",
		"active"
	),
	createData(
		"#840",
		"/images/users/user20.jpg",
		"Liam Block",
		"liam@sine.com",
		"+1 555-658-4488",
		"15 Jun 2024",
		"$640",
		"$46",
		"deactive"
	),
	createData(
		"#839",
		"/images/users/user21.jpg",
		"Harry McCarty",
		"harry@sine.com",
		"+1 555-558-9966",
		"14 Jun 2024",
		"$8,200",
		"$0",
		"active"
	),
	createData(
		"#838",
		"/images/users/user22.jpg",
		"Harry Fairweather",
		"harry@sine.com",
		"+1 555-357-5888",
		"13 Jun 2024",
		"$2,500",
		"$279",
		"active"
	),
	createData(
		"#837",
		"/images/users/user23.jpg",
		"Jacob Haddock",
		"jacob@sine.com",
		"+1 555-456-8877",
		"12 Jun 2024",
		"$3,890",
		"$0",
		"active"
	),
	createData(
		"#836",
		"/images/users/user24.jpg",
		"Jacob Wilson",
		"jacob@sine.com",
		"+1 555-622-4488",
		"11 Jun 2024",
		"$258",
		"$99",
		"deactive"
	),
	createData(
		"#835",
		"/images/users/user25.jpg",
		"Michael Hulsey",
		"michael@sine.com",
		"+1 555-225-4488",
		"10 Jun 2024",
		"$6,855",
		"$125",
		"deactive"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const CustomersTable: React.FC = () => {
	// Dropdown
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
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
					<Box
						component="form"
						className={styles.searchBox}
						sx={{
							width: { sm: "265px" },
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

					<Box>
						<IconButton
							onClick={handleClick}
							size="small"
							aria-controls={open ? "account-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
						>
							All <KeyboardArrowDownIcon sx={{ fontSize: "25px" }} />
						</IconButton>

						<Menu
							anchorEl={anchorEl}
							id="account-menu"
							open={open}
							onClose={handleClose}
							onClick={handleClose}
							PaperProps={{
								elevation: 0,

								sx: {
									overflow: "visible",
									boxShadow: "0 4px 45px #0000001a",
									mt: 0,
									"& .MuiAvatar-root": {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
								},
							}}
							transformOrigin={{ horizontal: "right", vertical: "top" }}
							anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
						>
							<MenuItem>All</MenuItem>
							<MenuItem>Active</MenuItem>
							<MenuItem>Deactive</MenuItem>
						</Menu>
					</Box>
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
						<Table sx={{ minWidth: 1350 }} aria-label="Table">
							<TableHead className="bg-primary-50">
								<TableRow>
									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 24px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										#
									</TableCell>

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
										Received
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Due
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
												padding: "5px 13px",
												fontSize: "14px",
												width: "65px",
											}}
											className="border-bottom"
										>
											<Checkbox {...label} sx={{ padding: "8px" }} />
										</TableCell>

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
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
													gap: "12px",
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
															fontSize: { xs: "14px", lg: "15px" },
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
											className="text-black border-bottom"
										>
											{row.email}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.phone}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.lastLogin}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.received}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.due}
										</TableCell>

										<TableCell
											sx={{
												padding: "15px 20px",
											}}
											className="border-bottom"
										>
											<Box
												className={`sine-badge ${row.status}`}
												sx={{ textTransform: "capitalize" }}
											>
												{row.status}
											</Box>
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

export default CustomersTable;
