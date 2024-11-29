"use client";
import * as React from "react";

import { Grid, Button, Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
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
									src="/images/coming-soon.jpg"
									alt="confirm-expired-image"
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
											mb: "10px",
											fontWeight: "600",
										}}
									>
										OTP Expired!
									</Typography>

									<Typography sx={{ fontWeight: "500", fontSize: "16px" }}>
										Your OTP has expired. Please request a new one.
									</Typography>
								</Box>

								<Box>
									<Box mb="30px">
										<Box
											className="logo bg-custom text-warning rounded-circle"
											sx={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												width: "120px",
												height: "120px",
											}}
										>
											<i
												className="material-symbols-outlined"
												style={{ fontSize: "55px" }}
											>
												warning
											</i>
										</Box>

										<Typography
											component="span"
											sx={{
												display: "block",
												fontWeight: "500",
												fontSize: "16px",
												mt: "20px",
											}}
											className="text-black"
										>
											Your OTP Expired!
										</Typography>
									</Box>

									<Link href="/authentication/sign-in/">
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
											Back To Login
										</Button>
									</Link>
								</Box>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</>
	);
}
