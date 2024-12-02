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
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import { FormRegisterServices } from "@/api-services/AuthServices";

import {
	validateEmail,
	validatePassword,
	validateFullName,
	validateConfirmPassword,
} from "./formValidation";

const SignUpForm: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleRegistSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget as HTMLFormElement);
		FormRegisterServices(
			formData.get("fullName"),
			formData.get("email"),
			formData.get("password")
		);
	};

	return (
		<>
			<Box
				className="auth-main-wrapper sign-up-area background-authentication"
				sx={{
					py: { xs: "60px", md: "80px", lg: "100px", xl: "135px" },
					backgroundImage:
						'url("https://id-frontend.prod-east.frontend.public.atl-paas.net/assets/wac.92a80da2.svg")',
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
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
									src="/images/sign-up2.jpeg"
									alt="sign-up-image"
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
									<Image
										src="/images/Sine_logo.png"
										alt="logo"
										width={142}
										height={38}
									/>
								</Box>

								<Box
									className="title"
									sx={{
										mb: "23px",
									}}
								>
									<Typography
										variant="h1"
										className="text-black"
										sx={{
											fontSize: { xs: "22px", sm: "25px", lg: "28px" },
											mb: "7px",
											fontWeight: "600",
										}}
									>
										Sign up to Sine Dashboard
									</Typography>

									<Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
										Sign up with social account or enter your details
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

								<Box component="form" onSubmit={handleRegistSubmit}>
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
												className="text-black"
											>
												Full Name
											</Typography>

											<TextField
												className="authentication-input"
												label="Enter your full name"
												variant="filled"
												id="fullName"
												name="fullName"
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
												onChange={(e) => {
													const fullName = e.target.value;
													if (typeof window !== "undefined") {
														const fullNameErrorElement =
															document.getElementById("fullNameError");
														if (fullNameErrorElement) {
															fullNameErrorElement.innerText =
																validateFullName(fullName);
														}
													}
												}}
											/>
											<Typography
												id="fullNameError"
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
												className="text-black"
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
												onChange={(e) => {
													const email = e.target.value;
													if (typeof window !== "undefined") {
														const emailErrorElement =
															document.getElementById("emailError");
														if (emailErrorElement) {
															emailErrorElement.innerText =
																validateEmail(email);
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
												className="text-black"
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
															{showPassword ? (
																<VisibilityOff />
															) : (
																<Visibility />
															)}
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
												className="text-black"
											>
												Confirm Password
											</Typography>

											<TextField
												className="authentication-input"
												label="Type Confirm Password"
												variant="filled"
												type={showPassword ? "text" : "password"}
												id="confirmPassword"
												name="confirmPassword"
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
												onChange={(e) => {
													const confirmPassword = e.target.value;
													if (typeof window !== "undefined") {
													const password = (
														document.getElementById(
															"password"
														) as HTMLInputElement
													)?.value;
													const confirmPasswordErrorElement =
														document.getElementById("confirmPasswordError");
													if (confirmPasswordErrorElement) {
														confirmPasswordErrorElement.innerText =
															validateConfirmPassword(
																confirmPassword,
																password
															);
														}
													}
												}}
												InputProps={{
													endAdornment: (
														<IconButton
															onClick={() => setShowPassword(!showPassword)}
															edge="end"
														>
															{showPassword ? (
																<VisibilityOff />
															) : (
																<Visibility />
															)}
														</IconButton>
													),
												}}
											/>
											<Typography
												id="confirmPasswordError"
												sx={{
													color: "red",
													fontSize: "12px",
													marginTop: "5px !important",
												}}
											></Typography>
										</FormControl>
									</Box>

									<Box my="25px">
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
											<i className="material-symbols-outlined mr-5">person_4</i>
											Sign Up
										</Button>
									</Box>

									<Typography
										sx={{
											mb: "15px",
											lineHeight: "1.8",
										}}
									>
										By confirming your email, you agree to our{" "}
										<Link
											href="#"
											className="text-black"
											style={{ fontWeight: "500" }}
										>
											Terms of Service
										</Link>{" "}
										and that you have read and understood our{" "}
										<Link
											href="#"
											className="text-black"
											style={{ fontWeight: "500" }}
										>
											Privacy Policy
										</Link>
										.
									</Typography>

									<Typography
										sx={{
											mb: "15px",
											lineHeight: "1.8",
										}}
									>
										Already have an account.{" "}
										<Link
											href="/authentication/sign-in/"
											className="text-primary"
											style={{
												fontWeight: "500",
											}}
										>
											Sign In
										</Link>
									</Typography>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
};

export default SignUpForm;
