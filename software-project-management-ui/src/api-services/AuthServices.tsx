import { authRequest } from "@/utils/request";
import axios from "axios";
import axios2 from "@/utils/axios";
import { toast } from "react-toastify";
import { getRefreshTokenFromCookie } from "./CookieServices";
import { ex } from "@fullcalendar/core/internal-common";
// -----------------------Login Services-----------------------

export const loginGoogle = async () => {
	try {
		// window.location.href = `https://spm-server.vercel.app/api/auth/google`;
		window.location.href = `http://localhost:3001/api/auth/google`;
	} catch (error: any) {
		toast.error(error?.message);
		console.log(error);
	}
};

export const CheckCookieServices = async () => {
	try {
		const response = await authRequest.get("/is-login", {
			withCredentials: true,
		});
		if (response.data.isAuthenticated) {
			window.location.href = "/your-work";
			toast.success("You have already logged in!");
		} else {
			window.location.href = "/authentication/sign-in/";
		}
	} catch (error) {
		window.location.href = "/authentication/sign-in/";
		toast.success("Access Has Expired!");
	}
};

export const FormLoginServices = async (email: any, password: any) => {
	try {
		await axios2.post(
			"/auth/login",
			{
				email: email,
				password: password,
			},
			{ withCredentials: true }
		);
		CheckCookieServices();
		toast.success("Sucessful signing in!");
		window.location.href = "/your-work/";
	} catch (error: any) {
		if (
			axios.isAxiosError(error) &&
			error.response &&
			error.response.status === 401
		) {
			toast.error("Your password not correct, please retry");
		} else {
			console.log(error);
		}
	}
};

export const GGLoginServices = async () => {
	try {
		window.location.href = "https://spm-server.vercel.app/api/auth/google";
		// const response = await authRequest.get("/google", {
		// 	withCredentials: true,
		// });
		// console.log(response.data);
		// window.location.href = "/your-work";
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			const statusCode = error.response.status;
			if (statusCode === 400) {
				toast.error("User not existed!");
			} else if (statusCode === 401) {
				toast.error("Invalid Password!");
			} else if (statusCode === 422) {
				toast.error("Please Input with correct form!");
			}
		} else {
			toast.error("Đăng Nhập Không Thành Công!");
		}
	}
};

export const LogoutServices = async () => {
	try {
		await axios2.get("/auth/logout", {
			withCredentials: true,
		});
		document.cookie =
			"accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
		document.cookie =
			"refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

		window.location.href = "/authentication/logout/";
		toast.success("Sucessful logout!");
	} catch (error) {
		console.log(error);
	}
};

export const handleTokenExpired = async (error: any) => {
	if (axios.isAxiosError(error) && error.response) {
		const statusCode = error.response.status;
		if (statusCode === 401) {
			await RefreshToken();
		}
	}
};

export const RefreshToken = async () => {
	try {
		await authRequest.get("/refresh", {
			withCredentials: true,
		});
	} catch (error) {
		document.cookie =
			"accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
		document.cookie =
			"refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
		toast.error("Please login again!");
		window.location.href = "/authentication/sign-in/";
	}
};

// -----------------------Register Services-----------------------

export const FormRegisterServices = async (
	name: any,
	email: any,
	password: any
) => {
	try {
		const response = await authRequest.post(
			"/register",
			{
				name: name,
				email: email,
				password: password,
			},
			{ withCredentials: true }
		);
		toast.success("Sucessful signing up!");
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			const statusCode = error.response.status;
			if (statusCode === 400) {
				toast.error("User not existed!");
			} else if (statusCode === 401) {
				toast.error("Invalid Password!");
			} else if (statusCode === 422) {
				toast.error("Please Input with correct form!");
			}
		} else {
			toast.error("Đăng Nhập Không Thành Công!");
		}
	}
};
