import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editPage: false,
  sideBar: false,
  loading: false,
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

    revealLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { revealEditPage, revealSideBar, revealLoading } =
  revealsSlice.actions;
export default revealsSlice.reducer;
