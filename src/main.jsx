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
import Huawei from './Components/Huawei/Huawei';
import Realme from './Components/Realme/Realme';
import Google from './Components/Google/Google';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';
import DetailsProduct from './Components/DetailsProduct/DetailsProduct';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brandname')
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
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/cartItems')
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/apple",
        element: <Apple></Apple>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: "/sony",
        element: <Sony></Sony>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: "/samsung",
        element: <Samsung></Samsung>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: "/google",
        element: <Google></Google>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: "/realme",
        element: <Realme></Realme>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: "/huawei",
        element: <Huawei></Huawei>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: "/updateproduct/:id",
        element: <PrivateRoute> <UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.id}`)
      },
      {
        path: "/detailsproduct/:id",
        element: <PrivateRoute><DetailsProduct></DetailsProduct></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
