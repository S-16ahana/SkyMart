import React, { useState, useEffect } from "react";
import { Zap, ShoppingCart, LogOut } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  const linkStyle = ({ isActive }) =>
    `font-semibold transition ${
      isActive ? "text-[#C8F400]" : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full bg-[#0D0D0D] transition-all duration-300 ${
        scrolled
          ? "border-b border-[#2A2A2A] shadow-lg"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-22 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#C8F400] flex items-center justify-center">
            <Zap className="w-6 h-6 fill-black text-black" />
          </div>

          <h1 className="text-3xl font-bold">
            <span className="text-white">Sky</span>
            <span className="text-[#C8F400]">Mart</span>
          </h1>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-12 text-lg">
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
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl border border-[#2A2A2A] bg-[#151515]">
            <div className="w-9 h-9 rounded-xl bg-[#C8F400] flex items-center justify-center font-bold text-black">
              {user?.fullName?.charAt(0).toUpperCase()}
            </div>

            <span className="text-white font-medium">{user?.fullName}</span>
          </div>

          <button className="w-12 h-12 rounded-2xl border border-[#2A2A2A] flex items-center justify-center text-white hover:bg-[#1A1A1A]">
            <ShoppingCart size={20} />
          </button>

          <button
            onClick={handleLogout}
            className="w-12 h-12 rounded-2xl border border-[#2A2A2A] flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
