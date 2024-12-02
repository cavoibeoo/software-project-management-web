"use client";
import dynamic from "next/dynamic";

const Backlog = dynamic(() => import("./backlog/backlog"), { ssr: false });

export default function Page() {
	return (
		<>
			<Backlog />
		</>
	);
}
