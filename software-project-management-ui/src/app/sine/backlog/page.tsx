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
	Link,
	Menu,
	MenuItem,
	Tooltip,
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
} from "@dnd-kit/core";
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import { arrayMove } from "@dnd-kit/sortable";
import ExampleDND from "../drag&drop/page";
import "../drag&drop/component/Column/Column.css";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

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

	const [isEpicVisible, setIsEpicVisible] = React.useState(true);
	const [expanded, setExpanded] = React.useState<string | string[]>([]);
	const [sprints, setSprints] = React.useState<string[]>([]);

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
												<BacklogList backlogs={backlogs}></BacklogList>
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
												<BacklogList backlogs={backlogs}></BacklogList>
											</DndContext>
										</AccordionDetails>
									</Accordion>
								</Typography>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</div>
		</>
	);
}
