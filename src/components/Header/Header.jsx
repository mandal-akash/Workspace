import React, { useState } from "react";
import logo from "../../../public/logo (1).png";
import "../../styles/Header/style.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toogelMenu = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img className="max-w-28" src={logo} alt="logo" />
        <div className="hidden md:flex  space-x-16 mx-10 font-semibold text-lg text-neutral-700">
          <li className=" hover:bg-gray-200 p-1.5 px-3.5 rounded-md hover:cursor-pointer list-none">
            Product
          </li>
          <li className=" hover:bg-gray-200 p-1.5 px-3.5 rounded-md hover:cursor-pointer list-none">
            Pricing
          </li>
          <li className=" hover:bg-gray-200 p-1.5 px-3.5 rounded-md hover:cursor-pointer list-none">
            About
          </li>
          <div className="space-x-16 mx-10 font-semibold text-lg text-neutral-700">
            <button className=" hover:bg-gray-200 p-1.5 px-3.5 rounded-md">
              Login
            </button>
            <button className="border rounded-sm p-2 px-3.5 border-purple-800  text-purple-800 hover:border-2">
              Get Started
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button
            id="menu-btn"
            className="text-neutral-800 hover:text-white focus:outline-none"
            onClick={toogelMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div id="menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">
          Home
        </a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">
          About
        </a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">
          Services
        </a>
        <a href="#" className="block px-4 py-2 text-gray-300 hover:text-white">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
