import React from "react";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

export const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]);