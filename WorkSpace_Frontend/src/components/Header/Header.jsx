import React, { useEffect, useState } from "react";
import logo from "../../../public/logo (1).png";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoArrowRight } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import "../Header/style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  let timeLine2 = gsap.timeline({ paused: true });

  useGSAP(() => {
    let timeLine = gsap.timeline();

    timeLine.from(".header img,  .header button", {
      y: -40,
      duration: 1,
      delay: 1,
      opacity: 0,
      stagger: 0.2,
    });
    timeLine2.to(".menu", {
      opacity: 1,
      pointerEvents: "all", // Enable interaction
      duration: 0.5,
    });
    timeLine2.fromTo(
      ".menu",
      { scaleY: 0, height: 0, opacity: 0 },
      {
        scaleY: 1,
        height: "100vh",
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      }
    );
    timeLine2.set(".menu", { display: "none" });
    timeLine2.to(".menu", {
      display: "block",
      opacity: 1,
      duration: 0.5,
    });
    timeLine2.from(".blackBox", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,  // Each item starts 0.2s after the previous one
    });
    timeLine2.from(".closeBtn", {
      x: 50,
      duration: 0.4,
      opacity: 0,
    });
  });

  const toggleMenu = () => {
    timeLine2.play();
  };
  const closeMenu = () => {
    timeLine2.reverse();
  };

  return (
    <header>
      <div className="header flex justify-between items-center p-2 border-b">
        <img className="max-w-[9rem] lg:mx-8" src={logo} alt="logo"/>
        <button
          className="menuBtn text-neutral-800 text-[45px] lg:mx-8 focus:outline-none"
          onClick={toggleMenu}
        >
          <RxHamburgerMenu />
        </button>
      </div>
      <nav>
        <ul className="menu h-[100vh] w-[100%] absolute top-0 z-[100] right-0 overflow-hidden">
          <div className=" blackBox lg:min-h-[50vh] min-h-[60vh] w-[95%] mx-auto bg-neutral-950 lg:w-[35%] text-gray-300 space-y-14 px-4 py-12 my-16 rounded-lg lg:relative lg:left-[450px] ">
            <li className="cursor-pointer text-5xl w-36 list-none menu__link lg:relative lg:4xl">
              HOME
            </li>
            <li className="cursor-pointer text-5xl  w-36 list-none  menu__link lg:relative lg:4xl">
              PRICING
            </li>
            <li className="cursor-pointer text-5xl  w-36 list-none  menu__link lg:relative lg:4xl">
              ABOUT
            </li>
            <div className="contact flex items-center justify-between lg:flex-row flex-col space-y-6 text-2xl lg:text-xl">
              <p>contactWorkspace@gmail.com</p>
              <div className="flex items-center justify-center space-x-2 mr-4 px-4 py-2 bg-gray-700">
                <button>Register </button>
                <span>
                  <GoArrowRight />
                </span>
              </div>
            </div>
          </div>
          <button
            className="closeBtn text-neutral-800 text-3xl  my-1.5 focus:outline-none absolute top-0 right-0 p-2"
            onClick={closeMenu}
          >
            <RxCross1 />
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
