"use client";

import React from "react";
import {
	Card,
	Box,
	Typography,
	Menu,
	IconButton,
	MenuItem,
	Button,
	styled,
	FormControl,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

const Seller: React.FC = () => {
	// Dropdown
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	// Textarea
	const blue = {
		100: "#DAECFF",
		200: "#b6daff",
		400: "#3399FF",
		500: "#007FFF",
		600: "#0072E5",
		900: "#605DFF",
	};

	const grey = {
		50: "#F3F6F9",
		100: "#E5EAF2",
		200: "#DAE2ED",
		300: "#C7D0DD",
		400: "#B0B8C4",
		500: "#9DA8B7",
		600: "#6B7A90",
		700: "#434D5B",
		800: "#303740",
		900: "#1C2025",
	};

	const Textarea = styled(BaseTextareaAutosize)(
		({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 7px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: none;

    &:hover {
      border-color: ${blue[900]};
    }

    &:focus {
      border-color: ${blue[900]};
      box-shadow: none;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
	);

	return (
		<>
			<Card
				sx={{
					boxShadow: "none",
					borderRadius: "7px",
					padding: { xs: "18px", sm: "20px", lg: "25px" },
					mb: "25px",
				}}
				className="rmui-card seller-card"
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
								src="/images/sellers/seller1.png"
								alt="seller-image"
								width={50}
								height={50}
							/>
						</Box>
						<Box>
							<Link href="/ecommerce/sellers/details">
								<Typography variant="h6" fontSize="16px" className="text-black">
									Ava Turner
								</Typography>
							</Link>

							<Typography fontSize="13px">turner&#64;sine.com</Typography>
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

				<Box>
					<Box className="text-black" mt="10px">
						<span className="text-body mr-5">Last Sale Date:</span>
						25 Nov 2024
					</Box>

					<Box className="text-black" mt="10px">
						<span className="text-body mr-5">Item Stock:</span>
						50
					</Box>

					<Box className="text-black" mt="10px">
						<span className="text-body mr-5">Wallet Balance:</span>
						$9,999.50
					</Box>

					<Box className="text-black" mt="10px">
						<span className="text-body mr-5">Revenue:</span>
						$5,999.50
					</Box>

					<Box className="text-black" mt="10px">
						<span className="text-body mr-5">Store:</span>
						TechMaster Store
					</Box>
				</Box>

				<Box component="form" mt="15px">
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
							Contact Support
						</Typography>

						<Textarea
							aria-label="minimum height"
							minRows={5}
							placeholder="Type here..."
						/>
					</FormControl>

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
							mt: "15px",
						}}
					>
						<i className="material-symbols-outlined mr-5">send</i>
						Send Message
					</Button>
				</Box>
			</Card>
		</>
	);
};

export default Seller;
