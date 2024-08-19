import React from "react";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

export const router = createBrowserRouter([
    {
        element: <h1>Parent</h1>,
        path : '/',
        children: [
        {
          index:true,
          element: <h2>Child</h2>
        }
        ],
    },
]);