import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './webpages/home'
import Item from './webpages/item'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "item/:id",
    element: <Item />,
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>    
  <RouterProvider router={router} />  
  </React.StrictMode>
);
        
