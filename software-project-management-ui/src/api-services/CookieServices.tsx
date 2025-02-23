import unauthAxios from "../utils/unauthAxios.jsx";

export const getAccessTokenFromCookie = async () => {
    let response = await unauthAxios.get("/auth/is-login", { withCredentials: true });
    return response.data.isAuthenticated ? response.data.accessToken : null;

    // if (typeof window !== "undefined") {
    //     return document.cookie
    //         .split("; ")
    //         .find((row) => row.startsWith("accessToken="))
    //         ?.split("=")[1];
    // }
    // return null;
};

export const getRefreshTokenFromCookie = async () => {
    let response = await unauthAxios.get("/auth/is-login", { withCredentials: true });
    return response.data.isAuthenticated ? response.data.refreshToken : null;

    // if (typeof window !== "undefined") {
    //     return document.cookie
    //         .split("; ")
    //         .find((row) => row.startsWith("refreshToken="))
    //         ?.split("=")[1];
    // }
    // return null;
};
