import ReactDOM from 'react-dom/client';
import './index.css';

import * as React from "react";
import {NextUIProvider} from "@nextui-org/react";
import {RouterProvider} from "react-router-dom";
import router from "./router";
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <NextUIProvider>
            <RouterProvider router={router}>
            </RouterProvider>
        </NextUIProvider>
    </Provider>
);
