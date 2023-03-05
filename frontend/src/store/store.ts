// Redux
import { configureStore } from "@reduxjs/toolkit";

// Slices
import { user } from "./slices/users";
import { house } from "./slices/houses";
import { proforma } from "./slices/proformas";

export const store = configureStore({
	reducer: {
		houses: house.reducer,
		proforma: proforma.reducer,
		user: user.reducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
