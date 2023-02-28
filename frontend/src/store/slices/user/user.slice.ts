// Redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Thunks
import { changePassword, deleteUser, getUser, signIn, signUp, updateUser } from ".";

// Interfaces
import { ISignInResponse, IUser } from "../../../interfaces";

// Own Interfaces
interface UserState {
	isLoading: boolean;
	requestMessage: string;
	token: string;
	userAuthenticated?: IUser;
}

// Global Consts
const initialState: UserState = {
	isLoading: false,
	requestMessage: "",
	token: "",
	userAuthenticated: undefined
};

export const user = createSlice({
	name: "user",
	initialState,
	reducers: {
		removeRequestMessage: (state): void => {
			state.requestMessage = "";
		},
		setUserAuthenticated: (state, action: PayloadAction<IUser>): void => {
			state.userAuthenticated = action.payload;
		},
		signOut: (state): void => {
			state.userAuthenticated = undefined;
			state.token = "";
		}
	},
	extraReducers: builder => {
		builder.addCase(changePassword.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(changePassword.fulfilled, (state, action): void => {
			if (action.payload.startsWith("Error:")) state.requestMessage = action.payload;
			else state.requestMessage = action.payload;

			state.isLoading = false;
		});
		builder.addCase(deleteUser.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(deleteUser.fulfilled, (state, action): void => {
			if (action.payload.startsWith("Error:")) state.requestMessage = action.payload;
			else state.userAuthenticated = undefined;

			state.isLoading = false;
		});
		builder.addCase(getUser.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(getUser.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload as string;
			else state.userAuthenticated = action.payload as IUser;

			state.isLoading = false;
		});
		builder.addCase(signIn.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(signIn.fulfilled, (state, action): void => {
			if (typeof action.payload === "string") state.requestMessage = action.payload as string;
			else {
				const { token, userAuthenticated }: ISignInResponse = action.payload as ISignInResponse;

				state.token = token;
				state.userAuthenticated = userAuthenticated;
			}

			state.isLoading = false;
		});
		builder.addCase(signUp.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(signUp.fulfilled, (state, action): void => {
			if (action.payload.startsWith("Error:")) state.requestMessage = action.payload;
			else state.requestMessage = action.payload;

			state.isLoading = false;
		});
		builder.addCase(updateUser.pending, (state): void => {
			state.isLoading = true;
		});
		builder.addCase(updateUser.fulfilled, (state, action): void => {
			if (action.payload.startsWith("Error:")) state.requestMessage = action.payload;
			else state.requestMessage = action.payload;

			state.isLoading = false;
		});
	}
});

export const { removeRequestMessage, setUserAuthenticated, signOut } = user.actions;
