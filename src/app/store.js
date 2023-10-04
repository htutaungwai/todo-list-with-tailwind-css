import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todosSlice/todosSlice";
import themeReducer from "../features/themeSlice/themeSlice";
import revealsReducer from "../features/showPagesSlice/revealSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
    reveal: revealsReducer,
  },
});

export default store;
