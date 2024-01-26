import React from "react";

// CSS
import "./index.css";

// COMPONENTS
import App from "./App.jsx";

// PAGES
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Notfound from "./pages/Notfound.jsx";

// STORE
import store from "./app/store.js";

//REACT_REDUX
import { Provider } from "react-redux";

// MANTINE
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider } from "@mantine/core";

// REACT ROUTUER DOM
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import ToodList from "./components/TodoList.jsx";

// Route --- [localhost:3000/TODOS/ALL]
import AllTodos from "./components/Todos/AllTodos.jsx";
import CompletedTodos from "./components/Todos/CompletedTodos.jsx";
import DeletedTodos from "./components/Todos/CompletedTodos.jsx";
import FavouriteTodos from "./components/Todos/FavouriteTodos.jsx";
import OngoingTodos from "./components/Todos/OngoingTodos.jsx";
import RootTodos from "./components/Todos/RootTodos.jsx";

// REACT-TOASTIFY
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ToodList /> },

      {
        path: "todos",
        element: <RootTodos />,
        children: [
          {
            index: true,
            path: "all",
            element: <AllTodos />,
          },

          {
            path: "completed",
            element: <CompletedTodos />,
          },

          {
            path: "deleted",
            element: <DeletedTodos />,
          },

          {
            path: "ongoing",
            element: <OngoingTodos />,
          },

          {
            path: "favourites",
            element: <FavouriteTodos />,
          },
        ],
      },
    ],
  },

  ,
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "signup",
    element: <Signup />,
  },

  {
    path: "*",
    element: <Notfound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <Provider store={store}>
      <MantineProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </MantineProvider>
    </Provider>
  </>
);
