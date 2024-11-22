import React, { useState } from "react";
import {
	Link,
	MenuItem,
	Select,
	Paper,
	styled,
	SelectChangeEvent,
	Box,
	Button,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import AssignMemberDialog from "../../Dialogs/AssignMemberDialog/AssignMemberDialog";
import { toast } from "react-toastify";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./Backlog.css";
import CheckBox from "@mui/icons-material/CheckBox";
import { Height, Opacity } from "@mui/icons-material";
import IssueDetailDialog from "../../Dialogs/IssueDetailDialog/IssueDetailDialog";

export const Backlog: React.FC<{
	id: string;
	title: string;
	description: string;
}> = ({ id, title, description }) => {
	const [backlogs, setBacklogs] = React.useState<string[]>([]);

	const {
		attributes,
		listeners,
		setNodeRef,
		transform,
		transition,
		isDragging,
	} = useSortable({ id });

	const dndKitColumnStyles = {
		transition,
		transform: CSS.Transform.toString(transform),
		heigh: "100%",
		opacity: isDragging ? 0.3 : undefined,
	};

	const handleCreateBacklog = () => {
		setBacklogs((prev) => [...prev, `Backlog ${prev.length + 1}`]);
	};

	const [loading, setLoading] = useState(false);

	const handleBacklogSubmit = () => {
		setLoading(true);
		setTimeout(() => {
			toast.success("Create Backlog Successful!");
			setLoading(false);
		}, 2000);
	};

	const [epicValue, setEpicValue] = useState<string>("0");
	const [progressValue, setProgressValue] = useState<string>("0");

	const handleEpicValueChange = (event: SelectChangeEvent) => {
		setEpicValue(event.target.value as string);
	};
	const handleProgressValueChange = (event: SelectChangeEvent) => {
		setProgressValue(event.target.value as string);
	};

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
	return (
		<>
			<Box
				ref={setNodeRef}
				{...attributes}
				{...listeners}
				className="backlog"
				style={dndKitColumnStyles}
			>
				<Box>
					<div className="backlogItem" style={{ padding: "0px 0px 0px 0px" }}>
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
																<path d="M2,5 L6,0" id="Stroke-1"></path>
																<path d="M2,5 L0,3" id="Stroke-3"></path>
															</g>
														</g>
													</g>
												</g>
											</svg>
											{title}
										</div>
									</TableCell>
									<TableCell style={{ border: "none" }} sx={{ width: "50%" }}>
										<IssueDetailDialog description={description} />
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
					</div>
				</Box>
			</Box>
		</>
	);
};
