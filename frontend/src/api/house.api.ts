import axios, { AxiosInstance } from "axios";

export const house: AxiosInstance = axios.create({
	baseURL: `${import.meta.env.VITE_BASE_URL}/house`
});
