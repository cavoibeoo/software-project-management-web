export const getAccessTokenFromCookie = () => {
	if (typeof window !== "undefined") {
		return document.cookie
			.split("; ")
			.find((row) => row.startsWith("accessToken="))
			?.split("=")[1];
	}
	return null;
};

export const getRefreshTokenFromCookie = () => {
	if (typeof window !== "undefined") {
		return document.cookie
			.split("; ")
			.find((row) => row.startsWith("refreshToken="))
			?.split("=")[1];
	}
	return null;
};
