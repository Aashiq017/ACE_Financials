import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    value: "home"
  },
  reducers: {
    setLoc: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setLoc } = navigationSlice.actions;

export const selectNavLoc = (state) => state.navigation.value;

export default navigationSlice.reducer;
