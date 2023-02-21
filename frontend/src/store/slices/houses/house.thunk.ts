// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// Axios Instances
import { getHouseApi, getHousesApi } from "../../../api";
import { useFetch } from "../../../hooks";

// Interfaces
import { IHouse } from "../../../interfaces";

export const getHouse = createAsyncThunk("house/getHouse", async (houseId: string): Promise<string | IHouse> => await useFetch<IHouse>((): Promise<Response> => getHouseApi(houseId)));

export const getHouses = createAsyncThunk("house/getHouses", async (): Promise<string | IHouse[]> => await useFetch<IHouse[]>(getHousesApi));
