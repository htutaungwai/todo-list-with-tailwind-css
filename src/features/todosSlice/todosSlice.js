import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  selectedTodo: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //   // -----  ADD TODO is not needed anymore  ------------------------------------- //
    //   addTodo: (state, action) => {
    //     // ////////////////////
    //     console.log("added todo");
    //     const title = action.payload.title ? action.payload.title : "new todo";

    //     const checked = action.payload.checked ? action.payload.checked : false;
    //     const content = action.payload.content
    //       ? action.payload.content
    //       : "<p>".repeat(15) + "</p>";
    //     const dateCreated = action.payload.dateCreated
    //       ? action.payload.dateCreated
    //       : new Date().toISOString();
    //     const dateUpdated = action.payload.dateUpdated
    //       ? action.payload.dateUpdated
    //       : new Date().toISOString();

    //     const category = action.payload.category ? action.payload.category : [];

    //     const todo = {
    //       id: nanoid(),
    //       title: title,
    //       checked: checked,
    //       dateCreated: dateCreated,
    //       dateUpdated: dateUpdated,
    //       content: content,
    //       category: category,
    //     };

    //     state.todos.push(todo);
    //     state.selectedTodo = todo;
    //   },

    // -----  ADD TODO is not needed anymore  ------------------------------------- //

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
        (todo) => todo._id === action.payload
      );
      console.log(newTodo);
      return {
        ...state,
        selectedTodo: newTodo,
      };
    },

    updateTodosArray: (state, action) => {
      //////////////////////
      console.log("UPDATING THE WHOLE ARRAY");
      return {
        ...state,
        todos: action.payload,
      };
    },
  },
});

export const {
  updateCheckTodo,
  removeSingleTodo,
  selectTodo,
  updateTodo,
  updateSelectedTodo,
  updateTodosArray,
} = todosSlice.actions;

export default todosSlice.reducer;
