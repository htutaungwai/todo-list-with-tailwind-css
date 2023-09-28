import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todosSlice/todosSlice";
import themeReducer from "../features/themeSlice/themeSlice";
import revealsReducer from "../features/showPagesSlice/revealSlice";
import editReducer from "../features/editSlice/editSlice";
const store = configureStore({
  reducer: {
    todo: todoReducer,
    theme: themeReducer,
    reveal: revealsReducer,
    edit: editReducer,
  },
});

export default store;
