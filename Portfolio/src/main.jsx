import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./Header";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path:"/footer",
    element:<Footer />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router1} />
  </React.StrictMode>,
);