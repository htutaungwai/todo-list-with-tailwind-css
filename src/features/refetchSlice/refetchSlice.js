import { createSlice } from "@reduxjs/toolkit";

const refetchSlice = createSlice({
  name: "refetch",
  initialState: 0,
  reducers: {
    triggerRefetch: (state) => state + 1,
  },
});

export const { triggerRefetch } = refetchSlice.actions;
export const refetchReducer = refetchSlice.reducer;
