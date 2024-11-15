import * as React from "react";

import SignInForm from "@/components/Authentication/SignInForm";
import { cookies } from "next/headers";
export default async function Page() {
	const cookieStore = cookies();
	const theme = cookieStore.get("theme");
	return (
		<>
			<SignInForm />
		</>
	);
}
