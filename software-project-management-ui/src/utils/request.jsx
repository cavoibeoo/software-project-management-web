import axios from "axios";

export const authRequest = axios.create({
	baseURL: "http://localhost:3001/api/auth",
});
export const NextRequest = axios.create({
	baseURL: "http://localhost:3000",
});
