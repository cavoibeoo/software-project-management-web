"use client";

import React, { useEffect, useState } from "react";
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
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RichTextEditor from "@mantine/rte";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { set } from "react-hook-form";
import { updateSprint } from "@/api-services/sprintService";

const StartSprintDialog: React.FC<{
	project: any;
	sprint: any;
	callUpdate: () => void;
}> = ({ project, sprint, callUpdate }) => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [nextAction, setNextAction] = useState<string | null>(
		sprint?.status.toString() != "completed"
			? sprint?.status?.toString() == "created"
				? "started"
				: "completed"
			: null
	);
	const [btnName, setBtnName] = useState<string | null>(
		sprint?.status.toString() != "completed"
			? sprint?.status?.toString() == "created"
				? "Start sprint"
				: "Complete sprint"
			: "Sprint details"
	);

	const [isReadonly, setReadOnly] = useState<boolean>(
		sprint?.status?.toString() == "completed" ? true : false
	);
	const [sprintName, setSprintName] = useState<any>(sprint?.name);
	const [sprintGoal, setSprintGoal] = useState<any>(sprint?.sprintGoal || "");
	const [startDate, setStartDate] = useState<Dayjs | null>(
		dayjs(sprint?.startDate) || dayjs()
	);
	const [endDate, setEndDate] = useState<Dayjs | null>(
		dayjs(sprint.endDate) || null
	);
	const handleDurationChange = (event: any) => {
		if (startDate) {
			setEndDate(startDate.add(event.target.value, "week"));
		}
	};

	useEffect(() => {
		setNextAction(
			sprint?.status.toString() != "completed"
				? sprint?.status?.toString() == "created"
					? "started"
					: "completed"
				: null
		);
		setBtnName(
			sprint?.status.toString() != "completed"
				? sprint?.status?.toString() == "created"
					? "Start sprint"
					: "Complete sprint"
				: "Sprint details"
		);
	}, [sprint]);

	const handleSubmit = async () => {
		const result = await updateSprint({
			projectId: sprint.project,
			sprintId: sprint._id,
			name: sprintName,
			startDate: startDate?.toISOString(), // Ensure this is a Date object
			endDate: endDate?.toISOString(), // Ensure this is a Date object
			goal: sprintGoal,
			status: nextAction,
		});
		if (!result?.error) {
			callUpdate();
			handleClose();
		}
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
				onClick={handleClickOpen}
			>
				{btnName}
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
				<DialogContent sx={{ width: "500px" }}>
					<DialogContentText
						sx={{
							fontWeight: "500",
							paddingBottom: "10px",
						}}
					>
						{!isReadonly ? (
							<>
								<strong style={{ color: "green" }}>
									{sprint?.issues?.length}
								</strong>{" "}
								issues will be included in this sprint.
							</>
						) : (
							<strong style={{ color: "green" }}>
								"This sprint has been completed."
							</strong>
						)}
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
							InputProps={{
								readOnly: isReadonly,
							}}
							// label="Sprint Name"
							placeholder="E.g. Sine_WebProject"
							// variant="filled"
							id={`sprintName-${sprint._id}`}
							value={sprintName}
							onChange={(event: any) => {
								setSprintName(event.target.value);
							}}
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
					{!isReadonly ? (
						<>
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
									defaultValue={0}
									onChange={handleDurationChange}
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
						</>
					) : null}

					<DialogContentText
						sx={{
							fontWeight: "500",
						}}
					>
						Start Date <strong style={{ color: "#ae2e24" }}>*</strong>
					</DialogContentText>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DatePicker
							readOnly={isReadonly}
							value={startDate}
							onChange={(event: any) => {
								setStartDate(event.target.value);
							}}
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
							readOnly={isReadonly}
							value={endDate}
							onChange={(event: any) => {
								setEndDate(event.target.value);
							}}
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
						Sprint Goal
					</DialogContentText>
					<RichTextEditor
						readOnly={isReadonly}
						value={sprintGoal}
						onChange={(value: any) => {
							setSprintGoal(value);
						}}
						style={{
							minHeight: "270px",
						}}
					/>
				</DialogContent>
				<DialogActions>
					{sprint?.status?.toString() != "completed" && (
						<>
							<Button onClick={handleClose}>Cancel</Button>
							<Button onClick={handleSubmit}>
								{nextAction == "started" ? "Start" : "Complete"}
							</Button>
						</>
					)}
				</DialogActions>
			</Dialog>
		</>
	);
};

export default StartSprintDialog;
