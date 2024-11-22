import * as React from "react";
import NextLink from "next/link";
import ToDoList from "@/components/Apps/ToDoList";
import { Breadcrumbs, Typography, Link } from "@mui/material";

export default function Page() {
	const breadcrumbs = [
		<Link
			className="hover-underlined"
			key="1"
			color="inherit"
			href="/your-work/"
		>
			Projects
		</Link>,
		<Link
			className="hover-underlined"
			key="2"
			color="inherit"
			href="/sine/board/"
		>
			Sine_SPM
		</Link>,
		<Typography key="3" color="text.primary">
			Board
		</Typography>,
	];
	return (
		<>
			<div style={{ minHeight: "78vh" }}>
				<Breadcrumbs separator="›" aria-label="breadcrumb">
					{breadcrumbs}
				</Breadcrumbs>
				<div className="breadcrumb-card"></div>
			</div>
		</>
	);
}
