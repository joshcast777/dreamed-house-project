// Redux
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Thunks
import { getFaucetTypes, getHouse, getHouses } from ".";

// Interfaces
import { IDoorType, IFaucetType, IFloorType, IHouse } from "../../../interfaces";
import { getDoorTypes, getFloorTypes } from "./house.thunk";

// Own Interfaces
interface HouseState {
	doorTypes: IDoorType[];
	faucetTypes: IFaucetType[];
	floorTypes: IFloorType[];
	houses: IHouse[];
	isLoading: boolean;
	requestMessage: string;
	selectedDoorType?: IDoorType;
	selectedFaucetType?: IFaucetType;
	selectedFloorType?: IFloorType;
	selectedHouse?: IHouse;
}

// Global Consts
const initialState: HouseState = {
	houses: [],
	selectedHouse: undefined,
	doorTypes: [],
	faucetTypes: [],
	floorTypes: [],
	selectedDoorType: undefined,
	selectedFaucetType: undefined,
	selectedFloorType: undefined,
	isLoading: true,
	requestMessage: ""
};

export const house = createSlice({
	name: "house",
	initialState,
	reducers: {
		removeDoorTypes: (state): void => {
			state.doorTypes = [];
		},
		removeFaucetTypes: (state): void => {
			state.faucetTypes = [];
		},
		removeFloorTypes: (state): void => {
			state.floorTypes = [];
		},
		removeHouses: (state): void => {
			state.houses = [];
		},
		removeRequestMessage: (state): void => {
			state.requestMessage = "";
		},
		removeSelectedDoorType: (state): void => {
			state.selectedDoorType = undefined;
		},
		removeSelectedFloorType: (state): void => {
			state.selectedFloorType = undefined;
		},
		removeSelectedFaucetType: (state): void => {
			state.selectedFaucetType = undefined;
		},
		removeSelectedHouse: (state): void => {
			state.selectedHouse = undefined;
		},
		setHouses: (state, action: PayloadAction<IHouse[]>): void => {
			state.isLoading = false;
			state.houses = action.payload;
		},
		setSelectedDoorType: (state, action: PayloadAction<IDoorType>): void => {
			state.selectedDoorType = state.doorTypes!.find((doorType: IDoorType) => doorType.doorTypeId === action.payload?.doorTypeId);
		},
		setSelectedFaucetType: (state, action: PayloadAction<IFaucetType>): void => {
			state.selectedFaucetType = state.faucetTypes!.find((faucetType: IFaucetType) => faucetType.faucetTypeId === action.payload?.faucetTypeId);
		},
		setSelectedFloorType: (state, action: PayloadAction<IFloorType>): void => {
			state.selectedFloorType = state.floorTypes!.find((floorType: IFloorType) => floorType.floorTypeId === action.payload?.floorTypeId);
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
		builder.addCase(getDoorTypes.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getDoorTypes.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.doorTypes = action.payload as IDoorType[];

			state.isLoading = false;
		});
		builder.addCase(getFaucetTypes.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getFaucetTypes.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.faucetTypes = action.payload as IFaucetType[];

			state.isLoading = false;
		});
		builder.addCase(getFloorTypes.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getFloorTypes.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.floorTypes = action.payload as IFloorType[];

			state.isLoading = false;
		});
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

export const { removeDoorTypes, removeFaucetTypes, removeFloorTypes, removeHouses, removeRequestMessage, removeSelectedDoorType, removeSelectedFloorType, removeSelectedFaucetType, removeSelectedHouse, setSelectedDoorType, setSelectedFaucetType, setSelectedFloorType, setHouses, setSelectedHouse, startLoadingHouses } = house.actions;
