"use client";

import * as React from "react";
import styles from "@/components/Layout/TopNavbar/Notifications/Notifications.module.css";
import {
	IconButton,
	Button,
	Typography,
	Tooltip,
	Menu,
	Badge,
	Box,
} from "@mui/material";
import Link from "next/link";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

const Notifications: React.FC = () => {
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
			<Tooltip title="Notification">
				<IconButton
					onClick={handleClick}
					size="small"
					sx={{
						width: "35px",
						height: "35px",
						p: 0,
					}}
					aria-controls={open ? "account-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					className="for-dark-notification"
				>
					<Badge
						color="error"
						variant="dot"
						sx={{ position: "absolute", top: "12px", right: "12px" }}
					></Badge>
					<NotificationsNoneIcon color="action" sx={{ fontSize: "24px" }} />
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
						padding: "0",
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
			>
				<div className={styles.header}>
					<Typography variant="h4">
						Notifications <span className="text-body">(03)</span>
					</Typography>
					<Button variant="text">clear all</Button>
				</div>

				<div className={styles.notification}>
					<div className={styles.notificationList}>
						<div className={styles.icon}>
							<i className="material-symbols-outlined">sms</i>
						</div>

						<Box
							component="span"
							sx={{ display: "block", mb: "4px" }}
							className="text-black"
						>
							You have requested to{" "}
							<strong style={{ fontWeight: "600" }}>withdrawal</strong>
						</Box>

						<Box component="span" sx={{ display: "block" }}>
							2 hrs ago
						</Box>

						<Link
							href="/notifications"
							style={{
								display: "block",
								left: "0",
								top: "0",
								bottom: "0",
								zIndex: "1",
								position: "absolute",
								width: "100%",
								height: "100%",
							}}
						></Link>
					</div>

					<div className={styles.notificationList}>
						<div className={styles.icon}>
							<i className="material-symbols-outlined">person</i>
						</div>

						<Box
							component="span"
							sx={{ display: "block", mb: "4px" }}
							className="text-black"
						>
							<strong style={{ fontWeight: "600" }}>A new user</strong> added in
							sine
						</Box>

						<Box component="span" sx={{ display: "block" }}>
							3 hrs ago
						</Box>

						<Link
							href="/notifications"
							style={{
								display: "block",
								left: "0",
								top: "0",
								bottom: "0",
								zIndex: "1",
								position: "absolute",
								width: "100%",
								height: "100%",
							}}
						></Link>
					</div>

					<div className={styles.notificationList}>
						<div className={styles.icon}>
							<i className="material-symbols-outlined">mark_email_unread</i>
						</div>

						<Box
							component="span"
							sx={{ display: "block", mb: "4px" }}
							className="text-black"
						>
							You have requested to{" "}
							<strong style={{ fontWeight: "600" }}>withdrawal</strong>
						</Box>

						<Box component="span" sx={{ display: "block" }}>
							1 day ago
						</Box>

						<Link
							href="/notifications"
							style={{
								display: "block",
								left: "0",
								top: "0",
								bottom: "0",
								zIndex: "1",
								position: "absolute",
								width: "100%",
								height: "100%",
							}}
						></Link>
					</div>

					<Typography component="div" textAlign="center">
						<Link
							href="#"
							style={{
								fontWeight: "500",
								marginTop: "15px",
								marginBottom: "10px",
								display: "inline-block",
								textDecoration: "none",
							}}
						>
							See All Notifications
						</Link>
					</Typography>
				</div>
			</Menu>
		</>
	);
};

export default Notifications;
