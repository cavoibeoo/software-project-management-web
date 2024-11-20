"use client";

import * as React from "react";
import {
	IconButton,
	Typography,
	Box,
	Tooltip,
	Avatar,
	Menu,
	MenuItem,
	ListItemIcon,
	Divider,
} from "@mui/material";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ChatIcon from "@mui/icons-material/Chat";
import ListIcon from "@mui/icons-material/List";
import Logout from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import SupportIcon from "@mui/icons-material/Support";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import axios from "axios";
import { toast } from "react-toastify";
import { LogoutServices } from "@/api-services/AuthServices";

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = async (event: any) => {
		event.preventDefault();
		LogoutServices();
	};

	return (
		<>
			<Tooltip title="Account settings">
				<IconButton
					onClick={handleClick}
					size="small"
					sx={{ p: 0, borderRadius: "5px" }}
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
				>
					<Avatar
						src="/images/avt_quang.jpg"
						alt="Olivia"
						sx={{
							width: { xs: "20px", sm: "28px" },
							height: { xs: "20px", sm: "28px" },
							border: "2px solid #C2CDFF",
						}}
						className="mr-8"
					/>
					<Typography
						variant="h3"
						sx={{
							fontWeight: "600",
							fontSize: "13px",
							display: { xs: "none", sm: "block" },
						}}
						className="text-black"
					></Typography>
					<KeyboardArrowDownIcon sx={{ fontSize: "15px" }} />
				</IconButton>
			</Tooltip>

			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						borderRadius: "7px",
						boxShadow: "0 4px 45px #0000001a",
						overflow: "visible",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
				className="for-dark-top-navList"
			>
				<MenuItem sx={{ padding: "10px 20px" }}>
					<Avatar
						src="/images/avt_quang.jpg"
						sx={{
							width: 31,
							height: 31,
							border: "2px solid #C2CDFF",
						}}
						className="mr-8"
					/>
					<Box>
						<Typography
							variant="h5"
							sx={{
								fontSize: "13px",
								color: "#260944",
								fontWeight: "500",
							}}
							className="text-black"
						>
							Tran Duc Quang
						</Typography>

						<Typography sx={{ fontSize: "12px" }}>
							21110793@student.hcmute.edu.vn
						</Typography>
					</Box>
				</MenuItem>

				<Divider sx={{ borderColor: "#F6F7F9" }} />

				<MenuItem sx={{ padding: "8px 20px" }}>
					<Link
						href="/my-profile/"
						className="text-black"
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<ListItemIcon sx={{ mr: "-10px", mt: "-3px" }}>
							<AccountCircleIcon
								sx={{ fontSize: "20px" }}
								className="text-black"
							/>
						</ListItemIcon>

						<span style={{ fontSize: "13px" }}>My Profile</span>
					</Link>
				</MenuItem>

				<MenuItem sx={{ padding: "8px 20px" }}>
					<Link
						href="/sine/chat/"
						className="text-black"
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<ListItemIcon sx={{ mr: "-10px", mt: "-3px" }}>
							<ChatIcon sx={{ fontSize: "20px" }} className="text-black" />
						</ListItemIcon>

						<span style={{ fontSize: "13px" }}>Messages</span>
					</Link>
				</MenuItem>

				<MenuItem sx={{ padding: "8px 20px" }}>
					<Link
						href="/sine/your-work/"
						className="text-black"
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<ListItemIcon sx={{ mr: "-10px", mt: "-3px" }}>
							<ListIcon sx={{ fontSize: "20px" }} className="text-black" />
						</ListItemIcon>

						<span style={{ fontSize: "13px" }}>My Task</span>
					</Link>
				</MenuItem>

				<MenuItem sx={{ padding: "8px 20px" }}>
					<Link
						href="/ecommerce/checkout/"
						className="text-black"
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<ListItemIcon sx={{ mr: "-10px", mt: "-3px" }}>
							<CreditCardIcon
								sx={{ fontSize: "20px" }}
								className="text-black"
							/>
						</ListItemIcon>

						<span style={{ fontSize: "13px" }}>Billing</span>
					</Link>
				</MenuItem>

				<Divider sx={{ borderColor: "#F6F7F9" }} />

				<MenuItem sx={{ padding: "8px 20px" }}>
					<Link
						href="/settings/"
						className="text-black"
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<ListItemIcon sx={{ mr: "-10px", mt: "-3px" }}>
							<SettingsIcon sx={{ fontSize: "20px" }} className="text-black" />
						</ListItemIcon>

						<span style={{ fontSize: "13px" }}>Settings</span>
					</Link>
				</MenuItem>

				<MenuItem sx={{ padding: "8px 20px" }}>
					<Link
						href="/faq/"
						className="text-black"
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<ListItemIcon sx={{ mr: "-10px", mt: "-3px" }}>
							<SupportIcon sx={{ fontSize: "20px" }} className="text-black" />
						</ListItemIcon>

						<span style={{ fontSize: "13px" }}>Support</span>
					</Link>
				</MenuItem>

				<MenuItem sx={{ padding: "8px 20px" }}>
					<Link
						href="/authentication/lock-screen/"
						className="text-black"
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<ListItemIcon sx={{ mr: "-10px", mt: "-3px" }}>
							<LockOpenIcon sx={{ fontSize: "20px" }} className="text-black" />
						</ListItemIcon>

						<span style={{ fontSize: "13px" }}>Lock Screen</span>
					</Link>
				</MenuItem>

				<MenuItem sx={{ padding: "8px 20px" }} onClick={handleLogout}>
					<Box
						className="text-black"
						style={{
							display: "flex",
							alignItems: "center",
						}}
					>
						<ListItemIcon sx={{ mr: "-10px", mt: "-3px" }}>
							<Logout sx={{ fontSize: "20px" }} className="text-black" />
						</ListItemIcon>

						<span style={{ fontSize: "13px" }}>Logout</span>
					</Box>
				</MenuItem>
			</Menu>
		</>
	);
};

export default Profile;
