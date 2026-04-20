import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Main from '../layout/Main';
import Home from '../pages/home/Home';
import EventDetails from '../components/EventDetails/EventDetails';
import Login from '../pages/loginPage/Login';
import SignUp from '../pages/SignUp/SignUp';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/event-details',
        element: <EventDetails></EventDetails>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
