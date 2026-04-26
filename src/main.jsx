import { StrictMode } from 'react';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './route/Route.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client instance
const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     suspense: true, // Enable suspense for queries
  //   }
  // }
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    ,
  </QueryClientProvider>,
);
