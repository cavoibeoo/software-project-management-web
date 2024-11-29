"use client";

import * as React from "react";
import Image from "next/image";
import {
	Card,
	Box,
	Typography,
	TextField,
	Button,
	Menu,
	MenuItem,
	IconButton,
} from "@mui/material";
import styles from "@/components/Apps/Chat/Chat.module.css";

const ChatBox: React.FC = () => {
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
				className="chat-card"
				sx={{
					boxShadow: "none",
					bgcolor: "#fff",
					borderRadius: "7px",
					padding: { xs: "20px", sm: "25px" },
					position: "relative",
					paddingBottom: "0 !important",
				}}
			>
				<Box>
					<Box
						className="chat-header"
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "15px",
							}}
						>
							<Box position="relative" fontSize={35}>
								<i className="ri-robot-2-line"></i>
							</Box>

							<Box>
								<Typography
									variant="h5"
									fontWeight={600}
									paddingTop={0.5}
									className="text-black"
									sx={{
										fontSize: { xs: "13px", sm: "16px" },
									}}
								>
									Sine AI
								</Typography>
							</Box>
						</Box>

						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Box>
								<IconButton
									onClick={handleClick}
									size="small"
									aria-controls={open ? "account-menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
								>
									<i
										className="material-symbols-outlined"
										style={{ fontSize: "17px" }}
									>
										more_horiz
									</i>
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
									<MenuItem>Mute Chat</MenuItem>
									<MenuItem>Delete</MenuItem>
									<MenuItem>Block</MenuItem>
								</Menu>
							</Box>
						</Box>
					</Box>

					<Box
						className="border-top"
						sx={{ marginTop: "15px", marginBottom: "15px" }}
					></Box>

					<Box
						className={styles.chatBody}
						maxHeight="50vh"
						display="flex"
						justifyContent="center"
						paddingRight="25px"
					>
						<Box width="100%">
							<ul>
								<li>
									<Box
										width="35px"
										height="35px"
										fontSize={25}
										className={styles.user}
									>
										<i className="ri-robot-2-line"></i>
									</Box>
									<div className={styles.message}>
										<div>
											<p className="chat-form-custom">
												You have done 10 tasks in project Web Innovation Hub
											</p>
										</div>
									</div>
									<Typography component="span" className={styles.time}>
										09:20 AM
									</Typography>
								</li>
								<li className={styles.right}>
									<div className={styles.message}>
										<div>
											<p>
												Sine, How many task have done in project Web Innovation
												Hub?
											</p>
										</div>
									</div>
									<Typography component="span" className={styles.time}>
										09:20 AM
									</Typography>
								</li>
								<li>
									<Box
										width="35px"
										height="35px"
										fontSize={25}
										className={styles.user}
									>
										<i className="ri-robot-2-line"></i>
									</Box>
									<div
										className={styles.message}
										style={{ color: "#000 !important" }}
									>
										<div>
											<p className="chat-form-custom">
												You have done 10 tasks in project Web Innovation Hub
											</p>
										</div>
									</div>
									<Typography component="span" className={styles.time}>
										09:20 AM
									</Typography>
								</li>

								<li className={styles.right}>
									<div className={styles.message}>
										<div>
											<p>
												Sine, How many task remain in project Web Innovation
												Hub?
											</p>
										</div>
									</div>
									<Typography component="span" className={styles.time}>
										09:21 AM
									</Typography>
								</li>
								<li>
									<Box
										width="35px"
										height="35px"
										fontSize={25}
										className={styles.user}
									>
										<i className="ri-robot-2-line"></i>
									</Box>
									<Box
										className={styles.message}
										sx={{ color: "#000", backgroundColor: "#fff" }}
									>
										<div>
											<p className="chat-form-custom">
												You have remain 4 task to be done in project Web
												Innovation Hub!
											</p>
										</div>
									</Box>
									<Typography component="span" className={styles.time}>
										09:21 AM
									</Typography>
								</li>
								<li className={styles.right}>
									<div className={styles.message}>
										<div>
											<p>Sine, How many task remain?</p>
										</div>
									</div>
									<Typography component="span" className={styles.time}>
										09:21 AM
									</Typography>
								</li>
								<li>
									<Box
										width="35px"
										height="35px"
										fontSize={25}
										className={styles.user}
									>
										<i className="ri-robot-2-line"></i>
									</Box>
									<div className={styles.message}>
										<div>
											<p className="chat-form-custom">
												You have remain 100 task to be done!
											</p>
										</div>
									</div>
									<Typography component="span" className={styles.time}>
										09:21 AM
									</Typography>
								</li>
							</ul>
						</Box>
					</Box>

					<Box
						className="chat-footer bg-f6f7f9"
						sx={{
							padding: "20px",
							display: { sm: "flex" },
							borderRadius: "7px",
							alignItems: "center",
							gap: "20px",
							mt: "15px",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								mb: { xs: "10px", sm: "0" },
							}}
						>
							<IconButton aria-label="call" size="small">
								<i
									className="material-symbols-outlined"
									style={{ fontSize: "16px" }}
								>
									sentiment_satisfied
								</i>
							</IconButton>

							<IconButton aria-label="video" size="small">
								<i
									className="material-symbols-outlined"
									style={{ fontSize: "16px" }}
								>
									attach_file
								</i>
							</IconButton>

							<IconButton aria-label="video" size="small">
								<i
									className="material-symbols-outlined"
									style={{ fontSize: "16px" }}
								>
									mic_none
								</i>
							</IconButton>

							<IconButton aria-label="video" size="small">
								<i
									className="material-symbols-outlined"
									style={{ fontSize: "16px" }}
								>
									image
								</i>
							</IconButton>
						</Box>

						<Box sx={{ flex: "1 1 auto" }}>
							<form>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: "10px",
									}}
								>
									<Box
										sx={{
											display: "inline-flex",
											flexDirection: "column",
											width: "100%",
										}}
									>
										<TextField
											autoComplete="message"
											name="message"
											required
											fullWidth
											id="message"
											label="Type your message"
											autoFocus
											InputProps={{
												style: {
													borderRadius: "7px",
												},
											}}
											sx={{
												borderRadius: "7px",
											}}
											className="bg-white"
										/>
									</Box>

									<Box>
										<Button
											variant="contained"
											sx={{
												bgcolor: "primary.main",
												padding: "14px 10px",
											}}
											className="text-white"
										>
											<i className="material-symbols-outlined">send</i>
										</Button>
									</Box>
								</Box>
							</form>
						</Box>
					</Box>
				</Box>
			</Card>
		</>
	);
};

export default ChatBox;
