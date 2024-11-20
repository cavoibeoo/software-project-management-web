"use client";
import React, { useState } from "react";
import { Button, Input, LinearProgress, Paper, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { toast } from "react-toastify";
import { Backlog } from "./BackLog/Backlog";
import { SortableContext } from "@dnd-kit/sortable";

export const BacklogList: React.FC<{
	backlogs: {
		id: string;
		title: string;
		description: string;
	}[];
}> = ({ backlogs }) => {
	const [newbacklogs, setNewBacklogs] = React.useState<string[]>([]);

	const handleCreateBacklog = () => {
		setNewBacklogs((prev) => [...prev, `Backlog ${prev.length + 1}`]);
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

	const [loading, setLoading] = useState(false);

	const handleBacklogSubmit = () => {
		setLoading(true);
		setTimeout(() => {
			toast.success("Create Backlog Successful!");
			setLoading(false);
		}, 2000);
	};

	return (
		<Stack spacing={1}>
			<SortableContext items={backlogs}>
				{backlogs.map((backlog) => (
					<Backlog
						key={backlog.id}
						id={backlog.id}
						title={backlog.title}
						description={backlog.description}
					></Backlog>
				))}
			</SortableContext>
			{newbacklogs.map((newbacklog, index) => (
				<>
					<Item className="backlogItem" style={{ padding: "0px 0px 0px 0px" }}>
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
									<TableCell style={{ border: "none" }}></TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Item>
				</>
			))}
			<Button className="createIssueBtn" onClick={handleCreateBacklog}>
				+ Create Issue
			</Button>
		</Stack>
	);
};
