"use client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import React, { useState, FormEvent } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import {
	Box,
	Typography,
	IconButton,
	Dialog,
	DialogTitle,
	Grid,
	Button,
} from "@mui/material";

import { deleteIssue } from "@/api-services/issueServices";
import { toast } from "react-toastify";

interface BootstrapDialogTitleProps {
	children?: React.ReactNode;
	onClose: () => void;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

function BootstrapDialogTitle(props: BootstrapDialogTitleProps) {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}
BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

export default function MoreOption({
	projectId,
	issueId,
	callUpdate,
}: {
	projectId: any;
	issueId: any;
	callUpdate: () => void;
}) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	// Modal
	const [openNotification, setOpenNotification] = useState(false);
	const handleClickOpenNotification = () => {
		setOpenNotification(true);
	};
	const handleCloseNotification = () => {
		setOpenNotification(false);
	};
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		let result = await deleteIssue({ projectId, issueId });
		if (!result?.error) {
			toast.success("Issue deleted successfully");
		} else {
			toast.error("Failed to delete issue");
		}
		callUpdate();
		event.preventDefault();
		handleCloseNotification();
	};

	return (
		<>
			<div>
				<Button
					id="fade-button"
					aria-controls={open ? "fade-menu" : undefined}
					aria-haspopup="true"
					aria-expanded={open ? "true" : undefined}
					onClick={handleClick}
				>
					<span className="material-symbols-outlined">more_horiz</span>
				</Button>
				<Menu
					id="fade-menu"
					MenuListProps={{
						"aria-labelledby": "fade-button",
					}}
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					TransitionComponent={Fade}
				>
					<MenuItem onClick={handleClickOpenNotification}>Delete</MenuItem>
					<NextLink href="/your-work/project-setting/">
						<MenuItem>Configure</MenuItem>
					</NextLink>
				</Menu>
			</div>
			<BootstrapDialog
				onClose={handleCloseNotification}
				aria-labelledby="customized-dialog-title"
				open={openNotification}
				className="rmu-modal"
			>
				<Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							background: "#ff6666",
							padding: { xs: "15px 20px", md: "25px" },
						}}
						className="rmu-modal-header"
					>
						<Typography
							id="modal-modal-title"
							variant="h6"
							sx={{
								fontWeight: "600",
								fontSize: { xs: "16px", md: "18px" },
								color: "#fff !important",
							}}
							className="text-black"
						>
							Delete Issue
						</Typography>

						<IconButton
							aria-label="remove"
							size="small"
							onClick={handleCloseNotification}
						>
							<ClearIcon />
						</IconButton>
					</Box>

					<Box className="rmu-modal-content">
						<Box component="form" noValidate onSubmit={handleSubmit}>
							<Box
								sx={{
									padding: "25px",
									borderRadius: "8px",
								}}
								className="bg-white"
							>
								<Grid container alignItems="center" spacing={2}>
									<Grid
										item
										xs={12}
										mt={1}
										display="flex"
										justifyContent="flex-end"
									>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "10px",
											}}
										>
											<Button
												onClick={handleCloseNotification}
												variant="outlined"
												color="error"
												sx={{
													textTransform: "capitalize",
													borderRadius: "8px",
													fontWeight: "500",
													fontSize: "13px",
													padding: "11px 30px",
												}}
											>
												Cancel
											</Button>

											<Button
												type="submit"
												variant="contained"
												component="button"
												sx={{
													textTransform: "capitalize",
													borderRadius: "8px",
													fontWeight: "500",
													fontSize: "13px",
													padding: "11px 30px",
													color: "#fff !important",
												}}
											>
												Delete
											</Button>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Box>
				</Box>
			</BootstrapDialog>
		</>
	);
}
