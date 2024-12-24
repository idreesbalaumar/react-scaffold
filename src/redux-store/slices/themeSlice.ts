import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes {
  isDarkMode: boolean;
}

// Dynamically set the initial state based on localStorage
const initialState: InitialStateTypes = {
  isDarkMode: localStorage.getItem("isDarkMode") === "true", // Default to false if not set
};

export const globalSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      // Persist the state in localStorage
      localStorage.setItem("isDarkMode", action.payload.toString());
    },
  },
});

export const { setIsDarkMode } = globalSlice.actions;

export default globalSlice.reducer;