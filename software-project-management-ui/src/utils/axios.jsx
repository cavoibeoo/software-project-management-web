import axios from "axios";
import {
    getAccessTokenFromCookie,
    getRefreshTokenFromCookie,
} from "../api-services/CookieServices";

const BASE_URL = "http://localhost:3001/api";

const apiClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

// A flag to track ongoing refresh token requests
let isRefreshing = false;
// A queue to hold requests while the token is being refreshed
let failedRequestsQueue = [];

// Request Interceptor to Attach Access Token
apiClient.interceptors.request.use(
    async (config) => {
        const token = getAccessTokenFromCookie();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor to Handle Token Refresh
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // If token expired and we haven’t already retried
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (!isRefreshing) {
                isRefreshing = true;

                try {
                    // Refresh token and update cookies
                    const { data } = await axios.get(`${BASE_URL}/auth/refresh`, {
                        withCredentials: true,
                    });

                    // Update Authorization header with new token
                    originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

                    // Process the queue with the new token
                    failedRequestsQueue.forEach((req) => {
                        req.resolve(data.accessToken);
                    });
                    failedRequestsQueue = [];
                } catch (refreshError) {
                    // Redirect to login if refresh fails
                    failedRequestsQueue.forEach((req) => req.reject(refreshError));
                    failedRequestsQueue = [];
                    window.location.href = "/authentication/sign-in/";
                    return Promise.reject(refreshError);
                } finally {
                    isRefreshing = false;
                }
            }

            // Wait for the refresh to complete if already in progress
            return new Promise((resolve, reject) => {
                failedRequestsQueue.push({
                    resolve: (token) => {
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        resolve(apiClient(originalRequest));
                    },
                    reject: (err) => reject(err),
                });
            });
        }

        return Promise.reject(error);
    }
);

export default apiClient;
