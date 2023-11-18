import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../components/Layout/MainLayOut";

const MyRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children : [
        {
            path:"/",
            element: <div>from children</div>
        },
        {
            path:"/pro",
            element:<div>from pro</div>,
        }
      ]
    },
  ]);

  export default MyRoute;
