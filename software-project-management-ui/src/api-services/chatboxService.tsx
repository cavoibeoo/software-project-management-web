import axios from "axios";
import { toast } from "react-toastify";

const axios2 = axios.create({
    baseURL: "http://127.0.0.1:1234",
    headers: {
        "Content-Type": "application/json",
    },
});

export const callSine = async (data: any, prompt: any) => {
    try {
        let content = `This is my project data: ${JSON.stringify(data)} please answer the prompt briefly: ${prompt}, do not mentioned anything about the id`;
        console.log(content);
        const payload = {
            model: "meta-llama-3.1-8b-instruct",
            messages: [{ role: "user", content: content }],
            temperature: 0.75,
            max_tokens: 100,
            stream: false,
        };

        const response = await axios2.post(`/v1/chat/completions`, payload);
        return response.data.choices[0].message.content;
    } catch (error: any) {
        toast.error(error?.response?.data?.message || "Something went wrong");
        console.error(error);
    }
};
