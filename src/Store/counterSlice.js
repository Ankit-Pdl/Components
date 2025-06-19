import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const counterSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    handleTheme: (state) => {
      {
        state.theme = state.theme === "light" ? "dark" : "light";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleTheme } = counterSlice.actions;

export default counterSlice.reducer;
