"use client";

import React from "react";
import Image from "next/image";
import {
	Card,
	Box,
	Typography,
	Menu,
	MenuItem,
	IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const CustomerId: React.FC = () => {
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
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						mb: "20px",
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
							<MenuItem>Last Day</MenuItem>
							<MenuItem>Last Week</MenuItem>
							<MenuItem>Last Month</MenuItem>
							<MenuItem>Last Year</MenuItem>
						</Menu>
					</Box>
				</Box>

				<Box>
					<Box mt="15px">
						<Typography fontSize="13px" mb="4px">
							Account ID:
						</Typography>
						<Typography fontSize="14px" fontWeight={500} className="text-black">
							ID-12174123
						</Typography>
					</Box>

					<Box mt="15px">
						<Typography fontSize="13px" mb="4px">
							Billing Email:
						</Typography>
						<Typography fontSize="14px" fontWeight={500} className="text-black">
							ava&#64;sine.com
						</Typography>
					</Box>

					<Box mt="15px">
						<Typography fontSize="13px" mb="4px">
							Delivery Address:
						</Typography>
						<Typography fontSize="14px" fontWeight={500} className="text-black">
							15 Maple St, Hamletville, England
						</Typography>
					</Box>

					<Box mt="15px">
						<Typography fontSize="13px" mb="4px">
							Language:
						</Typography>
						<Typography fontSize="14px" fontWeight={500} className="text-black">
							English, Spanish
						</Typography>
					</Box>

					<Box mt="15px">
						<Typography fontSize="13px" mb="4px">
							Latest Transaction:
						</Typography>
						<Typography fontSize="14px" fontWeight={500} className="text-black">
							#JAN-121
						</Typography>
					</Box>
				</Box>
			</Card>
		</>
	);
};

export default CustomerId;
