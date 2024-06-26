import { FaOpencart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { Link,NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="flex justify-between items-center py-4 bg-white drop-shadow-lg px-20 fixed w-full top-0 left-0 z-50 ">
            <Link to={"/"}>
                <h1
                    className="w-[200px] flex items-center text-4xl text-[#390279] font-['Style_Script'] "
                >
                    <FaOpencart className="mr-3" color="#96AE00" size={40} /> Best Deal
                </h1>
            </Link>
            <div className="flex justify-between items-center w-1/4">
                <div className="group relative cursor-pointer py-2 ">
                    <h1 className="text-[#390279] hover:text-[#96AE00] hover:underline font-semibold">Categories</h1>
                    <div
                        className="invisible absolute z-50 flex w-32 flex-col bg-gray-100 text-gray-800 shadow-xl group-hover:visible duration-500 rounded-md p-3">

                        <Link to={"/products"} className="block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black hover:underline md:mx-2">
                            Vegetables
                        </Link>

                        <Link to={"/products"} className="block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black hover:underline md:mx-2">
                            Fresh Fruits
                        </Link>

                        <Link to={"/products"} className="block border-b border-gray-100 py-1 font-medium text-gray-500 hover:text-black hover:underline md:mx-2">
                            Fresh Drinks
                        </Link>
                    </div>
                </div>
                <Link to={"/products"} className="text-[#390279] hover:text-[#96AE00] hover:underline font-semibold">Products</Link>
                <Link to={"/about-us"} className="text-[#390279] hover:text-[#96AE00] hover:underline font-semibold">About Us</Link>
            </div>
            <div className="flex items-center justify-between w-[180px]">
                <NavLink to="/wishlist" className={({ isActive }) => isActive ? "bg-[#b8a3ff] p-3 rounded-full font-thin" : "bg-[#F5F2FF] p-3 rounded-full font-thin"} href=""><IoMdHeartEmpty size={25} /></NavLink>
                <NavLink to="/cart" className={({ isActive }) => isActive ? "bg-[#ffc9a9] p-3 rounded-full font-thin" : "bg-[#FFF3EC] p-3 rounded-full font-thin"} href=""><IoCartOutline size={25} /></NavLink>
                <Link to={"/login"} className="bg-[#ECFBFF] p-3 rounded-full font-thin"><CiUser size={25} /></Link>
            </div>
        </nav>
    );
};

export default NavBar;