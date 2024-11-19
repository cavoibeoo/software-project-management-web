import axios from "axios";

export const loginRequest = axios.create({
	login_Base_URL: "localhost:3001/",
});
