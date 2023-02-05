// Redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { IHouse } from "../../../interfaces";

// Thunks
import { getHouses } from ".";

interface HouseState {
	houses: IHouse[];
	houseSelected: IHouse;
	isLoading: boolean;
}

const initialState: HouseState = {
	houses: [],
	houseSelected: {
		bathroomsNumber: 0,
		createdAt: "",
		floorsNumber: 0,
		houseId: 0,
		houseImages: [],
		name: "",
		price: 0,
		roomsNumber: 0,
		squareMeters: 0,
		updatedAt: ""
	},
	isLoading: true
};

export const house = createSlice({
	name: "house",
	initialState,
	reducers: {
		setHouses: (state, action: PayloadAction<IHouse[]>) => {
			state.isLoading = false;
			state.houses = action.payload;
		},
		setSelectedHouse: (state, action: PayloadAction<IHouse>) => {
			state.houseSelected = action.payload;
		},
		startLoadingHouses: state => {
			state.isLoading = true;
		}
	},
	extraReducers: builder => {
		builder.addCase(getHouses.fulfilled, (state, action) => {
			state.isLoading = false;
			state.houses = action.payload;
		});
	}
});

export const { setHouses, setSelectedHouse, startLoadingHouses } = house.actions;
