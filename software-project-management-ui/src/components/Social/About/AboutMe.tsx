"use client";

import * as React from "react";
import { Card, Typography, Box } from "@mui/material";
import styles from "@/components/Profile/AboutMe/AboutMe.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const AboutMe: React.FC<{ myInfo: any }> = ({ myInfo }) => {
	return (
		<>
			{/* Post #1 */}
			<Card
				sx={{
					boxShadow: "none",
					borderRadius: "7px",
					mb: "25px",
					padding: { xs: "18px", sm: "20px", lg: "25px" },
				}}
				className="rmui-card"
			>
				<Typography
					variant="h3"
					sx={{
						fontSize: { xs: "16px", md: "18px" },
						fontWeight: 700,
						mb: "25px",
						pb: "15px",
					}}
					className="text-black border-bottom"
				>
					About Me
				</Typography>

				<Box className={styles.aboutMeContent}>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									Name
								</TableCell>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									<strong>{myInfo.name}</strong>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									Email
								</TableCell>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									<strong>{myInfo.email}</strong>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									Create Date
								</TableCell>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									<strong>
										{new Date(myInfo.createDate).toLocaleDateString()}
									</strong>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									Department
								</TableCell>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									<strong>
										{myInfo.department ? myInfo.department : "N/A"}
									</strong>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									Job Title
								</TableCell>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									<strong>{myInfo.jobTitle ? myInfo.jobTitle : "N/A"}</strong>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									Organization
								</TableCell>
								<TableCell
									sx={{
										padding: "10px",
										textAlign: "left",
										justifyContent: "center",
									}}
								>
									<strong>
										{myInfo.organization ? myInfo.organization : "N/A"}
									</strong>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Box>
			</Card>
		</>
	);
};

export default AboutMe;
