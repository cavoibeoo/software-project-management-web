import axios2 from "@/utils/axios";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
// -----------------------Login Services-----------------------

export const sendOtp = async (email: string) => {
	try {
		await axios2.post("/auth/forgot-password", { email: email });
		toast.success("OTP sent successfully!");
	} catch (error: any) {
		toast.error(error?.message);
		console.log(error);
	}
};

export const verifyOtp = async (email: string, otp: string) => {
	try {
		await axios2.post(`/auth/verify-otp?email=${email}`, { otp: otp });
		toast.success("OTP verified successfully!");
		localStorage.setItem("email", email);
		localStorage.setItem("otp", otp);
		window.location.href = "/authentication/reset-password/";
	} catch (error: any) {
		if (error?.response?.status === 400) {
			toast.error("OTP not correct, please retry");
		} else {
			toast.error(error?.message);
		}
		console.log(error);
	}
};

export const resetPassword = async (
	email: string,
	password: string,
	confirmPassword: string,
	otp: string
) => {
	try {
		await axios2.post("/auth/change-pw-otp?email=" + email + "&otp=" + otp, {
			password: password,
			confirmPassword: confirmPassword,
		});
		toast.success("Password reset successfully!");
		window.location.href = "/authentication/sign-in/";
	} catch (error: any) {
		if (error?.response?.status === 400) {
			toast.error("Password not correct, please retry");
		} else if (error?.response?.status === 422) {
			toast.error("Password must 6 characters and include special characters");
		} else if (error?.response?.status === 408) {
			toast.error("This OTP has expired, please retry");
		} else {
			toast.error(error?.message);
		}
		console.log(error);
	}
};
