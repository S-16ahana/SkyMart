import React, { useState, useEffect, useContext } from "react";
import { 
  Zap, 
  ShoppingCart, 
  LogOut, 
  Menu, 
  X,
  User
} from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

const Navbar = () => {
  const navigate = useNavigate();

  const { cartItems, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };


  const linkStyle = ({ isActive }) =>
    `font-semibold transition ${
      isActive
        ? "text-[#C8F400]"
        : "text-gray-400 hover:text-white"
    }`;


  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-[#0D0D0D] ${
        scrolled
          ? "border-b border-[#2A2A2A] shadow-lg"
          : ""
      }`}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">


        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-[#C8F400] flex items-center justify-center">
            <Zap className="w-6 h-6 fill-black text-black"/>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold">
            <span className="text-white">Sky</span>
            <span className="text-[#C8F400]">Mart</span>
          </h1>

        </div>



        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-lg">

          <NavLink to="/home" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/shop" className={linkStyle}>
            Shop
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

        </div>



        {/* Right Side */}
        <div className="flex items-center gap-3">


          {/* User Desktop */}
          <div className="hidden sm:flex items-center gap-3 px-3 py-2 rounded-2xl border border-[#2A2A2A] bg-[#151515]">

            <div className="w-9 h-9 rounded-xl bg-[#C8F400] flex items-center justify-center font-bold text-black">
              {user?.fullName?.charAt(0).toUpperCase()}
            </div>

            <span className="text-white font-medium">
              {user?.fullName}
            </span>

          </div>



          {/* User Mobile Icon */}
          <button className="sm:hidden w-11 h-11 rounded-xl border border-[#2A2A2A] flex items-center justify-center">
            <User size={20}/>
          </button>



          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative w-11 h-11 rounded-xl border border-[#2A2A2A] flex items-center justify-center"
          >

            <ShoppingCart size={20}/>

            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#C8F400] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}

          </button>



          {/* Logout Desktop */}
          <button
            onClick={handleLogout}
            className="hidden sm:flex w-11 h-11 rounded-xl border border-[#2A2A2A] items-center justify-center hover:bg-red-500 transition"
          >
            <LogOut size={20}/>
          </button>



          {/* Hamburger */}
          <button
            onClick={() => setOpenMenu(true)}
            className="md:hidden w-11 h-11 rounded-xl border border-[#2A2A2A] flex items-center justify-center"
          >
            <Menu size={22}/>
          </button>


        </div>

      </div>



      {/* Mobile Sidebar */}

      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0D0D0D] border-l border-[#2A2A2A] transition-transform duration-300 z-50
        ${openMenu ? "translate-x-0" : "translate-x-full"}
        `}
      >

        <div className="flex justify-between items-center p-5">

          <h2 className="text-white text-xl font-bold">
            Menu
          </h2>

          <button onClick={()=>setOpenMenu(false)}>
            <X/>
          </button>

        </div>


        <div className="flex flex-col gap-6 px-6 mt-5 text-lg">

          <NavLink 
            onClick={()=>setOpenMenu(false)}
            to="/home"
            className={linkStyle}
          >
            Home
          </NavLink>


          <NavLink 
            onClick={()=>setOpenMenu(false)}
            to="/shop"
            className={linkStyle}
          >
            Shop
          </NavLink>


          <NavLink 
            onClick={()=>setOpenMenu(false)}
            to="/about"
            className={linkStyle}
          >
            About
          </NavLink>



          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-400 mt-5"
          >
            <LogOut size={20}/>
            Logout
          </button>

        </div>

      </div>


      <Cart/>

    </nav>
  );
};

export default Navbar;