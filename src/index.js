import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'typeface-poppins';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import MyBookings from './Pages/MyBookings';
import Home from './Pages/Home';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"search",
        element: <SearchPage />
      },

      {
        path:"mybookings",
        element: <MyBookings />
      },

      {
        path:"/",
        element: <Home />
      }
     ]
   }
 ]
  
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
