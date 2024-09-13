import React from "react";
import { IoMdSearch } from "react-icons/io";
import { TbSquareLetterAFilled } from "react-icons/tb";
import { IoAddSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosTrash } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="sidebar w-[80vw] p-3 shadow-lg border border-neutral-300 h-screen absolute bg-white lg:w-[20vw]">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl text-neutral-400"><TbSquareLetterAFilled /></span>
          <h2 className="text-neutral-500">Akash Kumar Mandal</h2>
        </div>
        <span className="text-2xl text-neutral-500">
          <IoMdSearch />
        </span>
      </div>
      <div className="flex items-center text-md text-neutral-500 space-x-3 my-8">
        <span><IoAddSharp /></span>
        <p>Add Page</p>
      </div>
      <div className="">
          <div className="flex items-center text-md text-neutral-500 space-x-3 my-4">
            <span><SlCalender /></span>
            <p>Calender</p>
          </div>
          <div className="flex items-center text-md text-neutral-500 space-x-3 my-4">
            <span><IoIosTrash /></span>
            <p>Trash</p>
          </div>
          <div className="flex items-center text-md text-neutral-500 space-x-3 my-4">
            <span><CiCircleQuestion/></span>
            <p>Help & support</p>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
