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
import { validateEmail } from "../SignInForm/formValidation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TransitionProps } from "@mui/material/transitions";
import {
	Slide,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
} from "@mui/material";
import { constrainPoint } from "@fullcalendar/core/internal";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const ForgotPasswordForm: React.FC = () => {
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const emailInput = document.getElementById("email") as HTMLInputElement;
		const email = emailInput.value;
		const emailError = validateEmail(email);

		if (emailError) {
			toast.error(emailError);
		} else {
			handleOTPDialogOpen();
		}
	};
	const [otpDialogOpen, setOTPDialogOpen] = React.useState(false);

	const handleOTPDialogOpen = () => {
		setOTPDialogOpen(true);
	};

	const handleOTPDialogClose = () => {
		setOTPDialogOpen(false);
	};

	React.useEffect(() => {
		if (otpDialogOpen) {
			const firstInput = document.getElementById("otp-0");
			if (firstInput) {
				firstInput.focus();
			}
		}
	}, [otpDialogOpen]);

	return (
		<>
			<ToastContainer />
			<Box
				className="auth-main-wrapper forgot-password-area background-authentication"
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
									src="/images/forgot-password.jpg"
									alt="forgot-password-image"
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
										Forgot your password?
									</Typography>

									<Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
										Enter the email address you used when you joined and we’ll
										send you instructions to reset your password.
									</Typography>
								</Box>

								<Box component="form" onSubmit={handleSubmit}>
									<Box mb="25px">
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
													const emailErrorElement =
														document.getElementById("emailError");
													if (emailErrorElement) {
														emailErrorElement.innerText = validateEmail(email);
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

									<Box mb="20px">
										<Button
											onClick={handleSubmit}
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
											<i className="material-symbols-outlined mr-5">
												autorenew
											</i>
											Send
										</Button>
									</Box>

									<Typography>
										Back to{" "}
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
			<Dialog
				open={otpDialogOpen}
				TransitionComponent={Transition}
				keepMounted
				maxWidth="xs"
				onClose={handleOTPDialogClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{"Enter the OTP sent to your email"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Check your email{" "}
						<span style={{ fontWeight: "bold" }}>ducquang&#64;sine.com</span>{" "}
						for the OTP and enter it below.
					</DialogContentText>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							gap: 2,
							mt: 2,
						}}
					>
						{[0, 1, 2, 3, 4, 5].map((index) => (
							<TextField
								key={index}
								margin="dense"
								type="text"
								variant="outlined"
								inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
								sx={{
									width: "50px",
									"& .MuiOutlinedInput-root": {
										borderRadius: "8px",
									},
								}}
								onChange={(e) => {
									const nextSibling = document.getElementById(
										`otp-${index + 1}`
									);
									const prevSibling = document.getElementById(
										`otp-${index - 1}`
									);
									if (e.target.value) {
										if (nextSibling) {
											nextSibling.focus();
										}
									} else {
										if (prevSibling) {
											prevSibling.focus();
										}
									}
								}}
								id={`otp-${index}`}
							/>
						))}
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleOTPDialogClose} sx={{ color: "#1976d2" }}>
						Cancel
					</Button>
					<Button
						variant="contained"
						onClick={handleOTPDialogClose}
						sx={{ backgroundColor: "#1976d2" }}
					>
						Verify
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default ForgotPasswordForm;
