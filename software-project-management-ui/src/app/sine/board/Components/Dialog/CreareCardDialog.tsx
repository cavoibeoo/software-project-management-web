import {
	Box,
	Button,
	DialogTitle,
	Grid,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import { useState, FormEvent } from "react";
import { Id } from "@/type";
// Modal
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
// End Modal

const CreateCardDialog = ({
	createTask,
	columnId,
}: {
	createTask: (columnId: Id) => void;
	columnId: Id;
}) => {
	// Modal
	const [openModal, setOpenModal] = useState(false);
	const handleClickOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleCreateTask = (columnId: Id) => {
		createTask(columnId);
		setOpenModal(false);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setOpenModal(false);
		handleCreateTask(columnId);
	};
	return (
		<>
			<BootstrapDialog
				onClose={handleCloseModal}
				aria-labelledby="customized-dialog-title"
				open={openModal}
				className="rmu-modal"
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						background: "#f6f7f9",
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
						}}
						className="text-black"
					>
						Add New Task
					</Typography>

					<IconButton
						aria-label="remove"
						size="small"
						onClick={handleCloseModal}
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
								<Grid item xs={12} md={12} lg={12}>
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										Task Name*
									</Typography>

									<TextField
										autoComplete="taskName"
										name="taskName"
										required
										fullWidth
										id="taskName"
										label="Task Name"
										autoFocus
										InputProps={{
											style: { borderRadius: 8 },
										}}
									/>
								</Grid>
								<Grid item xs={12} md={12} lg={5}>
									<Typography
										component="h5"
										sx={{
											fontWeight: "500",
											fontSize: "14px",
											mb: "12px",
										}}
										className="text-black"
									>
										Key*
									</Typography>

									<TextField
										autoComplete="taskKey"
										name="taskKey"
										required
										fullWidth
										id="taskKey"
										label="Task Key"
										autoFocus
										InputProps={{
											style: { borderRadius: 8 },
										}}
									/>
								</Grid>

								<Grid item xs={12} mt={1}>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											justifyContent: "end",
											gap: "10px",
										}}
									>
										<Button
											onClick={handleCloseModal}
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
											sx={{
												textTransform: "capitalize",
												borderRadius: "8px",
												fontWeight: "500",
												fontSize: "13px",
												padding: "11px 30px",
												color: "#fff !important",
											}}
										>
											<AddIcon
												type="submit"
												sx={{
													position: "relative",
													top: "-2px",
												}}
												className="mr-5px"
											/>
											Create
										</Button>
									</Box>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Box>
			</BootstrapDialog>
		</>
	);
};

export default CreateCardDialog;
