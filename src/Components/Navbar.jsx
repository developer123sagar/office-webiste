import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import logo from "../img/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  let navLinks = [
    { name: "HOME", to: "/" },
    { name: "SERVICES", to: "/services" },
    { name: "ABOUT US", to: "/about" },
    { name: "CONTACT US", to: "/contact" },
    { name: "BLOG", to: "/blog" },
  ];
  return (
    <div className="w-full fixed z-10 top-0 left-0">
      <div className="lg:flex items-center justify-between bg-slate-600 text-white py-2 lg:px-10 px-3">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] object-cover object-center"/>
          <span className="text-xs md:text-base">Samagra Builders Pvt. Ltd.</span>
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute top-3 right-5  md:right-5  md:top-7 cursor-pointer lg:hidden w-7 h-7"
        >
          {menuOpen ? <HiXMark size={30} /> : <FiMenu size={30} />}
        </div>
        <div
          className={`lg:flex lg:items-center lg:pb-0 pb-2 absolute lg:static bg-slate-600 text-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            menuOpen ? "top-14" : "top-[-490px]"
          }`}
        >
          {navLinks.map((link, id) => (
            <Link to={link.to} key={id}>
              <p
                className="cursor-pointer nav w-fit lg:ml-8 lg:my-0 my-7 font-semibold"
              >
                {link.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
