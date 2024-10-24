import * as React from "react";
import NextLink from "next/link";
import ToDoList from "@/components/Apps/ToDoList";
import Link from "next/link";
import ImgMediaCard from "@/components/ImgMediaCard/ImgMediaCard";
import EnhancedTable from "./component/table";

export default function Page() {
	return (
		<>
			<div className="breadcrumb-card">
				<h2>Your Works</h2>
			</div>
			<h3>Project</h3>
			<EnhancedTable />
			{/* <Link href="/sine/timeline/">
				<ImgMediaCard />

				<div className="breadcrumb-card" style={{ marginTop: "60px" }}></div>
				<h3>Trash</h3>
				<ImgMediaCard />
			</Link> */}
		</>
	);
}
