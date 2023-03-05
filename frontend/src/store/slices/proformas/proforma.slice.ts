import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createProforma, deleteProforma, getProformas, updateProforma } from ".";
import { IProforma } from "../../../interfaces";

// Own Interfaces
interface ProformaState {
	isLoading: boolean;
	proformas: IProforma[];
	requestMessage: string;
	selectedProforma?: IProforma;
}

// Global Consts
const initialState: ProformaState = {
	isLoading: false,
	requestMessage: "",
	proformas: [],
	selectedProforma: undefined
};

export const proforma = createSlice({
	name: "proforma",
	initialState,
	reducers: {
		removeProformas: (state): void => {
			state.proformas = [];
		},
		removeRequestMessage: (state): void => {
			state.requestMessage = "";
		},
		setSelectedProforma: (state, action: PayloadAction<IProforma>): void => {
			state.selectedProforma = action.payload;
		}
	},
	extraReducers: builder => {
		builder.addCase(deleteProforma.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(deleteProforma.fulfilled, (state, action): void => {
			state.requestMessage = action.payload;

			state.isLoading = false;
		});
		builder.addCase(getProformas.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getProformas.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload;
			else state.proformas = action.payload as IProforma[];

			state.isLoading = false;
		});
		builder.addCase(createProforma.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(createProforma.fulfilled, (state, action): void => {
			state.requestMessage = action.payload;

			state.isLoading = false;
		});
		builder.addCase(updateProforma.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(updateProforma.fulfilled, (state, action): void => {
			state.requestMessage = action.payload;

			state.isLoading = false;
		});
	}
});

export const { setSelectedProforma, removeProformas, removeRequestMessage } = proforma.actions;
