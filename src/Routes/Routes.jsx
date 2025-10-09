import React from 'react';

import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AppsPage from '../pages/AppsPage/AppsPage';
import Installation from '../pages/Installation/Installation';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        hydrateFallbackElement: <div>Loading...</div>,
        children: [
            {
                index: true,
                loader: () => fetch('appsData.json'),
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
            }
        ]
    },
]);