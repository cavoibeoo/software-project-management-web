"use client";

import React from "react";
import { Card, Box, Typography } from "@mui/material";

const DeliveryDetails: React.FC = () => {
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
					Delivery Details
				</Typography>

				<Box>
					<Box mt="8px">
						<span className="text-black">XYZ Delivery</span>
					</Box>

					<Box mt="8px">
						<span className="text-black">Order ID:</span> XXXXXX1004
					</Box>

					<Box mt="8px">
						<span className="text-black">Payment Method:</span> Master Card
					</Box>

					<Box mt="8px">
						<span className="text-black">Email:</span> example@sine.com
					</Box>
				</Box>
			</Card>
		</>
	);
};

export default DeliveryDetails;
