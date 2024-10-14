"use client";

import React from "react";
import {
	Card,
	Box,
	Menu,
	MenuItem,
	IconButton,
	Typography,
	Button,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Read: React.FC = () => {
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
					position: "relative",
				}}
				className="rmui-card"
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						paddingBottom: "18px",
						marginBottom: "25px",
					}}
					className="border-bottom"
				>
					<Typography
						variant="h5"
						fontWeight={600}
						fontSize="16px"
						className="text-black"
					>
						Sales Review Meeting
					</Typography>

					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "5px",
						}}
					>
						<Tooltip title="Archive" arrow>
							<IconButton aria-label="archive" size="small">
								<i
									className="material-symbols-outlined"
									style={{ fontSize: "18px" }}
								>
									archive
								</i>
							</IconButton>
						</Tooltip>

						<Tooltip title="Report Spam" arrow>
							<IconButton aria-label="help" size="small">
								<i
									className="material-symbols-outlined"
									style={{ fontSize: "18px" }}
								>
									help_clinic
								</i>
							</IconButton>
						</Tooltip>

						<Tooltip title="Delete" arrow>
							<IconButton aria-label="delete" size="small">
								<i
									className="material-symbols-outlined"
									style={{ fontSize: "18px" }}
								>
									delete
								</i>
							</IconButton>
						</Tooltip>

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
									style={{ fontSize: "18px" }}
								>
									more_vert
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
								<MenuItem
									className="text-black"
									sx={{
										gap: "8px",
									}}
								>
									<i
										className="material-symbols-outlined"
										style={{ fontSize: "20px" }}
									>
										reply
									</i>
									Reply
								</MenuItem>

								<MenuItem
									className="text-black"
									sx={{
										gap: "8px",
									}}
								>
									<i
										className="material-symbols-outlined"
										style={{ fontSize: "20px" }}
									>
										redo
									</i>
									Forward
								</MenuItem>

								<MenuItem
									className="text-black"
									sx={{
										gap: "8px",
									}}
								>
									<i
										className="material-symbols-outlined"
										style={{ fontSize: "20px" }}
									>
										print
									</i>
									Print
								</MenuItem>

								<MenuItem
									className="text-black"
									sx={{
										gap: "8px",
									}}
								>
									<i
										className="material-symbols-outlined"
										style={{ fontSize: "20px" }}
									>
										download
									</i>
									Download
								</MenuItem>

								<MenuItem
									className="text-black"
									sx={{
										gap: "8px",
									}}
								>
									<i
										className="material-symbols-outlined"
										style={{ fontSize: "20px" }}
									>
										mark_email_unread
									</i>
									Mark as unread
								</MenuItem>

								<MenuItem
									className="text-black"
									sx={{
										gap: "8px",
									}}
								>
									<i
										className="material-symbols-outlined"
										style={{ fontSize: "20px" }}
									>
										info
									</i>
									Report Spam
								</MenuItem>

								<MenuItem
									className="text-black"
									sx={{
										gap: "8px",
									}}
								>
									<i
										className="material-symbols-outlined"
										style={{ fontSize: "20px" }}
									>
										delete
									</i>
									Delete
								</MenuItem>

								<MenuItem
									className="text-black"
									sx={{
										gap: "8px",
									}}
								>
									<i
										className="material-symbols-outlined"
										style={{ fontSize: "20px" }}
									>
										block
									</i>
									Block Sarah
								</MenuItem>
							</Menu>
						</Box>
					</Box>
				</Box>

				<Box>
					<Box
						className="email-info"
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
									src="/images/users/user31.jpg"
									alt="user-image"
									width={45}
									height={45}
									style={{ borderRadius: "100px" }}
								/>
							</Box>
							<Box>
								<Typography
									className="text-black"
									fontWeight={600}
									fontSize="14px"
								>
									Sarah Smith
								</Typography>
								<Typography fontSize="12px">sarah&#64;sine.com</Typography>
							</Box>
						</Box>

						<Box
							sx={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<Checkbox
								{...label}
								icon={<StarBorderIcon />}
								checkedIcon={<StarRateIcon />}
								className="dark-check"
							/>

							<Typography fontSize="13px">26 March 2024</Typography>
						</Box>
					</Box>

					<Box
						sx={{
							paddingLeft: { xs: "0", md: "58px" },
						}}
						className="email-content-details"
					>
						<Typography variant="h3">
							Subject: Re: Quarterly Sales Review Meeting
						</Typography>

						<Typography variant="h3">Hi Smith,</Typography>

						<Typography>
							Great, I'll go ahead and send out the calendar invite shortly.
						</Typography>

						<Typography>
							Regarding the agenda, I think your suggestions are spot on. I'll
							add them to the agenda and circulate it to everyone before the
							meeting so they can come prepared.
						</Typography>

						<Typography>
							Additionally, I think it would be beneficial to have a brief
							update on any new products or promotions that are launching in the
							next quarter. This will give us a comprehensive view of our sales
							strategy moving forward.
						</Typography>

						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</Typography>

						<Typography>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo
						</Typography>

						<Typography>
							Let me know if you think that's a valuable addition to the agenda.
						</Typography>

						<Typography variant="h6">Best regards,</Typography>
						<Typography variant="h6">Olivia Parker</Typography>
					</Box>

					<Box
						className="border-top"
						sx={{
							marginTop: "25px",
							paddingTop: "25px",
							gap: "10px",
							display: "flex",
							alignItems: "center",
							paddingLeft: { xs: "0", md: "58px" },
						}}
					>
						<Button
							type="submit"
							variant="contained"
							sx={{
								bgcolor: "primary.main",
								textTransform: "capitalize",
								borderRadius: "6px",
								fontWeight: "600",
								fontSize: { xs: "13px", sm: "16px" },
								padding: { xs: "6px 18px", sm: "6px 25px" },
								color: "#fff !important",
								boxShadow: "none",
							}}
						>
							Reply
						</Button>

						<Button
							type="submit"
							variant="outlined"
							sx={{
								textTransform: "capitalize",
								borderRadius: "6px",
								fontWeight: "600",
								fontSize: { xs: "13px", sm: "16px" },
								padding: { xs: "6px 18px", sm: "6px 25px" },
								boxShadow: "none",
							}}
						>
							Forward
						</Button>
					</Box>
				</Box>
			</Card>
		</>
	);
};

export default Read;
