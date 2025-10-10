import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AppsPage from '../pages/AppsPage/AppsPage';
import Installation from '../pages/Installation/Installation';
import AppDetails from '../pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <div>Loading...</div>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home
            },
            {
                path: "/appsPage",
                Component: AppsPage

            },
            {
                path: "/installation",
                Component: Installation
            },
            {
                path: "app/:id",
                Component: AppDetails
            }
        ]
    },
]);