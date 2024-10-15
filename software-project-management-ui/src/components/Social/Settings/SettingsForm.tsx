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
	Select,
	SelectChangeEvent,
	FormLabel,
	FormControlLabel,
	RadioGroup,
	Radio,
} from "@mui/material";

import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
});

const SettingsForm: React.FC = () => {
	const [country, setCountry] = useState<string>("");
	const [yourSkills, setYourSkills] = useState<string>("");
	const [yourProfession, setYourProfession] = useState<string>("");

	const handleCountryChange = (event: SelectChangeEvent) => {
		setCountry(event.target.value as string);
	};

	const handleYourSkillsChange = (event: SelectChangeEvent) => {
		setYourSkills(event.target.value as string);
	};

	const handleYourProfessionChange = (event: SelectChangeEvent) => {
		setYourProfession(event.target.value as string);
	};

	return (
		<>
			<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
				<Grid item xs={12} sm={12} md={6} lg={12} xl={8}>
					<Box component="form">
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
									Profile Settings
								</Typography>
							</Box>

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
												First Name
											</Typography>

											<TextField
												label="Enter first name"
												defaultValue="Alice"
												variant="filled"
												id="firstName"
												name="firstName"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												Last Name
											</Typography>

											<TextField
												label="Enter last name"
												defaultValue="Johnson"
												variant="filled"
												id="lastName"
												name="lastName"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												defaultValue="johnson@sine.com"
												variant="filled"
												id="email"
												name="email"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												defaultValue="+1 444 555 6699"
												variant="filled"
												id="phoneNumber"
												name="phoneNumber"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												Password
											</Typography>

											<TextField
												label="Enter password"
												variant="filled"
												id="password"
												name="password"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												Confirm Password
											</Typography>

											<TextField
												label="Enter confirm password"
												variant="filled"
												id="confirmPassword"
												name="confirmPassword"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												Address
											</Typography>

											<TextField
												label="Enter address"
												defaultValue="84 S. Arrowhead Court Branford"
												variant="filled"
												id="address"
												name="address"
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
											Add Your Bio
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

								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box>
										<FormControl>
											<FormLabel
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
												id="demo-row-radio-buttons-group-label"
											>
												Who will be able to see your profile?
											</FormLabel>
											<RadioGroup
												row
												aria-labelledby="demo-row-radio-buttons-group-label"
												name="row-radio-buttons-group"
											>
												<FormControlLabel
													value="1"
													control={<Radio />}
													label="Only me"
												/>
												<FormControlLabel
													value="2"
													control={<Radio />}
													label="My followers"
												/>
												<FormControlLabel
													value="3"
													control={<Radio />}
													label="Everyone"
												/>
											</RadioGroup>
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
											Your Skills
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="brand-name-label">Select</InputLabel>
											<Select
												labelId="brand-name-label"
												id="brand-name"
												value={yourSkills}
												label="Select"
												onChange={handleYourSkillsChange}
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
											Your Profession
										</Typography>

										<FormControl fullWidth>
											<InputLabel id="brand-name-label">Select</InputLabel>
											<Select
												labelId="brand-name-label"
												id="brand-name"
												value={yourProfession}
												label="Select"
												onChange={handleYourProfessionChange}
												sx={{
													"& fieldset": {
														border: "1px solid #D5D9E2",
														borderRadius: "7px",
													},
												}}
											>
												<MenuItem value={0}>Financial Manager</MenuItem>
												<MenuItem value={1}>IT Manager</MenuItem>
												<MenuItem value={2}>Software Developer</MenuItem>
												<MenuItem value={3}>Physician Assistant</MenuItem>
												<MenuItem value={4}>Data Scientist</MenuItem>
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
												Company Name
											</Typography>

											<TextField
												label="Enter company name"
												defaultValue="sine Admin"
												variant="filled"
												id="companyName"
												name="companyName"
												required
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												Company Website
											</Typography>

											<TextField
												label="Enter company website"
												defaultValue="http://website.com"
												variant="filled"
												id="companyWebsite"
												name="companyWebsite"
												required
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												Facebook
											</Typography>

											<TextField
												label="Enter facebook link"
												defaultValue="https://www.facebook.com/"
												variant="filled"
												id="facebookLink"
												name="facebookLink"
												required
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												label="Enter x link"
												defaultValue="https://www.x.com/"
												variant="filled"
												id="xLink"
												name="xLink"
												required
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												label="Enter linkedin link"
												defaultValue="https://www.linkedin.com/"
												variant="filled"
												id="linkedinLink"
												name="linkedinLink"
												required
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
												YouTube
											</Typography>

											<TextField
												label="Enter youTube link"
												defaultValue="https://www.youTube.com/"
												variant="filled"
												id="youTubeLink"
												name="youTubeLink"
												required
												sx={{
													"& .MuiInputBase-root": {
														border: "1px solid #D5D9E2",
														backgroundColor: "#fff",
														borderRadius: "7px",
														color: "#000",
														fontWeight: "500",
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
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										Profile Picture
									</Typography>

									<TextField
										autoComplete="profilePicture"
										name="profilePicture"
										required
										fullWidth
										id="profilePicture"
										type="file"
										autoFocus
										sx={{
											"& fieldset": {
												border: "1px solid #D5D9E2",
												borderRadius: "7px",
											},
										}}
									/>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={6}>
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										Cover Photo
									</Typography>

									<TextField
										autoComplete="coverPhoto"
										name="coverPhoto"
										required
										fullWidth
										id="coverPhoto"
										type="file"
										autoFocus
										sx={{
											"& fieldset": {
												border: "1px solid #D5D9E2",
												borderRadius: "7px",
											},
										}}
									/>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: { xs: "10px", sm: "20px" },
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
											<i className="material-symbols-outlined">add</i> Save
											Information
										</Button>
									</Box>
								</Grid>
							</Grid>
						</Card>
					</Box>
				</Grid>

				<Grid item xs={12} sm={12} md={6} lg={12} xl={4}>
					<Box component="form">
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
										<FormControl>
											<FormLabel
												id="demo-row-radio-buttons-group-label"
												sx={{
													fontWeight: "500",
													fontSize: "14px",
													mb: "10px",
													display: "block",
												}}
												className="text-black"
											>
												Who can tag you?
											</FormLabel>
											<RadioGroup
												row
												aria-labelledby="demo-row-radio-buttons-group-label"
												name="row-radio-buttons-group"
											>
												<FormControlLabel
													value="1"
													control={<Radio />}
													label="Everyone"
												/>
												<FormControlLabel
													value="2"
													control={<Radio />}
													label="Group Member"
												/>
											</RadioGroup>
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
											Account Deletion Or Transfer
										</Typography>

										<Typography
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "10px",
											}}
										>
											Transfer this account to another person or to a company
											repositories.
										</Typography>
									</Box>
								</Grid>

								<Grid item xs={12} md={12} lg={12} xl={12}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: { xs: "10px", sm: "20px" },
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
											Delete Account
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
											<i className="material-symbols-outlined">swap_horiz</i>{" "}
											Transfer Account
										</Button>
									</Box>
								</Grid>
							</Grid>
						</Card>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default SettingsForm;
