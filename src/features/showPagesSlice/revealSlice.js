import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editPage: false,
  sideBar: false,
};

const revealsSlice = createSlice({
  name: "reveals",
  initialState,
  reducers: {
    revealEditPage: (state, action) => {
      state.editPage = action.payload;
    },

    revealSideBar: (state, action) => {
      state.sideBar = action.payload;
    },
  },
});

export const { revealEditPage, revealSideBar } = revealsSlice.actions;
export default revealsSlice.reducer;
