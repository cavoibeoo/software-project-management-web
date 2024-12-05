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
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	DialogTitle,
	Checkbox,
	Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import { FormEvent } from "react";
import ProjectDefaultLogo from "@/app/img/icon/ProjectDefaultLogo";
import InputAdornment from "@mui/material/InputAdornment";
import Tooltip from "@mui/material/Tooltip";

import { useProject } from "@/app/context/ProjectContext";
import { ArrowDropDownIcon } from "@mui/x-date-pickers/icons";
import { set } from "react-hook-form";

import * as issueTypeService from "@/api-services/issueTypeService";
import * as projectService from "@/api-services/projectServices";

type DataType =
	| "String"
	| "Paragraph"
	| "Number"
	| "People"
	| "Boolean"
	| "Array"
	| "Date";

const FieldButton = ({
	icon,
	label,
	onClick,
}: {
	icon: any;
	label: any;
	onClick: any;
}) => (
	<Grid item xs={12} sm={6} md={4} lg={3}>
		<Button variant="text" sx={{ width: 100, height: 100 }} onClick={onClick}>
			<Box
				className="sidebar-menu-divider"
				padding={5}
				width={60}
				height={60}
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				sx={{ textTransform: "none" }}
			>
				<span className="material-symbols-outlined">{icon}</span>
				{label}
			</Box>
		</Button>
	</Grid>
);

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

	const { projectID, setProjectID, issueTypeId, setIssueTypeId } = useProject();
	const [fetchedProject, setFetchedProject] = useState<any | null>();
	const [issueType, setIssueType] = React.useState<any | null>();
	const [defaultIssueType, setDefaultIssueType] = React.useState<any | null>();

	const [issueTypeField, setIssueTypeField] = useState<any>(issueType?.fields);
	const [update, setUpdate] = useState<boolean>(false);

	const [isUpdateName, setIsUpdateName] = useState<boolean>(false);
	const [isUpdateDes, setIsUpdateDes] = useState<boolean>(false);

	const [selectedIssueType, setSelectedIssueType] = useState<any | null>();
	const handleFieldChange = (value: any, field: any, index: number) => {
		let updatedField = [...issueTypeField];
		if (updatedField[index]) {
			updatedField[index][field] = value;
		}
		setIssueTypeField(updatedField);
	};

	React.useEffect(() => {
		const fetchApi = async () => {
			const data = await issueTypeService.fetchById({
				projectId: projectID,
				issueTypeId: issueTypeId,
			});

			const project = await projectService.fetchById(projectID);

			setFetchedProject(project);
			setIssueType(data);
			setIssueTypeField(data.fields);
			setDefaultIssueType(data);

			console.log("issue type: ", data);
		};
		fetchApi();
	}, [issueTypeId, update]);

	const handleAddField = (dataType: any) => {
		// Add a field to the issue type
		const newFields = [
			...issueType.fields,
			{
				name: dataType,
				dataType: dataType,
				isRequired: false,
				description: "",
			},
		];
		let newIssueType = { ...issueType, fields: newFields };
		setIssueType(newIssueType);
		setIssueTypeField(newFields);
	};

	const handleRemoveField = (index: number) => {
		console.log(index);

		const newFields = issueType?.fields?.filter(
			(_: any, i: number) => i !== index
		);
		const newIssueType = { ...issueType, fields: newFields };

		setIssueType(newIssueType);
		setIssueTypeField(newFields);
	};

	const handleUpdateIssueType = async () => {
		// Update the issue type
		const data = await issueTypeService.updateIssueType({
			projectId: projectID,
			issueTypeId: issueTypeId,
			updateData: {
				name: issueType?.name,
				description: issueType?.description,
				fields: issueTypeField,
			},
		});
		if (!data?.error) {
			setUpdate(!update);
			setIssueType(data);
			setIssueTypeField(data?.fields);
		}
	};

	const fields = [
		{ type: "String", icon: "text_fields", label: "ShortText" },
		// { type: "Paragraph", icon: "subject", label: "Paragraph" },
		{ type: "Number", icon: "123", label: "Number" },
		{ type: "People", icon: "account_circle", label: "People" },
		{ type: "Boolean", icon: "rule", label: "Boolean" },
		{ type: "Array", icon: "stat_minus_2", label: "Combobox" },
		{ type: "Date", icon: "calendar_month", label: "Date" },
	];

	const iconMap = {
		String: "text_fields",
		// Paragraph: "subject",
		Number: "123",
		People: "account_circle",
		Boolean: "rule",
		Array: "stat_minus_2",
		Date: "calendar_month",
	};
	const FieldIcon = (field: string) => {
		const icon = iconMap[field as keyof typeof iconMap];
		return icon ? (
			<span className="material-symbols-outlined">{icon}</span>
		) : null;
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
		let result = await issueTypeService.deleteIssueType({
			projectId: projectID,
			issueTypeId: issueTypeId,
			newIssueType: selectedIssueType,
		});
		if (!result?.error) {
			setUpdate(!update);
		}
	};

	return (
		<>
			<Box mb={10}>
				<Grid container spacing={2} marginInline={10}>
					<Grid item xs={12} md={7}>
						<Box
							display="flex"
							alignItems="center"
							justifyContent="space-between"
							flexWrap="wrap"
							overflow="hidden"
							width="100%"
						>
							<Breadcrumbs separator="›" aria-label="breadcrumb">
								<Link className="hover-underlined breadcrumb-link" href="#">
									{fetchedProject?.name}
								</Link>
								<Link
									className="hover-underlined breadcrumb-link"
									href="/your-work/project-setting/details"
								>
									Project Settings
								</Link>
								<Link className="breadcrumb-link" href="#">
									Issue Types
								</Link>
								<Link className="breadcrumb-link" href="#">
									{issueType?.name}
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
									Delete issue type
								</MenuItem>
							</Menu>
						</Box>
						<Box overflow="auto" maxWidth="100%">
							<Typography
								variant="h4"
								display="flex"
								alignItems="center"
								gap={1}
								marginBottom={2}
								onClick={() => {
									setIsUpdateName(true);
								}}
							>
								<img
									style={{ width: "30px", height: "30px" }}
									src={issueType?.img || "/images/issueType/10300.svg"}
									alt="BugIcon"
								/>{" "}
								{!isUpdateName ? (
									<Typography variant="h4">{issueType?.name}</Typography>
								) : (
									<TextField
										value={issueType?.name}
										onChange={(e) =>
											setIssueType({ ...issueType, name: e.target.value })
										}
										onBlur={() => setIsUpdateName(false)}
										sx={{
											"& .MuiInputBase-input": {
												fontVariant: "h4",
											},
											"& .MuiInputBase-root": {
												border: "1px solid #D5D9E2 !important",
												backgroundColor: "#fff",
												borderRadius: "7px",
											},
											"& .MuiInputBase-root::before": {
												border: "none",
											},
											"& .MuiInputBase-root:hover::before": {
												border: "none",
											},
											width: "80%",
											marginBottom: "20px",
										}}
									/>
								)}
							</Typography>
							<Typography
								variant="subtitle1"
								onClick={() => {
									setIsUpdateDes(true);
								}}
							>
								{!isUpdateDes ? (
									issueType?.description
								) : (
									<TextField
										label="Issue type description"
										variant="filled"
										value={issueType?.description}
										onChange={(e) =>
											setIssueType({
												...issueType,
												description: e.target.value,
											})
										}
										onBlur={() => setIsUpdateDes(false)}
										sx={{
											"& .MuiInputBase-root": {
												border: "1px solid #D5D9E2 !important",
												backgroundColor: "#fff",
												borderRadius: "7px",
											},
											"& .MuiInputBase-root::before": {
												border: "none",
											},
											"& .MuiInputBase-root:hover::before": {
												border: "none",
											},
											width: "80%",
											marginBottom: "20px",
										}}
									/>
								)}
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
													These fields describe the work that needs to be done.
													They display prominently in most views.
												</p>
												<Link
													href="https://confluence.atlassian.com/x/Jxm1O"
													style={{
														color: "#32b3ff",
														textDecoration: "underline",
													}}
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
										sx={{ width: "93%" }}
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
									sx={{ width: "93%" }}
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
													These fields provide context to the work, and help
													group, filter, and report on similar issues.
												</p>
												<Link
													href="https://support.atlassian.com/jira-software-cloud/docs/customize-an-issues-fields-in-team-managed-projects/"
													style={{
														color: "#32b3ff",
														textDecoration: "underline",
													}}
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
									variant="outlined"
									sx={{ width: "110px" }}
									InputProps={{
										// readOnly: true,
										startAdornment: (
											<InputAdornment className="text-dark" position="start">
												<span
													className="material-symbols-outlined"
													style={{ marginRight: 10 }}
												>
													arrow_forward
												</span>
												Status
											</InputAdornment>
										),
									}}
								/>

								{issueTypeField?.map((field: any, index: number) => (
									<>
										<Accordion
											variant="outlined"
											className="bg-white"
											sx={{ width: "93%" }}
										>
											<AccordionSummary
												expandIcon={<ArrowDropDownIcon />}
												aria-controls="panel1-content"
												id="panel1-header"
											>
												<Typography
													sx={{
														alignItem: "center",
														justifyItem: "center",
													}}
												>
													<Box
														sx={{
															display: "flex",
															flex: "row",
															gap: "10px",
															alignItems: "center",
															verticalAlign: "center",
														}}
													>
														<span className="material-symbols-outlined">
															{FieldIcon(field?.dataType)}
														</span>

														{field?.name}
													</Box>
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<TextField
													label="Field name"
													variant="filled"
													value={field?.name}
													onChange={(e) =>
														handleFieldChange(e.target.value, "name", index)
													}
													sx={{
														"& .MuiInputBase-root": {
															border: "1px solid #D5D9E2 !important",
															backgroundColor: "#fff",
															borderRadius: "7px",
														},
														"& .MuiInputBase-root::before": {
															border: "none",
														},
														"& .MuiInputBase-root:hover::before": {
															border: "none",
														},
														width: "100%",
														marginBottom: "20px",
													}}
												/>
												<TextField
													label="Description"
													variant="filled"
													value={field?.description}
													onChange={(e) =>
														handleFieldChange(
															e.target.value,
															"description",
															index
														)
													}
													sx={{
														"& .MuiInputBase-root": {
															border: "1px solid #D5D9E2 !important",
															backgroundColor: "#fff",
															borderRadius: "7px",
														},
														"& .MuiInputBase-root::before": {
															border: "none",
														},
														"& .MuiInputBase-root:hover::before": {
															border: "none",
														},
														width: "100%",
														marginBottom: "20px",
													}}
												/>
												<Box
													key="right"
													sx={{
														display: "flex",
														justifyContent: "flex-end",
														alignItems: "center",
														mb: 1,
														gap: "5px",
													}}
												>
													<Typography>Required</Typography>
													<Checkbox
														checked={field?.isRequired}
														onChange={(e) =>
															handleFieldChange(
																e.target.checked,
																"isRequired",
																index
															)
														}
														sx={{
															color: `#099f9d !important`,
															"&.Mui-checked": {
																color: `#099f9d !important`,
															},
														}}
													/>
													<Button
														id={`field-${index}`}
														onClick={() => handleRemoveField(index)}
														variant="contained"
													>
														Remove
													</Button>
												</Box>
											</AccordionDetails>
										</Accordion>
									</>
								))}
							</Box>
							<Box
								marginTop={3}
								display="flex"
								flexDirection="row"
								gap={1}
								justifyContent="flex-end"
								width="100%"
								paddingRight={"50px"}
							>
								<Button
									onClick={() => {
										setIssueType(defaultIssueType);
										setIssueTypeField(defaultIssueType?.fields);
									}}
									variant="outlined"
									sx={{ width: "20%" }}
								>
									Discard
								</Button>
								<Button
									onClick={handleUpdateIssueType}
									variant="contained"
									sx={{ width: "20%" }}
								>
									Save changes
								</Button>
							</Box>
						</Box>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						sx={{ padding: "0 !important", marginInline: "0 !important" }}
						className="sidebar-menu-divider"
					>
						<Box maxWidth="100%" marginLeft={2} marginBlock={2} marginRight={3}>
							<Typography variant="h6" marginBottom={2}>
								Create A Fields
							</Typography>
							<Typography variant="subtitle1">
								Drag a field type to one of the sections on the left to create a
								custom field for this issue type.
							</Typography>
							<div
								className="sidebar-menu-divider"
								style={{ marginTop: 10, marginBottom: 10 }}
							></div>
							<Grid container spacing={1}>
								<Grid container spacing={1}>
									{fields.map((field) => (
										<FieldButton
											key={field.type}
											icon={field.icon}
											label={field.label}
											onClick={() => handleAddField(field.type)}
										/>
									))}
								</Grid>
							</Grid>
						</Box>
					</Grid>
				</Grid>
			</Box>

			<BootstrapDialog
				onClose={handleCloseNotification}
				aria-labelledby="customized-dialog-title"
				open={openNotification}
				className="rmu-modal"
				maxWidth="xs"
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
							}}
							className="text-black"
						>
							Delete issue type
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
									padding: { xs: "15px 20px", md: "25px" },
									borderRadius: "8px",
								}}
								className="bg-white"
							>
								<Grid container alignItems="center" spacing={2}>
									<Typography sx={{ mt: "15px", ml: "15px" }}>
										Please select the issue type to migrate issues to.
									</Typography>
									<Select
										defaultValue={"Select"}
										id="demo-simple-select"
										value={selectedIssueType || ""}
										className="select"
										onChange={(e) => {
											setSelectedIssueType(e.target.value);
										}}
										sx={{
											width: "100%",
											marginTop: "10px",
											marginLeft: "15px",
										}}
									>
										{fetchedProject?.issueTypes
											?.filter((type: any) => type._id !== issueTypeId)
											?.map((type: any) => (
												<MenuItem key={type._id} value={type._id}>
													<img
														width="14px"
														height="14px"
														style={{
															marginRight: "5px",
														}}
														src={type.img}
														alt="Issue Logo"
														className="icon_issue"
													/>
													{type?.name}
												</MenuItem>
											))}
									</Select>
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
												}}
												className="text-dark"
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
