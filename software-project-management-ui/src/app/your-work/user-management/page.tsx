"use client";
import * as React from "react";
import NextLink from "next/link";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import { FormEvent } from "react";
import UserTable from "./UserTable";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 150,
		},
	},
};

export default function Page() {
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
						<ClearIcon />
					</IconButton>
				) : null}
			</DialogTitle>
		);
	}
	BootstrapDialogTitle.propTypes = {
		children: PropTypes.node,
		onClose: PropTypes.func.isRequired,
	};

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
	const [projectInput, setProjectInput] = useState("");
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// if (projectInput === projectName) {
		// 	await moveToTrash(_id, projectName);
		// 	onDeleteSuccess();
		// } else {
		// 	toast.error("Project name does not match!");
		// }
	};

	return (
		<>
			<Box marginBottom={10}>
				<Box display="flex" alignItems="center" justifyContent="space-between">
					<Breadcrumbs separator="›" aria-label="breadcrumb">
						<Link className="hover-underlined breadcrumb-link" href="#">
							Admin
						</Link>
						<Link className="hover-underlined breadcrumb-link" href="#">
							User Management
						</Link>
					</Breadcrumbs>
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
						<MenuItem onClick={handleClickOpenNotification}>
							Move to trash
						</MenuItem>
					</Menu>
				</Box>

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
								Move to Trash
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
										<Typography>
											Please input <strong>ProjectName</strong> to Temporary
											Delete
										</Typography>
										<TextField
											sx={{ mt: 2 }}
											label="Project Name"
											variant="outlined"
											fullWidth
											value={projectInput}
											onChange={(e) => setProjectInput(e.target.value)}
										/>

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
													Move
												</Button>
											</Box>
										</Grid>
									</Grid>
								</Box>
							</Box>
						</Box>
					</Box>
				</BootstrapDialog>
				<UserTable />
			</Box>
		</>
	);
}
