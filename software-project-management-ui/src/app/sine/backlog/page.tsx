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
	LinearProgress,
	Link,
	Select,
	Menu,
	MenuItem,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableRow,
	Tooltip,
	FormControlLabel,
	Switch,
	SelectChangeEvent,
} from "@mui/material";
import styles from "@/components/Apps/FileManager/Sidebar/SearchForm/Search.module.css";
import { Card, Typography, Avatar, Badge, styled, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormDialog from "../backlog/Dialogs/AddMemberDialog/AddMemberDialog";
import StartSprintDialog from "./Dialogs/StartSprintDialog/StartSprintDialog";
import { FormEvent, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { BacklogList } from "./BacklogList/BacklogList";
import {
	DndContext,
	KeyboardSensor,
	TouchSensor,
	useSensor,
	PointerSensor,
	useSensors,
	closestCorners,
	DragOverlay,
	defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { arrayMove } from "@dnd-kit/sortable";
import ExampleDND from "../drag&drop/page";
import "../drag&drop/component/Column/Column.css";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { Backlog } from "./BacklogList/BackLog/Backlog";
import { toast } from "react-toastify";

export default function Page({ projectName }: { projectName: string }) {
	const breadcrumbs = [
		<Link
			className="hover-underlined"
			key="1"
			color="inherit"
			href="/your-work/"
		>
			Projects
		</Link>,
		<Link
			className="hover-underlined"
			key="2"
			color="inherit"
			href="/sine/board/"
		>
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

	const [isEpicVisible, setIsEpicVisible] = React.useState(true);
	const [expanded, setExpanded] = React.useState<string | string[]>([]);
	const [sprints, setSprints] = React.useState<string[]>([]);
	const [newbacklogs, setNewBacklogs] = React.useState<string[]>([]);

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

	const [loading, setLoading] = useState(false);

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
	React.useEffect(() => {
		const handleKeyPress = (event: KeyboardEvent) => {
			if (event.key === "`") {
				setIsEpicVisible((prev) => !prev);
			}
		};

		window.addEventListener("keydown", handleKeyPress);

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, []);
	const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsEpicVisible(event.target.checked);
	};

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

	const [backlogs, setBacklogs] = useState([
		{
			id: "1",
			title: "SINES-51",
			description: "Import syllabus/ syllabus importing screen",
		},
		{
			id: "2",
			title: "SINES-52",
			description: "Another task description",
		},
		{
			id: "3",
			title: "SINES-52",
			description: "AAnother task description",
		},
	]);

	const getTaskPos = (id: string) =>
		backlogs.findIndex((backlog) => backlog.id === id);

	const handleOnDragStart = (event: any) => {
		console.log("Start Drag", event);
		setactiveDragItemId(event?.active?.id);
		setactiveDragItemData(event?.active?.data?.current);
	};

	const handleDragEnd = (event: {
		active: { id: string };
		over: { id: string };
	}) => {
		const { active, over } = event;
		if (active.id === over.id) return;
		setBacklogs((backlogs) => {
			const originalPos = getTaskPos(active.id);
			const newPos = getTaskPos(over.id);
			return arrayMove(backlogs, originalPos, newPos);
		});
		console.log("setactiveDragItemId", activeDragItemId);
		console.log("setactiveDragItemData", activeDragItemData);
		setactiveDragItemId(null);
		setactiveDragItemData(null);
	};
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 3,
			},
		}),
		useSensor(TouchSensor, {
			activationConstraint: {
				distance: 3,
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	const [activeDragItemId, setactiveDragItemId] = useState(null);
	const [activeDragItemData, setactiveDragItemData] = useState(null);

	const dropAnimation = {
		sideEffects: defaultDropAnimationSideEffects({
			styles: { active: { opacity: "0.5" } },
		}),
	};

	const [showCreateBacklogButton, setShowCreateBacklogButton] =
		React.useState(true);
	const handleCreateBacklog = () => {
		setNewBacklogs((prev) => [...prev, `Backlog ${prev.length + 1}`]);
		setShowCreateBacklogButton(false);
	};
	const handleRemoveBacklog = () => {
		setNewBacklogs((prev) => prev.slice(0, -1));
		setShowCreateBacklogButton(true);
	};

	const handleBacklogSubmit = () => {
		setLoading(true);
		setTimeout(() => {
			toast.success("Create Backlog Successful!");
			handleRemoveBacklog();
			setLoading(false);
		}, 2000);
	};

	const [issueTypeValue, setIssueTypeValue] = useState<string>("0");
	const handleIssueTypeValueChange = (event: SelectChangeEvent) => {
		setIssueTypeValue(event.target.value as string);
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
					<FormControlLabel
						control={
							<Switch checked={isEpicVisible} onChange={handleSwitchChange} />
						}
						label="Epic"
					></FormControlLabel>
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
								<Box display="flex">
									<StartSprintDialog />
								</Box>
								<Box
									display="flex"
									sx={{
										display: "flex",
										flexDirection: "row",
									}}
								>
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
							</Box>

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
										Array.isArray(expanded) && expanded.includes("panel4")
											? "#e9ebee"
											: "inherit",
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
										<AccordionDetails>
											<DndContext
												modifiers={[restrictToVerticalAxis]}
												sensors={sensors}
												collisionDetection={closestCorners}
												onDragStart={handleOnDragStart}
												onDragEnd={(event) =>
													handleDragEnd(
														event as {
															active: { id: string };
															over: { id: string };
														}
													)
												}
											>
												<BacklogList backlogs={backlogs}></BacklogList>
												<DragOverlay dropAnimation={dropAnimation}>
													{!activeDragItemData && null}
													{
														<div
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
																		<TableCell
																			style={{ border: "none" }}
																			sx={{ width: "50%" }}
																		>
																			<Link
																				className="hover-underlined"
																				color="inherit"
																				href=""
																			></Link>
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
																		<TableCell
																			style={{ border: "none" }}
																		></TableCell>
																	</TableRow>
																</TableBody>
															</Table>
														</div>
													}
												</DragOverlay>
											</DndContext>
										</AccordionDetails>
									</Stack>
								</AccordionDetails>
							</Accordion>
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
						</Card>
						<Box>
							<DndContext
								modifiers={[restrictToVerticalAxis]}
								sensors={sensors}
								collisionDetection={closestCorners}
								onDragEnd={(event) =>
									handleDragEnd(
										event as {
											active: { id: string };
											over: { id: string };
										}
									)
								}
							>
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
											<Box display="flex">
												<StartSprintDialog />
											</Box>
											<Box
												display="flex"
												sx={{
													display: "flex",
													flexDirection: "row",
												}}
											>
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
										</Box>

										<Accordion
											expanded={
												Array.isArray(expanded)
													? expanded.includes(sprint)
													: expanded === sprint
											}
											onChange={handleAccordionChange(sprint)}
											className="accordionItem"
											sx={{
												backgroundColor:
													expanded === sprint ? "#e9ebee" : "inherit",
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
												{sprint}
											</AccordionSummary>
											<AccordionDetails>
												<Stack spacing={1}>
													<AccordionDetails>
														<DndContext
															modifiers={[restrictToVerticalAxis]}
															sensors={sensors}
															collisionDetection={closestCorners}
															onDragEnd={(event) =>
																handleDragEnd(
																	event as {
																		active: { id: string };
																		over: { id: string };
																	}
																)
															}
														>
															<Stack spacing={1}>
																{newbacklogs.map((newbacklog, index) => (
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
																									paddingTop: "6px",
																									display: "flex",
																									justifyContent: "center",
																								}}
																							>
																								<Select
																									labelId="product-type-label"
																									className="ItemSelectBg"
																									id="product-type"
																									size="small"
																									value={issueTypeValue}
																									onChange={
																										handleIssueTypeValueChange
																									}
																									sx={{
																										"& fieldset": {},
																										"& .MuiSelect-select": {
																											overflow: "hidden",
																											textOverflow: "ellipsis",
																											whiteSpace: "nowrap",
																										},
																										alignItems: "center",
																									}}
																								>
																									<MenuItem value={0}>
																										<svg
																											width="20px"
																											height="20px"
																											style={{
																												paddingTop: "6px",
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
																									</MenuItem>
																									<MenuItem value={1}>
																										<svg
																											width="20px"
																											height="20px"
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
																												<g id="story">
																													<g
																														id="Story"
																														transform="translate(1.000000, 1.000000)"
																													>
																														<rect
																															id="Rectangle-36"
																															fill="#63BA3C"
																															x="0"
																															y="0"
																															width="14"
																															height="14"
																															rx="2"
																														></rect>
																														<path
																															d="M9,3 L5,3 C4.448,3 4,3.448 4,4 L4,10.5 C4,10.776 4.224,11 4.5,11 C4.675,11 4.821,10.905 4.91,10.769 L4.914,10.77 L6.84,8.54 C6.92,8.434 7.08,8.434 7.16,8.54 L9.086,10.77 L9.09,10.769 C9.179,10.905 9.325,11 9.5,11 C9.776,11 10,10.776 10,10.5 L10,4 C10,3.448 9.552,3 9,3"
																															id="Page-1"
																															fill="#FFFFFF"
																														></path>
																													</g>
																												</g>
																											</g>
																										</svg>
																									</MenuItem>
																									<MenuItem value={2}>
																										<svg
																											width="20px"
																											height="20px"
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
																												<g
																													id="Bug"
																													transform="translate(1.000000, 1.000000)"
																												>
																													<rect
																														id="Rectangle-36"
																														fill="#E5493A"
																														x="0"
																														y="0"
																														width="14"
																														height="14"
																														rx="2"
																													></rect>
																													<path
																														d="M10,7 C10,8.657 8.657,10 7,10 C5.343,10 4,8.657 4,7 C4,5.343 5.343,4 7,4 C8.657,4 10,5.343 10,7"
																														id="Fill-2"
																														fill="#FFFFFF"
																													></path>
																												</g>
																											</g>
																										</svg>
																									</MenuItem>
																								</Select>
																							</div>
																						</TableCell>
																						<TableCell
																							style={{ border: "none" }}
																						>
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
																										} else if (
																											event.key === "Escape"
																										) {
																											handleRemoveBacklog();
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
																{showCreateBacklogButton ? (
																	<Button
																		className="createIssueBtn"
																		onClick={handleCreateBacklog}
																	>
																		+ Create Issue
																	</Button>
																) : null}
															</Stack>
														</DndContext>
													</AccordionDetails>
												</Stack>
											</AccordionDetails>
										</Accordion>
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
									</Card>
								))}
								<Box>
									<Button
										variant="outlined"
										size="medium"
										sx={{ marginBottom: "10px" }}
										onClick={handleCreateSprint}
									>
										Create Sprint
									</Button>
								</Box>
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
												<Stack spacing={1}>
													<AccordionDetails>
														<DndContext
															modifiers={[restrictToVerticalAxis]}
															sensors={sensors}
															collisionDetection={closestCorners}
															onDragStart={handleOnDragStart}
															onDragEnd={(event) =>
																handleDragEnd(
																	event as {
																		active: { id: string };
																		over: { id: string };
																	}
																)
															}
														>
															<BacklogList backlogs={backlogs}></BacklogList>
															<DragOverlay dropAnimation={dropAnimation}>
																{!activeDragItemData && null}
																{
																	<div
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
																					<TableCell
																						style={{ border: "none" }}
																						sx={{ width: "50%" }}
																					>
																						<Link
																							className="hover-underlined"
																							color="inherit"
																							href=""
																						></Link>
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
																							<MenuItem value={0}>
																								epic
																							</MenuItem>
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
																							sx={{
																								"& fieldset": {},
																								"& .MuiSelect-select": {
																									overflow: "hidden",
																									textOverflow: "ellipsis",
																									whiteSpace: "nowrap",
																								},
																							}}
																						>
																							<MenuItem value={0}>
																								progress
																							</MenuItem>
																							<MenuItem value={1}>1</MenuItem>
																							<MenuItem value={2}>2</MenuItem>
																							<MenuItem value={3}>3</MenuItem>
																							<MenuItem value={4}>4</MenuItem>
																						</Select>
																					</TableCell>
																					<TableCell
																						style={{ border: "none" }}
																					></TableCell>
																				</TableRow>
																			</TableBody>
																		</Table>
																	</div>
																}
															</DragOverlay>
														</DndContext>
													</AccordionDetails>
												</Stack>
											</Accordion>
										</Typography>
									</Box>
								</Card>
							</DndContext>
						</Box>
					</Grid>
				</Grid>
			</div>
		</>
	);
}
