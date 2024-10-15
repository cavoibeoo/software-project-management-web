"use client";

import * as React from "react";
import { Card, Box, Typography } from "@mui/material";
import Image from "next/image";

const ProfileInformation: React.FC = () => {
	return (
		<>
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
						mb: "20px",
					}}
					className="text-black"
				>
					Profile Information
				</Typography>

				<Box>
					<Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
						<Typography
							component="span"
							className="text-body"
							sx={{ fontWeight: "normal" }}
						>
							User ID:
						</Typography>{" "}
						7001
					</Box>

					<Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
						<Typography
							component="span"
							className="text-body"
							sx={{ fontWeight: "normal" }}
						>
							Full Name:
						</Typography>{" "}
						Olivia John
					</Box>

					<Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
						<Typography
							component="span"
							className="text-body"
							sx={{ fontWeight: "normal" }}
						>
							Email:
						</Typography>{" "}
						olivia&#64;sine.com
					</Box>

					<Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
						<Typography
							component="span"
							className="text-body"
							sx={{ fontWeight: "normal" }}
						>
							Role:
						</Typography>{" "}
						Administrator
					</Box>

					<Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
						<Typography
							component="span"
							className="text-body"
							sx={{ fontWeight: "normal" }}
						>
							Location:
						</Typography>{" "}
						New York, USA
					</Box>

					<Box className="text-black" sx={{ fontWeight: "500", mt: "10px" }}>
						<Typography
							component="span"
							className="text-body"
							sx={{ fontWeight: "normal" }}
						>
							Join Date:
						</Typography>{" "}
						10 May 2022
					</Box>
				</Box>
			</Card>
		</>
	);
};

export default ProfileInformation;
