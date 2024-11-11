import * as React from "react";
import { cookies } from "next/headers";

export default async function MeProfile() {
	const cookieStore = cookies();
	const sessionToken = cookieStore.get("sessionToken");
	console.log(sessionToken);
	return (
		<>
			<div className="breadcrumb-card">
				<h2>Your Works</h2>
			</div>
			<h3>Project</h3>
		</>
	);
}
