import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";
import logo from "../../../assets/logo.png"


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    };
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food </Link></li>
        <li><Link to="/contactUs">Contact Us </Link></li>

        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard </Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard </Link></li>
        }
        <li>
            <Link to="/dashboard/cart">
                <button className="flex pr-3">
                    <FaCartShopping className="mr-2 text-xl" />
                    <div className="badge bg-yellow-400">+{cart.length}</div>
                </button>
            </Link>
        </li>

        {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <button onClick={handleLogOut} className="btn btn-outline border-0 border-b-4 border-t-4 text-black ">LogOut</button>
            </> : <>
                <li><Link to="/login">LogIn </Link></li>
            </>
        }

    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-white bg-opacity-30 backdrop-blur-md text-black shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navOptions}
                        </ul>
                    </div>
                    <img className="w-10 " src={logo} alt="logo" />
                    <a className="text-5xl font-extrabold pl-3">BisTro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 pr-20 text-[15px] font-extrabold ">
                        {navOptions}
                    </ul>
                </div>

            </div>
        </>
    );
};

export default NavBar;