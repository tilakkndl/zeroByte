/* eslint-disable react/prop-types */

import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  // createBrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from 'react-router-dom';

import './index.css';
import Home from './pages/Home.jsx';
// import ErrorPage from './error-page';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import { store } from './store/store';
import { Provider } from 'react-redux';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/signin',
//     element: <SignIn />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/signup',
//     element: <SignUp />,
//     errorElement: <ErrorPage />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </Provider>
  </React.StrictMode>
);
