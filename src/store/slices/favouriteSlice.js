import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",

  initialState: { // Usually --> Object/ Array/ Boolean
    items: JSON.parse(localStorage.getItem("eventsphere-favourites")) || [],
  },

  reducers: {
    toggleFavourite(state, action) {
      const event = action.payload
      const existingEvent = state.items.find((e) => (e.id || e._id) === (event.id || event._id));
      if (existingEvent) { // remove
        state.items = state.items.filter((e) => (e.id || e._id) !== (event.id || event._id));
      } else { // push
        state.items.push(event);
      }

      localStorage.setItem("eventsphere-favourites", JSON.stringify(state.items));
    },
    removeFavourite(state) { },
    clearFavourites(state) {
      state.items = [];
      localStorage.clear("eventsphere-favourites");
    },
  }
});

export const { toggleFavourite, removeFavourite, clearFavourites } = favouriteSlice.actions; // update the state

export default favouriteSlice.reducer; // connect with store