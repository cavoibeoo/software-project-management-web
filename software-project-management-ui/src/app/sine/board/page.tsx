"use client";
import * as React from "react";
import dynamic from "next/dynamic";

const Board = dynamic(() => import("./board/board"), { ssr: false });

export default function Page() {
	return (
		<>
			<Board />
		</>
	);
}
