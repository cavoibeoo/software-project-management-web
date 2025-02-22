import axios2 from "@/utils/unauthAxios";
import { isAxiosError } from "axios";
import { toast } from "react-toastify";
// -----------------------Login Services-----------------------

export const loginGoogle = async () => {
    try {
        // window.location.href = `https://spm-server.vercel.app/api/auth/google`;
        window.location.href = `https://spm-server.vercel.app/api/auth/google`;
    } catch (error: any) {
        toast.error(error?.message);
        console.log(error);
    }
};

export const CheckCookieServices = async () => {
    try {
        const response = await axios2.get("/auth/is-login", {
            withCredentials: true,
        });
        if (response.data.isAuthenticated) {
            toast.success("You have already logged in!");
            window.location.href = "/your-work";
        } else {
            toast.success("Please login again!");
            window.location.href = "/authentication/sign-in/";
        }
    } catch (error) {
        window.location.href = "/authentication/sign-in/";
        toast.success("Access Has Expired!");
    }
};

export const FormLoginServices = async (email: any, password: any) => {
    try {
        await axios2.post("/auth/login", { email: email, password: password });
        toast.success("Successful signing in!");
        window.location.href = "/your-work";
    } catch (error: any) {
        toast.error(error?.response?.data?.message);
        console.log(error);
    }
};

export const GGLoginServices = async () => {
    try {
        window.location.href = "https://spm-server.vercel.app/api/auth/google";
    } catch (error) {
        console.log(error);
        toast.error("Login failed");
    }
};

export const LogoutServices = async () => {
    try {
        await axios2.get("/auth/logout", {
            withCredentials: true,
        });
        if (typeof window !== "undefined") {
            document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
            document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
        }

        window.location.href = "/authentication/logout/";
        toast.success("Sucessful logout!");
    } catch (error) {
        console.log(error);
    }
};

// -----------------------Register Services-----------------------

export const FormRegisterServices = async (name: any, email: any, password: any) => {
    try {
        const response = await axios2.post(
            "/auth/register",
            {
                name: name,
                email: email,
                password: password,
            },
            { withCredentials: true }
        );
        toast.success("Successful signing up please verify your email!");
        window.location.href = "/authentication/sign-in/";
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            toast.error(error.response.data.message);
            console.log(error);
        }
        return error;
    }
};
