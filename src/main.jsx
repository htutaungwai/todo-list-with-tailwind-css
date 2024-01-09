import React from "react";

// CSS
import "./index.css";

// COMPONENTS
import App from "./App.jsx";

// PAGES
import Login from "./pages/Login.jsx";
import Signup from "./pages/signup.jsx";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <Signup />,
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <MantineProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </MantineProvider>
  </Provider>
);
