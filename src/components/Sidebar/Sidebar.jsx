import React, { useEffect, useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { TbSquareLetterAFilled } from "react-icons/tb";
import { IoAddSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosTrash } from "react-icons/io";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SidebarOption from "../SidebarOption/SidebarOption";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
const Sidebar = () => {
  const [channels, loading, error] = useCollection(db.collection("workRoom"));

  const tl = gsap.timeline({ paused: true });

  useEffect(() => {
    tl.to(".sidebar_a", {
      left: 0,
      duration: 1,
    });
  }, [tl]);

  const openMenu = () => {
    tl.play();
    console.log("hii");
  };

  const closeMenu = () => {
    tl.reverse();
    console.log("Hii");
  };

  return (
    <div className="sidebar m-1.5">
      <button
        onClick={openMenu}
        className="openMenu   text-2xl  z-50 rounded-full hover:cursor-pointer hover:bg-gray-200 p-2.5"
      >
        <RxHamburgerMenu />
      </button>
      <div className="sidebar_a w-[80vw] p-3 shadow-lg border rounded-md z-[100] -left-[80vw] border-neutral-300 h-screen absolute top-0 bg-white lg:w-[15vw]">
        <div className="flex items-center justify-between">
          <div className="sidebar_top flex items-center space-x-2">
            <span className="text-md text-neutral-400">
              <TbSquareLetterAFilled />
            </span>
            <h2 className="text-neutral-500 text-sm font-semibold">
              Akash Kumar Mandal
            </h2>
          </div>
          <span
            onClick={closeMenu}
            className="text-lg  text-neutral-400 p-2 hover:cursor-pointer hover:bg-gray-200 bg-gray-100 rounded-full"
          >
            <RxCross1 />
          </span>
        </div>
        <div className="sidebarOption">
          <SidebarOption
            title="Add Page"
            Icon={<IoAddSharp />}
            addChannelOption
          />
          {channels?.docs.map((workRoom) => (
            <SidebarOption
              key={workRoom.id}
              title={workRoom.data().name}
              id={workRoom.id}
            />
          ))}
        </div>

        <hr className="border border-neutral-300" />

        <div className=" sidebar_tool flex items-center text-md font-semibold text-neutral-500 space-x-7 my-8 p-2  hover:cursor-pointer rounded-lg hover:bg-gray-200">
          <span className="text-lg">
            <SlCalender />
          </span>
          <p>Calender</p>
        </div>
        <div className="sidebar_tool flex items-center text-md font-semibold text-neutral-500 space-x-7 my-8 p-2  hover:cursor-pointer rounded-lg hover:bg-gray-200">
          <span className="text-xl">
            <IoIosTrash />
          </span>
          <p>Trash</p>
        </div>
        <div className="sidebar_tool flex items-center text-md font-semibold text-neutral-500 space-x-7 my-8 p-2  hover:cursor-pointer rounded-lg hover:bg-gray-200">
          <span className="text-xl">
            <CiCircleQuestion />
          </span>
          <p>Help & support</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
