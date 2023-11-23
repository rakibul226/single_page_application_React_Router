import { NavLink, Outlet } from "react-router-dom";
import "../CSS/mycss.css"
const Dashboard = () => {
    return (
        <section className="dashboard flex p-5">
            <div className="text-3xl flex flex-col mr-20 gap-1">
                <NavLink to={`dashboard/profile`}>Profile</NavLink>
                <NavLink to={`dashboard/editprofile`}>Edit Profile</NavLink>
            </div>
            <Outlet></Outlet>
        </section>
        
    );
};

export default Dashboard;