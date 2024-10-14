"use client";

import React, { useState } from "react";
import {
	Grid,
	Card,
	Box,
	Typography,
	Button,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	FormControl,
	InputLabel,
	MenuItem,
	TextField,
	IconButton,
	Select,
	SelectChangeEvent,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CreateInvoice: React.FC = () => {
	const [status, setStatus] = useState<string>("");

	const handleStatusChange = (event: SelectChangeEvent) => {
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
				<Box component="form">
					<Grid
						container
						spacing={2}
						columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
						mb="25px"
					>
						<Grid item xs={12} sm={6} lg={6} xl={3}>
							<Box>
								<FormControl fullWidth>
									<Typography
										component="label"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "10px",
											display: "block",
										}}
										className="text-black"
									>
										Invoice ID
									</Typography>

									<TextField
										label="Enter invoice id"
										placeholder="E.g. #JAN-2345"
										variant="filled"
										id="invoiceID"
										name="invoiceID"
										sx={{
											"& .MuiInputBase-root": {
												border: "1px solid #D5D9E2",
												backgroundColor: "#fff",
												borderRadius: "7px",
											},
											"& .MuiInputBase-root::before": {
												border: "none",
											},
											"& .MuiInputBase-root:hover::before": {
												border: "none",
											},
										}}
									/>
								</FormControl>
							</Box>
						</Grid>

						<Grid item xs={12} sm={6} lg={6} xl={3}>
							<Box>
								<Typography
									component="label"
									sx={{
										fontWeight: "500",
										fontSize: "14px",
										mb: "10px",
										display: "block",
									}}
									className="text-black"
								>
									Status
								</Typography>

								<FormControl fullWidth>
									<InputLabel id="status-label">Select</InputLabel>
									<Select
										labelId="status-label"
										id="status"
										value={status}
										label="Select"
										onChange={handleStatusChange}
										sx={{
											"& fieldset": {
												border: "1px solid #D5D9E2",
												borderRadius: "7px",
											},
										}}
									>
										<MenuItem value={0}>Paid</MenuItem>
										<MenuItem value={1}>Unpaid</MenuItem>
										<MenuItem value={2}>Cancelled</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Grid>

						<Grid item xs={12} sm={6} lg={6} xl={3}>
							<Typography
								component="h5"
								sx={{
									fontWeight: "500",
									fontSize: "14px",
									mb: "12px",
								}}
								className="text-black"
							>
								Date
							</Typography>

							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									sx={{
										width: "100%",

										"& fieldset": {
											border: "1px solid #D5D9E2",
											borderRadius: "7px",
										},
									}}
								/>
							</LocalizationProvider>
						</Grid>

						<Grid item xs={12} sm={6} lg={6} xl={3}>
							<Typography
								component="h5"
								sx={{
									fontWeight: "500",
									fontSize: "14px",
									mb: "12px",
								}}
								className="text-black"
							>
								Due Date
							</Typography>

							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DatePicker
									sx={{
										width: "100%",

										"& fieldset": {
											border: "1px solid #D5D9E2",
											borderRadius: "7px",
										},
									}}
								/>
							</LocalizationProvider>
						</Grid>

						<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
							<Box
								className="border border-radius"
								sx={{
									position: "relative",
									padding: { xs: "20px", sm: "25px" },
								}}
							>
								<Box>
									<Typography mb="15px" fontWeight={500} className="text-black">
										From:
									</Typography>

									<Typography
										mt="5px !important"
										fontWeight={500}
										className="text-black"
									>
										Olivia John
									</Typography>

									<Typography mt="5px !important">
										olivia&#64;sine.com
									</Typography>

									<Typography mt="5px !important">
										4545 Seth Street Ballinger, TX 78965
									</Typography>

									<Typography mt="5px !important">+1 444 556 8899</Typography>
								</Box>

								<Button
									type="button"
									variant="outlined"
									sx={{
										textTransform: "capitalize",
										borderRadius: "6px",
										fontWeight: "500",
										fontSize: "13px",
										padding: "2px 9px",
										boxShadow: "none",
										position: "absolute",
										top: { xs: "20px", sm: "25px" },
									}}
									className="po-right-25"
								>
									<i
										className="material-symbols-outlined mr-4"
										style={{ fontSize: "18px" }}
									>
										edit
									</i>
									Change
								</Button>
							</Box>
						</Grid>

						<Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
							<Box
								className="border border-radius"
								sx={{
									position: "relative",
									padding: { xs: "20px", sm: "25px" },
									minHeight: "187px",
								}}
							>
								<Box>
									<Typography mb="15px" fontWeight={500} className="text-black">
										To:
									</Typography>
								</Box>

								<Button
									type="button"
									variant="outlined"
									sx={{
										textTransform: "capitalize",
										borderRadius: "6px",
										fontWeight: "500",
										fontSize: "13px",
										padding: "2px 9px",
										boxShadow: "none",
										position: "absolute",
										top: { xs: "20px", sm: "25px" },
									}}
									className="po-right-25"
								>
									<i
										className="material-symbols-outlined mr-4"
										style={{ fontSize: "18px" }}
									>
										add
									</i>
									Add
								</Button>
							</Box>
						</Grid>
					</Grid>

					<TableContainer
						component={Paper}
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
						}}
						className="rmui-table border"
					>
						<Table sx={{ minWidth: 1300 }} aria-label="table">
							<TableHead className="bg-f6f7f9">
								<TableRow>
									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 24px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										No
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 24px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Item Description
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 24px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Quantity
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 24px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Price
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 24px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Total
									</TableCell>

									<TableCell
										sx={{
											fontWeight: "500",
											padding: "10px 24px",
											fontSize: "14px",
										}}
										className="text-black border-bottom"
									>
										Action
									</TableCell>
								</TableRow>
							</TableHead>

							<TableBody>
								<TableRow>
									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										1
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
											fontWeight: "500",
										}}
										className="border-bottom text-black"
									>
										<FormControl fullWidth>
											<TextField
												label="Enter item name"
												placeholder="E.g. Ergonomic Office Furniture"
												variant="filled"
												id="itemName"
												name="itemName"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										<FormControl fullWidth>
											<TextField
												label="Enter quantity"
												defaultValue={1}
												variant="filled"
												type="number"
												id="quantity"
												name="quantity"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										<FormControl fullWidth>
											<TextField
												label="Enter price"
												placeholder="E.g. $0.00"
												variant="filled"
												id="price"
												name="price"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										$0.00
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										<IconButton
											aria-label="delete"
											color="error"
											sx={{ padding: "5px" }}
										>
											<i
												className="material-symbols-outlined"
												style={{ fontSize: "20px" }}
											>
												delete
											</i>
										</IconButton>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										<Button
											type="button"
											variant="contained"
											sx={{
												textTransform: "capitalize",
												borderRadius: "6px",
												fontWeight: "500",
												fontSize: "14px",
												padding: { xs: "10px 20px", sm: "10px 24px" },
												color: "#fff !important",
												boxShadow: "none",
											}}
										>
											+ Add Item
										</Button>
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
											fontWeight: "500",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
											fontWeight: "500",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
											fontWeight: "500",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Discount(%)
											</Typography>

											<TextField
												label="Enter discount price"
												placeholder="E.g. 0.00"
												defaultValue="$0"
												variant="filled"
												id="discount"
												name="discount"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										<FormControl fullWidth>
											<Typography
												component="label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Tax(%)
											</Typography>

											<TextField
												label="Enter tax"
												placeholder="E.g. 0.00"
												defaultValue="$0"
												variant="filled"
												id="tax"
												name="tax"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
													},
													"& .MuiInputBase-root::before": {
														border: "none",
													},
													"& .MuiInputBase-root:hover::before": {
														border: "none",
													},
												}}
											/>
										</FormControl>
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
											fontWeight: "500",
										}}
										className="border-bottom"
									></TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
											fontWeight: "500",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										Sub Total:
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										$0.00
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										Tax (0.22%)
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										$5.55
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										Discount (0.52%)
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									>
										- $4.00
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>
								</TableRow>

								<TableRow>
									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
											fontWeight: "500",
										}}
										className="border-bottom text-black"
									>
										Grand Total
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom text-black"
									>
										$1,172.55
									</TableCell>

									<TableCell
										sx={{
											padding: "15px 20px",
											fontSize: "14px",
										}}
										className="border-bottom"
									></TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>

					<Box
						className="text-center"
						sx={{
							mt: "25px",
							display: "flex",
							alignItems: "çenter",
							justifyContent: "center",
							gap: "10px",
						}}
					>
						<Button
							type="button"
							variant="contained"
							color="error"
							sx={{
								textTransform: "capitalize",
								borderRadius: "6px",
								fontWeight: "500",
								fontSize: { xs: "13px", sm: "16px" },
								padding: { xs: "10px 20px", sm: "10px 24px" },
								color: "#fff !important",
								boxShadow: "none",
							}}
						>
							Cancel
						</Button>

						<Button
							type="button"
							variant="contained"
							sx={{
								textTransform: "capitalize",
								borderRadius: "6px",
								fontWeight: "500",
								fontSize: { xs: "13px", sm: "16px" },
								padding: { xs: "10px 20px", sm: "10px 24px" },
								color: "#fff !important",
								boxShadow: "none",
							}}
						>
							<i className="material-symbols-outlined">add</i>
							Create
						</Button>
					</Box>
				</Box>
			</Card>
		</>
	);
};

export default CreateInvoice;
