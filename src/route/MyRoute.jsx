import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../components/Layout/MainLayOut";
import Home from "../components/Layout/Pages/Home";
import Products from "../components/Layout/Pages/Products";
import Dashboard from "../components/Layout/Pages/Dashboard";

const MyRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children : [
        {
            path:"/",
            element: <Home></Home>
        },
        {
            path:"/products",
            element:<Products></Products>,
            loader : ()=> fetch('https://dummyjson.com/products')
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>
        }
      ]
    },
  ]);

  export default MyRoute;
