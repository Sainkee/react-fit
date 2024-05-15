import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./components/Layout.jsx";
import "./index.css";
import { StrictMode } from "react";
import Home from "./components/Home.jsx";
import Allexe from "./components/Allexe.jsx";
import ExePage from "./components/ExePage.jsx";
import Card from "./components/Card.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/all", element: <Allexe /> },
      { path: "/exePage/:ID", element: <ExePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {" "}
    <RouterProvider router={router} />
  </StrictMode>
);
