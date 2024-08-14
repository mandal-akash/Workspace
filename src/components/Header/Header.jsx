import React, { useState } from "react";
import logo from "../../../public/logo (1).png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toogelMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="py-1.5 border top-0 z-0 sticky bg-white">
      <div className="flex justify-between items-center">
        <img className="max-w-28 mx-2.5" src={logo} alt="logo" />
        <div
          className={`${
            isOpen
              ? "hidden lg:flex p-2  space-x-16 mx-10 font-semibold text-lg text-neutral-700"
              : "mobile absolute w-screen top-14 h-screen border bg-white"
          }`}
        >
          <li
            className={`${
              isOpen
                ? " hover:bg-gray-200 p-1.5 px-3.5 rounded-md hover:cursor-pointer list-none"
                : "my-8  mx-4  text-xl list-none"
            }`}
          >
            Product
          </li>
          <li className={`${
              isOpen
                ? " hover:bg-gray-200 p-1.5 px-3.5 rounded-md hover:cursor-pointer list-none"
                : "my-20 mx-4 text-xl list-none"
            }`}>
            Pricing
          </li>
          <li className={`${
              isOpen
                ? " hover:bg-gray-200 p-1.5 px-3.5 rounded-md hover:cursor-pointer list-none"
                : "my-20 mx-4 text-xl list-none"
            }`}>
            About
          </li>
          <div className={`${
              isOpen
                ? "space-x-4 font-semibold text-lg text-neutral-700 social-link"
                : "flex flex-col justify-center items-center"
            }`}>
            <button className={`${
              isOpen
                ? "login hover:bg-gray-200 p-1.5 px-3.5 rounded-md"
                : "text-xl my-6"
            }`}>
              Login
            </button>
            <button className= "getSarted border rounded-sm p-2 px-3.5 border-purple-800  text-purple-800 hover:border-2">
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <button
            className="text-neutral-800 text-3xl mx-2.5 my-1.5 hover:text-white focus:outline-none"
            onClick={toogelMenu}
          >
            {isOpen ? <RxHamburgerMenu /> : <RxCross1 />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
