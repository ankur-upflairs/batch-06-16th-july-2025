import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import ContactList from "../pages/Contact";
import RootLayout from "./RootLayout";
import SingleContact from "../pages/SingleContact";
let router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactList />,
      },
       {
        path: "contact/:id",
        element: <SingleContact />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;

// let router = createBrowserRouter([
//      {
//         path:'/',
//         element: <Home />
//     },
//     {
//         path:'/home',
//         element: <Home />
//     },
//     {
//         path:'about',
//         element: <About />
//     },
//     {
//         path:'contact',
//         element: <Contact />
//     },
// ])
