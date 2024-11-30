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
	TableHead,
	Checkbox,
	TableSortLabel,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
	TextField,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import RoleMenuDialog from "../RoleMenuDialog";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
	avatar: string,
	email: string,
	createDate: Date,
	department: string,
	jobTitle: string,
	organization: string
) {
	return {
		id,
		avatar,
		email,
		createDate,
		department,
		jobTitle,
		organization,
	};
}

const rows = [
	createData(
		1,
		"/images/avt_quang.jpg",
		"quangcuatuonglai@gmail.com",
		new Date("2023-11-26"),
		"UTE",
		"Frontend Developer",
		"Sine Corp"
	),
	createData(
		2,
		"/images/cavoibeoLogo.png",
		"cavoibeo@gmail.com",
		new Date("2023-11-25"),
		"UTE",
		"Fullstack Developer",
		"Sine Corp"
	),
	createData(
		3,
		"/images/users/user3.jpg",
		"yicheal@sine.com",
		new Date("2023-11-23"),
		"UTE",
		"Backend Developer",
		"Sine Corp"
	),
	createData(
		4,
		"/images/users/user3.jpg",
		"micheal@sine.com",
		new Date("2023-11-23"),
		"UTE",
		"Backend Developer",
		"Sine Corp"
	),
	createData(
		5,
		"/images/users/user6.jpg",
		"jack@sine.com",
		new Date("2023-11-23"),
		"UTE",
		"Backend Developer",
		"Sine Corp"
	),
	createData(
		6,
		"/images/users/user4.jpg",
		"john@sine.com",
		new Date("2023-11-23"),
		"UTE",
		"Backend Developer",
		"Sine Corp"
	),
	createData(
		7,
		"/images/users/user5.jpg",
		"jane@sine.com",
		new Date("2023-11-23"),
		"UTE",
		"Backend Developer",
		"Sine Corp"
	),
	// ... thêm dữ liệu khác nếu cần ...
].sort((b, a) => (a.id < b.id ? -1 : 1));

const UserTable: React.FC = () => {
	// Select
	const [select, setSelect] = React.useState("");
	const handleChange = (event: SelectChangeEvent) => {
		setSelect(event.target.value as string);
	};

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

	const [order, setOrder] = React.useState<"asc" | "desc">("asc");
	const [orderBy, setOrderBy] = React.useState<string>("email");

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: string
	) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const sortedRows = React.useMemo(() => {
		return rows.slice().sort((a, b) => {
			let comparison = 0;
			if (orderBy === "email") {
				comparison = a.email.localeCompare(b.email);
			} else if (orderBy === "createDate") {
				comparison = a.createDate.getTime() - b.createDate.getTime();
			} else if (orderBy === "department") {
				comparison = a.department.localeCompare(b.department);
			} else if (orderBy === "jobTitle") {
				comparison = a.jobTitle.localeCompare(b.jobTitle);
			} else if (orderBy === "organization") {
				comparison = a.organization.localeCompare(b.organization);
			}

			return order === "asc" ? comparison : -comparison;
		});
	}, [order, orderBy, rows]);

	// State for dialogs
	const [openDialog, setOpenDialog] = React.useState<{
		type: string;
		open: boolean;
		rowId: number | null;
	}>({ type: "", open: false, rowId: null });

	const handleOpenDialog = (type: string, rowId: number) => {
		setOpenDialog({ type, open: true, rowId });
	};

	const handleCloseDialog = () => {
		setOpenDialog({ type: "", open: false, rowId: null });
	};

	// State for search
	const [searchTerm, setSearchTerm] = React.useState("");

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	// Filtered rows based on search term
	const filteredRows = React.useMemo(() => {
		return rows.filter((row) =>
			row.email.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [searchTerm, rows]);

	const sortedAndFilteredRows = React.useMemo(() => {
		return filteredRows.slice().sort((a, b) => {
			let comparison = 0;
			if (orderBy === "email") {
				comparison = a.email.localeCompare(b.email);
			} else if (orderBy === "createDate") {
				comparison = a.createDate.getTime() - b.createDate.getTime();
			} else if (orderBy === "department") {
				comparison = a.department.localeCompare(b.department);
			} else if (orderBy === "jobTitle") {
				comparison = a.jobTitle.localeCompare(b.jobTitle);
			} else if (orderBy === "organization") {
				comparison = a.organization.localeCompare(b.organization);
			}

			return order === "asc" ? comparison : -comparison;
		});
	}, [order, orderBy, filteredRows]);

	// Get current row data
	const currentRow = rows.find((row) => row.id === openDialog.rowId);

	return (
		<>
			<Box minHeight="65vh">
				{/* Search Box */}
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						mb: "25px",
						mt: "10px",
					}}
				>
					<RoleMenuDialog />
					<TextField
						label="Search"
						variant="outlined"
						size="small"
						value={searchTerm}
						onChange={handleSearchChange}
						sx={{ width: "300px" }}
					/>
				</Box>

				{/* Dialog for actions */}
				<Dialog open={openDialog.open} onClose={handleCloseDialog}>
					<DialogTitle>
						{openDialog.type.charAt(0).toUpperCase() + openDialog.type.slice(1)}{" "}
						User
					</DialogTitle>
					<DialogContent>
						{openDialog.type === "view" && currentRow && (
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: "46px",
									width: "100%",
									padding: "0 20px",
									justifyContent: "space-between",
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "center",
										gap: "16px",
									}}
								>
									<Image
										src={currentRow.avatar}
										alt="User Avatar"
										width={100}
										height={100}
										style={{ borderRadius: "50%" }}
									/>
									<Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
										{currentRow.email.split("@")[0]}
									</Typography>
								</Box>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										textAlign: "left",
										width: "100%",
										mt: 2,
									}}
								>
									<Typography variant="body1" sx={{ mb: 1 }}>
										<strong>Email:</strong> {currentRow.email}
									</Typography>
									<Typography variant="body1" sx={{ mb: 1 }}>
										<strong>Create Date:</strong>{" "}
										{currentRow.createDate.toLocaleDateString()}
									</Typography>
									<Typography variant="body1" sx={{ mb: 1 }}>
										<strong>Department:</strong> {currentRow.department}
									</Typography>
									<Typography variant="body1" sx={{ mb: 1 }}>
										<strong>Job Title:</strong> {currentRow.jobTitle}
									</Typography>
									<Typography variant="body1" sx={{ mb: 1 }}>
										<strong>Organization:</strong> {currentRow.organization}
									</Typography>
								</Box>
							</Box>
						)}
						{openDialog.type === "edit" && currentRow && (
							<Box component="form" noValidate autoComplete="off">
								<TextField
									margin="dense"
									label="Email"
									type="email"
									fullWidth
									defaultValue={currentRow.email}
								/>
								<TextField
									margin="dense"
									label="Department"
									type="text"
									fullWidth
									defaultValue={currentRow.department}
								/>
								<TextField
									margin="dense"
									label="Job Title"
									type="text"
									fullWidth
									defaultValue={currentRow.jobTitle}
								/>
								<TextField
									margin="dense"
									label="Organization"
									type="text"
									fullWidth
									defaultValue={currentRow.organization}
								/>
							</Box>
						)}
						{openDialog.type === "ban" && (
							<DialogContentText>
								Are you sure you want to ban user name:{" "}
								<span style={{ fontWeight: "800" }}>{currentRow?.email}</span>?
							</DialogContentText>
						)}
					</DialogContent>
					<DialogActions>
						<Button onClick={handleCloseDialog} color="primary">
							Cancel
						</Button>
						<Button onClick={handleCloseDialog} color="primary" autoFocus>
							{openDialog.type === "ban" ? "Confirm" : "Close"}
						</Button>
					</DialogActions>
				</Dialog>

				<Card
					sx={{
						boxShadow: "none",
						borderRadius: "7px",
						mb: "25px",
						padding: { xs: "18px", sm: "20px", lg: "25px" },
					}}
					className="rmui-card"
				>
					<Typography variant="h6" sx={{ mb: 2 }}>
						Recent Users
					</Typography>
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
							<Table sx={{ minWidth: 750 }} aria-label="Recent Leads Table">
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
											<TableSortLabel
												active={orderBy === "email"}
												direction={orderBy === "email" ? order : "asc"}
												onClick={(event) => handleRequestSort(event, "email")}
											>
												User
											</TableSortLabel>
										</TableCell>
										<TableCell
											sx={{
												fontWeight: "500",
												padding: "10px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											<TableSortLabel
												active={orderBy === "createDate"}
												direction={orderBy === "createDate" ? order : "asc"}
												onClick={(event) =>
													handleRequestSort(event, "createDate")
												}
											>
												Email
											</TableSortLabel>
										</TableCell>
										<TableCell
											sx={{
												fontWeight: "500",
												padding: "10px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											<TableSortLabel
												active={orderBy === "department"}
												direction={orderBy === "department" ? order : "asc"}
												onClick={(event) =>
													handleRequestSort(event, "department")
												}
											>
												Create Date
											</TableSortLabel>
										</TableCell>
										<TableCell
											sx={{
												fontWeight: "500",
												padding: "10px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											<TableSortLabel
												active={orderBy === "jobTitle"}
												direction={orderBy === "jobTitle" ? order : "asc"}
												onClick={(event) =>
													handleRequestSort(event, "jobTitle")
												}
											>
												Organization
											</TableSortLabel>
										</TableCell>
										<TableCell
											sx={{
												fontWeight: "500",
												padding: "10px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											<TableSortLabel
												active={orderBy === "organization"}
												direction={orderBy === "organization" ? order : "asc"}
												onClick={(event) =>
													handleRequestSort(event, "organization")
												}
											>
												Job Title
											</TableSortLabel>
										</TableCell>
										<TableCell
											sx={{
												fontWeight: "500",
												padding: "10px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											Actions
										</TableCell>
									</TableRow>
								</TableHead>

								<TableBody>
									{(rowsPerPage > 0
										? sortedAndFilteredRows.slice(
												page * rowsPerPage,
												page * rowsPerPage + rowsPerPage
											)
										: sortedAndFilteredRows
									).map((row) => (
										<TableRow key={row.id}>
											<TableCell
												sx={{ padding: "15px 20px", fontSize: "14px" }}
												className="text-black border-bottom"
											>
												<Box
													sx={{
														display: "flex",
														alignItems: "center",
														gap: "8px",
													}}
												>
													<Image
														src={row.avatar}
														alt="Avatar"
														width={40}
														height={40}
														style={{ borderRadius: "50%" }}
													/>
													<Typography
														sx={{ fontSize: "15px", fontWeight: "500" }}
														className="text-black"
													>
														{row.email.split("@")[0]}
													</Typography>
												</Box>
											</TableCell>
											<TableCell
												sx={{ padding: "15px 20px", fontSize: "14px" }}
												className="text-black border-bottom"
											>
												{row.email}
											</TableCell>
											<TableCell
												sx={{ padding: "15px 20px", fontSize: "14px" }}
												className="text-black border-bottom"
											>
												{row.createDate.toLocaleDateString()}
											</TableCell>
											<TableCell
												sx={{ padding: "15px 20px", fontSize: "14px" }}
												className="text-black border-bottom"
											>
												{row.department}
											</TableCell>
											<TableCell
												sx={{ padding: "15px 20px", fontSize: "14px" }}
												className="text-black border-bottom"
											>
												{row.jobTitle}
											</TableCell>
											<TableCell
												sx={{ padding: "15px 20px", fontSize: "14px" }}
												className="text-black border-bottom"
											>
												<Box sx={{ display: "flex", gap: "8px" }}>
													<IconButton
														aria-label="view"
														color="primary"
														sx={{ padding: "5px" }}
														onClick={() => handleOpenDialog("view", row.id)}
													>
														<i
															className="material-symbols-outlined"
															style={{ fontSize: "16px" }}
														>
															visibility
														</i>
													</IconButton>
													{/* <IconButton
														aria-label="edit"
														color="secondary"
														sx={{ padding: "5px" }}
														onClick={() => handleOpenDialog("edit", row.id)}
													>
														<i
															className="material-symbols-outlined"
															style={{ fontSize: "16px" }}
														>
															edit
														</i>
													</IconButton> */}
													<IconButton
														aria-label="ban"
														color="error"
														sx={{ padding: "5px" }}
														onClick={() => handleOpenDialog("ban", row.id)}
													>
														<span className="material-symbols-outlined">
															block
														</span>
													</IconButton>
												</Box>
											</TableCell>
										</TableRow>
									))}
									{emptyRows > 0 && (
										<TableRow style={{ height: 53 * emptyRows }}>
											<TableCell colSpan={6} />
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
											colSpan={6}
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
			</Box>
		</>
	);
};

export default UserTable;
