// Redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Thunks
import { getHouseFinishes } from ".";

// Interfaces
import { IHouseFinish } from "../../../interfaces";

// Own Interfaces
interface HouseFinishState {
	floorFinishes: IHouseFinish[];
	faucetFinishes: IHouseFinish[];
	doorFinishes: IHouseFinish[];
	selectedHouseFinishes: IHouseFinish[];
	isLoading: boolean;
}

// Gloabal Consts
const initialState: HouseFinishState = {
	floorFinishes: [],
	doorFinishes: [],
	faucetFinishes: [],
	selectedHouseFinishes: [],
	isLoading: true
};

export const houseFinish = createSlice({
	name: "houseFinish",
	initialState,
	reducers: {
		removeHouseFinishes: state => {
			state.floorFinishes = [];
			state.faucetFinishes = [];
			state.doorFinishes = [];
			state.selectedHouseFinishes = [];
		},
		setSelectedHouseFinishes: (state, action: PayloadAction<{ index: number; houseFinish: IHouseFinish }>) => {
			state.selectedHouseFinishes[action.payload.index] = action.payload.houseFinish;
		},
		startLoadingHouseFinishes: state => {
			state.isLoading = true;
		}
	},
	extraReducers: builder => {
		builder.addCase(getHouseFinishes.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getHouseFinishes.fulfilled, (state, action) => {
			state.isLoading = false;
			state.floorFinishes = (action.payload as IHouseFinish[]).filter((houseFinish: IHouseFinish): boolean => houseFinish.typeFinish === "FLOOR");
			state.faucetFinishes = (action.payload as IHouseFinish[]).filter((houseFinish: IHouseFinish): boolean => houseFinish.typeFinish === "FAUCET");
			state.doorFinishes = (action.payload as IHouseFinish[]).filter((houseFinish: IHouseFinish): boolean => houseFinish.typeFinish === "DOOR");
			state.selectedHouseFinishes = [state.floorFinishes[0], state.faucetFinishes[0], state.doorFinishes[0]];
		});
	}
});

export const { removeHouseFinishes, setSelectedHouseFinishes, startLoadingHouseFinishes } = houseFinish.actions;
