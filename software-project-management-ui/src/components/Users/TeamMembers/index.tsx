"use client";

import * as React from "react";
import {
	Grid,
	Card,
	Box,
	Button,
	Menu,
	IconButton,
	MenuItem,
	Typography,
	Pagination,
} from "@mui/material";
import Link from "next/link";
import styles from "@/components/Users/Search.module.css";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Image from "next/image";

const TeamMembers: React.FC = () => {
	// Dropdown
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
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
				<Box
					sx={{
						display: { sm: "flex" },
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Box
						component="form"
						className={styles.searchBox}
						sx={{
							width: { sm: "265px" },
							mb: { xs: "10px", sm: "0" },
						}}
					>
						<label>
							<i className="material-symbols-outlined">search</i>
						</label>
						<input
							type="text"
							className={styles.inputSearch}
							placeholder="Search here....."
						/>
					</Box>

					<Box>
						<Link href="/users/add-user">
							<Button
								variant="outlined"
								sx={{
									textTransform: "capitalize",
									borderRadius: "7px",
									fontWeight: "500",
									fontSize: "13px",
									padding: "6px 13px",
								}}
								color="primary"
							>
								<AddIcon sx={{ position: "relative", top: "-1px" }} /> Add New
								Member
							</Button>
						</Link>
					</Box>
				</Box>
			</Card>

			<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user11.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Ava Turner
									</Typography>

									<Typography>Business Analyst</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">01 Jan 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">turner&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-445-4455</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">Washington D.C</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user12.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Ethan Parker
									</Typography>

									<Typography>Project Manager</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">10 Jan 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">parker&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-445-7788</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">San Diego</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user13.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Isabella Lee
									</Typography>

									<Typography>Team Leader</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">20 Jan 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">lee&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-333-2288</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">Los Angeles</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user11.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Thompson Torres
									</Typography>

									<Typography>Designer</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">01 Jan 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">torres&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-444-3355</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">Boston</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user15.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Lucas Lyon
									</Typography>

									<Typography>Technical Writer</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">10 Feb 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">lucas&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-455-9966</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">Chicago</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user16.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Morgan Sturges
									</Typography>

									<Typography>Data Analyst</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">01 Mar 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">morgan&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-225-7755</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">Las Vegas</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user17.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Sophia McNeel
									</Typography>

									<Typography>Sales Representative</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">15 Jan 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">sophia&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-444-8822</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">San Francisco</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user18.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Rodriguez Meade
									</Typography>

									<Typography>Manager</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">01 Apr 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">meade&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-455-4411</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">Houston</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user19.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Michael Mackenzie
									</Typography>

									<Typography>Web Developer</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">01 Apr 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">michael&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-555-9922</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">Oklahoma City</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user20.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Charles Tharp
									</Typography>

									<Typography>Accountant</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">01 May 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">charles&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-433-2255</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">Austin</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user21.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Tina Bell
									</Typography>

									<Typography>Executive Assistant</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">10 May 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">tina&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-444-3399</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">Portland</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
					<Card
						sx={{
							boxShadow: "none",
							borderRadius: "7px",
							padding: { xs: "18px", sm: "20px", lg: "25px" },
							mb: "25px",
						}}
						className="rmui-card team-member-card"
					>
						<Box
							className="info d-flex align-items-center justify-content-between"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								mb: "15px",
							}}
						>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "15px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user12.jpg"
										alt="user-image"
										width={65}
										height={65}
										style={{
											borderRadius: "100px",
										}}
									/>
								</Box>
								<Box>
									<Typography
										variant="h6"
										fontSize="16px"
										className="text-black"
									>
										Melvin Larocque
									</Typography>

									<Typography>Business Analyst</Typography>
								</Box>
							</Box>

							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<MoreHorizIcon sx={{ fontSize: "25px" }} />
								</IconButton>

								<Menu
									anchorEl={anchorEl}
									id="account-menu"
									open={open}
									onClose={handleClose}
									onClick={handleClose}
									PaperProps={{
										elevation: 0,
										sx: {
											overflow: "visible",
											boxShadow: "0px 1px 7px #ddd",
											mt: 0,
											"& .MuiAvatar-root": {
												width: 32,
												height: 32,
												ml: -0.5,
												mr: 1,
											},
										},
									}}
									transformOrigin={{ horizontal: "right", vertical: "top" }}
									anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
								>
									<MenuItem>View</MenuItem>
									<MenuItem>Edit</MenuItem>
									<MenuItem>Delete</MenuItem>
								</Menu>
							</Box>
						</Box>

						<Box mb="15px">
							<Box className="text-black" mt="10px">
								Joined Date:
								<span className="text-body ml-5">01 Jan 2024</span>
							</Box>

							<Box className="text-black" mt="10px">
								Email Address:
								<span className="text-body ml-5">turner&#64;sine.com</span>
							</Box>

							<Box className="text-black" mt="10px">
								Phone Number:
								<span className="text-body ml-5">+1 555-445-4455</span>
							</Box>

							<Box className="text-black" mt="10px">
								Location:
								<span className="text-body ml-5">Washington D.C</span>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "5px",
							}}
						>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#3a559f",
								}}
							>
								<i className="ri-facebook-fill"></i>
							</a>

							<a
								href="https://twitter.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#03a9f4",
								}}
							>
								<i className="ri-twitter-x-fill"></i>
							</a>

							<a
								href="https://www.linkedin.com/"
								target="_blank"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#007ab9",
								}}
							>
								<i className="ri-linkedin-fill"></i>
							</a>

							<a
								href="mailto:micheal@gmail.com"
								style={{
									display: "inline-block",
									textAlign: "center",
									borderRadius: "100%",
									width: "28px",
									height: "28px",
									lineHeight: "28px",
									color: "#fff",
									background: "#000",
								}}
							>
								<i className="ri-github-line"></i>
							</a>
						</Box>
					</Card>
				</Grid>

				{/* Pagination */}
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<Box
						className="pagination-card bg-white"
						sx={{
							mb: "25px",
							padding: "25px",
							borderRadius: "7px",
						}}
					>
						<Box
							sx={{
								display: { sm: "flex" },
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<Typography sx={{ mb: { xs: "10px", sm: "0" } }}>
								Showing 12 of 36 results
							</Typography>

							<Pagination
								count={4}
								variant="outlined"
								shape="rounded"
								color="primary"
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
};

export default TeamMembers;
