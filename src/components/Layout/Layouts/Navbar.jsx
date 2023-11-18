import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between px-10 mb-6 py-7 shadow-md">
                <div><h1 className="text-5xl">Amajhon</h1></div>
                <nav>
                    <ul className="flex gap-5 text-3xl">
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/products`}>Product</Link>
                        </li>
                        <li>
                            <Link to={`/dashboard`}>Dashboard</Link>
                        </li>
                    </ul>
                </nav>
           </div>
    );
};

export default Navbar;