import * as React from "react";
import NextLink from "next/link";
import ToDoList from "@/components/Apps/ToDoList";
import Link from "next/link";
import ImgMediaCard from "@/components/ImgMediaCard/ImgMediaCard";

export default function Page() {
	return (
		<>
			<Link href="/sine/timeline/">
				<div className="breadcrumb-card">
					<h2>Trashs</h2>
				</div>
				<h3>Project</h3>
				<ImgMediaCard />
				<div className="breadcrumb-card" style={{ marginTop: "60px" }}></div>
			</Link>
		</>
	);
}
