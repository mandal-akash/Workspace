import React, { useEffect, useRef } from "react";
import pic from "../../../public/Images/pic (2).png";
import pic2 from "../../../public/Images/hero.png";
import logo1 from "../../../public/partner_logo/partner_Logo (1).png";
import logo2 from "../../../public/partner_logo/partner_Logo (2).png";
import logo3 from "../../../public/partner_logo/partner_Logo (3).png";
import logo4 from "../../../public/partner_logo/partner_Logo (4).png";
import logo5 from "../../../public/partner_logo/partner_Logo (5).png";
import "../Hero/style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LocomotiveScroll from "locomotive-scroll";

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);

  const scroll = new LocomotiveScroll({
    smooth: true,
    lurp: 0.0001,
  });

  let timeLine = gsap.timeline();
  useGSAP(() => {


    timeLine.from(".section_1",{
      y: 200,
      opacity: 0,
      duration: 2,
      delay: 0.5,
      ease: "back",

    });
    gsap.from(".section_1 button", {
      y: 150,
      opacity: 0,
      duration: 2,
      delay: 0.5,
      ease: "back",
    });
    gsap.from(".section_1 img", {
      y: 150,
      opacity: 0,
      duration: 2,
      delay: 0.5,
    });

    // timeLine.from(".section_1 .socialPartner", {
    //   opacity: 0,
    //   x: -70,
    //   stagger: 0.15,
    // });
    timeLine.from(".section_3", {
      y: 200,
      opacity: 0,
      duration: 2,
      ease: "back",
      scrollTrigger: {
        trigger: ".section_3",
        scroller: "body",
        scrub: 2,
        start: "top 120%",
        end: "top 0%",
      },
    });

    timeLine.from(".box1", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".box1",
        scroller: "body",
        scrub: 2,
      },
    });
    timeLine.from(".box2", {
      x: 200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".box2",
        scroller: "body",
        scrub: 2,
      },
    });
    timeLine.from(".box3", {
      x: -200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".box3",
        scroller: "body",
        scrub: 2,
      },
    });
    timeLine.from(".box4", {
      x: 200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".box4",
        scroller: "body",
        scrub: 2,
      },
    });
    timeLine.from(".section_5", {
      y: 200,
      opacity: 0,
      duration: 2,
      delay:2,
      ease: "back",
      scrollTrigger: {
        trigger: ".section_5",
        scroller: "body",
        scrub: 2,
      },
    });
    timeLine.from(".section_6", {
      y: 200,
      opacity: 0,
      duration: 2,
      delay:2,
      ease: "back",
      scrollTrigger: {
        trigger: ".section_6",
        scroller: "body",
        scrub: 2,
      },
    });
  });
  return (
    <div className="container">
     <iv className="section_1 h-[93vh] w-[98.5vw] mx-1 px-2.5 py-6 flex flex-col items-center lg:flex-row lg:px-4">
  <div className="text-left space-y-8">
    <h1 className="heading_1 text-5xl font-semibold text-neutral-500 lg:text-[105px]">
      Streamline Your Tasks, <span className="text-purple-600">Simplify Your Day</span>
    </h1>
    <button className="cssbuttons-io-button bg-purple-600 text-white pl-4 pr-20 rounded-lg flex items-center overflow-hidden relative text-xl h-14 shadow-md lg:ml-4 lg:text-xl">
      Get started
      <div className="icon bg-white ml-4 absolute flex items-center justify-center h-[2.1em] w-[2.1em] rounded-[0.7em] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] right-[0.3em] transition-all duration-300">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
    <div className="socialPartner space-y-1.5 lg:px-4 lg:pt-8">
      <p className="text-gray-500 font-semibold text-lg lg:text-2xl">
        Trusted by teams at
      </p>
      <div className="flex items-center space-x-4 lg:space-x-10">
        <img src={logo1} alt="Logo 1" className="w-[10vw] mr-3 lg:w-[4vw] lg:my-4" />
        <img src={logo2} alt="Logo 2" className="w-[10vw] mx-2 lg:w-[5vw] lg:m-4" />
        <img src={logo3} alt="Logo 3" className="w-[20vw] mx-2 lg:w-[6vw] lg:m-4" />
        <img src={logo4} alt="Logo 4" className="w-[10vw] mx-2 lg:w-[5vw] lg:m-4" />
        <img src={logo5} alt="Logo 5" className="w-[10vw] mx-2 lg:w-[4vw] lg:m-4" />
      </div>
    </div>
  </div>
  <img src={pic} alt="Header" className="headerImg w-[65vw]  lg:w-[38vw]" />
</iv>

      <div className="section_3 my-10">
        <div className="section_3Heading text-center space-y-4 max-w-[80vw] mx-auto">
          <h1 className=" text-5xl  text-neutral-700 lg:text-6xl">
            Everything in one place
          </h1>
          <p className="font-sans text-lg text-gray-400 lg:text-xl">
            Organize knowledge, manage projects, share ideas, and more.
          </p>
        </div>
        <img
          src={pic2}
          alt=""
          className="serviceImg w-[80vw] m-auto my-12 border shadow-md border-gray-400 lg:w-[50vw]"
        />
      </div>
      <div className="section_4 space-y-12 my-10 overflow-hidden">
        <div className="box box1 flex flex-col items-center lg:flex-row">
          <div className="testimonalsLeft text-left space-y-4 my-4 mx-4 lg:max-w-[50vw] lg:mx-auto">
            <h1 className="text-4xl font-bold lg:text-6xl">
              In-Depth Project Planning
            </h1>
            <p className="text-gray-500 text-xl lg:text-3xl">
              Prioritize tasks for the whole team from one central place, manage
              all resources, set clear goals, and control costs.
            </p>
            <span className="text-purple-600   text-lg lg:text-2xl">
              Learn More -
            </span>
          </div>
          <img
            className="testimonalsRight mr-2  lg:w-[35vw]"
            src="https://www.ntaskmanager.com/wp-content/uploads/2022/01/homeProject3.png"
            alt=""
          />
        </div>
        <div className="box box2 flex flex-col items-center lg:flex-row-reverse space-x-16">
          <div className=" testimonalsLeft text-left space-y-4 my-4 mx-4 lg:max-w-[60vw] lg:ml-24">
            <h1 className="text-4xl font-bold lg:text-6xl">
              Crystal-clear Project Updates
            </h1>
            <p className="text-gray-500 text-xl lg:text-3xl">
              Design your own workflows, set task reminders, use predefined
              templates, or make your own, without limits.
            </p>
            <span className="text-purple-600 text-lg lg:text-2xl">
              Learn More -
            </span>
          </div>
          <img
            className="testimonalsRight  lg:w-[35vw]"
            src="https://www.ntaskmanager.com/wp-content/uploads/2022/03/MicrosoftTeams-image-1.png"
            alt=""
          />
        </div>
        <div className="box box3 flex flex-col items-center lg:flex-row">
          <div className="testimonalsLeft text-left space-y-4 my-4 mx-4 lg:max-w-[50vw] lg:mx-auto">
            <h1 className="text-4xl font-bold lg:text-6xl">Track Time Spent</h1>
            <p className="text-gray-500 text-xl lg:text-3xl">
              Log time spent on projects, mark time as billable or non-billable,
              know exactly how your team is spending time.
            </p>
            <span className="text-purple-600 text-lg lg:text-2xl">
              Learn More -
            </span>
          </div>
          <img
            className="testimonalsRight lg:w-[35vw]"
            src="https://www.ntaskmanager.com/wp-content/uploads/2022/03/MicrosoftTeams-image-3.png"
            alt=""
          />
        </div>
        <div className="box box4 flex flex-col items-center lg:flex-row-reverse space-x-16">
          <div className="testimonalsLeft text-left space-y-4 my-4 mx-4 lg:max-w-[80vw] lg:ml-24">
            <h1 className="text-4xl font-bold lg:text-6xl">
              Less Meetings, Better Meetings
            </h1>
            <p className="text-gray-500 text-xl lg:text-3xl">
              Have clear agendas, use any calendar platform, manage meeting
              outcomes like a pro.
            </p>
            <span className="text-purple-600 text-lg lg:text-2xl">
              Learn More -
            </span>
          </div>
          <img
            className="testimonalsRight lg:w-[35vw]"
            src="https://www.ntaskmanager.com/wp-content/uploads/2022/03/MicrosoftTeams-image-4.png"
            alt=""
          />
        </div>
      </div>
      <div className="section_5">
        <h1 className="text-3xl text-center text-neutral-700 lg:text-5xl">
          Trusted by 500+ teams
        </h1>
        <div className="m-8 space-y-12 lg:grid grid-cols-3 gap-4">
          <div className="border shadow-md border-gray-300  rounded-2xl text-lg p-2.5 space-y-6">
            <p>
              Workspace is an intuitive to-do{" "}
              <span className="text-purple-500 font-bold bg-purple-200 p-0.5">
                website offering efficient task managemen
              </span>
              t with a clean interface.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="rounded-full w-12 h-11 border"
              />
              <p className="text-md text-neutral-600">Matt Bond</p>
            </div>
          </div>
          <div className="border shadow-md border-gray-300  rounded-2xl text-lg p-2.5 space-y-6">
            <p>
              Workspace
              <span className="text-purple-500 font-bold bg-purple-200 p-0.5">
                Clean design, easy task management,
              </span>
              and quick syncing.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="rounded-full w-12 h-11 border"
              />
              <p>Ethan Rivers.</p>
            </div>
          </div>
          <div className="border shadow-md border-gray-300  rounded-2xl text-lg p-2.5 space-y-6">
            <p>
              Workspace
              <span className="text-purple-500 font-bold bg-purple-200 p-0.5">
                Simplifies to-do lists with seamless organization.
              </span>
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
                className="rounded-full w-12 h-12 border"
              />
              <p>Ava Sinclair.</p>
            </div>
          </div>
          <div className="border shadow-md border-gray-300  rounded-2xl text-lg p-2.5 space-y-6">
            <p>
              Workspace
              <span className="text-purple-500 font-bold bg-purple-200 p-0.5">
                Clean design, easy task management,
              </span>
              and quick syncing.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1675129779554-dc86569708c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="rounded-full w-12 h-12 border"
              />
              <p>Liam Bennett.</p>
            </div>
          </div>
          <div className="border shadow-md border-gray-300  rounded-2xl text-lg p-2.5 space-y-6">
            <p>
              Workspace
              <span className="text-purple-500 font-bold bg-purple-200 p-0.5">
                Simple, effective task management{" "}
              </span>
              with seamless syncing and customization.
            </p>
            <div className="flex items-center space-x-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww"
                alt=""
                className="rounded-full w-12 h-12 border"
              />
              <p>Sam William</p>
            </div>
          </div>
        </div>
      </div>
      <div className="section_6 rounded-md flex flex-col justify-center items-center text-center space-y-3 my-10 max-w-[85vw] mx-auto">
        <h1 className="text-4xl  text-neutral-600 lg:text-5xl">
          Get Started for free.
        </h1>
        <p className="text-lg text-gray-500">
          Play around with it first.{" "}
          <span className="underline">Pay and add your team later.</span>
        </p>
        <button className="cssbuttons-io-button bg-purple-600 text-white pl-4 pr-20  rounded-lg flex items-center overflow-hidden relative text-xl h-14  shadow-md lg:ml-4  lg:text-xl">
          Get started
          <div className="icon  bg-white ml-4 absolute flex items-center justify-center h-[2.1em] w-[2.1em] rounded-[0.7em] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] right-[0.3em] transition-all duration-300">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
