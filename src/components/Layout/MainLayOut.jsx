import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";


const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;