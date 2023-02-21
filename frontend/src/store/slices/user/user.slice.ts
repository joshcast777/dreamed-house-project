// Redux
import { createSlice } from "@reduxjs/toolkit";

// Thunks
import { getUserByEmail, signIn, signUp } from ".";

// Interfaces
import { ISignInResponse, IUser, IUserAuthenticated } from "../../../interfaces";

// Own Interfaces
interface UserState {
	isLoading: boolean;
	requestMessage: string;
	userAuthenticated?: IUserAuthenticated;
}

// Global Consts
const initialState: UserState = {
	isLoading: false,
	requestMessage: "",
	userAuthenticated: undefined
};

export const user = createSlice({
	name: "user",
	initialState,
	reducers: {
		removeRequestMessage: state => {
			state.requestMessage = "";
		}
	},
	extraReducers: builder => {
		builder.addCase(getUserByEmail.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(getUserByEmail.fulfilled, (state, action) => {
			console.log(action.payload);
		});
		builder.addCase(signIn.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(signIn.fulfilled, (state, action) => {
			if (typeof action.payload === "string") state.requestMessage = action.payload as string;
			else {
				const { token, userAuthenticated }: ISignInResponse = action.payload as ISignInResponse;

				localStorage.setItem("token", token);
				localStorage.setItem("email", userAuthenticated.email);

				state.userAuthenticated = userAuthenticated;
			}

			state.isLoading = false;
		});
		builder.addCase(signUp.pending, state => {
			state.isLoading = true;
		});
		builder.addCase(signUp.fulfilled, (state, action) => {
			if (action.payload.startsWith("Error:")) state.requestMessage = action.payload;
			else state.requestMessage = action.payload;

			state.isLoading = false;
		});
	}
});

export const { removeRequestMessage } = user.actions;
