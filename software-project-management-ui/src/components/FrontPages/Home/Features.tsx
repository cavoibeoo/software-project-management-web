"use client";

import * as React from "react";
import { Box, TextField } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Features: React.FC = () => {
	return (
		<>
			<Box
				className="fp-banner-area"
				sx={{
					mb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "150px" },
				}}
			>
				<Box
					sx={{
						maxWidth: {
							xs: "100%",
							sm: "720px",
							md: "960px",
							lg: "1140px",
							xl: "1320px",
						},
						mx: "auto",
						px: "12px",
						position: "relative",
						zIndex: "1",
					}}
				>
					<Box
						className="fp-banner-content"
						sx={{
							mx: "auto",
							textAlign: "center",
						}}
					>
						<h1>Connect every team, task, and project together with Sine</h1>
						<TextField
							label="Enter work email"
							variant="filled"
							id="email"
							name="email"
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
								paddingRight: "10px",
							}}
						/>
						<Link href="/your-work/" className="fp-banner-button">
							<i className="material-symbols-outlined">collapse_content</i>
							Get Sine free
						</Link>
					</Box>

					<div className="banner-image text-center">
						<Image
							src="/images/background.png"
							alt="dashboard-image"
							width={848}
							height={585}
						/>
					</div>

					{/* Shape Images */}
					<div className="shape1">
						<Image
							src="/images/front-pages/shape3.png"
							alt="shape3"
							width={685}
							height={685}
						/>
					</div>
					<div className="shape2">
						<Image
							src="/images/front-pages/shape2.png"
							alt="shape2"
							width={447}
							height={453}
						/>
					</div>
					<div className="shape3">
						<Image
							src="/images/front-pages/shape4.png"
							alt="shape4"
							width={171}
							height={171}
						/>
					</div>
					<div className="shape4">
						<Image
							src="/images/front-pages/shape5.png"
							alt="shape5"
							width={658}
							height={656}
						/>
					</div>
				</Box>
			</Box>
		</>
	);
};

export default Features;
