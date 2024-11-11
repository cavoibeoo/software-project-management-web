"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { deepOrange, deepPurple } from "@mui/material/colors";
import {
	AvatarGroup,
	Breadcrumbs,
	Button,
	Dialog,
	Fade,
	IconButton,
	Input,
	Link,
	Menu,
	MenuItem,
	Select,
	SelectChangeEvent,
	LinearProgress,
	Tooltip,
} from "@mui/material";
import styles from "@/components/Apps/FileManager/Sidebar/SearchForm/Search.module.css";
import { Card, Typography, Avatar, Badge, styled, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormDialog from "./AddMemberDialog";
import StartSprintDialog from "./StartSprintDialog";
import { FormEvent, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AssignMemberDialog from "./AssignMemberDialog";
import { toast } from "react-toastify";
import PositionedTooltips from "@/components/UiKit/Tooltip/PositionedTooltips";

export default function Page({ projectName }: { projectName: string }) {
	const breadcrumbs = [
		<Link className="hover-underlined" key="1" color="inherit" href="">
			Projects
		</Link>,
		<Link className="hover-underlined" key="2" color="inherit" href="">
			Sine_SPM
		</Link>,
		<Typography key="3" color="text.primary">
			Backlog
		</Typography>,
	];
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
	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		...theme.applyStyles("dark", {
			backgroundColor: "#1A2027",
		}),
	}));
	const [isEpicVisible, setIsEpicVisible] = React.useState(true);
	const [expanded, setExpanded] = React.useState<string | string[]>([]);
	const [sprints, setSprints] = React.useState<string[]>([]);
	const [backlogs, setBacklogs] = React.useState<string[]>([]);

	const handleAccordionChange =
		(panel: string) => (event: React.SyntheticEvent) => {
			setExpanded((prev) =>
				Array.isArray(prev)
					? prev.includes(panel)
						? prev.filter((p) => p !== panel)
						: [...prev, panel]
					: prev === panel
						? []
						: [panel]
			);
		};

	const handleCreateSprint = () => {
		setSprints((prev) => [...prev, `Sprint ${prev.length + 1}`]);
	};
	const handleCreateBacklog = () => {
		setBacklogs((prev) => [...prev, `Backlog ${prev.length + 1}`]);
	};

	React.useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.ctrlKey && event.key === "e") {
				setIsEpicVisible((prev) => !prev);
			}
		};

		window.addEventListener("keydown", handleKeyPress);

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, []);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const [openNotification, setOpenNotification] = useState(false);
	const handleClickOpenNotification = () => {
		setOpenNotification(true);
	};
	const handleCloseNotification = () => {
		setOpenNotification(false);
	};
	const BootstrapDialog = styled(Dialog)(({ theme }) => ({
		"& .MuiDialogContent-root": {
			padding: theme.spacing(2),
		},
		"& .MuiDialogActions-root": {
			padding: theme.spacing(1),
		},
	}));
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const [epicValue, setEpicValue] = useState<string>("0");
	const [progressValue, setProgressValue] = useState<string>("0");

	const handleEpicValueChange = (event: SelectChangeEvent) => {
		setEpicValue(event.target.value as string);
	};
	const handleProgressValueChange = (event: SelectChangeEvent) => {
		setProgressValue(event.target.value as string);
	};

	const [loading, setLoading] = useState(false);

	const handleBacklogSubmit = () => {
		setLoading(true);
		setTimeout(() => {
			toast.success("Create Backlog Successful!");
			setLoading(false);
		}, 2000);
	};

	return (
		<>
			<div style={{ minHeight: "78vh" }}>
				<Breadcrumbs separator="›" aria-label="breadcrumb">
					{breadcrumbs}
				</Breadcrumbs>
				<Typography
					variant="h5"
					gutterBottom
					sx={{ fontSize: "26px", fontWeight: "500" }}
				>
					Backlog
				</Typography>
				<Box display="flex" alignItems="center" justifyContent="space-between">
					<Box
						display="flex"
						alignItems="center"
						className={styles.searchBox}
						style={{ maxWidth: "20%" }}
					>
						<Box display="flex" alignItems="center" height={"100%"}>
							<i className="material-symbols-outlined" style={{ top: "34%" }}>
								search
							</i>
						</Box>
						<input
							type="text"
							className={styles.inputSearch}
							placeholder="Search"
							id="searchboxColor"
							style={{
								border: "1px solid #a6adba",
								marginBottom: "20px",
								fontSize: "0.96875rem",
								marginLeft: "8px",
							}}
						/>
					</Box>
					<Box display="flex" alignItems="center" sx={{ marginBottom: "20px" }}>
						<FormDialog></FormDialog>
						<AvatarGroup max={4}>
							<Avatar
								className="avatar-hover"
								sx={{ bgcolor: deepOrange[500] }}
							>
								P
							</Avatar>
							<Box
								sx={{
									display: "flex",
									alingItems: "center",
									gap: "10px",
								}}
							>
								<StyledBadge
									overlap="circular"
									anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
									variant="dot"
								>
									<Avatar
										className="avatar-hover"
										sx={{ bgcolor: deepPurple[500] }}
									>
										DQ
									</Avatar>
								</StyledBadge>
							</Box>

							<Avatar
								className="avatar-hover"
								alt="Remy Sharp"
								src="/images/users/user1.jpg"
							/>
							<Avatar
								className="avatar-hover"
								alt="Travis Howard"
								src="/images/users/user2.jpg"
							/>
							<Avatar
								className="avatar-hover"
								alt="Cindy Baker"
								src="/images/users/user3.jpg"
							/>
							<Avatar
								className="avatar-hover"
								alt="Agnes Walker"
								src="/images/users/user4.jpg"
							/>
						</AvatarGroup>
					</Box>
				</Box>

				<Grid container columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
					{isEpicVisible && (
						<Grid item xs={12} sm={12} md={5} lg={4} xl={2.5}>
							<Card
								sx={{
									boxShadow: "none",
									borderRadius: "7px",
									mb: "25px",
									padding: { xs: "8px", sm: "10px", lg: "15px" },
								}}
								className="rmui-card"
							>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										mb: "25px",
									}}
								>
									<Typography
										variant="h3"
										sx={{
											fontSize: { xs: "16px", md: "16px" },
											fontWeight: 500,
										}}
										className="text-black"
									>
										Epic
									</Typography>
									<Tooltip title="close" placement="right">
										<Button
											onClick={() => setIsEpicVisible(false)}
											sx={{
												minWidth: "auto",
												padding: "4px",
												color: "inherit",
											}}
										>
											<span className="material-symbols-outlined">close</span>
										</Button>
									</Tooltip>
								</Box>
								<Box sx={{ width: "100%" }}>
									<Stack spacing={1}>
										<Accordion
											expanded={
												Array.isArray(expanded) && expanded.includes("panel1")
											}
											onChange={handleAccordionChange("panel1")}
											sx={{
												backgroundColor:
													Array.isArray(expanded) && expanded.includes("panel1")
														? "#cce0ff"
														: "inherit",
												"&:hover": {
													backgroundColor: "#cce0ff",
												},
											}}
											className="epicCard"
										>
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel1-content"
												id="panel1-header"
												sx={{ fontWeight: "bold" }}
											>
												Design Login Page
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													variant="body2"
													style={{ fontWeight: "bold" }}
												>
													No issues
												</Typography>
												<Typography
													variant="body2"
													style={{ fontWeight: "bold" }}
												>
													Start date:{" "}
													<span style={{ fontWeight: "normal" }}>None</span>
												</Typography>
												<Typography
													variant="body2"
													style={{ fontWeight: "bold" }}
												>
													Due date:{" "}
													<span style={{ fontWeight: "normal" }}>None</span>
												</Typography>
												<Button
													variant="contained"
													style={{ marginTop: "10px" }}
												>
													View all details
												</Button>
											</AccordionDetails>
										</Accordion>
										<Accordion
											expanded={
												Array.isArray(expanded) && expanded.includes("panel2")
											}
											onChange={handleAccordionChange("panel2")}
											sx={{
												backgroundColor:
													Array.isArray(expanded) && expanded.includes("panel2")
														? "#cce0ff"
														: "inherit",
												"&:hover": {
													backgroundColor: "#cce0ff",
												},
											}}
											className="epicCard"
										>
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel2-content"
												id="panel2-header"
												sx={{ fontWeight: "bold" }}
											>
												Design Login Page
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													variant="body2"
													style={{ fontWeight: "bold" }}
												>
													No issues
												</Typography>
												<Typography
													variant="body2"
													style={{ fontWeight: "bold" }}
												>
													Start date:{" "}
													<span style={{ fontWeight: "normal" }}>None</span>
												</Typography>
												<Typography
													variant="body2"
													style={{ fontWeight: "bold" }}
												>
													Due date:{" "}
													<span style={{ fontWeight: "normal" }}>None</span>
												</Typography>
												<Button
													variant="contained"
													style={{ marginTop: "10px" }}
												>
													View all details
												</Button>
											</AccordionDetails>
										</Accordion>
										<Accordion
											expanded={
												Array.isArray(expanded) && expanded.includes("panel3")
											}
											onChange={handleAccordionChange("panel3")}
											sx={{
												backgroundColor:
													Array.isArray(expanded) && expanded.includes("panel3")
														? "#cce0ff"
														: "inherit",
												"&:hover": {
													backgroundColor: "#cce0ff",
												},
											}}
											className="epicCard"
										>
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel3-content"
												id="panel3-header"
												sx={{ fontWeight: "bold" }}
											>
												Design Dashboard Page
											</AccordionSummary>
											<AccordionDetails>
												<Typography
													variant="body2"
													style={{ fontWeight: "bold" }}
												>
													No issues
												</Typography>
												<Typography
													variant="body2"
													style={{ fontWeight: "bold" }}
												>
													Start date:{" "}
													<span style={{ fontWeight: "normal" }}>None</span>
												</Typography>
												<Typography
													variant="body2"
													style={{ fontWeight: "bold" }}
												>
													Due date:{" "}
													<span style={{ fontWeight: "normal" }}>None</span>
												</Typography>
												<Button
													variant="contained"
													style={{ marginTop: "10px" }}
												>
													View all details
												</Button>
											</AccordionDetails>
										</Accordion>
									</Stack>
								</Box>
							</Card>
						</Grid>
					)}
					<Grid
						item
						xs={12}
						sm={12}
						md={isEpicVisible ? 7 : 12}
						lg={isEpicVisible ? 8 : 12}
						xl={isEpicVisible ? 9 : 12}
					>
						<Card
							sx={{
								boxShadow: "none",
								borderRadius: "7px",
								mb: "10px",
								padding: { xs: "8px", sm: "10px", lg: "15px" },
							}}
							className="rmui-card"
						>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
							>
								<Typography
									variant="h3"
									sx={{
										fontSize: { xs: "16px", md: "16px" },
										fontWeight: 500,
										flexGrow: 1,
									}}
									className="text-black"
								>
									<Accordion
										expanded={
											Array.isArray(expanded)
												? expanded.includes("panel4")
												: expanded === "panel4"
										}
										onChange={handleAccordionChange("panel4")}
										className="accordionItem"
										sx={{
											backgroundColor:
												expanded === "panel4" ? "#e9ebee" : "inherit",
											"&:hover": {
												backgroundColor: "#e9ebee",
											},
											boxShadow: "none",
											border: "none",
											padding: { xs: "0px", sm: "0px", lg: "0px" },
											flexGrow: 1, // Đảm bảo accordion chiếm không gian còn lại
										}}
									>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel4-content"
											id="panel4-header"
											sx={{ fontWeight: "500", fontSize: "15px" }}
										>
											FP Sprint 1
										</AccordionSummary>
										<AccordionDetails>
											<Stack spacing={1}>
												<Item
													className="backlogItem"
													style={{ padding: "0px 0px 0px 0px" }}
												>
													<Table
														sx={{
															borderBottom: "none !important",
														}}
													>
														<TableBody>
															<TableRow>
																<TableCell
																	style={{
																		border: "none",
																		alignItems: "center",
																		justifyContent: "center",
																	}}
																>
																	<div
																		style={{
																			paddingTop: "5px",
																			display: "flex",
																			justifyContent: "center",
																		}}
																	>
																		<svg
																			width="20px"
																			height="20px"
																			style={{
																				marginRight: "5px",
																			}}
																			viewBox="0 0 16 16"
																			version="1.1"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<defs></defs>
																			<g
																				id="Page-1"
																				stroke="none"
																				strokeWidth="1"
																				fill="none"
																				fillRule="evenodd"
																			>
																				<g id="task">
																					<g
																						id="Task"
																						transform="translate(1.000000, 1.000000)"
																					>
																						<rect
																							id="Rectangle-36"
																							fill="#4BADE8"
																							x="0"
																							y="0"
																							width="14"
																							height="14"
																							rx="2"
																						></rect>
																						<g
																							id="Page-1"
																							transform="translate(4.000000, 4.500000)"
																							stroke="#FFFFFF"
																							strokeWidth="2"
																							strokeLinecap="round"
																						>
																							<path
																								d="M2,5 L6,0"
																								id="Stroke-1"
																							></path>
																							<path
																								d="M2,5 L0,3"
																								id="Stroke-3"
																							></path>
																						</g>
																					</g>
																				</g>
																			</g>
																		</svg>
																		SINES-51
																	</div>
																</TableCell>
																<TableCell style={{ border: "none" }}>
																	<Link
																		className="hover-underlined"
																		color="inherit"
																		href=""
																	>
																		Import syllabus/ syllabus importing screen
																	</Link>
																</TableCell>
																<TableCell
																	style={{
																		border: "none",
																		display: "flex",
																		flexDirection: "row",
																	}}
																>
																	<Select
																		labelId="product-type-label"
																		id="product-type"
																		className="epicSelectBg"
																		size="small"
																		value={epicValue}
																		onChange={handleEpicValueChange}
																		style={{ marginRight: "5px" }}
																		sx={{
																			"& fieldset": {
																				maxWidth: "120px",
																			},
																			"& .MuiSelect-select": {
																				overflow: "hidden",
																				textOverflow: "ellipsis",
																				whiteSpace: "nowrap",
																			},
																		}}
																	>
																		<MenuItem value={0}>epic</MenuItem>
																		<MenuItem value={1}>1</MenuItem>
																		<MenuItem value={2}>2</MenuItem>
																		<MenuItem value={3}>3</MenuItem>
																		<MenuItem value={4}>4</MenuItem>
																	</Select>
																	<Select
																		labelId="product-type-label"
																		className="progressSelectBg"
																		id="product-type"
																		size="small"
																		value={progressValue}
																		onChange={handleProgressValueChange}
																		sx={{
																			"& fieldset": {},
																			"& .MuiSelect-select": {
																				overflow: "hidden",
																				textOverflow: "ellipsis",
																				whiteSpace: "nowrap",
																			},
																		}}
																	>
																		<MenuItem value={0}>progress</MenuItem>
																		<MenuItem value={1}>1</MenuItem>
																		<MenuItem value={2}>2</MenuItem>
																		<MenuItem value={3}>3</MenuItem>
																		<MenuItem value={4}>4</MenuItem>
																	</Select>
																</TableCell>
																<TableCell style={{ border: "none" }}>
																	<AssignMemberDialog />
																</TableCell>
															</TableRow>
														</TableBody>
													</Table>
												</Item>
												<Item
													className="backlogItem"
													style={{ padding: "0px 0px 0px 0px" }}
												>
													<Table
														sx={{
															borderBottom: "none !important",
														}}
													>
														<TableBody>
															<TableRow>
																<TableCell
																	style={{
																		border: "none",
																		alignItems: "center",
																		justifyContent: "center",
																	}}
																>
																	<div
																		style={{
																			paddingTop: "5px",
																			display: "flex",
																			justifyContent: "center",
																		}}
																	>
																		<svg
																			width="20px"
																			height="20px"
																			style={{
																				marginRight: "5px",
																			}}
																			viewBox="0 0 16 16"
																			version="1.1"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<defs></defs>
																			<g
																				id="Page-1"
																				stroke="none"
																				strokeWidth="1"
																				fill="none"
																				fillRule="evenodd"
																			>
																				<g id="task">
																					<g
																						id="Task"
																						transform="translate(1.000000, 1.000000)"
																					>
																						<rect
																							id="Rectangle-36"
																							fill="#4BADE8"
																							x="0"
																							y="0"
																							width="14"
																							height="14"
																							rx="2"
																						></rect>
																						<g
																							id="Page-1"
																							transform="translate(4.000000, 4.500000)"
																							stroke="#FFFFFF"
																							strokeWidth="2"
																							strokeLinecap="round"
																						>
																							<path
																								d="M2,5 L6,0"
																								id="Stroke-1"
																							></path>
																							<path
																								d="M2,5 L0,3"
																								id="Stroke-3"
																							></path>
																						</g>
																					</g>
																				</g>
																			</g>
																		</svg>
																		SINES-51
																	</div>
																</TableCell>
																<TableCell style={{ border: "none" }}>
																	<Link
																		className="hover-underlined"
																		color="inherit"
																		href=""
																	>
																		Import syllabus/ syllabus importing screen
																	</Link>
																</TableCell>
																<TableCell
																	style={{
																		border: "none",
																		display: "flex",
																		flexDirection: "row",
																	}}
																>
																	<Select
																		labelId="product-type-label"
																		id="product-type"
																		className="epicSelectBg"
																		size="small"
																		value={epicValue}
																		onChange={handleEpicValueChange}
																		style={{ marginRight: "5px" }}
																		sx={{
																			"& fieldset": {
																				maxWidth: "120px",
																			},
																			"& .MuiSelect-select": {
																				overflow: "hidden",
																				textOverflow: "ellipsis",
																				whiteSpace: "nowrap",
																			},
																		}}
																	>
																		<MenuItem value={0}>epic</MenuItem>
																		<MenuItem value={1}>1</MenuItem>
																		<MenuItem value={2}>2</MenuItem>
																		<MenuItem value={3}>3</MenuItem>
																		<MenuItem value={4}>4</MenuItem>
																	</Select>
																	<Select
																		labelId="product-type-label"
																		className="progressSelectBg"
																		id="product-type"
																		size="small"
																		value={progressValue}
																		onChange={handleProgressValueChange}
																		sx={{
																			"& fieldset": {},
																			"& .MuiSelect-select": {
																				overflow: "hidden",
																				textOverflow: "ellipsis",
																				whiteSpace: "nowrap",
																			},
																		}}
																	>
																		<MenuItem value={0}>progress</MenuItem>
																		<MenuItem value={1}>1</MenuItem>
																		<MenuItem value={2}>2</MenuItem>
																		<MenuItem value={3}>3</MenuItem>
																		<MenuItem value={4}>4</MenuItem>
																	</Select>
																</TableCell>
																<TableCell style={{ border: "none" }}>
																	<AssignMemberDialog />
																</TableCell>
															</TableRow>
														</TableBody>
													</Table>
												</Item>
												<Item
													className="backlogItem"
													style={{ padding: "0px 0px 0px 0px" }}
												>
													<Table
														sx={{
															borderBottom: "none !important",
														}}
													>
														<TableBody>
															<TableRow>
																<TableCell
																	style={{
																		border: "none",
																		alignItems: "center",
																		justifyContent: "center",
																	}}
																>
																	<div
																		style={{
																			paddingTop: "5px",
																			display: "flex",
																			justifyContent: "center",
																		}}
																	>
																		<svg
																			width="20px"
																			height="20px"
																			style={{
																				marginRight: "5px",
																			}}
																			viewBox="0 0 16 16"
																			version="1.1"
																			xmlns="http://www.w3.org/2000/svg"
																		>
																			<defs></defs>
																			<g
																				id="Page-1"
																				stroke="none"
																				strokeWidth="1"
																				fill="none"
																				fillRule="evenodd"
																			>
																				<g id="task">
																					<g
																						id="Task"
																						transform="translate(1.000000, 1.000000)"
																					>
																						<rect
																							id="Rectangle-36"
																							fill="#4BADE8"
																							x="0"
																							y="0"
																							width="14"
																							height="14"
																							rx="2"
																						></rect>
																						<g
																							id="Page-1"
																							transform="translate(4.000000, 4.500000)"
																							stroke="#FFFFFF"
																							strokeWidth="2"
																							strokeLinecap="round"
																						>
																							<path
																								d="M2,5 L6,0"
																								id="Stroke-1"
																							></path>
																							<path
																								d="M2,5 L0,3"
																								id="Stroke-3"
																							></path>
																						</g>
																					</g>
																				</g>
																			</g>
																		</svg>
																		SINES-51
																	</div>
																</TableCell>
																<TableCell style={{ border: "none" }}>
																	<Link
																		className="hover-underlined"
																		color="inherit"
																		href=""
																	>
																		Import syllabus/ syllabus importing screen
																	</Link>
																</TableCell>
																<TableCell
																	style={{
																		border: "none",
																		display: "flex",
																		flexDirection: "row",
																	}}
																>
																	<Select
																		labelId="product-type-label"
																		id="product-type"
																		className="epicSelectBg"
																		size="small"
																		value={epicValue}
																		onChange={handleEpicValueChange}
																		style={{ marginRight: "5px" }}
																		sx={{
																			"& fieldset": {
																				maxWidth: "120px",
																			},
																			"& .MuiSelect-select": {
																				overflow: "hidden",
																				textOverflow: "ellipsis",
																				whiteSpace: "nowrap",
																			},
																		}}
																	>
																		<MenuItem value={0}>epic</MenuItem>
																		<MenuItem value={1}>1</MenuItem>
																		<MenuItem value={2}>2</MenuItem>
																		<MenuItem value={3}>3</MenuItem>
																		<MenuItem value={4}>4</MenuItem>
																	</Select>
																	<Select
																		labelId="product-type-label"
																		className="progressSelectBg"
																		id="product-type"
																		size="small"
																		value={progressValue}
																		onChange={handleProgressValueChange}
																		sx={{
																			"& fieldset": {},
																			"& .MuiSelect-select": {
																				overflow: "hidden",
																				textOverflow: "ellipsis",
																				whiteSpace: "nowrap",
																			},
																		}}
																	>
																		<MenuItem value={0}>progress</MenuItem>
																		<MenuItem value={1}>1</MenuItem>
																		<MenuItem value={2}>2</MenuItem>
																		<MenuItem value={3}>3</MenuItem>
																		<MenuItem value={4}>4</MenuItem>
																	</Select>
																</TableCell>
																<TableCell style={{ border: "none" }}>
																	<AssignMemberDialog />
																</TableCell>
															</TableRow>
														</TableBody>
													</Table>
												</Item>
												<Button className="createIssueBtn">
													+ Create Issue
												</Button>
											</Stack>
										</AccordionDetails>
									</Accordion>
								</Typography>
								<Box
									sx={{
										display: "flex",
										justifyContent: "flex-end",
										flexDirection: "row",
									}}
								>
									<StartSprintDialog />
									<Button
										id="fade-button"
										aria-controls={open ? "fade-menu" : undefined}
										aria-haspopup="true"
										aria-expanded={open ? "true" : undefined}
										onClick={handleClick}
									>
										<span className="material-symbols-outlined">
											more_horiz
										</span>
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
										<MenuItem onClick={handleClose}>Project settings</MenuItem>
										<MenuItem onClick={handleClickOpenNotification}>
											Move to trash
										</MenuItem>
									</Menu>
								</Box>
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
													color: "#fff !important",
												}}
												className="text-black"
											>
												Move to Trash
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
														<Grid item xs={12} mt={1}>
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
																	sx={{
																		textTransform: "capitalize",
																		borderRadius: "8px",
																		fontWeight: "500",
																		fontSize: "13px",
																		padding: "11px 30px",
																		color: "#fff !important",
																	}}
																>
																	Move
																</Button>
															</Box>
														</Grid>
													</Grid>
												</Box>
											</Box>
										</Box>
									</Box>
								</BootstrapDialog>
							</Box>
						</Card>
						{sprints.map((sprint, index) => (
							<Card
								sx={{
									boxShadow: "none",
									borderRadius: "7px",
									mb: "10px",
									padding: { xs: "8px", sm: "10px", lg: "15px" },
								}}
								className="rmui-card"
							>
								<Box
									display="flex"
									alignItems="center"
									justifyContent="space-between"
								>
									<Typography
										variant="h3"
										sx={{
											fontSize: { xs: "16px", md: "16px" },
											fontWeight: 500,
											flexGrow: 1,
										}}
										className="text-black"
									>
										<Accordion
											className="accordionItem"
											expanded={
												Array.isArray(expanded)
													? expanded.includes(sprint)
													: expanded === sprint
											}
											onChange={handleAccordionChange(sprint)}
											sx={{
												backgroundColor:
													expanded === sprint ? "#e9ebee" : "inherit",
												"&:hover": {
													backgroundColor: "#e9ebee",
												},
												boxShadow: "none",
												border: "none",
												padding: { xs: "0px", sm: "0px", lg: "0px" },
												flexGrow: 1,
											}}
										>
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="sprint-content"
												id="sprint-header"
												sx={{ fontWeight: "500", fontSize: "15px" }}
											>
												{sprint}
											</AccordionSummary>
											<AccordionDetails>
												<Stack spacing={1}>
													<Button className="createIssueBtn">
														+ Create Issue
													</Button>
												</Stack>
											</AccordionDetails>
										</Accordion>
									</Typography>
									<Box>
										<Button
											variant="contained"
											disabled
											style={{
												marginInline: "5px",
												padding: "2px 2px !important",
											}}
										>
											Start Sprint
										</Button>
										<Button
											id="fade-button"
											aria-controls={open ? "fade-menu" : undefined}
											aria-haspopup="true"
											aria-expanded={open ? "true" : undefined}
											onClick={handleClick}
										>
											<span className="material-symbols-outlined">
												more_horiz
											</span>
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
											<MenuItem onClick={handleClose}>
												Project settings
											</MenuItem>
											<MenuItem onClick={handleClickOpenNotification}>
												Move to trash
											</MenuItem>
										</Menu>
									</Box>
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
														color: "#fff !important",
													}}
													className="text-black"
												>
													Move to Trash
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
												<Box
													component="form"
													noValidate
													onSubmit={handleSubmit}
												>
													<Box
														sx={{
															padding: "25px",
															borderRadius: "8px",
														}}
														className="bg-white"
													>
														<Grid container alignItems="center" spacing={2}>
															<Grid item xs={12} mt={1}>
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
																		sx={{
																			textTransform: "capitalize",
																			borderRadius: "8px",
																			fontWeight: "500",
																			fontSize: "13px",
																			padding: "11px 30px",
																			color: "#fff !important",
																		}}
																	>
																		Move
																	</Button>
																</Box>
															</Grid>
														</Grid>
													</Box>
												</Box>
											</Box>
										</Box>
									</BootstrapDialog>
								</Box>
							</Card>
						))}
						<Card
							sx={{
								boxShadow: "none",
								borderRadius: "7px",
								mb: "10px",
								padding: { xs: "8px", sm: "10px", lg: "15px" },
								backgroundColor: "#f6f7f9",
							}}
							className="backlogCard"
						>
							<Box
								display="flex"
								alignItems="center"
								justifyContent="space-between"
							>
								<Typography
									variant="h3"
									sx={{
										fontSize: { xs: "16px", md: "16px" },
										fontWeight: 500,
										flexGrow: 1,
									}}
									className="text-black"
								>
									<Accordion
										expanded={
											Array.isArray(expanded)
												? expanded.includes("panel5")
												: expanded === "panel5"
										}
										onChange={handleAccordionChange("panel5")}
										className="backlogItembg"
										sx={{
											backgroundColor:
												expanded === "panel5" ? "#e9ebee" : "inherit",
											"&:hover": {
												backgroundColor: "#e9ebee",
											},
											boxShadow: "none",
											border: "none",
											padding: { xs: "0px", sm: "0px", lg: "0px" },
											flexGrow: 1,
										}}
									>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls="panel5-content"
											id="panel5-header"
											sx={{ fontWeight: "500", fontSize: "15px" }}
										>
											Backlog
										</AccordionSummary>
										<AccordionDetails>
											<Stack spacing={1}>
												{backlogs.map((backlog, index) => (
													<>
														<Item
															className="backlogItem"
															style={{ padding: "0px 0px 0px 0px" }}
														>
															<Table
																sx={{
																	borderBottom: "none !important",
																}}
															>
																<TableBody>
																	<TableRow>
																		<TableCell
																			style={{
																				border: "none",
																				alignItems: "center",
																				justifyContent: "center",
																			}}
																		>
																			<div
																				style={{
																					paddingTop: "5px",
																					display: "flex",
																					justifyContent: "center",
																				}}
																			>
																				<svg
																					width="20px"
																					height="20px"
																					style={{
																						marginRight: "5px",
																					}}
																					viewBox="0 0 16 16"
																					version="1.1"
																					xmlns="http://www.w3.org/2000/svg"
																				>
																					<defs></defs>
																					<g
																						id="Page-1"
																						stroke="none"
																						strokeWidth="1"
																						fill="none"
																						fillRule="evenodd"
																					>
																						<g id="task">
																							<g
																								id="Task"
																								transform="translate(1.000000, 1.000000)"
																							>
																								<rect
																									id="Rectangle-36"
																									fill="#4BADE8"
																									x="0"
																									y="0"
																									width="14"
																									height="14"
																									rx="2"
																								></rect>
																								<g
																									id="Page-1"
																									transform="translate(4.000000, 4.500000)"
																									stroke="#FFFFFF"
																									strokeWidth="2"
																									strokeLinecap="round"
																								>
																									<path
																										d="M2,5 L6,0"
																										id="Stroke-1"
																									></path>
																									<path
																										d="M2,5 L0,3"
																										id="Stroke-3"
																									></path>
																								</g>
																							</g>
																						</g>
																					</g>
																				</svg>
																			</div>
																		</TableCell>
																		<TableCell style={{ border: "none" }}>
																			{loading ? (
																				<LinearProgress
																					sx={{
																						width: "100vh",
																						color: "white",
																					}}
																					color="secondary"
																				/>
																			) : (
																				<Input
																					placeholder="Backlog name.."
																					sx={{
																						width: "100%",
																						color: "white",
																					}}
																					aria-label="Name"
																					onKeyDown={(event) => {
																						if (event.key === "Enter") {
																							handleBacklogSubmit();
																						}
																					}}
																				/>
																			)}
																		</TableCell>
																		<TableCell
																			style={{
																				border: "none",
																				display: "flex",
																				flexDirection: "row",
																				alignItems: "center",
																			}}
																		></TableCell>
																		<TableCell
																			style={{ border: "none" }}
																		></TableCell>
																	</TableRow>
																</TableBody>
															</Table>
														</Item>
													</>
												))}
												<Button
													className="createIssueBtn"
													onClick={handleCreateBacklog}
												>
													+ Create Issue
												</Button>
											</Stack>
										</AccordionDetails>
									</Accordion>
								</Typography>
								<Box>
									<Button
										variant="outlined"
										size="medium"
										sx={{ marginLeft: "20px" }}
										onClick={handleCreateSprint}
									>
										Create Sprint
									</Button>
								</Box>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</div>
		</>
	);
}
