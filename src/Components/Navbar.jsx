import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import menu_icon from "../assets/menu_icon.svg";
import cross from "../assets/cross_icon.svg";
const Navbar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20  bg-transparent ">
        <a href="" className="underline text-blue-400 underline-offset-4 decoration-2 font-light">
          {/* <img src={logo} alt="" /> */}
          <h1 className="text-3xl  text-zinc-200 font-serif">
            <span className="text-5xl text-blue-400">P</span>ropify
          </h1>
        </a>
        <ul className="hidden md:flex gap-7 text-white">
          <a className="cursor-pointer hover:text-gray-400" href="#Header">
            Home
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#About">
            About
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#Projects">
            Projects
          </a>
          <a className="cursor-pointer hover:text-gray-400" href="#Testimonials">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
        <img
          onClick={() => {
            setshowMobileMenu(true);
          }}
          src={menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt=""
        />
      </div>
      {/*-------------------mobile--menu----------------- */}
      <div
        className={`md:hidden ${showMobileMenu ? "fixed w-full" : "h-0 w-0"} fixed w-full  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300 `}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => {
              setshowMobileMenu(false);
            }}
            src={cross}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => {
              setshowMobileMenu(false);
            }}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => {
              setshowMobileMenu(false);
            }}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => {
              setshowMobileMenu(false);
            }}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => {
              setshowMobileMenu(false);
            }}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonails
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
