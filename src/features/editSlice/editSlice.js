import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
};
const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    setEditID: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setEditID } = editSlice.actions;
export default editSlice.reducer;
