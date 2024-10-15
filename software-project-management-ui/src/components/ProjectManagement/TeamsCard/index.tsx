"use client";

import React from "react";
import Image from "next/image";
import {
	Grid,
	Card,
	Box,
	Typography,
	Menu,
	MenuItem,
	IconButton,
	AvatarGroup,
	Avatar,
	Button,
} from "@mui/material";
import Link from "next/link";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const TeamsCard: React.FC = () => {
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
			<Grid container columnSpacing={{ xs: 1, sm: 2, md: 2, lg: 3 }}>
				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
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
									gap: "12px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user11.jpg"
										className="rounded-circle"
										alt="user-image"
										width={65}
										height={65}
									/>
								</Box>
								<Box>
									<Typography
										fontWeight={500}
										fontSize="16px"
										className="text-black"
									>
										Ava Turner
									</Typography>
									<Typography fontSize="13px">Team Leader</Typography>
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
											boxShadow: "0 4px 45px #0000001a",
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

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography
								className="text-black bg-purple-100"
								sx={{
									fontWeight: "500",
									display: "inline-block",
									padding: "5px 15px",
									borderRadius: "30px",
								}}
							>
								Project Management
							</Typography>
						</Box>

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography mb="5px">Team Members</Typography>

							<AvatarGroup
								max={4}
								sx={{
									justifyContent: "center",

									"& .MuiAvatar-root": {
										border: "2px solid #fff",
										backgroundColor: "#f0f0f0",
										color: "#000",
										width: "35px",
										height: "35px",
									},
									"& .MuiAvatarGroup-avatar": {
										backgroundColor: "#605dff", // Custom background color for the total avatar
										color: "#fff", // Custom color for the text
										fontSize: "13px",
										fontWeight: "500",
									},
								}}
							>
								<Avatar alt="Remy Sharp" src="/images/users/user15.jpg" />
								<Avatar alt="Travis Howard" src="/images/users/user16.jpg" />
								<Avatar alt="Agnes Walker" src="/images/users/user17.jpg" />
								<Avatar alt="Trevor Le" src="/images/users/user18.jpg" />
								<Avatar alt="Trevor Le" src="/images/users/user19.jpg" />
							</AvatarGroup>
						</Box>

						<Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									mb: "8px",
								}}
							>
								<Typography sx={{ fontWeight: "500" }}>Progress</Typography>

								<Typography sx={{ fontWeight: "500" }}>85%</Typography>
							</Box>

							<Box
								sx={{
									bgcolor: "#ecf0ff",
									width: "100%",
									height: "4px",
									display: "block",
									borderRadius: "30px",
								}}
							>
								<Box
									sx={{
										bgcolor: "#605dff",
										width: "85%",
										height: "4px",
										borderRadius: "30px",
									}}
								></Box>
							</Box>
						</Box>

						<Box sx={{ mt: "30px" }}>
							<Link href="#">
								<Button
									variant="outlined"
									color="primary"
									sx={{
										display: "block",
										width: "100%",
										textTransform: "capitalize",
										fontWeight: "500",
										borderRadius: "7px",
										padding: "7px 15px",
										fontSize: "14px",
									}}
								>
									View Details
								</Button>
							</Link>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
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
									gap: "12px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user12.jpg"
										className="rounded-circle"
										alt="user-image"
										width={65}
										height={65}
									/>
								</Box>
								<Box>
									<Typography
										fontWeight={500}
										fontSize="16px"
										className="text-black"
									>
										Ethan Parker
									</Typography>
									<Typography fontSize="13px">Team Leader</Typography>
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
											boxShadow: "0 4px 45px #0000001a",
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

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography
								className="text-black bg-purple-100"
								sx={{
									fontWeight: "500",
									display: "inline-block",
									padding: "5px 15px",
									borderRadius: "30px",
								}}
							>
								eCommerce Theme
							</Typography>
						</Box>

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography mb="5px">Team Members</Typography>

							<AvatarGroup
								max={4}
								sx={{
									justifyContent: "center",

									"& .MuiAvatar-root": {
										border: "2px solid #fff",
										backgroundColor: "#f0f0f0",
										color: "#000",
										width: "35px",
										height: "35px",
									},
									"& .MuiAvatarGroup-avatar": {
										backgroundColor: "#605dff", // Custom background color for the total avatar
										color: "#fff", // Custom color for the text
										fontSize: "13px",
										fontWeight: "500",
									},
								}}
							>
								<Avatar alt="Remy Sharp" src="/images/users/user6.jpg" />
								<Avatar alt="Travis Howard" src="/images/users/user7.jpg" />
								<Avatar alt="Agnes Walker" src="/images/users/user8.jpg" />
							</AvatarGroup>
						</Box>

						<Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									mb: "8px",
								}}
							>
								<Typography sx={{ fontWeight: "500" }}>Progress</Typography>

								<Typography sx={{ fontWeight: "500" }}>45%</Typography>
							</Box>

							<Box
								sx={{
									bgcolor: "#ecf0ff",
									width: "100%",
									height: "4px",
									display: "block",
									borderRadius: "30px",
								}}
							>
								<Box
									sx={{
										bgcolor: "#605dff",
										width: "45%",
										height: "4px",
										borderRadius: "30px",
									}}
								></Box>
							</Box>
						</Box>

						<Box sx={{ mt: "30px" }}>
							<Link href="#">
								<Button
									variant="outlined"
									color="primary"
									sx={{
										display: "block",
										width: "100%",
										textTransform: "capitalize",
										fontWeight: "500",
										borderRadius: "7px",
										padding: "7px 15px",
										fontSize: "14px",
									}}
								>
									View Details
								</Button>
							</Link>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
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
									gap: "12px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user13.jpg"
										className="rounded-circle"
										alt="user-image"
										width={65}
										height={65}
									/>
								</Box>
								<Box>
									<Typography
										fontWeight={500}
										fontSize="16px"
										className="text-black"
									>
										Isabella Lee
									</Typography>
									<Typography fontSize="13px">Team Leader</Typography>
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
											boxShadow: "0 4px 45px #0000001a",
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

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography
								className="text-black bg-purple-100"
								sx={{
									fontWeight: "500",
									display: "inline-block",
									padding: "5px 15px",
									borderRadius: "30px",
								}}
							>
								Shopify Theme Dev
							</Typography>
						</Box>

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography mb="5px">Team Members</Typography>

							<AvatarGroup
								max={4}
								sx={{
									justifyContent: "center",

									"& .MuiAvatar-root": {
										border: "2px solid #fff",
										backgroundColor: "#f0f0f0",
										color: "#000",
										width: "35px",
										height: "35px",
									},
									"& .MuiAvatarGroup-avatar": {
										backgroundColor: "#605dff", // Custom background color for the total avatar
										color: "#fff", // Custom color for the text
										fontSize: "13px",
										fontWeight: "500",
									},
								}}
							>
								<Avatar alt="Remy Sharp" src="/images/users/user10.jpg" />
								<Avatar alt="Travis Howard" src="/images/users/user11.jpg" />
								<Avatar alt="Agnes Walker" src="/images/users/user12.jpg" />
							</AvatarGroup>
						</Box>

						<Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									mb: "8px",
								}}
							>
								<Typography sx={{ fontWeight: "500" }}>Progress</Typography>

								<Typography sx={{ fontWeight: "500" }}>70%</Typography>
							</Box>

							<Box
								sx={{
									bgcolor: "#ecf0ff",
									width: "100%",
									height: "4px",
									display: "block",
									borderRadius: "30px",
								}}
							>
								<Box
									sx={{
										bgcolor: "#605dff",
										width: "70%",
										height: "4px",
										borderRadius: "30px",
									}}
								></Box>
							</Box>
						</Box>

						<Box sx={{ mt: "30px" }}>
							<Link href="#">
								<Button
									variant="outlined"
									color="primary"
									sx={{
										display: "block",
										width: "100%",
										textTransform: "capitalize",
										fontWeight: "500",
										borderRadius: "7px",
										padding: "7px 15px",
										fontSize: "14px",
									}}
								>
									View Details
								</Button>
							</Link>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
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
									gap: "12px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user14.jpg"
										className="rounded-circle"
										alt="user-image"
										width={65}
										height={65}
									/>
								</Box>
								<Box>
									<Typography
										fontWeight={500}
										fontSize="16px"
										className="text-black"
									>
										Thompson Torres
									</Typography>
									<Typography fontSize="13px">Team Leader</Typography>
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
											boxShadow: "0 4px 45px #0000001a",
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

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography
								className="text-black bg-purple-100"
								sx={{
									fontWeight: "500",
									display: "inline-block",
									padding: "5px 15px",
									borderRadius: "30px",
								}}
							>
								Oito - HTML
							</Typography>
						</Box>

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography mb="5px">Team Members</Typography>

							<AvatarGroup
								max={4}
								sx={{
									justifyContent: "center",

									"& .MuiAvatar-root": {
										border: "2px solid #fff",
										backgroundColor: "#f0f0f0",
										color: "#000",
										width: "35px",
										height: "35px",
									},
									"& .MuiAvatarGroup-avatar": {
										backgroundColor: "#605dff", // Custom background color for the total avatar
										color: "#fff", // Custom color for the text
										fontSize: "13px",
										fontWeight: "500",
									},
								}}
							>
								<Avatar alt="Remy Sharp" src="/images/users/user30.jpg" />
								<Avatar alt="Travis Howard" src="/images/users/user29.jpg" />
								<Avatar alt="Agnes Walker" src="/images/users/user28.jpg" />
							</AvatarGroup>
						</Box>

						<Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									mb: "8px",
								}}
							>
								<Typography sx={{ fontWeight: "500" }}>Progress</Typography>

								<Typography sx={{ fontWeight: "500" }}>90%</Typography>
							</Box>

							<Box
								sx={{
									bgcolor: "#ecf0ff",
									width: "100%",
									height: "4px",
									display: "block",
									borderRadius: "30px",
								}}
							>
								<Box
									sx={{
										bgcolor: "#605dff",
										width: "90%",
										height: "4px",
										borderRadius: "30px",
									}}
								></Box>
							</Box>
						</Box>

						<Box sx={{ mt: "30px" }}>
							<Link href="#">
								<Button
									variant="outlined"
									color="primary"
									sx={{
										display: "block",
										width: "100%",
										textTransform: "capitalize",
										fontWeight: "500",
										borderRadius: "7px",
										padding: "7px 15px",
										fontSize: "14px",
									}}
								>
									View Details
								</Button>
							</Link>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
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
									gap: "12px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user15.jpg"
										className="rounded-circle"
										alt="user-image"
										width={65}
										height={65}
									/>
								</Box>
								<Box>
									<Typography
										fontWeight={500}
										fontSize="16px"
										className="text-black"
									>
										Lucas Lyon
									</Typography>
									<Typography fontSize="13px">Team Leader</Typography>
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
											boxShadow: "0 4px 45px #0000001a",
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

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography
								className="text-black bg-purple-100"
								sx={{
									fontWeight: "500",
									display: "inline-block",
									padding: "5px 15px",
									borderRadius: "30px",
								}}
							>
								Tanus - Template
							</Typography>
						</Box>

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography mb="5px">Team Members</Typography>

							<AvatarGroup
								max={4}
								sx={{
									justifyContent: "center",

									"& .MuiAvatar-root": {
										border: "2px solid #fff",
										backgroundColor: "#f0f0f0",
										color: "#000",
										width: "35px",
										height: "35px",
									},
									"& .MuiAvatarGroup-avatar": {
										backgroundColor: "#605dff", // Custom background color for the total avatar
										color: "#fff", // Custom color for the text
										fontSize: "13px",
										fontWeight: "500",
									},
								}}
							>
								<Avatar alt="Remy Sharp" src="/images/users/user25.jpg" />
								<Avatar alt="Travis Howard" src="/images/users/user26.jpg" />
								<Avatar alt="Agnes Walker" src="/images/users/user27.jpg" />
							</AvatarGroup>
						</Box>

						<Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									mb: "8px",
								}}
							>
								<Typography sx={{ fontWeight: "500" }}>Progress</Typography>

								<Typography sx={{ fontWeight: "500" }}>75%</Typography>
							</Box>

							<Box
								sx={{
									bgcolor: "#ecf0ff",
									width: "100%",
									height: "4px",
									display: "block",
									borderRadius: "30px",
								}}
							>
								<Box
									sx={{
										bgcolor: "#605dff",
										width: "75%",
										height: "4px",
										borderRadius: "30px",
									}}
								></Box>
							</Box>
						</Box>

						<Box sx={{ mt: "30px" }}>
							<Link href="#">
								<Button
									variant="outlined"
									color="primary"
									sx={{
										display: "block",
										width: "100%",
										textTransform: "capitalize",
										fontWeight: "500",
										borderRadius: "7px",
										padding: "7px 15px",
										fontSize: "14px",
									}}
								>
									View Details
								</Button>
							</Link>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
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
									gap: "12px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user11.jpg"
										className="rounded-circle"
										alt="user-image"
										width={65}
										height={65}
									/>
								</Box>
								<Box>
									<Typography
										fontWeight={500}
										fontSize="16px"
										className="text-black"
									>
										Morgan Sturges
									</Typography>
									<Typography fontSize="13px">Team Leader</Typography>
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
											boxShadow: "0 4px 45px #0000001a",
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

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography
								className="text-black bg-purple-100"
								sx={{
									fontWeight: "500",
									display: "inline-block",
									padding: "5px 15px",
									borderRadius: "30px",
								}}
							>
								Delft - TypeScript
							</Typography>
						</Box>

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography mb="5px">Team Members</Typography>

							<AvatarGroup
								max={4}
								sx={{
									justifyContent: "center",

									"& .MuiAvatar-root": {
										border: "2px solid #fff",
										backgroundColor: "#f0f0f0",
										color: "#000",
										width: "35px",
										height: "35px",
									},
									"& .MuiAvatarGroup-avatar": {
										backgroundColor: "#605dff", // Custom background color for the total avatar
										color: "#fff", // Custom color for the text
										fontSize: "13px",
										fontWeight: "500",
									},
								}}
							>
								<Avatar alt="Remy Sharp" src="/images/users/user15.jpg" />
								<Avatar alt="Travis Howard" src="/images/users/user16.jpg" />
								<Avatar alt="Agnes Walker" src="/images/users/user17.jpg" />
							</AvatarGroup>
						</Box>

						<Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									mb: "8px",
								}}
							>
								<Typography sx={{ fontWeight: "500" }}>Progress</Typography>

								<Typography sx={{ fontWeight: "500" }}>65%</Typography>
							</Box>

							<Box
								sx={{
									bgcolor: "#ecf0ff",
									width: "100%",
									height: "4px",
									display: "block",
									borderRadius: "30px",
								}}
							>
								<Box
									sx={{
										bgcolor: "#605dff",
										width: "65%",
										height: "4px",
										borderRadius: "30px",
									}}
								></Box>
							</Box>
						</Box>

						<Box sx={{ mt: "30px" }}>
							<Link href="#">
								<Button
									variant="outlined"
									color="primary"
									sx={{
										display: "block",
										width: "100%",
										textTransform: "capitalize",
										fontWeight: "500",
										borderRadius: "7px",
										padding: "7px 15px",
										fontSize: "14px",
									}}
								>
									View Details
								</Button>
							</Link>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
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
									gap: "12px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user17.jpg"
										className="rounded-circle"
										alt="user-image"
										width={65}
										height={65}
									/>
								</Box>
								<Box>
									<Typography
										fontWeight={500}
										fontSize="16px"
										className="text-black"
									>
										Sophia McNeel
									</Typography>
									<Typography fontSize="13px">Team Leader</Typography>
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
											boxShadow: "0 4px 45px #0000001a",
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

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography
								className="text-black bg-purple-100"
								sx={{
									fontWeight: "500",
									display: "inline-block",
									padding: "5px 15px",
									borderRadius: "30px",
								}}
							>
								sine - Angular
							</Typography>
						</Box>

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography mb="5px">Team Members</Typography>

							<AvatarGroup
								max={4}
								sx={{
									justifyContent: "center",

									"& .MuiAvatar-root": {
										border: "2px solid #fff",
										backgroundColor: "#f0f0f0",
										color: "#000",
										width: "35px",
										height: "35px",
									},
									"& .MuiAvatarGroup-avatar": {
										backgroundColor: "#605dff", // Custom background color for the total avatar
										color: "#fff", // Custom color for the text
										fontSize: "13px",
										fontWeight: "500",
									},
								}}
							>
								<Avatar alt="Remy Sharp" src="/images/users/user21.jpg" />
								<Avatar alt="Travis Howard" src="/images/users/user22.jpg" />
								<Avatar alt="Agnes Walker" src="/images/users/user23.jpg" />
							</AvatarGroup>
						</Box>

						<Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									mb: "8px",
								}}
							>
								<Typography sx={{ fontWeight: "500" }}>Progress</Typography>

								<Typography sx={{ fontWeight: "500" }}>90%</Typography>
							</Box>

							<Box
								sx={{
									bgcolor: "#ecf0ff",
									width: "100%",
									height: "4px",
									display: "block",
									borderRadius: "30px",
								}}
							>
								<Box
									sx={{
										bgcolor: "#605dff",
										width: "90%",
										height: "4px",
										borderRadius: "30px",
									}}
								></Box>
							</Box>
						</Box>

						<Box sx={{ mt: "30px" }}>
							<Link href="#">
								<Button
									variant="outlined"
									color="primary"
									sx={{
										display: "block",
										width: "100%",
										textTransform: "capitalize",
										fontWeight: "500",
										borderRadius: "7px",
										padding: "7px 15px",
										fontSize: "14px",
									}}
								>
									View Details
								</Button>
							</Link>
						</Box>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6} lg={6} xl={3}>
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
									gap: "12px",
								}}
							>
								<Box>
									<Image
										src="/images/users/user18.jpg"
										className="rounded-circle"
										alt="user-image"
										width={65}
										height={65}
									/>
								</Box>
								<Box>
									<Typography
										fontWeight={500}
										fontSize="16px"
										className="text-black"
									>
										Rodriguez Meade
									</Typography>
									<Typography fontSize="13px">Team Leader</Typography>
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
											boxShadow: "0 4px 45px #0000001a",
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

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography
								className="text-black bg-purple-100"
								sx={{
									fontWeight: "500",
									display: "inline-block",
									padding: "5px 15px",
									borderRadius: "30px",
								}}
							>
								eLearniv - React
							</Typography>
						</Box>

						<Box sx={{ textAlign: "center", mb: "15px" }}>
							<Typography mb="5px">Team Members</Typography>

							<AvatarGroup
								max={4}
								sx={{
									justifyContent: "center",

									"& .MuiAvatar-root": {
										border: "2px solid #fff",
										backgroundColor: "#f0f0f0",
										color: "#000",
										width: "35px",
										height: "35px",
									},
									"& .MuiAvatarGroup-avatar": {
										backgroundColor: "#605dff", // Custom background color for the total avatar
										color: "#fff", // Custom color for the text
										fontSize: "13px",
										fontWeight: "500",
									},
								}}
							>
								<Avatar alt="Remy Sharp" src="/images/users/user15.jpg" />
								<Avatar alt="Travis Howard" src="/images/users/user16.jpg" />
								<Avatar alt="Agnes Walker" src="/images/users/user17.jpg" />
								<Avatar alt="Trevor Le" src="/images/users/user18.jpg" />
								<Avatar alt="Trevor Le" src="/images/users/user19.jpg" />
							</AvatarGroup>
						</Box>

						<Box>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									mb: "8px",
								}}
							>
								<Typography sx={{ fontWeight: "500" }}>Progress</Typography>

								<Typography sx={{ fontWeight: "500" }}>85%</Typography>
							</Box>

							<Box
								sx={{
									bgcolor: "#ecf0ff",
									width: "100%",
									height: "4px",
									display: "block",
									borderRadius: "30px",
								}}
							>
								<Box
									sx={{
										bgcolor: "#605dff",
										width: "85%",
										height: "4px",
										borderRadius: "30px",
									}}
								></Box>
							</Box>
						</Box>

						<Box sx={{ mt: "30px" }}>
							<Link href="#">
								<Button
									variant="outlined"
									color="primary"
									sx={{
										display: "block",
										width: "100%",
										textTransform: "capitalize",
										fontWeight: "500",
										borderRadius: "7px",
										padding: "7px 15px",
										fontSize: "14px",
									}}
								>
									View Details
								</Button>
							</Link>
						</Box>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default TeamsCard;
