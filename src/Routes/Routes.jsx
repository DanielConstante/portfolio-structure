import React from "react";
import Home from "../Home/Home";
import About from "../About/About"
import Projects from "../Projects/Project";
import Resume from "../Resume/Resume";
import ContacMe from "../ContactMe/ContactMe";
import ErrorPage from "../ErrorPage";
import { createBrowserRouter } from "react-router-dom";


const Router = createBrowserRouter([
      {
            path: "/home",
            element: <Home />,
            errorElement: <ErrorPage />,
      },
      {
            path: "/about",
            element: <About />,
      },
      {
            path: "/projects",
            element: <Projects />,
      },
      {
            path: "/resume",
            element: <Resume />
      },
      {
            path: "contac-me",
            element: <ContacMe />
      }
]);

export default Router 