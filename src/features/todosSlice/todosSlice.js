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
      const title = action.payload.title ? action.payload.title : "new todo";
      const description = action.payload.title
        ? action.payload.description
        : "new todo";
      const checked = action.payload.checked ? action.payload.checked : false;
      const content = action.payload.content
        ? action.payload.content
        : "<span>New Todo</span>";
      const dateCreated = action.payload.dateCreated
        ? action.payload.dateCreated
        : new Date().toISOString();
      const dateUpdated = action.payload.dateUpdated
        ? action.payload.dateUpdated
        : new Date().toISOString();
      const todo = {
        id: nanoid(),
        title: title,
        checked: checked,
        description: description,
        dateCreated: dateCreated,
        dateUpdated: dateUpdated,
        content: content,
      };
      state.todos.push(todo);
      state.selectedTodo = todo;
    },

    updateTodo: (state, action) => {
      // ////////////////////
      console.log("updated todo");
      const { id, name, value } = action.payload;

      state.todos.map((todo) => {
        if (todo.id === id) {
          todo.dateUpdated = new Date().toISOString();
          switch (name) {
            case "TITLE":
              todo.title = value;
              break;
            case "DESCRIPTION":
              todo.description = value;

              break;
            case "CREATED":
              todo.dateCreated = value;
              break;
            case "CONTENT":
              todo.content = value;
              break;
          }

          state.selectedTodo = todo;
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
          state.selectedTodo.dateCreated = value;
          // code block
          break;
      }
      state.selectedTodo.dateUpdated = new Date().toISOString();
    },

    removeSingleTodo: (state, action) => {
      // ////////////////////
      console.log("remove single todo");
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    selectTodo: (state, action) => {
      // ////////////////////
      console.log("seleced todo");
      console.log(action.payload);
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
