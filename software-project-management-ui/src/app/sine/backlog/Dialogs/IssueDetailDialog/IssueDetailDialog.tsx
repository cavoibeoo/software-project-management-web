"use client";

import React, { use, useEffect, useState } from "react";
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
	Link,
	Breadcrumbs,
	Avatar,
	Badge,
	styled,
	AccordionSummary,
	Accordion,
	AccordionDetails,
	Typography,
	Box,
	Chip,
	Checkbox,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import RichTextEditor from "@mantine/rte";
import { deepPurple } from "@mui/material/colors";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ArrowDropDownIcon } from "@mui/x-date-pickers/icons";
import MoreOption from "./Component/MoreOption";

import * as issueService from "@/api-services/issueServices";
import { toast } from "react-toastify";

import { useFetchUser } from "@/api-services/userServices";
import * as commentServices from "@/api-services/commentServices";

const FieldInput = ({
	field,
	issueField,
	issueId,
	handleFieldChange,
	project,
}: any) => {
	// Render input component based on `field.dataType`
	switch (field?.dataType) {
		case "String":
		case "Paragraph":
			return (
				<TextField
					onChange={(event) =>
						handleFieldChange(event.target.value, field.name)
					}
					placeholder={"None"}
					defaultValue={issueField?.[field?.name] || ""}
					id={`field-${issueId}-${field.name}`}
					name={field.name}
					sx={{
						"& .MuiInputBase-root::before": { border: "none" },
						"& .MuiInputBase-root:hover::before": { border: "none" },
					}}
				/>
			);

		case "Number":
			return (
				<TextField
					type="number"
					onChange={(event) =>
						handleFieldChange(event.target.value, field.name)
					}
					placeholder={"None"}
					defaultValue={issueField?.[field?.name] || ""}
					id={`field-${issueId}-${field.name}`}
					name={field.name}
					sx={{
						"& .MuiInputBase-root::before": { border: "none" },
						"& .MuiInputBase-root:hover::before": { border: "none" },
					}}
				/>
			);

		case "Boolean":
			return (
				<Checkbox
					checked={issueField?.[field?.name] || ""}
					onChange={(e) => handleFieldChange(e.target.checked, field.name)}
					sx={{
						color: `#099f9d !important`,
						"&.Mui-checked": {
							color: `#099f9d !important`,
						},
						maxWidth: "20px",
					}}
				/>
			);

		case "Date":
			return (
				<TextField
					type="date"
					onChange={(event) =>
						handleFieldChange(event.target.value, field.name)
					}
					defaultValue={issueField?.[field?.name] || ""}
					id={`field-${issueId}-${field.name}`}
					name={field.name}
					sx={{
						"& .MuiInputBase-root::before": { border: "none" },
						"& .MuiInputBase-root:hover::before": { border: "none" },
					}}
				/>
			);
		case "Object":
			return (
				<Select
					labelId="product-type-label"
					id="product-type"
					value={issueField?.[field?.name] || ""}
					onChange={(event) =>
						handleFieldChange(event.target.value, field.name)
					}
					sx={{
						"& fieldset": {
							border: "1px solid #D5D9E2",
							borderRadius: "7px",
						},
					}}
				>
					<MenuItem value={""}>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								verticalAlign: "middle",
							}}
						>
							<Avatar key={"Unassigned"} alt="Assignee" />
							<Typography marginLeft="10px">Unassigned</Typography>
						</Box>
					</MenuItem>
					(field?.advanceData == "User" ?{" "}
					{project?.actors.map((actor: any) => (
						<MenuItem value={actor?.user._id}>
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									verticalAlign: "middle",
								}}
							>
								<Avatar
									key={actor?.user?._id}
									src={actor?.user?.avatar}
									alt="Assignee"
								/>
								<Typography marginLeft="10px">{actor?.user?.name}</Typography>
							</Box>
						</MenuItem>
					))}
					)
				</Select>
			);

		default:
			return null; // Fallback if dataType doesn't match
	}
};

const IssueDetailDialog: React.FC<{
	issue: any;
	issueType: any;
	projectId: any;
	workflows: any[];
	callUpdate: () => void;
	sprints: any[];
	project: any;
}> = ({
	issue,
	projectId,
	workflows,
	issueType,
	callUpdate,
	sprints,
	project,
}) => {
	const [open, setOpen] = React.useState(false);
	const [user, setUser] = useState<any>(null);
	useEffect(() => {
		const fetchAPI = async () => {
			setUser(await useFetchUser());
		};
		fetchAPI();
	}, []);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSaveIssue = async () => {
		let newIssue = await issueService.updateIssue({
			projectId: project._id,
			issueId: issue._id,
			summary: summaryValue,
			issueType: issueTypeValue,
			workflow: workflowValue,
			description: descriptionValue,
			fields: issueField,
			sprint: sprintValue,
			assignee: assigneeValue,
		});
		if (!newIssue.error) {
			callUpdate();
			setOpen(false);
		}
	};
	const [sprintDuration, setSprintDuration] = useState<string>("0");
	const [summaryValue, setSummaryValue] = useState<string>(issue.summary);
	const handleSprintDurationChange = (event: SelectChangeEvent) => {
		setSprintDuration(event.target.value as string);
	};

	const [issueField, setIssueField] = useState<any>(issue?.fields);

	const handleFieldChange = (value: any, field: any) => {
		setIssueField((prev: any) => ({ ...prev, [field]: value }));
	};

	const [issueTypeValue, setIssueTypeValue] = useState<string>(
		issue.issueType.name
	);
	const [issueTypeObject, setIssueTypeObject] = useState<any>(
		project?.issueType?.find(
			(type: any) => type?.name === issue?.issueType.name
		)
	);

	useEffect(() => {
		setIssueTypeObject(
			issueType?.find((type: any) => type?.name === issue?.issueType.name)
		);
	}, [issueType]);

	const handleIssueTypeValueChange = (event: SelectChangeEvent) => {
		setIssueTypeValue(event.target.value as string);
	};

	const [epicNameValue, setEpicNameValue] = useState<string>("Epic Name");
	const handleEpicNameValueChange = (event: SelectChangeEvent) => {
		setEpicNameValue(event.target.value as string);
	};

	const [workflowValue, setWorkflowValue] = useState<string>(issue.workflow);
	const handleWorkflowValueChange = (event: SelectChangeEvent) => {
		setWorkflowValue(event.target.value as string);
	};

	const handleCreateComment = async () => {
		let newComment = await commentServices.addComment({
			projectId: issue.project,
			issueId: issue._id,
			comment: commentValue,
		});
		if (!newComment?.error) {
			callUpdate();
			setCommentValue("");
		}
	};

	const handleUpdateComment = async (commentId: any, index: any) => {
		let newComment = await commentServices.updateComment({
			projectId: issue.project,
			issueId: issue._id,
			comment: { _id: commentId, comment: commentValue },
		});
		if (!newComment.error) {
			setIsEditCommentArray((prev) => {
				const newArray = [...prev];
				newArray[index] = false;
				return newArray;
			});
			setCommentValue("");
			callUpdate();
		}
	};

	const handleDeleteComment = async (commentId: any) => {
		let newComment = await commentServices.deleteComment({
			projectId: issue.project,
			issueId: issue._id,
			commentId: commentId,
		});
		if (!newComment?.error) {
			setCommentValue("");
			callUpdate();
		}
	};

	const StyledBadge = styled(Badge)(({ theme }) => ({
		"& .MuiBadge-badge": {
			backgroundColor: "#44b700",
			color: "#44b700",
			boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
			"&::after": {
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				borderRadius: "50%",
				animation: "ripple 1.2s infinite ease-in-out",
				border: "1px solid currentColor",
				content: '""',
			},
		},
		"@keyframes ripple": {
			"0%": {
				transform: "scale(.8)",
				opacity: 1,
			},
			"100%": {
				transform: "scale(2.4)",
				opacity: 0,
			},
		},
	}));

	const [isEditCommentArray, setIsEditCommentArray] = useState<boolean[]>(
		issue?.comments?.map(() => false) || []
	);

	const [isEditingComment, setIsEditingComment] = useState<boolean>(false);
	const [commentValue, setCommentValue] = useState<string>("");

	const [isEditingDescription, setIsEditingDescription] =
		useState<boolean>(false);
	const [descriptionValue, setDescriptionValue] = useState<string>(
		issue.description
	);

	const [assigneeValue, setAssigneeValue] = useState<string>(
		issue?.assignee?._id
	);
	const handleAssigneeValueChange = (event: SelectChangeEvent) => {
		setAssigneeValue(event.target.value as string);
	};

	// useEffect(() => {
	//     console.log(issue);
	// }, [issue]);

	const [sprintValue, setSprintValue] = useState<string>(issue?.sprint?._id);
	const handleSprintValueChange = (event: SelectChangeEvent) => {
		setSprintValue(event.target.value as string);
	};

	const [isEditingSummary, setIsEditingSummary] = useState<boolean>(false);

	return (
		<>
			<Button
				className="hover-underlined"
				color="inherit"
				onClick={handleClickOpen}
				sx={{
					textTransform: "none",
					textAlign: "left",
				}}
			>
				{issue.summary}
			</Button>
			<Dialog
				fullWidth
				maxWidth="md"
				sx={{ width: "100%" }}
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
					<Breadcrumbs aria-label="breadcrumb">
						<Link
							underline="hover"
							color="inherit"
							href="/dashboard/ecommerce/"
						>
							{/* <Select
                                labelId="product-type-label"
                                id="product-type"
                                size="small"
                                value={"0"}
                                onChange={handleEpicNameValueChange}
                                sx={{
                                    "& fieldset": {},
                                    "& .MuiSelect-select": {
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    },
                                    alignItems: "center",
                                    marginRight: "7px",
                                }}
                            >
                                <MenuItem value={0} style={{ display: "none" }}>
                                    <svg
                                        width="14px"
                                        height="14px"
                                        style={{
                                            paddingTop: "6px",
                                        }}
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g
                                            id="Page-1"
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <g id="epic">
                                                <g
                                                    id="Epic"
                                                    transform="translate(1.000000, 1.000000)"
                                                >
                                                    <rect
                                                        id="Rectangle-36"
                                                        fill="#904EE2"
                                                        x="0"
                                                        y="0"
                                                        width="14"
                                                        height="14"
                                                        rx="2"
                                                    ></rect>
                                                    <g
                                                        id="Page-1"
                                                        transform="translate(4.000000, 3.000000)"
                                                        fill="#FFFFFF"
                                                    >
                                                        <path
                                                            d="M5.9233,3.7566 L5.9213,3.7526 C5.9673,3.6776 6.0003,3.5946 6.0003,3.4996 C6.0003,3.2236 5.7763,2.9996 5.5003,2.9996 L3.0003,2.9996 L3.0003,0.4996 C3.0003,0.2236 2.7763,-0.0004 2.5003,-0.0004 C2.3283,-0.0004 2.1853,0.0916 2.0953,0.2226 C2.0673,0.2636 2.0443,0.3056 2.0293,0.3526 L0.0813,4.2366 L0.0833,4.2396 C0.0353,4.3166 0.0003,4.4026 0.0003,4.4996 C0.0003,4.7766 0.2243,4.9996 0.5003,4.9996 L3.0003,4.9996 L3.0003,7.4996 C3.0003,7.7766 3.2243,7.9996 3.5003,7.9996 C3.6793,7.9996 3.8293,7.9006 3.9183,7.7586 L3.9213,7.7596 L3.9343,7.7336 C3.9453,7.7126 3.9573,7.6936 3.9653,7.6716 L5.9233,3.7566 Z"
                                                            id="Fill-1"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </MenuItem>
                                <MenuItem value={"Epic Name 01"}> Epic Name 01</MenuItem>
                                <MenuItem value={"Epic Name 02"}>Epic Name 02</MenuItem>
                            </Select> */}
							{issue.key}
						</Link>
						<Link
							underline="hover"
							color="inherit"
							href="/material-ui/getting-started/installation/"
						>
							<Select
								labelId="product-type-label"
								id="product-type"
								size="small"
								value={issueTypeValue}
								onChange={handleIssueTypeValueChange}
								sx={{
									"& fieldset": {},
									"& .MuiSelect-select": {
										overflow: "hidden",
										textOverflow: "ellipsis",
										whiteSpace: "nowrap",
									},
									alignItems: "center",
									marginRight: "7px",
								}}
							>
								{issueType?.map((type: any, index: any) => (
									<MenuItem key={index} value={type.name}>
										<div
											style={{
												paddingTop: "0px",
												display: "flex",
												justifyContent: "center",
											}}
										>
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
											{type.name}
										</div>
									</MenuItem>
								))}
							</Select>
							{/* {issue.key} */}
						</Link>
						<MoreOption
							projectId={projectId}
							issueId={issue._id}
							callUpdate={callUpdate}
						/>
					</Breadcrumbs>
				</DialogTitle>
				<DialogTitle
					sx={{
						fontWeight: "500",
						fontSize: "20px",
						paddingTop: "0px !important",
					}}
				>
					{isEditingSummary ? (
						<TextField
							value={summaryValue}
							onChange={(e) => setSummaryValue(e.target.value)}
							onBlur={() => setIsEditingSummary(false)}
							onKeyDown={(e) => {
								if (e.key === " ") {
									e.stopPropagation();
								}
							}}
							sx={{
								"& .MuiInputBase-input": {
									fontSize: "20px",
								},
							}}
							fullWidth
						/>
					) : (
						<Typography
							variant="h5"
							onClick={() => setIsEditingSummary(true)}
							sx={{ cursor: "pointer" }}
						>
							{summaryValue}
						</Typography>
					)}
				</DialogTitle>
				<DialogContent sx={{ width: "100%" }}>
					<strong
						style={{ color: "#0bb0af", width: "80px", marginRight: "7px" }}
					>
						Status
					</strong>
					<Select
						labelId="product-type-label"
						className="progressSelectBg"
						id={`workflow-${issue._id}`}
						size="small"
						value={workflowValue}
						onChange={handleWorkflowValueChange}
						sx={{
							"& fieldset": {},
							"& .MuiSelect-select": {
								overflow: "hidden",
								textOverflow: "ellipsis",
								whiteSpace: "nowrap",
							},
						}}
					>
						{workflows?.map((workflow, index) => (
							<MenuItem key={index} value={workflow.name}>
								{workflow?.name}
							</MenuItem>
						))}
					</Select>
					<DialogContentText
						sx={{
							fontWeight: "500",
							paddingBottom: "7px",
							paddingTop: "15px",
						}}
					>
						Description
					</DialogContentText>
					{isEditingDescription ? (
						<RichTextEditor
							value={descriptionValue}
							onChange={setDescriptionValue}
							onKeyDown={(e) => {
								if (e.key === " ") {
									e.stopPropagation(); // Ngăn chặn sự kiện phím cách
								}
							}}
						/>
					) : (
						<TextField
							label="Description"
							variant="filled"
							value={descriptionValue}
							onClick={() => setIsEditingDescription(true)}
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
								width: "100%",
							}}
						/>
					)}

					<DialogContentText
						sx={{
							fontWeight: "500",
							paddingBottom: "7px",
							paddingTop: "15px",
						}}
					>
						Issue Details Fields <strong style={{ color: "#ae2e24" }}>*</strong>
					</DialogContentText>
					<Accordion className="bg-white">
						<AccordionSummary
							expandIcon={<ArrowDropDownIcon />}
							aria-controls="panel1-content"
							id="panel1-header"
						>
							<Typography
								className="text-black"
								sx={{
									fontSize: "15px",
									fontWeight: "500",
								}}
							>
								More
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<DialogContentText
								sx={{
									fontWeight: "400",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: "10px",
								}}
							>
								<strong style={{ color: "#0bb0af", width: "80px" }}>
									Assignee
								</strong>
								<FormControl fullWidth>
									<Select
										labelId="product-type-label"
										id="product-type"
										value={assigneeValue}
										onChange={handleAssigneeValueChange}
										sx={{
											"& fieldset": {
												border: "1px solid #D5D9E2",
												borderRadius: "7px",
											},
										}}
									>
										<MenuItem value={""}>
											<Box
												sx={{
													display: "flex",
													flexDirection: "row",
													alignItems: "center",
													verticalAlign: "middle",
												}}
											>
												<Avatar key={"Unassigned"} alt="Assignee" />
												<Typography marginLeft="10px">Unassigned</Typography>
											</Box>
										</MenuItem>
										{project?.actors.map((actor: any) => (
											<MenuItem value={actor?.user._id}>
												<Box
													sx={{
														display: "flex",
														flexDirection: "row",
														alignItems: "center",
														verticalAlign: "middle",
													}}
												>
													<Avatar
														key={actor?.user?._id}
														src={actor?.user?.avatar}
														alt="Assignee"
													/>
													<Typography marginLeft="10px">
														{actor?.user?.name}
													</Typography>
												</Box>
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</DialogContentText>
							<DialogContentText
								sx={{
									fontWeight: "400",
									display: "flex",
									alignItems: "center",
									paddingTop: "10px",
									justifyContent: "center",
									gap: "10px",
								}}
							>
								<strong style={{ color: "#0bb0af", width: "80px" }}>
									Sprint
								</strong>
								<FormControl fullWidth>
									<Select
										labelId="product-type-label"
										id={`product-type-${issue._id}`}
										value={sprintValue}
										onChange={handleSprintValueChange}
										sx={{
											"& fieldset": {
												border: "1px solid #D5D9E2",
												borderRadius: "7px",
											},
										}}
									>
										{sprints?.map((sprint) => (
											<MenuItem value={sprint._id}>{sprint.name}</MenuItem>
										))}
									</Select>
								</FormControl>
							</DialogContentText>
							{issueTypeObject?.fields?.map((field: any, index: number) => (
								<DialogContentText
									key={index}
									sx={{
										fontWeight: "400",
										display: "flex",
										alignItems: "center",
										paddingTop: "10px",
										justifyContent: "center",
										gap: "10px",
									}}
								>
									<strong style={{ width: "80px" }}>
										{field.name}
										{field.isRequired ? (
											<strong style={{ color: "#ae2e24" }}>*</strong>
										) : null}
									</strong>

									<FormControl fullWidth>
										<FieldInput
											field={field}
											issueField={issueField}
											issueId={issue._id}
											handleFieldChange={handleFieldChange}
											project={project}
										/>
									</FormControl>
								</DialogContentText>
							))}
						</AccordionDetails>
					</Accordion>

					<DialogContentText
						sx={{
							fontWeight: "500",
							paddingTop: "20px",
						}}
					>
						Activity
					</DialogContentText>
					<DialogContentText
						sx={{
							fontWeight: "400",
							paddingTop: "10px",
							marginBottom: "10px",
						}}
					>
						Show:
						<Button>All</Button>
						<Button>Comments</Button>
						<Button>History</Button>
					</DialogContentText>

					{issue?.comments?.map((comment: any, index: number) => (
						<DialogContentText
							sx={{
								fontWeight: "400",
								paddingBottom: "10px",
								display: "flex",
								alignItems: "flex-start",
								gap: "15px",
							}}
						>
							<StyledBadge
								overlap="circular"
								anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
								variant="dot"
							>
								<Avatar
									src={comment?.user?.avatar}
									className="avatar-hover"
									sx={{ bgcolor: deepPurple[500] }}
								>
									{user?.name
										.split(" ")
										.map((word: string) => word.charAt(0))
										.join("")}
								</Avatar>
							</StyledBadge>

							{isEditCommentArray[index] ? (
								<Box
									display="flex"
									alignItems="center"
									gap="10px"
									flexDirection="column"
								>
									<RichTextEditor
										defaultValue={comment?.comment}
										value={commentValue}
										onChange={setCommentValue}
										onKeyDown={(e) => {
											if (e.key === " ") {
												e.stopPropagation(); // Ngăn chặn sự kiện phím cách
											}
										}}
									/>

									<Box
										display="flex"
										gap="10px"
										justifyContent="flex-end"
										width="100%"
									>
										<Box flexGrow={1}></Box>
										<Button
											variant="contained"
											onClick={(event) =>
												handleUpdateComment(comment._id, index)
											}
										>
											Update
										</Button>
										<Button
											variant="contained"
											onClick={() =>
												setIsEditCommentArray((prev) => {
													const newArray = [...prev];
													newArray[index] = false;
													return newArray;
												})
											}
										>
											Cancel
										</Button>
									</Box>
								</Box>
							) : (
								<>
									{/* <TextField
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        label={comment?.user?.name}
                                        value={comment?.comment}
                                        variant="filled"
                                        id="comment"
                                        name="comment"
                                        sx={{
                                            width: "100%",
                                        }}
                                    /> */}
									<Box
										display="flex"
										alignItems="flex-start"
										flexDirection="column"
										gap="2px"
									>
										<Typography sx={{ fontWeight: "bold" }}>
											{comment?.user?.name}
										</Typography>
										<Typography sx={{ fontWeight: "100" }}>
											{comment?.comment}
										</Typography>

										{comment?.user?._id == user?._id && (
											<>
												<Box
													sx={{
														display: "flex",
														flexDirection: "row",
														gap: "0px",
													}}
												>
													<Button
														style={{
															textTransform: "none",
															color: "#465265",
														}}
														size="small"
														onClick={() => {
															setIsEditCommentArray((prev) => {
																const newArray = [...prev];
																newArray[index] = true;
																return newArray;
															});
															setCommentValue(comment?.comment);
														}}
													>
														Update
													</Button>
													<Button
														style={{
															textTransform: "none",
															color: "#465265",
														}}
														size="small"
														onClick={() => handleDeleteComment(comment._id)}
													>
														Delete
													</Button>
												</Box>
											</>
										)}
									</Box>
								</>
							)}
						</DialogContentText>
					))}

					<DialogContentText
						sx={{
							fontWeight: "400",
							paddingTop: "10px",
							display: "flex",
							alignItems: "center",
							gap: "10px",
						}}
					>
						<br />
						<StyledBadge
							overlap="circular"
							anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
							variant="dot"
						>
							<Avatar
								src={user?.avatar}
								className="avatar-hover"
								sx={{ bgcolor: deepPurple[500] }}
							>
								{user?.name
									.split(" ")
									.map((word: string) => word.charAt(0))
									.join("")}
							</Avatar>
						</StyledBadge>
						{isEditingComment ? (
							<Box
								display="flex"
								alignItems="center"
								gap="10px"
								flexDirection="column"
							>
								<RichTextEditor
									value={commentValue}
									onChange={setCommentValue}
									onKeyDown={(e) => {
										if (e.key === " ") {
											e.stopPropagation(); // Ngăn chặn sự kiện phím cách
										}
									}}
								/>
								<Box
									display="flex"
									gap="10px"
									justifyContent="flex-end"
									width="100%"
								>
									<Box flexGrow={1}></Box>
									<Button variant="contained" onClick={handleCreateComment}>
										Add
									</Button>
									<Button
										variant="contained"
										onClick={() => setIsEditingComment(false)}
									>
										Cancel
									</Button>
								</Box>
							</Box>
						) : (
							<TextField
								label="Add a comment"
								variant="filled"
								id="comment"
								name="comment"
								onClick={() => setIsEditingComment(true)}
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
									width: "100%",
								}}
							/>
						)}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button onClick={handleSaveIssue}>Save</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default IssueDetailDialog;
