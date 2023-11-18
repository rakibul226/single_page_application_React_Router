import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";


const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen"><Outlet></Outlet></div>  
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;