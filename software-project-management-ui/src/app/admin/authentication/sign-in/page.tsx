"use client";

import * as React from "react";
import {
	Grid,
	Button,
	Box,
	Typography,
	FormControl,
	TextField,
	IconButton,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormLoginServices, loginGoogle } from "@/api-services/AuthServices";
import { validatePassword } from "@/components/Authentication/SignUpForm/formValidation";
import { validateEmail } from "@/components/Authentication/SignInForm/formValidation";

export default async function Page() {
	const [showPassword, setShowPassword] = useState(false);

	const handleLoginForm = async (event: React.FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget as HTMLFormElement);
		FormLoginServices(formData.get("email"), formData.get("password"));
	};

	const handleLoginWithGG = async (event: React.FormEvent) => {
		event.preventDefault();
		await loginGoogle();
	};

	return (
		<Box
			className="auth-main-wrapper sign-in-area background-authentication"
			sx={{
				py: { xs: "60px", md: "80px", lg: "100px", xl: "135px" },
				backgroundImage:
					"url('/images/authentication/LoginBackground_darkTheme.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				width: "100%",
				minheight: "100vh",
			}}
		>
			<Box
				sx={{
					maxWidth: { sm: "500px", md: "1255px" },
					mx: "auto !important",
					px: "12px",
				}}
			>
				<Grid
					container
					alignItems="center"
					columnSpacing={{ xs: 1, sm: 2, md: 4, lg: 3 }}
				>
					<Grid item xs={12} md={6} lg={6} xl={7}>
						<Box
							sx={{
								display: { xs: "none", md: "block" },
							}}
						>
							<Image
								src="/images/sign-in.jpg"
								alt="sign-in-image"
								width={646}
								height={804}
								style={{
									borderRadius: "24px",
								}}
							/>
						</Box>
					</Grid>

					<Grid item xs={12} md={6} lg={6} xl={5}>
						<Box
							className="form-content"
							sx={{
								paddingLeft: { xs: "0", lg: "10px" },
							}}
						>
							<Box
								className="logo"
								sx={{
									mb: "23px",
								}}
							>
								<Box className="navbar-logo"></Box>
							</Box>

							<Box
								className="title"
								sx={{
									mb: "23px",
								}}
							>
								<Typography
									variant="h1"
									className="text-all-black"
									sx={{
										fontSize: { xs: "22px", sm: "25px", lg: "28px" },
										mb: "7px",
										fontWeight: "600",
									}}
								>
									Enter your administrator account to access the admin.
								</Typography>
							</Box>

							<Box
								className="with-socials"
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-around",
									gap: "5px",
									mb: "20px",
								}}
							>
								<Button
									variant="outlined"
									className="border allwhite"
									sx={{
										width: "100%",
										borderRadius: "8px",
										padding: "10.5px 20px",
									}}
									onClick={handleLoginWithGG}
								>
									<Image
										src="/images/icons/google.svg"
										alt="google"
										width={25}
										height={25}
									/>
								</Button>

								<Button
									variant="outlined"
									className="border allwhite"
									sx={{
										width: "100%",
										borderRadius: "8px",
										padding: "10.5px 20px",
									}}
								>
									<Image
										src="/images/icons/facebook2.svg"
										alt="facebook"
										width={25}
										height={25}
									/>
								</Button>

								<Button
									variant="outlined"
									className="border allwhite"
									sx={{
										width: "100%",
										borderRadius: "8px",
										padding: "10.5px 20px",
									}}
								>
									<Image
										src="/images/icons/apple.svg"
										alt="apple"
										width={25}
										height={25}
									/>
								</Button>
							</Box>

							<Box component="form" onSubmit={handleLoginForm}>
								<Box mb="15px">
									<FormControl fullWidth>
										<Typography
											component="label"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "10px",
												display: "block",
											}}
											className="text-all-black"
										>
											Email Address
										</Typography>

										<TextField
											className="authentication-input"
											label="example&#64;sine.com"
											variant="filled"
											id="email"
											name="email"
											inputProps={{ maxLength: 50 }}
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
											onBlur={(e) => {
												const email = e.target.value;
												if (typeof window !== "undefined") {
													const emailErrorElement =
														document.getElementById("emailError");
													if (emailErrorElement) {
														emailErrorElement.innerText = validateEmail(email);
													}
												}
											}}
										/>
										<Typography
											id="emailError"
											sx={{
												color: "red",
												fontSize: "12px",
												marginTop: "5px !important",
											}}
										></Typography>
									</FormControl>
								</Box>

								<Box mb="15px">
									<FormControl fullWidth>
										<Typography
											component="label"
											sx={{
												fontWeight: "500",
												fontSize: "14px",
												mb: "10px",
												display: "block",
											}}
											className="text-all-black"
										>
											Password
										</Typography>

										<TextField
											className="authentication-input"
											label="Type Password"
											variant="filled"
											type={showPassword ? "text" : "password"}
											id="password"
											name="password"
											inputProps={{ maxLength: 50 }}
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
											onBlur={(e) => {
												const password = e.target.value;
												if (typeof window !== "undefined") {
													const passwordErrorElement =
														document.getElementById("passwordError");
													if (passwordErrorElement) {
														passwordErrorElement.innerText =
															validatePassword(password);
													}
												}
											}}
											InputProps={{
												endAdornment: (
													<IconButton
														onClick={() => setShowPassword(!showPassword)}
														edge="end"
													>
														{showPassword ? <VisibilityOff /> : <Visibility />}
													</IconButton>
												),
											}}
										/>
										<Typography
											id="passwordError"
											sx={{
												color: "red",
												fontSize: "12px",
												marginTop: "5px !important",
											}}
										></Typography>
									</FormControl>
								</Box>

								<Box mb="20px">
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
											width: "100%",
										}}
									>
										<i className="material-symbols-outlined mr-5">login</i>
										Sign In
									</Button>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
