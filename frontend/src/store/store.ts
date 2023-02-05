import { configureStore } from "@reduxjs/toolkit";
import { house } from "./slices/houses/house.slice";

export const store = configureStore({
	reducer: {
		houses: house.reducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
