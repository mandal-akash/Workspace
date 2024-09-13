import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineInsertComment } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <nav className="p-2.5 h-[7vh] w-screen">
      <div className="flex justify-between items-center">
      
        <div className="flex items-center space-x-4">
        <span className="text-2xl lg:hidden"><RxHamburgerMenu /></span>
          <h1 className="text-2xl text-neutral-500">Untitled</h1>
        </div>
        <div className="text-2xl text-neutral-500 flex space-x-4">
          <CiClock1 />
          <FaRegStar />
          <MdOutlineInsertComment />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
