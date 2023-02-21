// Redux
import { createAsyncThunk } from "@reduxjs/toolkit";

// API's
import { getHouseFinishesApi } from "../../../api";

// Custom Hooks
import { useFetch } from "../../../hooks";

// Interfaces
import { IHouseFinish } from "../../../interfaces";

export const getHouseFinishes = createAsyncThunk("house/getHouseFinishes", async (): Promise<string | IHouseFinish[]> => await useFetch<IHouseFinish[]>(getHouseFinishesApi));
