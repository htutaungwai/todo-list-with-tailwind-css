import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../../features/todosSlice/todosSlice";
import themeReducer from "../../features/themeSlice/themeSlice";
import revealsReducer from "../../features/showPagesSlice/revealSlice";
import authReducer from "../../features/authSlice/authSlice";
import { apiSlice } from "../../features/apiSlice/apiSlice";

// STATE
import { RESET_STATE } from "./rootActionTypes";

export const appReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
  reveal: revealsReducer,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const rootReducer = (state, action) => {
  if (action.type == RESET_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
