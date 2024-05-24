import { createSlice } from "@reduxjs/toolkit";

const refetchSlice = createSlice({
  name: "refetch",
  initialState: {
    totalRefetch: 0,
    isTriggerRefetchLoading: false,
    isTriggerRefetchSuccess: false,
    isTriggerRefetchError: false,
  },
  reducers: {
    triggerRefetch: (state) => {
      console.log("Triggering refetch");
      state.totalRefetch++;
    },
    setIsTriggerRefetchLoading: (state, action) =>
      (state.isTriggerRefetchLoading = action.payload),
    setIsTriggerRefetchSuccess: (state, action) =>
      (state.isTriggerRefetchSuccess = action.payload),
    setIsTriggerRefetchError: (state, action) =>
      (state.isTriggerRefetchError = action.payload),

    resetRefetchState: (state) => {
      state.isTriggerRefetchLoading = false;
      state.isTriggerRefetchSuccess = false;
      state.isTriggerRefetchError = false;
    },
  },
});

export const { triggerRefetch } = refetchSlice.actions;
export const refetchReducer = refetchSlice.reducer;
