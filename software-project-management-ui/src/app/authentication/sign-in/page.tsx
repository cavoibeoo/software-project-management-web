import * as React from "react";

import SignInForm from "@/components/Authentication/SignInForm";
import { cookies } from "next/headers";
export default async function Page() {
	return (
		<>
			<SignInForm />
		</>
	);
}
