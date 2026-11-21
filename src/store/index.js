import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./slices/favouriteSlice";
import filterReducer from "./slices/filterSlice";

export const store = configureStore({
	reducer: {
		favourites: favouriteReducer,
		filters: filterReducer
	},
});