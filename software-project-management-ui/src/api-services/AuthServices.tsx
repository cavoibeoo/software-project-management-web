import { authRequest } from "@/utils/request";
import axios from "axios";
import { toast } from "react-toastify";

// -----------------------Login Services-----------------------

export const CheckCookieServices = async () => {
	try {
		const response = await authRequest.get("/is-login", {
			withCredentials: true,
		});
		if (response.data.isAuthenticated) {
			toast.success("You have already logged in!");
			window.location.href = "/your-work";
		} else {
			window.location.href = "/authentication/sign-in/";
		}
	} catch (error) {
		window.location.href = "/authentication/sign-in/";
	}
};

export const FormLoginServices = async (email: any, password: any) => {
	try {
		const response = await authRequest.post(
			"/login",
			{
				email: email,
				password: password,
			},
			{ withCredentials: true }
		);
		console.log(response.data);

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
		const response = await axios.get("http://localhost:3001/api/auth/logout", {
			withCredentials: true,
		});

		window.location.href = "/authentication/logout/";
		toast.success("Sucessful logout!");
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
		} else {
			toast.error("Logout Không Thành Công!");
		}
	}
};

export const getAccessToken = () => {
	const name = "accessToken=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookies = decodedCookie.split(";");
	for (let i = 0; i < cookies.length; i++) {
		let cookie = cookies[i];
		while (cookie.charAt(0) === " ") {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) === 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return "";
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
