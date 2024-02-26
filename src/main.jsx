import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GuestLayout from "./layouts/Guest.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ViewPage from "./Pages/ViewPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/view_post/",
        element: <ViewPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
