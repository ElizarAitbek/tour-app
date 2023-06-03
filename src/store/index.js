import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./slices/auth-slice";
import { tourSlice } from "./slices/tour-slice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    tours: tourSlice.reducer,
  },
});
