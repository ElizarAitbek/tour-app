import { createSlice } from "@reduxjs/toolkit";

export const tourSlice = createSlice({
  name: "newTour",
  initialState: {
    tours: []
  },
  reducers: {
    setTour(state, action) {
      state.tours.push(action.payload);
    },
    deleteTour(state, action) {
      const tourId = action.payload;
      const tourIndex = state.tours.findIndex((tour) => tour.id === tourId);
      state.tours.splice(tourIndex, 1);
    },
    updateTour(state, action) {
      const tourId = action.payload.id;
      const tourIndex = state.tours.findIndex((tour) => tour.id === tourId);
      state.tours[tourIndex] = action.payload;
    }
  }
});

export const { setTour, deleteTour, updateTour } = tourSlice.actions;
