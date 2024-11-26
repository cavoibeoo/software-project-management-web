import {
	Box,
	Button,
	Dialog,
	DialogTitle,
	IconButton,
	styled,
	Typography,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { Id } from "@/type";

const DeleteColumnDialog = ({
	deleteColumn,
	columnId,
}: {
	deleteColumn: (columnId: Id) => void;
	columnId: Id;
}) => {
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

	// Modal for Delete Confirmation
	const [openDeleteColumnModal, setOpenDeleteColumnModal] = useState(false);
	const handleClickOpenDeleteColumnModal = () => {
		setOpenDeleteColumnModal(true);
	};
	const handleCloseDeleteColumnModal = () => {
		setOpenDeleteColumnModal(false);
	};

	// Function to handle delete confirmation
	const handleConfirmDeleteColumn = () => {
		handleDeleteColumn();
		handleCloseDeleteColumnModal();
	};

	function handleDeleteColumn() {
		deleteColumn(columnId);
	}

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
	return (
		<>
			<BootstrapDialog
				onClose={handleCloseDeleteColumnModal}
				aria-labelledby="delete-dialog-title"
				open={openDeleteColumnModal}
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
						id="delete-dialog-title"
						variant="h6"
						sx={{
							fontWeight: "600",
							fontSize: { xs: "16px", md: "18px" },
						}}
						className="text-black"
					>
						Confirm Delete
					</Typography>

					<IconButton
						aria-label="remove"
						size="small"
						onClick={handleCloseDeleteColumnModal}
					>
						<ClearIcon />
					</IconButton>
				</Box>

				<Box className="rmu-modal-content">
					<Typography sx={{ padding: "20px" }}>
						Are you sure you want to delete this column?
					</Typography>
					<Box
						sx={{
							display: "flex",
							justifyContent: "end",
							gap: "10px",
							padding: "20px",
						}}
					>
						<Button
							onClick={handleCloseDeleteColumnModal}
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
							onClick={handleConfirmDeleteColumn}
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
							Delete
						</Button>
					</Box>
				</Box>
			</BootstrapDialog>
		</>
	);
};

export default DeleteColumnDialog;
