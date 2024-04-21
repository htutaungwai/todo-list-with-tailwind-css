import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todosSlice/todosSlice";
import themeReducer from "../features/themeSlice/themeSlice";
import revealsReducer from "../features/showPagesSlice/revealSlice";
import authReducer from "../features/authSlice/authSlice";

// STATE
import { RESET_STATE } from "./rootActionTypes";

const appReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
  reveal: revealsReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  console.log("clearning the whole state");
  if ((action.type = RESET_STATE)) {
    state = undefined;
  }

  console.log(state);
  return appReducer(state, action);
};
export default rootReducer;
