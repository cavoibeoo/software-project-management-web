import { authRequest, NextRequest } from "@/utils/request";
import axios from "axios";
import { toast } from "react-toastify";

// -----------------------Login Services-----------------------

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
		await authRequest.post(
			"/login",
			{
				email: email,
				password: password,
			},
			{ withCredentials: true }
		);
		window.location.href = "/your-work";
		toast.success("Sucessful signing in!");
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

export const GGLoginServices = async () => {
	try {
		window.location.href = "localhost:3000/api/auth/google";
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
		await authRequest.get("/logout", {
			withCredentials: true,
		});
		document.cookie =
			"accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
		document.cookie =
			"refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";

		window.location.href = "/authentication/logout/";
		toast.success("Sucessful logout!");
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
		} else {
			toast.error("Logout Không Thành Công!");
		}
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
		console.log(response.data);
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
