import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Routes/Routes.jsx';
import {
 
  RouterProvider,
} from "react-router-dom";




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={Router} />
    {/* <App /> */}
  </React.StrictMode>,
)
