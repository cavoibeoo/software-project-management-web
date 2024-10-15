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
import styles from "@/components/eCommerce/Search.module.css";
import AddIcon from "@mui/icons-material/Add";
import NavList from "../NavList";

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
	orderID: string,
	productImage: string,
	productName: string,
	date: string,
	category: string,
	price: string,
	order: number,
	stock: string,
	amount: string,
	rating: string,
	status: string,
	detailsLink: string
) {
	return {
		orderID,
		productImage,
		productName,
		date,
		category,
		price,
		order,
		stock,
		amount,
		rating,
		status,
		detailsLink,
	};
}

const rows = [
	createData(
		"#JAN-999",
		"/images/products/product1.jpg",
		"Smart Band",
		"08 Jun 2024",
		"Watch",
		"$35.00",
		75,
		"750",
		"$2,625",
		"5.00 (141 reviews)",
		"Draft",
		"/products-list/details/"
	),
	createData(
		"#JAN-998",
		"/images/products/product2.jpg",
		"Headphone",
		"07 Jun 2024",
		"Electronics",
		"$49.00",
		25,
		"825",
		"$1,225",
		"5.00 (69 reviews)",
		"Draft",
		"/products-list/details/"
	),
	createData(
		"#JAN-996",
		"/images/products/product4.jpg",
		"Bluetooth Speaker",
		"05 Jun 2024",
		"Google",
		"$59.00",
		40,
		"535",
		"$2,360",
		"4.00 (75 reviews)",
		"Draft",
		"/products-list/details/"
	),
].sort((b, a) => (a.orderID < b.orderID ? -1 : 1));

const Draft: React.FC = () => {
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
				<NavList />

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
								placeholder="Search product here....."
							/>
						</Box>

						<Link href="/ecommerce/create-product">
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
								Product
							</Button>
						</Link>
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
										Product
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Category
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Price
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Order
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Stock
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Amount
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 20px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Rating
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
									<TableRow key={row.orderID}>
										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="border-bottom"
										>
											{row.orderID}
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
														src={row.productImage}
														alt="Product"
														width={40}
														height={40}
														style={{ borderRadius: "7px" }}
													/>
												</Box>

												<Box>
													<Link href={row.detailsLink}>
														<Typography
															sx={{
																fontSize: "15px",
																fontWeight: "500",
															}}
															className="text-black"
														>
															{row.productName}
														</Typography>
													</Link>

													<Typography
														sx={{
															fontSize: "13px",
														}}
														className="text-body"
													>
														{row.date}
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
											{row.category}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.price}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.order}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.stock}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.amount}
										</TableCell>

										<TableCell
											sx={{
												padding: "14px 20px",
												fontSize: "14px",
											}}
											className="text-black border-bottom"
										>
											{row.rating}
										</TableCell>

										<TableCell
											sx={{
												borderBottom: "1px solid #eceef2",
												padding: "14px 20px",
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
											}}
											className="border-bottom"
										>
											<Box
												sx={{
													display: "flex",
													alignItems: "center",
												}}
											>
												<Link href={row.detailsLink}>
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
												</Link>

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

export default Draft;
