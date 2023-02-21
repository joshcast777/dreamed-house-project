// Redux
import { configureStore } from "@reduxjs/toolkit";

// Slices
import { user } from "./slices/user";
import { houseFinish } from "./slices/houseFinishes";
import { house } from "./slices/houses";

export const store = configureStore({
	reducer: {
		houses: house.reducer,
		houseFinishes: houseFinish.reducer,
		user: user.reducer
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
