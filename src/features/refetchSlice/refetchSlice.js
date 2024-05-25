import { createSlice } from "@reduxjs/toolkit";
import { LOADING, SUCCESS, RESET, ERROR } from "./refetchTypes";

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
    setRefetchState: (state, action) => {
      console.log(action.payload === SUCCESS);
      switch (action.payload) {
        case LOADING:
          state.isTriggerRefetchLoading = true;
          break;

        case ERROR:
          state.isTriggerRefetchError = true;
          break;

        case SUCCESS:
          console.log("SUCCESSFUL REFETCH >>>>>>>>>>>>>>>>>>>>>>>>>>>");
          state.isTriggerRefetchSuccess = true;
          break;

        default:
          state.isTriggerRefetchLoading = false;
          state.isTriggerRefetchError = false;
          state.isTriggerRefetchSuccess = false;
          break;
      }
    },

    resetRefetchState: (state) => {
      state.isTriggerRefetchLoading = false;
      state.isTriggerRefetchSuccess = false;
      state.isTriggerRefetchError = false;
    },
  },
});

export const { triggerRefetch, resetRefetchState, setRefetchState } =
  refetchSlice.actions;
export const refetchReducer = refetchSlice.reducer;
