import axios from "axios";
import { House } from "../interfaces/app.interfaces";

export const houseService = {
	getHouses: async function () {
		const { data } = await axios.get<House[]>(`${import.meta.env.VITE_BASE_URL}/house`);
		console.log(data);
		return data;
	}
};
