import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <nav className="p-1.5 h-[7vh]  m-1 flex-[4] lg:m-0.5">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl text-neutral-500">Untitled</h1>
        </div>
        <div className="text-xl text-neutral-700 flex lg:text-2xl">
          <span className=" p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"><CiClock1 /></span>
          <span  className=" p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"><FaRegStar /></span>
          <span  className=" p-2 hover:bg-gray-200 hover:cursor-pointer rounded-full"><MdOutlineInsertComment /></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
