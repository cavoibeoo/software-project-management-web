import * as React from "react";
import NextLink from "next/link";
import ToDoList from "@/components/Apps/ToDoList";
import Link from "next/link";
import ImgMediaCard from "@/components/ImgMediaCard/ImgMediaCard";
import EnhancedTable from "./component/table";
import { Typography, Breadcrumbs, Button } from "@mui/material";
import { Chatbot } from "@/components/Chatbot";
import ChatContent from "@/components/Apps/Chat/ChatContent";

export default function Page() {
	return (
		<>
			<Breadcrumbs separator="›" aria-label="breadcrumb">
				<Link className="hover-underlined breadcrumb-link" href="/your-work/">
					Projects
				</Link>
				<Link className="breadcrumb-link" href="#">
					Your Works
				</Link>
			</Breadcrumbs>

			<h2>Project</h2>
			<EnhancedTable />
			{/* <Link href="/sine/timeline/">
				<ImgMediaCard />

				<div className="breadcrumb-card" style={{ marginTop: "60px" }}></div>
				<h3>Trash</h3>
				<ImgMediaCard />
			</Link> */}
			<Chatbot />
		</>
	);
}
