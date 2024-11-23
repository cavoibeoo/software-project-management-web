import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { getAccessTokenFromCookie } from "./CookieServices";
import { handleTokenExpired, RefreshToken } from "./AuthServices";

// -----------------------------------Projects-----------------------------------

interface User {
    avatar: string;
    name: string;
    email: string;
    // Add other fields as needed
}

export function useFetchUser() {
    const [user, setUser] = useState<User | null>(null); // Update state type to User or null

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // await RefreshToken();
                const response = await axios.get("http://localhost:3001/api/user/me", {
                    headers: {
                        Authorization: `Bearer ${getAccessTokenFromCookie()}`,
                    },
                    withCredentials: true,
                });
                setUser(response.data);
            } catch (error) {
                await handleTokenExpired(error);
            }
        };

        fetchUser();
    }, []);

    return user;
}
