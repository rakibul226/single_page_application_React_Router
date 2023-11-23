import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../components/Layout/MainLayOut";
import Home from "../components/Layout/Pages/Home";
import Products from "../components/Layout/Pages/Products";
import Dashboard from "../components/Layout/Pages/Dashboard";
import ProductDetails from "../components/Layout/Pages/ProductDetails";
import Profile from "../components/Layout/Dashboard/profile";
import EditProfile from "../components/Layout/Dashboard/EditProfile";

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
            path:'/products/:id',
            element:<ProductDetails></ProductDetails>,
            loader : ({params})=> fetch(`https://dummyjson.com/products/${params.id}`)
        },
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>,
            children : [
              {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
              },
              {
                path:"dashboard/profile",
                element:<Profile></Profile>
              },
              {
                path:"dashboard/editprofile",
                element:<EditProfile></EditProfile>
              },
            ]
        }
      ]
    },
  ]);

  export default MyRoute;
