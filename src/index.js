import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import Attractions from "./components/Pages/Attractions";
import Error from "./components/Pages/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/attractions",
        element: <Attractions />,
    },
    {
        path: "/*",
        element: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
    {/*<App />*/}
  </React.StrictMode>
);

reportWebVitals();
