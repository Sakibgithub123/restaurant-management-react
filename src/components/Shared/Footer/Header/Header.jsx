import { NavLink } from "react-router-dom";
import logo from "../../../../assets/Banner-img/Restaurant-Logo.png"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {
    const { user,logout } = useContext(AuthContext)
    const handleLogout=()=>{
        logout()
        .then()
        .catch()

    }
    const navItems = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/allfood"}>All Food</NavLink> </li>
        <li><NavLink to={"/blog"}>Blog</NavLink> </li>
        <li><NavLink to={"/myprofile"}>My Profile</NavLink> </li>
        <li><NavLink to={"/addFood"}>Add Food</NavLink> </li>



    </>
    return (
        <div className="navbar bg-[#FFD700] font-lato">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img src={logo} width={60} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                {/* <a className="btn">Button</a> */}
                {
                    user ?
                        <button onClick={handleLogout} className="btn btn-outline text-[#fff]">LogOut </button>
                        :
                        <div>
                            <li className="btn btn-outline text-[#fff]"><NavLink to={"/signup"}>Sign Up</NavLink> </li>
                            <li className="btn btn-outline text-[#fff]"><NavLink to={"/login"}>Login</NavLink> </li>
                        </div>
                }

            </div>
        </div>
    );
};

export default Header;