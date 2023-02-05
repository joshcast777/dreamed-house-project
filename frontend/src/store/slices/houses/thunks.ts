// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// Axios Instances
import { houseApi } from "../../../api";

// Interfaces
import { IHouse } from "../../../interfaces";

export const getHouses = createAsyncThunk("house/getHouses", async (): Promise<IHouse[]> => {
	const { data } = await houseApi.get<IHouse[]>("");

	return data;
});
