"use client";
import * as React from "react";
import dynamic from "next/dynamic";

const Workflows = dynamic(() => import("./Workflows/Workflows"), {
	ssr: false,
});

export default function Page() {
	return (
		<>
			<Workflows />
		</>
	);
}
