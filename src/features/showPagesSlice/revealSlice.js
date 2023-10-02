import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editPage: false,
};

const revealsSlice = createSlice({
  name: "reveals",
  initialState,
  reducers: {
    revealEditPage: (state, action) => {
      state.editPage = action.payload;
    },
  },
});

export const { revealEditPage } = revealsSlice.actions;
export default revealsSlice.reducer;
