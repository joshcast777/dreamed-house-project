// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// Axios Instances
import { houseApi } from "../../../api";

// Interfaces
import { IHouseFinish } from "../../../interfaces";

const endPointName = "/HouseFinish";

export const getHouseFinishes = createAsyncThunk("house/getHouseFinishes", async (): Promise<IHouseFinish[]> => {
	const { data } = await houseApi.get<IHouseFinish[]>(endPointName);

	return data;
});
