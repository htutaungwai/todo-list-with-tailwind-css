import { createSlice, nanoid } from "@reduxjs/toolkit";
import dataTodos from "../../data/dataTodos.js";

const initialState = {
  todos: dataTodos,
  selectedTodo: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // ////////////////////
      console.log("added todo");
      const { title, checked, description } = action.payload;
      const todo = {
        id: nanoid(),
        title: title,
        checked: checked,
        description: description,
      };
      state.todos.push(todo);
    },

    updateTodo: (state, action) => {
      // ////////////////////
      console.log("updated todo");
      const { id, name, value } = action.payload;

      state.todos.map((todo) => {
        if (todo.id === id) {
          switch (name) {
            case "TITLE":
              todo.title = value;
              break;
            case "DESCRIPTION":
              todo.description = value;
              // code block
              break;
            case "DATE":
              todo.date = value;
              // code block
              break;
            default:
              break;
          }
        }
      });
    },

    updateCheckTodo: (state, action) => {
      // ////////////////////
      console.log("updated checked todo");
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.checked = true;
        }
      });
    },

    updateSelectedTodo: (state, action) => {
      // ////////////////////
      console.log("updated selected todo");
      const { name, value } = action.payload;
      switch (name) {
        case "TITLE":
          state.selectedTodo.title = value;
          break;
        case "DESCRIPTION":
          state.selectedTodo.description = value;
          // code block
          break;
        case "DATE":
          state.selectedTodo.date = value;
          // code block
          break;
        default:
          break;
      }
    },

    removeSingleTodo: (state, action) => {
      // ////////////////////
      console.log("remove single todo");
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    selectTodo: (state, action) => {
      // ////////////////////
      console.log("seleced todo");
      const [newTodo] = state.todos.filter(
        (todo) => todo.id === action.payload
      );
      state.selectedTodo = newTodo;
    },
  },
});

export const {
  addTodo,
  updateCheckTodo,
  removeSingleTodo,
  selectTodo,
  updateTodo,
  updateSelectedTodo,
} = todosSlice.actions;
export default todosSlice.reducer;
