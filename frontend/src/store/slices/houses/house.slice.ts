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
}

const initialState: HouseState = {
	houses: [],
	selectedHouse: undefined,
	isLoading: true
};

export const house = createSlice({
	name: "house",
	initialState,
	reducers: {
		removeSelectedHouse: state => {
			state.selectedHouse = undefined;
		},
		setHouses: (state, action: PayloadAction<IHouse[]>) => {
			state.isLoading = false;
			state.houses = action.payload;
		},
		setSelectedHouse: (state, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.selectedHouse = state.houses.find((house: IHouse) => house.houseId === parseInt(action.payload));
		},
		startLoadingHouses: state => {
			state.isLoading = true;
		}
	},
	extraReducers: builder => {
		builder.addCase(getHouses.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getHouses.fulfilled, (state, action) => {
			state.isLoading = false;
			state.houses = action.payload;
		});
		builder.addCase(getHouse.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getHouse.fulfilled, (state, action) => {
			state.isLoading = false;
			state.selectedHouse = action.payload;
		});
	}
});

export const { removeSelectedHouse, setHouses, setSelectedHouse, startLoadingHouses } = house.actions;
