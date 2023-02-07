// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// Axios Instances
import { houseApi } from "../../../api";

// Interfaces
import { IHouse } from "../../../interfaces";

const endPointName = "/House";

export const getHouses = createAsyncThunk("house/getHouses", async (): Promise<IHouse[]> => {
	const { data } = await houseApi.get<IHouse[]>(endPointName);

	return data;
});

export const getHouse = createAsyncThunk("house/getHouse", async (houseId: string): Promise<IHouse> => {
	const { data } = await houseApi.get<IHouse>(`${endPointName}/${houseId}`);

	return data;
});
