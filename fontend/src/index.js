import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegisterPage from './Components/LoginRegister/RegisterPage';
import Home from './Components/Pages/HomePage/Home';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/RegisterPage",
    element: <RegisterPage/>,
  },

  {
    path: "/App",
    element: <App/>,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<RouterProvider router={router}/>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
