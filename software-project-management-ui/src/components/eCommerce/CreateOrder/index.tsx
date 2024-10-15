"use client";

import React, { useState } from "react";
import {
	Grid,
	Card,
	Box,
	Typography,
	FormControl,
	InputLabel,
	MenuItem,
	TextField,
	Select,
	SelectChangeEvent,
	Button,
} from "@mui/material";

import dynamic from "next/dynamic";
import YourOrder from "./YourOrder";
import PaymentMethod from "./PaymentMethod";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
});

const CreateOrder: React.FC = () => {
	const [state, setState] = useState<string>("");
	const [city, setCity] = useState<string>("");
	const [country, setCountry] = useState<string>("");

	const handleStateChange = (event: SelectChangeEvent) => {
		setState(event.target.value as string);
	};

	const handleCityChange = (event: SelectChangeEvent) => {
		setCity(event.target.value as string);
	};

	const handleCountryChange = (event: SelectChangeEvent) => {
		setCountry(event.target.value as string);
	};

	return (
		<>
			<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
				<Grid item xs={12} sm={12} md={6} lg={12} xl={8}>
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
								Billing Information
							</Typography>
						</Box>

						<Box component="form">
							<Grid
								container
								spacing={3}
								columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
							>
								<Grid item xs={12} md={12} lg={12} xl={6}>
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
												Customer Name
											</Typography>

											<TextField
												label="Enter customer name"
												placeholder="E.g. Ava Turner"
												variant="filled"
												id="customerName"
												name="customerName"
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

								<Grid item xs={12} md={12} lg={12} xl={6}>
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
												Phone Number
											</Typography>

											<TextField
												label="Enter phone number"
												placeholder="E.g. +1 555-123-4567"
												variant="filled"
												id="phoneNumber"
												name="phoneNumber"
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

								<Grid item xs={12} md={12} lg={12} xl={6}>
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
												Email Address
											</Typography>

											<TextField
												label="Enter email address"
												placeholder="E.g. ava@sine.com"
												variant="filled"
												id="emailAddress"
												name="emailAddress"
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

								<Grid item xs={12} md={12} lg={12} xl={6}>
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
											State
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="state-label">Select</InputLabel>
											<Select
												labelId="state-label"
												id="product-type"
												value={state}
												label="Select"
												onChange={handleStateChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>Florida</MenuItem>
												<MenuItem value={1}>Wisconsin</MenuItem>
												<MenuItem value={2}>Washington</MenuItem>
												<MenuItem value={3}>Nebraska</MenuItem>
												<MenuItem value={4}>Minnesota</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
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
											City
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="city-label">Select</InputLabel>
											<Select
												labelId="city-label"
												id="city"
												value={city}
												label="Select"
												onChange={handleCityChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>New York</MenuItem>
												<MenuItem value={1}>Tokyo</MenuItem>
												<MenuItem value={2}>London</MenuItem>
												<MenuItem value={3}>Amsterdam</MenuItem>
												<MenuItem value={4}>Paris</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
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
												ZIP / Postcode
											</Typography>

											<TextField
												label="Enter zip / postcode"
												placeholder="E.g. 3100"
												variant="filled"
												id="zipPostcode"
												name="zipPostcode"
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

								<Grid item xs={12} md={12} lg={12} xl={6}>
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
												Street Address
											</Typography>

											<TextField
												label="Enter street address"
												placeholder="E.g. 123 Main Street, Anytown, USA"
												variant="filled"
												id="streetAddress"
												name="streetAddress"
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

								<Grid item xs={12} md={12} lg={12} xl={6}>
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
											Country
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="country-label">Select</InputLabel>
											<Select
												labelId="country-label"
												id="country"
												value={country}
												label="Select"
												onChange={handleCountryChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>Switzerland</MenuItem>
												<MenuItem value={1}>New Zealand</MenuItem>
												<MenuItem value={2}>Germany</MenuItem>
												<MenuItem value={3}>United States</MenuItem>
												<MenuItem value={4}>Japan</MenuItem>
												<MenuItem value={5}>Netherlands</MenuItem>
												<MenuItem value={6}>Sweden</MenuItem>
												<MenuItem value={7}>Canada</MenuItem>
												<MenuItem value={8}>United Kingdom</MenuItem>
												<MenuItem value={9}>Australia</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={12}>
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
											Order Note (optional)
										</Typography>

										<RichTextEditor
											id="rte"
											controls={[
												["bold", "italic", "underline", "link", "image"],
												["unorderedList", "h1", "h2", "h3"],
												["sup", "sub"],
												["alignLeft", "alignCenter", "alignRight"],
											]}
											style={{
												minHeight: "200px",
											}}
										/>
									</Box>
								</Grid>
							</Grid>

							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "20px",
								}}
							>
								<Button
									variant="contained"
									color="error"
									sx={{
										boxShadow: "none",
										fontSize: "16px",
										fontWeight: "500",
										borderRadius: "7px",
										padding: "10px 22px",
										textTransform: "capitalize",
										mt: "20px",
										color: "#fff !important",
									}}
								>
									Cancel
								</Button>

								<Button
									variant="contained"
									color="primary"
									sx={{
										boxShadow: "none",
										fontSize: "16px",
										fontWeight: "500",
										borderRadius: "7px",
										padding: "10px 22px",
										textTransform: "capitalize",
										mt: "20px",
										color: "#fff !important",
									}}
								>
									<i className="material-symbols-outlined mr-5">add</i>
									Create Order
								</Button>
							</Box>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={12} md={6} lg={12} xl={4}>
					<YourOrder />

					<PaymentMethod />
				</Grid>
			</Grid>
		</>
	);
};

export default CreateOrder;
