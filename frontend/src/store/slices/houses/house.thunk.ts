// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// API's
import { getDoorTypesApi, getFaucetTypesApi, getFloorTypesApi, getHouseApi, getHousesApi } from "../../../api";

// Custom Hooks
import { useFetch } from "../../../hooks";

// Interfaces
import { IDoorType, IFaucetType, IFloorType, IHouse } from "../../../interfaces";

export const getDoorTypes = createAsyncThunk("house/getDoorTypes", async (): Promise<string | IDoorType[]> => await useFetch<IDoorType[]>(getDoorTypesApi));

export const getFaucetTypes = createAsyncThunk("house/getFaucetTypes", async (): Promise<string | IFaucetType[]> => await useFetch<IFaucetType[]>(getFaucetTypesApi));

export const getFloorTypes = createAsyncThunk("house/getFloorTypes", async (): Promise<string | IFloorType[]> => await useFetch<IFloorType[]>(getFloorTypesApi));

export const getHouse = createAsyncThunk("house/getHouse", async (houseId: number): Promise<string | IHouse> => await useFetch<IHouse>((): Promise<Response> => getHouseApi(houseId)));

export const getHouses = createAsyncThunk("house/getHouses", async (): Promise<string | IHouse[]> => await useFetch<IHouse[]>(getHousesApi));
