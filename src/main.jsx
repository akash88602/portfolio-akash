import React from "react";
import ReactDOM from "react-dom/client";
import './App.css'
import { RouterProvider } from "react-router/dom";
import App from "./App";
import { router } from "./Routes/Routes";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
