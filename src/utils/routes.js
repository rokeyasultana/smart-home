import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About/About';
import Cart from '../components/Cart/Cart';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Shop from '../components/Shop/Shop';
import Main from '../layouts/Main';
import { productsAndCartData } from '../loaders/getCartAndProductData'

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      errorElement: <ErrorPage />,
      loader: productsAndCartData,
      children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/shop', element: <Shop /> },
        { path: '/cart', element: <Cart /> },
        { path: '/about', element: <About /> },
      ],
    },
  ])
export default router;