import { Outlet,useNavigation  } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Navbar from "./Layouts/Navbar";
import Spinner from "./Pages/Spinner";


const MainLayOut = () => {

    const navigation = useNavigation();
     const isLoadingProducts = navigation.state === "loading";


    return (
        <div>
            <Navbar></Navbar>
            {/* <div className="min-h-screen"><Outlet></Outlet></div>   */}
                {isLoadingProducts ? (
                <Spinner></Spinner>
                ) : (
                    <div className="my-10 min-h-screen">
                    <Outlet></Outlet>
                    </div>
                )}
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;