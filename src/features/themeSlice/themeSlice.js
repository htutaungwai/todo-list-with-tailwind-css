import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mood: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      if (state.mood === "light") {
        state.mood = "dark";
      } else {
        state.mood = "light";
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
