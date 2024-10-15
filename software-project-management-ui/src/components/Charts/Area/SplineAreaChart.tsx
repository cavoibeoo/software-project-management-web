"use client";

import React, { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Card, Box, Typography } from "@mui/material";

// Dynamically import react-apexcharts with Next.js dynamic import
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SplineAreaChart: React.FC = () => {
	// Chart
	const [isChartLoaded, setChartLoaded] = useState(false);

	useEffect(() => {
		setChartLoaded(true);
	}, []);

	const series = [
		{
			name: "sine",
			data: [31, 40, 28, 51, 42, 109, 100],
		},
		{
			name: "Social",
			data: [11, 32, 45, 32, 34, 52, 41],
		},
	];

	const options: ApexOptions = {
		chart: {
			toolbar: {
				show: true,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "smooth",
		},
		colors: ["#605DFF", "#0f79f3"],
		xaxis: {
			type: "datetime",
			categories: [
				"2018-09-19T00:00:00.000Z",
				"2018-09-19T01:30:00.000Z",
				"2018-09-19T02:30:00.000Z",
				"2018-09-19T03:30:00.000Z",
				"2018-09-19T04:30:00.000Z",
				"2018-09-19T05:30:00.000Z",
				"2018-09-19T06:30:00.000Z",
			],
			axisTicks: {
				show: false,
				color: "#ECEEF2",
			},
			axisBorder: {
				show: false,
				color: "#ECEEF2",
			},
			labels: {
				show: true,
				style: {
					colors: "#8695AA",
					fontSize: "12px",
				},
			},
		},
		tooltip: {
			x: {
				format: "dd/MM/yy HH:mm",
			},
		},
		yaxis: {
			tickAmount: 5,
			max: 110,
			min: 0,
			labels: {
				show: true,
				style: {
					colors: "#64748B",
					fontSize: "12px",
				},
			},
			axisBorder: {
				show: false,
				color: "#ECEEF2",
			},
			axisTicks: {
				show: false,
				color: "#ECEEF2",
			},
		},
		legend: {
			show: true,
			position: "top",
			fontSize: "12px",
			horizontalAlign: "left",
			itemMargin: {
				horizontal: 8,
				vertical: 0,
			},
			labels: {
				colors: "#64748B",
			},
			markers: {
				offsetX: -2,
				offsetY: -0.5,
			},
		},
		grid: {
			show: true,
			borderColor: "#ECEEF2",
		},
	};

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
					Spline Area Chart
				</Typography>

				<Box
					sx={{
						marginBottom: "-20px",
						marginLeft: "-10px",
					}}
				>
					{isChartLoaded && (
						<Chart
							options={options}
							series={series}
							type="area"
							height={355}
							width={"100%"}
						/>
					)}
				</Box>
			</Card>
		</>
	);
};

export default SplineAreaChart;
