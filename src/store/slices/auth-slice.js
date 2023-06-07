import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    userEmail: "",
    role: ""
  },
  reducers: {
    setUser: (state, action) => {
      const userInformation = action.payload;
      state.userEmail = userInformation;
      if (userInformation.includes("superadmin")) {
        state.role = "superadmin";
      } else if (userInformation.includes("admin")) {
        state.role = "admin";
        console.log(state.role);
      } else {
        state.role = "user";
      }
    }
  }
});

export const { setUser } = AuthSlice.actions;
