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
	Button,
	Checkbox,
	FormControlLabel,
	Select,
	SelectChangeEvent,
} from "@mui/material";

import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
});

const AddUser: React.FC = () => {
	const [location, setLocation] = useState<string>("");
	const [skills, setSkills] = useState<string>("");

	const handleLocationChange = (event: SelectChangeEvent) => {
		setLocation(event.target.value as string);
	};

	const handleSkillsChange = (event: SelectChangeEvent) => {
		setSkills(event.target.value as string);
	};

	return (
		<>
			<Box component="form">
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
												User ID
											</Typography>

											<TextField
												label="Enter user id"
												placeholder="E.g. #JAN-123"
												variant="filled"
												id="userId"
												name="userId"
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
												User Name
											</Typography>

											<TextField
												label="Enter user name"
												placeholder="E.g. Duc Quang"
												variant="filled"
												id="userName"
												name="userName"
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
												placeholder="E.g. olivia@sine.com"
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
											Location
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="brand-name-label">Select</InputLabel>
											<Select
												labelId="brand-name-label"
												id="brand-name"
												value={location}
												label="Select"
												onChange={handleLocationChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>Washington D.C </MenuItem>
												<MenuItem value={1}>Chicago</MenuItem>
												<MenuItem value={2}>Oklahoma City</MenuItem>
												<MenuItem value={3}>San Diego</MenuItem>
												<MenuItem value={4}>Los Angeles</MenuItem>
												<MenuItem value={5}>Las Vegas</MenuItem>
												<MenuItem value={6}>San Francisco</MenuItem>
												<MenuItem value={7}>Istanbul</MenuItem>
												<MenuItem value={8}>London</MenuItem>
												<MenuItem value={9}>Dubai</MenuItem>
												<MenuItem value={10}>Antalya</MenuItem>
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
												Phone Number
											</Typography>

											<TextField
												label="Enter phone number"
												placeholder="E.g. +1 555-445-4455"
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
												Projects
											</Typography>

											<TextField
												label="Enter projects"
												placeholder="E.g. 27"
												variant="filled"
												id="projects"
												name="projects"
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
											Add Some Info
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
												Facebook
											</Typography>

											<TextField
												label="Enter facebook profile link"
												placeholder="E.g. https://www.facebook.com/"
												variant="filled"
												id="facebookLink"
												name="facebookLink"
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
												X
											</Typography>

											<TextField
												label="Enter x profile link"
												placeholder="E.g. https://x.com/"
												variant="filled"
												id="x"
												name="x"
												required
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
												Linkedin
											</Typography>

											<TextField
												label="Enter linkedin profile link"
												placeholder="E.g. https://www.linkedin.com/"
												variant="filled"
												id="linkedinLink"
												name="linkedinLink"
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
												GitHub
											</Typography>

											<TextField
												label="Enter github profile link"
												placeholder="E.g. https://github.com/"
												variant="filled"
												id="githubLink"
												name="githubLink"
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

								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										Upload Product Images
									</Typography>

									<TextField
										autoComplete="uploadProductImages"
										name="uploadProductImages"
										required
										fullWidth
										id="uploadProductImages"
										type="file"
										autoFocus
										inputProps={{
											multiple: true,
										}}
										sx={{
											"& fieldset": {
												border: "1px solid #D5D9E2",
												borderRadius: "7px",
											},
										}}
									/>
								</Grid>
							</Grid>
						</Card>
					</Grid>

					<Grid item xs={12} sm={12} md={6} lg={12} xl={4}>
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
									mb: "15px",
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
									Privacy Policy
								</Typography>
							</Box>

							<Grid
								container
								spacing={2}
								columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}
							>
								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box>
										<FormControlLabel
											control={<Checkbox />}
											label="Allow users to show your email"
										/>
										<FormControlLabel
											control={<Checkbox />}
											label="Allow users to show your experiences"
										/>
										<FormControlLabel
											control={<Checkbox />}
											label="Allow users to show your followers"
										/>
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
											Select Your Skills
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="brand-name-label">Select</InputLabel>
											<Select
												labelId="brand-name-label"
												id="brand-name"
												value={skills}
												label="Select"
												onChange={handleSkillsChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>Leadership</MenuItem>
												<MenuItem value={1}>Project Management</MenuItem>
												<MenuItem value={2}>Data Analysis</MenuItem>
												<MenuItem value={3}>Teamwork</MenuItem>
												<MenuItem value={4}>Web Development</MenuItem>
											</Select>
										</FormControl>
									</Box>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: { xs: "10px", sm: "20px" },
							mb: "25px",
						}}
					>
						<Button
							type="submit"
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
							type="submit"
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
							<i className="material-symbols-outlined">add</i> Add User
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default AddUser;
