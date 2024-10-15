"use client";

import React from "react";
import Image from "next/image";
import { Card, Box, Typography } from "@mui/material";

const CourseInstructor: React.FC = () => {
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
						mb: "25px",
					}}
					className="text-black"
				>
					Course Instructor
				</Typography>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "15px",
					}}
				>
					<Box>
						<Image
							src="/images/users/user7.jpg"
							className="rounded-circle"
							alt="user-image"
							width={100}
							height={100}
						/>
					</Box>
					<Box>
						<Typography fontWeight={500} fontSize="17px" className="text-black">
							Aliva Cohen
						</Typography>
						<Typography fontSize="13px">aliva@sine.com</Typography>
					</Box>
				</Box>

				<Box>
					<Typography
						variant="h6"
						className="text-black"
						fontWeight={500}
						fontSize="14px"
						mt="20px !important"
						mb="6px"
					>
						Course Description
					</Typography>
					<Typography>
						This course is designed for beginners who want to learn the
						fundamentals of the Python programming language. The course covers
						basic syntax, data types, control structures, and an introduction to
						object-oriented programming. Participants will have hands-on coding
						exercises to reinforce their learning.
					</Typography>

					<Typography
						variant="h6"
						className="text-black"
						fontWeight={500}
						fontSize="14px"
						mt="20px !important"
						mb="6px"
					>
						Course Schedule
					</Typography>
					<Typography>
						Start Date: 01 August 2024
						<br />
						End Date: 30 December 2024
					</Typography>

					<Typography
						variant="h6"
						className="text-black"
						fontWeight={500}
						fontSize="14px"
						mt="20px !important"
						mb="6px"
					>
						Status
					</Typography>
					<Typography>
						The course is currently in progress. Students are actively engaged
						in the learning materials, and the instructor is providing guidance
						and support.
					</Typography>
				</Box>
			</Card>
		</>
	);
};

export default CourseInstructor;
