"use client";

import React, { useState } from "react";
import {
	Button,
	DialogActions,
	DialogContentText,
	DialogContent,
	DialogTitle,
	Dialog,
	TextField,
	FormControl,
	Select,
	MenuItem,
	SelectChangeEvent,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RichTextEditor from "@mantine/rte";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const StartSprintDialog: React.FC = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [sprintDuration, setSprintDuration] = useState<string>("0");
	const [state, setState] = useState<string>("");

	const handleSprintDurationChange = (event: SelectChangeEvent) => {
		setSprintDuration(event.target.value as string);
	};

	const handleStateChange = (event: SelectChangeEvent) => {
		setState(event.target.value as string);
	};

	return (
		<>
			<Button
				variant="contained"
				style={{
					marginLeft: "5px",
					marginTop: "5px",
					marginBottom: "5px",
					padding: "2px 2px !important",
				}}
				sx={{ color: "#fff" }}
				onClick={handleClickOpen}
			>
				Start Sprint
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
					Start Sprint
				</DialogTitle>
				<DialogContent>
					<DialogContentText
						sx={{
							fontWeight: "500",
							paddingBottom: "10px",
						}}
					>
						<strong style={{ color: "green" }}>3</strong> issues will be
						included in this sprint.
					</DialogContentText>
					<DialogContentText
						sx={{
							fontWeight: "500",
						}}
					>
						Sprint name <strong style={{ color: "#ae2e24" }}>*</strong>
					</DialogContentText>
					<FormControl fullWidth sx={{ margin: "5px 0px 10px 0px" }}>
						<TextField
							label="Sprint Name"
							placeholder="E.g. Sine_WebProject"
							variant="filled"
							id="sprintName"
							name="sprintName"
							sx={{
								"& .MuiInputBase-root": {
									border: "1px solid #D5D9E2",
									backgroundColor: "#fff",
									borderRadius: "7px",
								},
								"& .MuiInputBase-root::before": {
									border: "none",
								},
								"& .MuiInputBase-root:hover::before": {
									border: "none",
								},
							}}
						/>
					</FormControl>
					<DialogContentText
						sx={{
							fontWeight: "500",
							paddingBottom: "10px",
						}}
					>
						Duration <strong style={{ color: "#ae2e24" }}>*</strong>
					</DialogContentText>
					<FormControl fullWidth sx={{ paddingBottom: "10px" }}>
						<Select
							labelId="product-type-label"
							id="product-type"
							value={sprintDuration}
							onChange={handleSprintDurationChange}
							sx={{
								"& fieldset": {
									border: "1px solid #D5D9E2",
									borderRadius: "7px",
								},
							}}
						>
							<MenuItem value={0}>custom</MenuItem>
							<MenuItem value={1}>1 weeks</MenuItem>
							<MenuItem value={2}>2 weeks</MenuItem>
							<MenuItem value={3}>3 weeks</MenuItem>
							<MenuItem value={4}>4 weeks</MenuItem>
						</Select>
					</FormControl>
					<DialogContentText
						sx={{
							fontWeight: "500",
						}}
					>
						Start Date <strong style={{ color: "#ae2e24" }}>*</strong>
					</DialogContentText>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							sx={{
								width: "100%",

								"& fieldset": {
									border: "1px solid #D5D9E2",
									borderRadius: "7px",
								},
							}}
						/>
					</LocalizationProvider>
					<DialogContentText
						sx={{
							fontWeight: "500",
							paddingTop: "10px",
						}}
					>
						End Date <strong style={{ color: "#ae2e24" }}>*</strong>
					</DialogContentText>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							className="datePicker"
							sx={{
								width: "100%",
								backgroundColor: "#0a0e19 !important",
								"& fieldset": {
									border: "1px solid #D5D9E2",
									borderRadius: "7px",
								},
							}}
						/>
					</LocalizationProvider>
					<DialogContentText
						sx={{
							fontWeight: "500",
							paddingTop: "10px",
						}}
					>
						Sprint Goal
					</DialogContentText>
					<RichTextEditor
						style={{
							minHeight: "270px",
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button type="submit">Start</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default StartSprintDialog;
