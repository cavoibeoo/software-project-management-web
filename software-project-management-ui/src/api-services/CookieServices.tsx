export const getAccessTokenFromCookie = () => {
	return document.cookie
		.split("; ")
		.find((row) => row.startsWith("accessToken="))
		?.split("=")[1];
};

export const getRefreshTokenFromCookie = () => {
	return document.cookie
		.split("; ")
		.find((row) => row.startsWith("refreshToken="))
		?.split("=")[1];
};
