"use client";
import React, { useState } from "react";
import {
	Button,
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	DialogActions,
	Typography,
} from "@mui/material";
import ChatContent from "../Apps/Chat/ChatContent";

export const Chatbot = () => {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [output, setOutput] = useState("");

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSend = () => {
		setOutput(message);
		setMessage("");
	};

	return (
		<>
			<Button className="message-button" onClick={handleClickOpen}>
				<i className="ri-robot-2-line"></i>
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth="sm"
				sx={{ padding: "0 !important" }}
			>
				<DialogContent sx={{ padding: "0 !important" }}>
					<ChatContent />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
