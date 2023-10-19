import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Components/Home/Home';

import SignUp from './Components/SignUp/SignUp';
import Contact from './Components/Contact/Contact';
import MyCart from './Components/MyCart/MyCart';
import AddProduct from './Components/AddProduct/AddProduct';
import SignIn from './Components/SignIn/SignIn';
import Apple from './Components/Apple/Apple';
import Sony from './Components/Sony/Sony';
import ErrorPage from './ErrorPage/ErrorPage';
import Samsung from './Components/Samsung/Samsung';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('brands.json')
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        // loader: () => fetch('brands.json')
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        // loader: () => fetch('brands.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
