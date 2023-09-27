import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice/todoSlice";
import themeReducer from "../features/themeSlice/themeSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
  },
});

export default store;
