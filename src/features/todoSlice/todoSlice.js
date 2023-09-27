import { createSlice, nanoid } from "@reduxjs/toolkit";
import dataTodos from "../../data/dataTodos.js";

const initialState = {
  todos: dataTodos,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { title, checked, description } = action.payload;
      const todo = {
        id: nanoid(),
        title: title,
        checked: checked,
        description: description,
      };
      state.todos.push(todo);
    },
    checkTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.checked = true;
        }
      });
    },

    removeSingleTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, checkTodo, removeSingleTodo } = todoSlice.actions;
export default todoSlice.reducer;
