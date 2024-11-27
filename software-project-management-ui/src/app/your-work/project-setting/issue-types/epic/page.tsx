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
import { toast } from "react-toastify";
import { DialogTitle } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import { FormEvent } from "react";
import ProjectDefaultLogo from "@/app/img/icon/ProjectDefaultLogo";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";

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
	const [nameInput, setNameInput] = useState("");
	const [keyInput, setKeyInput] = useState("");
	const handleUpdateProject = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (nameInput.length <= 2) {
			toast.error("Project name must be longer than 2 characters.");
			return;
		}

		if (!keyInput) {
			toast.error("Project key cannot be empty.");
			return;
		}

		if (keyInput.length > 10) {
			toast.error("Project key cannot exceed 10 characters.");
			return;
		}

		toast.info(
			"This change would re-index your project, and may break some external integrations."
		);
		toast.success("Project updated successfully!");

		// Proceed with the update logic here
	};

	return (
		<>
			<Box
				marginInline={10}
				display="flex"
				alignItems="center"
				justifyContent="space-between"
			>
				<Breadcrumbs separator="›" aria-label="breadcrumb">
					<Link className="hover-underlined breadcrumb-link" href="#">
						Sineizabes
					</Link>
					<Link className="hover-underlined breadcrumb-link" href="#">
						Project Settings
					</Link>
					<Link className="breadcrumb-link" href="#">
						Issue Types
					</Link>
					<Link className="breadcrumb-link" href="#">
						Epic
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
			<Box marginInline={10}>
				<Typography
					variant="h4"
					display="flex"
					alignItems="center"
					gap={1}
					marginBottom={2}
				>
					<img
						style={{ width: "30px", height: "30px" }}
						src="/images/issueType/Epic.svg"
						alt="EpicIcon"
					/>{" "}
					Epic
				</Typography>
				<Typography variant="subtitle1">
					Epics track collections of related bugs, stories, and tasks.
				</Typography>
				<Box display="flex" flexDirection="column" gap={1} marginTop={3}>
					<Box display="flex" alignItems="center" gap={1}>
						<Typography variant="h6">Description fields</Typography>
						<Tooltip
							sx={{ background: "#fff", padding: "10px" }}
							title={
								<div
									style={{
										width: "300px",
										fontSize: "12px",
									}}
								>
									<p>
										These fields describe the work that needs to be done. They
										display prominently in most views.
									</p>
									<Link
										href="https://confluence.atlassian.com/x/Jxm1O"
										style={{ color: "#32b3ff", textDecoration: "underline" }}
										target="_blank"
										rel="noopener noreferrer"
									>
										More about description fields
									</Link>
								</div>
							}
							placement="right"
						>
							<span className="material-symbols-outlined">info</span>
						</Tooltip>
					</Box>
					<Tooltip
						sx={{ background: "#fff" }}
						title={
							<div
								style={{
									width: "200px",
									fontSize: "12px",
								}}
							>
								<p>Sine created this field. You can't:</p>
								<ul>
									<li>edit its name</li>
									<li>change if it's required</li>
									<li>remove it</li>
									<li>reorder it</li>
								</ul>
							</div>
						}
						placement="bottom"
					>
						<TextField
							variant="outlined"
							sx={{ width: "900px" }}
							InputProps={{
								readOnly: true,
								startAdornment: (
									<InputAdornment className="text-dark" position="start">
										<span
											className="material-symbols-outlined"
											style={{ marginRight: 10 }}
										>
											format_size
										</span>
										Summary
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment className="text-dark" position="end">
										<span
											className="material-symbols-outlined"
											style={{ marginRight: 10 }}
										>
											check
										</span>
										<Typography variant="subtitle1">Required</Typography>
									</InputAdornment>
								),
							}}
						/>
					</Tooltip>

					<TextField
						variant="outlined"
						sx={{ width: "900px" }}
						InputProps={{
							readOnly: true,
							startAdornment: (
								<InputAdornment className="text-dark" position="start">
									<span
										className="material-symbols-outlined"
										style={{ marginRight: 10 }}
									>
										subject
									</span>
									Description
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment className="text-dark" position="end">
									<span
										className="material-symbols-outlined"
										style={{ marginRight: 10 }}
									>
										chevron_right
									</span>
								</InputAdornment>
							),
						}}
					/>
				</Box>
				<Box display="flex" flexDirection="column" gap={1} marginTop={3}>
					<Box display="flex" alignItems="center" gap={1}>
						<Typography variant="h6">Context fields</Typography>
						<Tooltip
							sx={{ background: "#fff", padding: "10px" }}
							title={
								<div
									style={{
										width: "300px",
										fontSize: "12px",
									}}
								>
									<p>
										These fields provide context to the work, and help group,
										filter, and report on similar issues.
									</p>
									<Link
										href="https://support.atlassian.com/jira-software-cloud/docs/customize-an-issues-fields-in-team-managed-projects/"
										style={{ color: "#32b3ff", textDecoration: "underline" }}
										target="_blank"
										rel="noopener noreferrer"
									>
										More about context fields
									</Link>
								</div>
							}
							placement="right"
						>
							<span className="material-symbols-outlined">info</span>
						</Tooltip>
					</Box>
					<TextField
						placeholder="Status"
						variant="outlined"
						sx={{ width: "110px" }}
						InputProps={{
							// readOnly: true,
							startAdornment: (
								<InputAdornment sx={{ color: "#fff" }} position="start">
									<span className="material-symbols-outlined">
										arrow_forward
									</span>
								</InputAdornment>
							),
						}}
					/>
					<TextField
						placeholder="Description"
						variant="outlined"
						sx={{ width: "900px" }}
						InputProps={{
							// readOnly: true,
							startAdornment: (
								<InputAdornment sx={{ color: "#fff" }} position="start">
									<span className="material-symbols-outlined">subject</span>
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment sx={{ color: "#fff" }} position="end">
									<Button variant="text" sx={{ padding: 0 }}>
										<span className="material-symbols-outlined">
											chevron_right
										</span>
									</Button>
								</InputAdornment>
							),
						}}
					/>
				</Box>
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
		</>
	);
}
