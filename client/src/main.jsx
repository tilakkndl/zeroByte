/* eslint-disable react/prop-types */

import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import Home from './pages/Home.jsx';
import ErrorPage from './error-page';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
