import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DeleteProject, RecoverProject } from "@/api-services/projectServices";
import { Box, Dialog, IconButton, styled } from "@mui/material";
import { Grid } from "@mui/material";
import { toast } from "react-toastify";
import { ClearIcon } from "@mui/x-date-pickers/icons";
import { FormEvent } from "react";
import { useState } from "react";

export default function ImgMediaCard({ projects }: { projects: any }) {
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
		const recoverProject = await RecoverProject(projects._id, projects.name);
		await recoverProject();
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
		const deleteProject = await DeleteProject(projects._id, projects.name);
		await deleteProject();
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
					<Button onClick={handleClickOpenNotification}>Recover</Button>
					<Button onClick={handleClickOpenDelete}>Delete</Button>
				</CardContent>
			</Card>
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
							background: "#4498d4",
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
							Recover Project
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
												Recover
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
				className="rmu-modal"
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
							Delete Project
						</Typography>

						<IconButton
							aria-label="remove"
							size="small"
							onClick={handleCloseDelete}
						>
							<ClearIcon />
						</IconButton>
					</Box>

					<Box className="rmu-modal-content">
						<Box component="form" noValidate onSubmit={handleSubmitDelete}>
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
												onClick={handleCloseDelete}
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
