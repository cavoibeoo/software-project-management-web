import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { deleteProject, recoverProject } from "@/api-services/projectServices";
import { Box, Dialog, IconButton, styled } from "@mui/material";
import { Grid } from "@mui/material";
import { toast } from "react-toastify";
import { ClearIcon } from "@mui/x-date-pickers/icons";
import { FormEvent } from "react";
import { useState } from "react";

export default function ImgMediaCard({
	projects,
	onActionSuccess,
}: {
	projects: any;
	onActionSuccess: () => void;
}) {
	// Modal
	const BootstrapDialog = styled(Dialog)(({ theme }) => ({
		"& .MuiDialogContent-root": {
			padding: theme.spacing(2),
		},
		"& .MuiDialogActions-root": {
			padding: theme.spacing(1),
		},
	}));
	const [openNotification, setOpenNotification] = useState(false);
	const handleClickOpenNotification = () => {
		setOpenNotification(true);
	};
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const result = await recoverProject(projects._id, projects.name);
		onActionSuccess();
		handleCloseNotification();
	};
	const handleCloseNotification = () => {
		setOpenNotification(false);
	};

	const [openDelete, setOpenDelete] = useState(false);
	const handleClickOpenDelete = () => {
		setOpenDelete(true);
	};
	const handleSubmitDelete = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await deleteProject(projects._id, projects.name);
		onActionSuccess();
		handleCloseDelete();
	};
	const handleCloseDelete = () => {
		setOpenDelete(false);
	};
	return (
		<>
			<Card
				sx={{
					maxWidth: 200,
					height: "auto",
					boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
					"&:hover": { boxShadow: "0 6px 10px rgba(0, 0, 0, 0.19)" },
				}}
			>
				<CardMedia
					component="img"
					alt="green iguana"
					height="20px"
					image="https://famsgroup05.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404"
					style={{ height: "73px" }}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{projects.name}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						<img src="" alt="" />
						{projects.key}
					</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							gap: "10px",
							paddingTop: "10px",
						}}
					>
						<Button variant="contained" onClick={handleClickOpenNotification}>
							Recover
						</Button>
						<Button
							variant="contained"
							style={{ backgroundColor: "#cc4426" }}
							onClick={handleClickOpenDelete}
						>
							Delete
						</Button>
					</Box>
				</CardContent>
			</Card>
			<BootstrapDialog
				onClose={handleCloseNotification}
				aria-labelledby="customized-dialog-title"
				open={openNotification}
				maxWidth="xs"
			>
				<Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							background: "#4498d4",
							padding: { xs: "15px 20px", md: "25px" },
						}}
						className="custom-modal-dialog-header"
					>
						<Typography
							id="modal-modal-title"
							variant="h6"
							sx={{
								fontWeight: "600",
								color: "#fff !important",
							}}
							className="text-black"
						>
							Restore project?
						</Typography>

						<IconButton
							aria-label="remove"
							size="small"
							onClick={handleCloseNotification}
						>
							<ClearIcon />
						</IconButton>
					</Box>

					<Box className="custom-modal-dialog-content">
						<Box component="form" noValidate onSubmit={handleSubmit}>
							<Box
								sx={{
									padding: "25px",
									borderRadius: "8px",
								}}
							>
								<Grid
									container
									alignItems="center"
									spacing={2}
									paddingLeft={"20px"}
									paddingTop={"5px"}
								>
									<Typography width="100%">
										The project along with its issues, attachments, and versions
										will be restored.
									</Typography>
									<Grid
										item
										xs={12}
										mt={1}
										display="flex"
										justifyContent="center"
									>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "10px",
												width: "100%",
												flexDirection: "row-reverse",
												textAlign: "left",
											}}
										>
											<Button
												type="submit"
												variant="contained"
												component="button"
												size="medium"
												sx={{
													textTransform: "capitalize",
													fontWeight: "500",
													fontSize: "13px",
													color: "#fff !important",
												}}
											>
												Restore
											</Button>
											<Button
												onClick={handleCloseNotification}
												variant="text"
												size="medium"
												sx={{
													textTransform: "capitalize",
													fontWeight: "500",
													fontSize: "13px",
												}}
											>
												Cancel
											</Button>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Box>
				</Box>
			</BootstrapDialog>
			<BootstrapDialog
				onClose={handleCloseDelete}
				aria-labelledby="customized-dialog-title"
				open={openDelete}
				maxWidth="xs"
			>
				<Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							background: "#4498d4",
							padding: { xs: "15px 20px", md: "25px" },
						}}
						className="custom-delete-dialog-header"
					>
						<Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								role="presentation"
								style={{ color: "#DE350B" }}
							>
								<g fill-rule="evenodd">
									<path
										fill="currentcolor"
										d="M13.416 4.417a2 2 0 0 0-2.832 0l-6.168 6.167a2 2 0 0 0 0 2.833l6.168 6.167a2 2 0 0 0 2.832 0l6.168-6.167a2 2 0 0 0 0-2.833z"
									></path>
									<path
										fill="inherit"
										d="M12 14a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1m0 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2"
									></path>
								</g>
							</svg>
							<Typography
								id="modal-modal-title"
								variant="h6"
								sx={{
									fontWeight: "600",
									color: "#fff !important",
								}}
								className="text-black"
							>
								Delete Project "{projects.name}"
							</Typography>
						</Box>

						<IconButton
							aria-label="remove"
							size="small"
							onClick={handleCloseDelete}
						>
							<ClearIcon />
						</IconButton>
					</Box>

					<Box className="custom-delete-dialog-content">
						<Box component="form" noValidate onSubmit={handleSubmitDelete}>
							<Box
								sx={{
									padding: "25px",
									borderRadius: "8px",
								}}
							>
								<Grid
									container
									alignItems="center"
									spacing={2}
									paddingLeft={"20px"}
									paddingTop={"5px"}
								>
									<Typography width="100%">
										The project along with its issues, Jira components,
										attachments, and versions will be deleted forever.
									</Typography>
									<Typography width="100%" paddingTop={"10px"}>
										You can’t undo this.
									</Typography>
									<Grid
										item
										xs={12}
										mt={1}
										display="flex"
										justifyContent="center"
									>
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "10px",
												width: "100%",
												flexDirection: "row-reverse",
												textAlign: "left",
											}}
										>
											<Button
												type="submit"
												variant="contained"
												component="button"
												size="medium"
												sx={{
													textTransform: "capitalize",
													fontWeight: "500",
													fontSize: "13px",
													color: "#fff !important",
													backgroundColor: "#cc4426",
												}}
											>
												Delete
											</Button>
											<Button
												onClick={handleCloseDelete}
												variant="text"
												size="medium"
												sx={{
													textTransform: "capitalize",
													fontWeight: "500",
													fontSize: "13px",
												}}
											>
												Cancel
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
