import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todosSlice/todosSlice";
import themeReducer from "../features/themeSlice/themeSlice";
import revealsReducer from "../features/showPagesSlice/revealSlice";
import authReducer from "../features/authSlice/authSlice";
import { apiSlice } from "../features/apiSlice/apiSlice";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
    reveal: revealsReducer,
    auth: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
  thunk: {
    extraArgument: {
      api: "",
    },
  },
});

export default store;
