"use client";

import React from "react";
import {
	Card,
	Typography,
	Box,
	Button,
	Avatar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	DialogTitle,
	Dialog,
	IconButton,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { blue, deepPurple } from "@mui/material/colors";

const emails = ["Tran Duc Quang", "Tran Binh Phuoc"];

export interface SimpleDialogProps {
	open: boolean;
	selectedValue: string;
	onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value: string) => {
		onClose(value);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Assign For</DialogTitle>
			<List sx={{ pt: 0 }}>
				{emails.map((email) => (
					<ListItem disableGutters key={email}>
						<ListItemButton onClick={() => handleListItemClick(email)}>
							<ListItemAvatar>
								<Avatar
									className="avatar-hover"
									sx={{ bgcolor: deepPurple[500] }}
								>
									DQ
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={email} />
						</ListItemButton>
					</ListItem>
				))}
				<ListItem disableGutters>
					<ListItemButton
						autoFocus
						onClick={() => handleListItemClick("addAccount")}
					></ListItemButton>
				</ListItem>
			</List>
		</Dialog>
	);
}

const AssignMemberDialog: React.FC = () => {
	const [open, setOpen] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState(emails[1]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value: string) => {
		setOpen(false);
		setSelectedValue(value);
	};

	return (
		<>
			<Box>
				<IconButton>
					<span className="material-symbols-outlined" onClick={handleClickOpen}>
						person
					</span>
				</IconButton>
				<SimpleDialog
					selectedValue={selectedValue}
					open={open}
					onClose={handleClose}
				/>
			</Box>
		</>
	);
};

export default AssignMemberDialog;
