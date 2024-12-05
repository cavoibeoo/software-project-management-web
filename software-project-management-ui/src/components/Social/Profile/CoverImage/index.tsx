"use client";

import * as React from "react";
import { Box, Typography, MenuItem, Button, Menu, Avatar } from "@mui/material";
import Image from "next/image";
import { EditUserInfo } from "@/app/user/components/CoverImage/EditUserInfo/EditUserInfo";

const CoverImage: React.FC<{ myInfo: any; callUpdate: () => void }> = ({
	myInfo,
	callUpdate,
}) => {
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
			<Box className="profile-card border-radius bg-white" mb="25px">
				<Box
					className="cover-image border-top-radius"
					sx={{
						position: "relative",
					}}
				>
					<Box
						sx={{
							backgroundImage: `url(/images/profile-cover.jpg)`,
							height: { xs: "160px", sm: "200px", lg: "255px" },
							backgroundSize: "cover",
							backgroundPosition: "center center",
						}}
						className="border-top-radius"
					></Box>
				</Box>

				<Box
					className="profile-content"
					sx={{
						marginTop: { xs: "-30px", sm: "-60px" },
						paddingLeft: { xs: "20px", sm: "30px" },
						paddingRight: { xs: "20px", sm: "30px" },
						paddingBottom: { xs: "30px", sm: "45px" },
					}}
				>
					<Box
						sx={{
							display: { sm: "flex" },
							alignItems: "end",
							justifyContent: "space-between",
						}}
					>
						<Box
							sx={{
								display: { md: "flex" },
								alignItems: "end",
								gap: "30px",
							}}
						>
							<Box
								sx={{
									position: "relative",
									width: { xs: "120px", sm: "160px" },
								}}
							>
								<Avatar
									src={myInfo.avatar || "/images/default-avatar.png"}
									className="profile-image rounded-circle"
									alt="profile-image"
									sx={{
										width: 150,
										height: 150,
										backgroundColor: "#fff",
										border: "2px solid #213b65",
									}}
								/>

								<Image
									src="/images/icons/verified.svg"
									alt="verified"
									width={50}
									height={50}
									style={{
										position: "absolute",
										bottom: "11px",
									}}
									className="po-right-0"
								/>
							</Box>

							<Box sx={{ mt: { xs: "10px", md: "0" } }}>
								<Typography
									variant="h5"
									fontWeight={700}
									className="text-black"
									sx={{
										fontSize: { sx: "20px", md: "22px", lg: "24px" },
									}}
								>
									{myInfo.name}
								</Typography>

								<Typography
									sx={{
										fontSize: "16px",
										fontWeight: "500",
									}}
								>
									{myInfo.jobTitle ? myInfo.jobTitle : "N/A"}
								</Typography>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "end",
								gap: "10px",
								mt: { xs: "15px", sm: "0" },
							}}
						>
							<Box>
								<EditUserInfo myInfo={myInfo} callUpdate={callUpdate} />

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
											minWidth: "160px",

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
									<MenuItem>See Photo</MenuItem>
									<MenuItem>Upload Photo</MenuItem>
									<MenuItem>Remove</MenuItem>
								</Menu>
							</Box>

							<Box>
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
											minWidth: "160px",

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
									<MenuItem>Facebook</MenuItem>
									<MenuItem>X</MenuItem>
									<MenuItem>Instagram</MenuItem>
								</Menu>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default CoverImage;
