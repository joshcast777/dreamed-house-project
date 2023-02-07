import { configureStore } from "@reduxjs/toolkit";
import { houseFinish } from "./slices/houseFinishes";
import { house } from "./slices/houses";

export const store = configureStore({
	reducer: {
		houses: house.reducer,
		houseFinishes: houseFinish.reducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
