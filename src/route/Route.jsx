import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Main from '../layout/Main';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
