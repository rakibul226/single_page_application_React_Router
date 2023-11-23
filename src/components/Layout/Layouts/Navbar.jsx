import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import '../CSS/mycss.css'

const Navbar = () => {
    return (
        <div className="flex justify-between px-10 mb-6 py-7 shadow-md">
                <div>
                    <h1 className="text-5xl">
                        <Link to={`/`}> Amazzon</Link>
                    </h1></div>

                <nav className="flex gap-5 text-3xl">                    
                    <NavLink to={`/`}>Home</NavLink>                                              
                    <NavLink to={`/products`}>Product</NavLink>                                      
                    <NavLink to={`/dashboard`}>Dashboard</NavLink>                                       
                </nav>
           </div>
    );
};

export default Navbar;