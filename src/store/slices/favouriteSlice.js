import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
	name: "favourites",
	initialState: {
		name: "Sahil"
	}, // Usually --> Object/ Array/ Boolean
	reducers: {
		toggleFavourites(state, action) {
			state.name = action.payload;
		},
		removeFavourites(state) {

		},
		clearFavourites(state) {

		},
	}
});

export const { toggleFavourites, removeFavourites, clearFavourites } = favouriteSlice.actions; // update the state

export default favouriteSlice.reducer; // connect with store