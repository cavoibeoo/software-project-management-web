export const getTokenFromCookie = () => {
	return document.cookie
		.split("; ")
		.find((row) => row.startsWith("accessToken="))
		?.split("=")[1];
};
