import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./page/NavBar.js";
import Login from "./page/Login.js";
import Footer from "./page/Footer.js";
import config from './config.js';
import Register from './page/register.js';
import Home from './page/wedhome.js';
import Myprofile from './page/wedprofile.js';
import Changpass from './page/alluser/changpass.js';
import Hisory from './page/alluser/hisory.js';
import Inbox from './page/alluser/inbox.js';
import Singout from './page/alluser/singout.js';
import Userdata from './page/alluser/userdata.js';
import Sellitem from './page/sellitem.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register/>,
  },

  {
    path: "/wedhome",
    element: <Home/>,
  },

  {
    path: "/wedprofile",
    element: <Myprofile/>,
  },

//ข้อมูล Profile ย่อเป็น  { Prof1-Prof2 } //

  {
    path: "/prof1",
    element: <Changpass/>,
  },
  
  {
    path: "/prof2",
    element: <Hisory/>,
  },

  {
    path: "/prof3",
    element: <Inbox/>,
  },

  {
    path: "/prof4",
    element: <Singout/>,
  },

  {
    path: "/prof5",
    element: <Userdata/>,
  },
  
// หน้าขายของ
  {
    path: "/freefire",
    element: <Sellitem/>,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

reportWebVitals();
