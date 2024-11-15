"use client";

import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
	Card,
	Typography,
	Button,
	DialogActions,
	DialogContentText,
	DialogContent,
	DialogTitle,
	Dialog,
	TextField,
} from "@mui/material";
import SelectAutoWidth from "./Component/SelectRole";

const FormDialog: React.FC = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button
				sx={{
					width: "40px",
					height: "40px",
					minWidth: "40px",
					color: "inherit",
					borderRadius: "50%",
					"&:hover": {
						backgroundColor: "darken(#d0d4db, 1.6)",
					},
					backgroundColor: "#d0d4db",
					marginRight: "5px",
				}}
				className="addMember"
				onClick={handleClickOpen}
			>
				<AddIcon />
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				PaperProps={{
					component: "form",
					onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						const formData = new FormData(event.currentTarget);
						const formJson = Object.fromEntries((formData as any).entries());
						const email = formJson.email;
						console.log(email);
						handleClose();
					},
				}}
			>
				<DialogTitle
					sx={{
						fontWeight: "500",
						fontSize: "20px",
					}}
				>
					Add People to FAMS_GROUP05
				</DialogTitle>
				<DialogContent>
					<DialogContentText
						sx={{
							fontWeight: "500",
						}}
					>
						Names or emails
					</DialogContentText>
					<TextField
						autoFocus
						required
						margin="dense"
						id="name"
						name="email"
						placeholder="  e.g., Maria, maria@company.com"
						type="email"
						fullWidth
						variant="standard"
					/>
				</DialogContent>
				<div style={{ paddingLeft: "15px" }}>
					<SelectAutoWidth />
				</div>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit">Add</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default FormDialog;
