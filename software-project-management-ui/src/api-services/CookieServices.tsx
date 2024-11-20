"use client";

import { useCookies } from "next-client-cookies";

export const useFetchCookie = () => {
	const cookies = useCookies();

	return cookies.get("accessToken");
};
