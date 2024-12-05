"use client";

import * as React from "react";
import {
	Grid,
	Button,
	Box,
	Typography,
	FormControl,
	TextField,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { resetPassword } from "@/api-services/otpServices";
import { useState, useEffect } from "react";
import { validatePassword } from "../SignInForm/formValidation";

const ResetPasswordForm: React.FC = () => {
	const [email, setEmail] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState<{
		newPassword?: string;
		confirmPassword?: string;
	}>({});
	const [otp, setOtp] = useState("");
	useEffect(() => {
		const storedEmail = localStorage.getItem("email");
		if (storedEmail) {
			setEmail(storedEmail);
		}
		const storedOtp = localStorage.getItem("otp");
		if (storedOtp) {
			setOtp(storedOtp);
		}
	}, []);

	const validateForm = () => {
		const newErrors: { newPassword?: string; confirmPassword?: string } = {};
		if (!newPassword) {
			newErrors.newPassword = "New password is required";
		}
		if (!confirmPassword) {
			newErrors.confirmPassword = "Confirm password is required";
		}
		if (newPassword && confirmPassword && newPassword !== confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleResetPassword = (e: React.FormEvent) => {
		e.preventDefault();
		if (validateForm()) {
			resetPassword(email, newPassword, confirmPassword, otp);
		}
	};

	return (
		<>
			<Box
				className="auth-main-wrapper sign-in-area background-authentication"
				sx={{
					py: { xs: "60px", md: "80px", lg: "100px", xl: "135px" },
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
									src="/images/reset-password.jpg"
									alt="reset-password-image"
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
										className="text-black"
										sx={{
											fontSize: { xs: "22px", sm: "25px", lg: "28px" },
											mb: "7px",
											fontWeight: "600",
										}}
									>
										Reset Password?
									</Typography>

									<Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
										Enter your new password and confirm it in the field below.
									</Typography>
								</Box>

								<Box component="form" onSubmit={handleResetPassword}>
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
												New Password
											</Typography>

											<TextField
												className="authentication-input"
												label="Type your new password"
												variant="filled"
												type="password"
												id="newPassword"
												name="newPassword"
												value={newPassword}
												onChange={(e) => setNewPassword(e.target.value)}
												sx={{
													"& .MuiInputBase-root": {
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
											<Typography
												sx={{ fontSize: "12px", color: "red", mt: "5px" }}
											>
												{errors.newPassword}
											</Typography>
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
												Confirm Password
											</Typography>

											<TextField
												className="authentication-input"
												label="Type your confirm password"
												variant="filled"
												type="password"
												id="confirmPassword"
												name="confirmPassword"
												value={confirmPassword}
												onChange={(e) => setConfirmPassword(e.target.value)}
												sx={{
													"& .MuiInputBase-root": {
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
											<Typography
												sx={{ fontSize: "12px", color: "red", mt: "5px" }}
											>
												{errors.confirmPassword}
											</Typography>
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
											onClick={handleResetPassword}
										>
											<i className="material-symbols-outlined mr-5">
												autorenew
											</i>
											Send
										</Button>
									</Box>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
};

export default ResetPasswordForm;
