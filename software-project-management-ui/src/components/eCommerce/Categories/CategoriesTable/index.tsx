"use client";

import React, { useState, FormEvent } from "react";
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
	InputLabel,
	MenuItem,
	FormControl,
	Dialog,
	DialogTitle,
	Grid,
	Button,
	TextField,
} from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import styles from "@/components/eCommerce/Categories/CategoriesTable/CategoriesTable.module.css";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

// Modal
interface BootstrapDialogTitleProps {
	children?: React.ReactNode;
	onClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

function BootstrapDialogTitle(props: BootstrapDialogTitleProps) {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};
// End Modal

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
	image: string,
	name: string,
	totalProducts: number,
	slug: string,
	description: string,
	status: string
) {
	return {
		id,
		image,
		name,
		totalProducts,
		slug,
		description,
		status,
	};
}

const rows = [
	createData(
		"1",
		"/images/products/product1.jpg",
		"Watch",
		54,
		"watch",
		"What is lorem ipsum?",
		"active"
	),
	createData(
		"2",
		"/images/products/product2.jpg",
		"Headphone",
		13,
		"headphone",
		"Why do we use it?",
		"active"
	),
	createData(
		"3",
		"/images/products/product3.jpg",
		"Mobile",
		42,
		"mobile",
		"Where does it come from?",
		"Deactive"
	),
	createData(
		"4",
		"/images/products/product4.jpg",
		"Speaker",
		42,
		"speaker",
		"Where does it come from?",
		"active"
	),
	createData(
		"5",
		"/images/products/product5.jpg",
		"Electronics",
		42,
		"slectronics",
		"Where does it come from?",
		"active"
	),
].sort((b, a) => (a.id < b.id ? -1 : 1));

const CategoriesTable: React.FC = () => {
	// Textarea
	const blue = {
		100: "#DAECFF",
		200: "#b6daff",
		400: "#3399FF",
		500: "#007FFF",
		600: "#0072E5",
		900: "#605DFF",
	};

	const grey = {
		50: "#F3F6F9",
		100: "#E5EAF2",
		200: "#DAE2ED",
		300: "#C7D0DD",
		400: "#B0B8C4",
		500: "#9DA8B7",
		600: "#6B7A90",
		700: "#434D5B",
		800: "#303740",
		900: "#1C2025",
	};

	const Textarea = styled(BaseTextareaAutosize)(
		({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 7px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: none;

    &:hover {
      border-color: ${blue[900]};
    }

    &:focus {
      border-color: ${blue[900]};
      box-shadow: none;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
	);

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

	// Modal
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// const data = new FormData(event.currentTarget);
		// console.log();
	};

	// Select
	const [status, setStatus] = useState("");
	const handleChangeStatus = (event: SelectChangeEvent) => {
		setStatus(event.target.value as string);
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
					<form className={styles.searchBox}>
						<label>
							<i className="material-symbols-outlined">search</i>
						</label>
						<input
							type="text"
							className={styles.inputSearch}
							placeholder="Search category here....."
						/>
					</form>

					<Button
						onClick={handleClickOpen}
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
						Category
					</Button>
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
					<Table sx={{ minWidth: 950 }} aria-label="Table">
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
									Image
								</TableCell>

								<TableCell
									sx={{
										fontWeight: "500",
										padding: "10px 20px",
										fontSize: "14px",
									}}
									className="text-black border-bottom"
								>
									Name
								</TableCell>

								<TableCell
									sx={{
										fontWeight: "500",
										padding: "10px 20px",
										fontSize: "14px",
									}}
									className="text-black border-bottom"
								>
									Total Products
								</TableCell>

								<TableCell
									sx={{
										fontWeight: "500",
										padding: "10px 20px",
										fontSize: "14px",
									}}
									className="text-black border-bottom"
								>
									Slug
								</TableCell>

								<TableCell
									sx={{
										fontWeight: "500",
										padding: "10px 20px",
										fontSize: "14px",
									}}
									className="text-black border-bottom"
								>
									Description
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
										<Image
											src={row.image}
											alt="img"
											width={50}
											height={50}
											style={{ borderRadius: "100px" }}
										/>
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										{row.name}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.totalProducts}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.slug}
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										{row.description}
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

			{/* Modal */}
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				className="rmu-modal"
			>
				<Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							background: "#f6f7f9",
							padding: { xs: "15px 20px", md: "25px" },
						}}
						className="rmu-modal-header"
					>
						<Typography
							id="modal-modal-title"
							variant="h6"
							sx={{
								fontWeight: "600",
								fontSize: { xs: "16px", md: "18px" },
							}}
							className="text-black"
						>
							Add New Category
						</Typography>

						<IconButton aria-label="remove" size="small" onClick={handleClose}>
							<ClearIcon />
						</IconButton>
					</Box>

					<Box className="rmu-modal-content">
						<Box component="form" noValidate onSubmit={handleSubmit}>
							<Box
								sx={{
									padding: "25px",
									borderRadius: "8px",
								}}
								className="bg-white"
							>
								<Grid container alignItems="center" spacing={2}>
									<Grid item xs={12} md={12} lg={6}>
										<Typography
											component="h5"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "12px",
											}}
											className="text-black"
										>
											Name
										</Typography>

										<TextField
											autoComplete="name"
											name="name"
											required
											fullWidth
											id="name"
											label="Enter name"
											autoFocus
											InputProps={{
												style: { borderRadius: 8 },
											}}
										/>
									</Grid>

									<Grid item xs={12} md={12} lg={6}>
										<Typography
											component="h5"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "12px",
											}}
											className="text-black"
										>
											Status
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="demo-simple-select-label">
												Select
											</InputLabel>
											<Select
												labelId="demo-simple-select-label"
												id="demo-simple-select"
												value={status}
												label="Select"
												onChange={handleChangeStatus}
											>
												<MenuItem value={0}>Active</MenuItem>
												<MenuItem value={1}>Deactive</MenuItem>
											</Select>
										</FormControl>
									</Grid>

									<Grid item xs={12} md={12} lg={12}>
										<Typography
											component="h5"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "12px",
											}}
											className="text-black"
										>
											Description
										</Typography>

										<Textarea
											aria-label="minimum height"
											minRows={5}
											placeholder="Type here..."
										/>
									</Grid>

									<Grid item xs={12} md={12} lg={12}>
										<Typography
											component="h5"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "12px",
											}}
											className="text-black"
										>
											Image
										</Typography>

										<TextField
											autoComplete="image"
											name="image"
											required
											fullWidth
											id="image"
											type="file"
											autoFocus
											InputProps={{
												style: { borderRadius: 8 },
											}}
										/>
									</Grid>

									<Grid item xs={12} mt={1}>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "end",
												gap: "10px",
											}}
										>
											<Button
												onClick={handleClose}
												variant="outlined"
												color="error"
												sx={{
													textTransform: "capitalize",
													borderRadius: "8px",
													fontWeight: "500",
													fontSize: "13px",
													padding: "11px 30px",
												}}
											>
												Cancel
											</Button>

											<Button
												type="submit"
												variant="contained"
												sx={{
													textTransform: "capitalize",
													borderRadius: "8px",
													fontWeight: "500",
													fontSize: "13px",
													padding: "11px 30px",
													color: "#fff !important",
												}}
											>
												<AddIcon
													sx={{
														position: "relative",
														top: "-2px",
													}}
													className="mr-5px"
												/>{" "}
												Create
											</Button>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Box>
				</Box>
			</BootstrapDialog>
		</>
	);
};

export default CategoriesTable;
