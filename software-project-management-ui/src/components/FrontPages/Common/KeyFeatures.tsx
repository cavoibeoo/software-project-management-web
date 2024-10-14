"use client";

import * as React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Image from "next/image";

const KeyFeatures: React.FC = () => {
	return (
		<>
			<Box
				sx={{
					position: "relative",
					zIndex: "1",
					pb: { xs: "60px", sm: "60px", md: "80px", lg: "100px", xl: "120px" },
				}}
			>
				<Box
					sx={{
						maxWidth: {
							xs: "100%",
							sm: "700px",
							md: "720px",
							lg: "1140px",
							xl: "1320px",
						},
						mx: "auto",
						px: "12px",
					}}
				>
					<Box className="section-title text-center">
						<div className="sub-title">
							<span className="text-purple">Features</span>
						</div>
						<Typography
							variant="h2"
							sx={{
								fontSize: { xs: "24px", md: "28px", lg: "34px", xl: "36px" },
							}}
						>
							Discover the features that make Sine so easy to use
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default KeyFeatures;
