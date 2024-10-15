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
import Image from "next/image";
import Countdown from "./Countdown";

const ComingSoonContent: React.FC = () => {
	return (
		<>
			<Box
				className="auth-main-wrapper forgot-password-area"
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
						<Grid item xs={12} md={6} lg={6} xl={6}>
							<Countdown endDate="" />
						</Grid>

						<Grid item xs={12} md={6} lg={6} xl={6}>
							<Box
								className="form-content"
								sx={{
									paddingLeft: { xs: "0", lg: "100px" },
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
									<Image
										src="/images/white-logo.svg"
										className="d-none"
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
											fontSize: { xs: "22px", sm: "25px", lg: "36px" },
											mb: "10px",
											fontWeight: "600",
										}}
									>
										We're working on launching soon, stay tuned!
									</Typography>

									<Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
										We're coming soon..
									</Typography>
								</Box>

								<Box component="form">
									<Box mb="20px">
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
												Be the first to know when our site is live
											</Typography>

											<TextField
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
											/>
										</FormControl>
									</Box>

									<Box>
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

export default ComingSoonContent;
