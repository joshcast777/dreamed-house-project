// Redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Thunks
import { getHouse, getHouses } from ".";

// Interfaces
import { IHouse } from "../../../interfaces";

// Own Interfaces
interface HouseState {
	houses: IHouse[];
	selectedHouse?: IHouse;
	isLoading: boolean;
	requestMessage: string;
}

// Global Consts
const initialState: HouseState = {
	houses: [],
	selectedHouse: undefined,
	isLoading: true,
	requestMessage: ""
};

export const house = createSlice({
	name: "house",
	initialState,
	reducers: {
		removeHouses: (state): void => {
			state.houses = [];
		},
		removeRequestMessage: (state): void => {
			state.requestMessage = "";
		},
		removeSelectedHouse: (state): void => {
			state.selectedHouse = undefined;
		},
		setHouses: (state, action: PayloadAction<IHouse[]>): void => {
			state.isLoading = false;
			state.houses = action.payload;
		},
		setSelectedHouse: (state, action: PayloadAction<string>): void => {
			state.isLoading = false;
			state.selectedHouse = state.houses.find((house: IHouse) => house.houseId === parseInt(action.payload));
		},
		startLoadingHouses: (state): void => {
			state.isLoading = true;
		}
	},
	extraReducers: builder => {
		builder.addCase(getHouse.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getHouse.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.selectedHouse = action.payload;

			state.isLoading = false;
		});
		builder.addCase(getHouses.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getHouses.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.houses = action.payload as IHouse[];

			state.isLoading = false;
		});
	}
});

export const { removeHouses, removeRequestMessage, removeSelectedHouse, setHouses, setSelectedHouse, startLoadingHouses } = house.actions;
