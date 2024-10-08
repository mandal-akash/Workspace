import React, { useEffect, useState } from "react";
import logo from "../../../public/logo (1).png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { myUser } from "../../Slice/UserSlice";
import "../Header/style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {

  let timeLine = gsap.timeline();
  let timeLine2 = gsap.timeline({paused :true});

  useGSAP(() => {
    timeLine.from(".header img,  .header button", {
      y: -40,
      duration: 1,
      delay: 1,
      opacity: 0,
      stagger: 0.2,
    });
    timeLine2.from(".menu , .menu li , .menu .getStarted", {
      y: 80,
      duration: 0.5,
      stagger: 0.3,
      opacity: 0,
    });
    timeLine2.from(".closeBtn", {
      x: 80,
      duration: 0.5,
      opacity: 0,
    });

  });

  const toggleMenu = () => {
    timeLine2.play()
  };
  const closeMenu = () => {
    timeLine2.reverse()
  };


  // const dispatch = useDispatch();
  // const userP = useSelector((state) => state.user.user);

  // const { user, loginWithRedirect, logout } = useAuth0();
  // useEffect(() => {
  //   dispatch(myUser(user));
  // }, [user, dispatch]);
  // "mobile absolute bg-white w-[100vw]  h-[100vh] top-14 border"
  return (
    <nav className="py-1.5 sticky top-0 bg-white shadow-md">
      <div className="header flex justify-between items-center">
        <img className="max-w-28 mx-2.5" src={logo} alt="logo" />
        <button className="menuBtn text-neutral-800 text-3xl mx-2.5 my-1.5 focus:outline-none" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>
      </div>
      <div className="menu h-[100vh] w-[100vw] absolute top-0 right-0 overflow-hidden">
        <li className="cursor-pointer text-3xl my-14 py-4 w-28 mx-auto text-center list-none text-[#1a1919] menu__link lg:relative lg:font-semibold lg:4xl">
          Product
        </li>
        <li className="cursor-pointer text-3xl my-14 py-4 w-28 mx-auto text-center list-none text-[#1a1919]  menu__link lg:relative lg:font-semibold lg:4xl">
          Pricing
        </li>
        <li className="cursor-pointer text-3xl my-14 py-4 w-28 mx-auto text-center list-none text-[#1a1919]  menu__link lg:relative lg:font-semibold lg:4xl">
          About
        </li>
        <li className="cursor-pointer text-3xl my-14 py-4 w-28 mx-auto text-center list-none text-[#1a1919]  menu__link lg:relative lg:font-semibold lg:4xl">
          Contact
        </li>
        <div className="flex justify-center">
          <button
            className="getStarted py-3  text-2xl px-16 rounded-lg text-fuchsia-50 bg-purple-700 hover:cursor-pointer hover:bg-purple-500 lg:px-10
    lg:text-xl"
          >
            Get Started
          </button>
          <button className="closeBtn text-neutral-800 text-3xl mx-2.5 my-1.5 focus:outline-none absolute top-0 right-0 p-2" onClick={closeMenu}>
          <RxCross1 />
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
