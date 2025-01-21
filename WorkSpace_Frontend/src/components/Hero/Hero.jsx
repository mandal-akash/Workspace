import React, { useEffect, useRef } from "react";
import "../Hero/style.css";
import Curve from "../../../public/Curve/curve_line (2).png";
import Marquee from "react-fast-marquee";
const Hero = () => {
  return (
    <div className="main">
      <div className="section_1 py-16 flex lg:flex-row flex-col items-center  lg:justify-around relative">
        <div className="">
          <div className="space-y-3 px-2 heading text-5xl lg:text-8xl font-bold lg:w-[60%] text-neutral-800 ">
            <div className="flex items-center justify-around">
              <div className="">
                <img src="../../../public/sec_1_a.png" alt="" className="w-[85%]"/>
              </div>
              <h1>StreamLine Your Task</h1>
            </div>
            <div className="space-y-3">
              <h1 className="lg:text-9xl text-6xl text-red-500">Simplify</h1>
              <h1 className="lg:text-right">Your Day</h1>
            </div>
          </div>
        </div>
        <div className="">
          <img src="../../../public/sec_1_line.png" alt="" className="absolute lg:top-[4.5rem] lg:right-[30rem] lg:w-[32%] lg:-rotate-[49deg] top-32 right-0 w-[60%] hidden lg:inline"/>
        </div>
        <div className="relative">
          <img src="../../../public/sec_1.png" alt="" className="lg:w-[100%] w-[80%] mx-auto"/>
        </div>
      </div>
      <div className="section_2 mt-[100px] lg:mt-[200px]  py-8">
        <div className="w-[100%] text-center lg:w-[70%] space-y-5 lg:mx-auto">
          <div className="relative">
            <div className="relative">
              <img
                src={Curve}
                alt=""
                className="absolute -top-16 w-[90%] z-0 rotate-[1deg] lg:w-[25%] lg:rotate-[25deg]"
              />
              <img
                src={Curve}
                alt=""
                className="absolute top-[] w-[90%]  z-0 rotate-[1deg] lg:left-32 lg:w-[70%] lg:rotate-[2deg] lg:-top-24"
              />
            </div>
            <h1 className=" text-3xl font-bold relative text-neutral-700 lg:text-6xl">
              Key Benefits to Help You Achieve{" "}
              <span className="bg-purple-400 m-2 lg:bg-purple-500 lg:p-2 p-0.5 rounded-lg text-white">
                Outstanding
              </span>{" "}
              Results
            </h1>
            <p className="font-sans text-xl lg:my-8 my-6 text-gray-500 lg:text-2xl">
              Organize knowledge, manage projects, share ideas, and more.
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center lg:my-44 my-16 relative">
            <div className="bg-[#55efc4] space-y-8 h-[40vh] w-[80%] mx-auto rounded-xl shadow-xl p-4 lg:w-[25%] lg:h-[58vh] relative">
              {" "}
            </div>
            <div className="bg-[#f1f2f6] rounded-2xl shadow-lg w-[75%] h-[40vh] lg:w-[25%] lg:h-[55vh] absolute -top-12 lg:-top-12 left-20 lg:left-48">
              <img
                src="../../../public/images/box-1.png"
                alt="Overlapping Box"
                className="w-[100%]"
              />
            </div>

            <div className="">
              <img
                src="../../../public/images/mark.png"
                alt=""
                className="absolute -z-[0] lg:-top-28  lg:right-[200px] lg:w-[30rem] right-[20px] w-[22rem]"
              />
            </div>

            <div className="text-center lg:w-[40%] my-14 space-y-10 relative">
              <h1 className="text-4xl text-neutral-700 lg:text-5xl">
                Organize Efficiently
              </h1>
              <p className="text-xl text-gray-800 lg:text-2xl">
                Effortlessly create to-do lists, set priorities, and track
                deadlines with our intuitive task management feature.
              </p>
              <button className="text-xl my-4 font-semibold shadow-xl text-white bg-neutral-600 p-3 rounded-lg">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse lg:justify-around lg:items-center lg:my-44 my-16 relative">
            <div className="bg-[#ffb8b8] space-y-8 h-[40vh] w-[80%] mx-auto rounded-xl shadow-xl p-4 lg:w-[25%] lg:h-[58vh] relative"></div>
            <div className="bg-[#ff914d] rounded-2xl shadow-lg w-[75%] h-[40vh] lg:w-[25%] lg:h-[55vh] -top-12 lg:-top-12 left-20 lg:left-[52%] absolute">
              <img
                src="../../../public/images/box-2.png"
                alt=""
                className=" w-[100%]"
              />
            </div>
            <img
              src="../../../public/images/circle.png"
              alt=""
              className="absolute top-[17rem] lg:-top-24 lg:-left-0"
            />
            <div className="text-center lg:w-[40%] my-14  lg:space-y-24 space-y-12 relative">
              <h1 className="text-4xl text-neutral-700 lg:text-5xl">
                Visual Organization
              </h1>
              <div className="">
                <p className="text-xl text-gray-800 lg:text-2xl">
                  Store and organize images seamlessly on WorkSpace. Whether
                  it's for work projects or personal use.
                </p>
                <button className="text-xl my-4 font-semibold shadow-xl text-white bg-neutral-600 p-3 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center relative lg:mt-44 mt-16">
            <div className="bg-[#ffb142] space-y-8 h-[40vh] w-[80%] mx-auto rounded-xl shadow-xl p-4 lg:w-[25%] lg:h-[58vh] relative"></div>
            <div className="bg-[#3ae374] rounded-2xl shadow-lg w-[75%] h-[40vh] lg:w-[25%] lg:h-[55vh] -top-12 lg:-top-12 left-20 lg:left-48 absolute">
              <img
                src="../../../public/images/box-3.png"
                alt=""
                className=" w-[100%]"
              />
            </div>
            <div className="">
              <img
                src="../../../public/images/line-3.png"
                alt=""
                className="absolute lg:w-[33rem] top-60 lg:top-6 lg:right-6"
              />
              <img
                src="../../../public/images/line-3.png"
                alt=""
                className="absolute lg:w-[33rem] lg:-top-20 lg:right-6"
              />
            </div>
            <div className=" text-center lg:w-[40%] my-14 space-y-10 relative">
              <h1 className="text-4xl text-neutral-700 lg:text-5xl">
                Enhanced Teamwork
              </h1>
              <div className="">
                <p className="text-xl text-gray-800">
                  Facilitate team collaboration by sharing to-do lists, images,
                  and reminders with your colleagues.
                </p>
                <button className="text-xl my-4 font-semibold shadow-xl text-white bg-neutral-600 p-3 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_3 space-y-28 lg:my-24">
        <h1 className=" heading text-4xl font-bold text-center text-neutral-700 lg:text-6xl">
          WHY <span className="bg-rose-500 lg:p-4 p-19 text-white">USERS</span>{" "}
          LOVE US
        </h1>
        <div className="">
          <Marquee>
            <div className="card mx-12 shadow-2xl p-3">
              <div className="container space-y-6">
                <p className="text-xl">
                  Workspace
                  <span className="text-purple-500 font-bold bg-purple-200 p-1">
                    Clean design, easy task management,
                  </span>
                  and quick syncing.
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500"
                    alt=""
                    className="rounded-full w-11 h-11 border"
                  />
                  <p className="text-xl font-semibold text-neutral-500">
                    Ethan Rivers.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mx-12 shadow-2xl p-3">
              <div className="container space-y-6">
                <p className="text-xl">
                  Workspace
                  <span className="text-purple-500 font-bold bg-purple-200 p-1">
                    Simplifies to-do lists with seamless organization.
                  </span>
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src=""
                    alt=""
                    className="rounded-full w-11 h-11 border"
                  />
                  <p className="text-xl font-semibold">Ava Sinclair.</p>
                </div>
              </div>
            </div>
            <div className="card mx-12 shadow-2xl p-3">
              <div className="container space-y-6">
                <p className="text-xl">
                  Workspace
                  <span className="text-purple-500 font-bold bg-purple-200 p-1">
                    Clean design, easy task management,
                  </span>
                  and quick syncing.
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500"
                    alt=""
                    className="rounded-full w-11 h-11 border"
                  />
                  <p className="text-xl font-semibold text-neutral-500">
                    Ethan Rivers.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mx-12 shadow-2xl p-3">
              <div className="container space-y-6">
                <p className="text-xl">
                  Workspace
                  <span className="text-purple-500 font-bold bg-purple-200 p-1">
                    Simplifies to-do lists with seamless organization.
                  </span>
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=500"
                    alt=""
                    className="rounded-full w-12 h-12 border"
                  />
                  <p className="text-xl font-semibold">Ava Sinclair.</p>
                </div>
              </div>
            </div>
          </Marquee>
          <Marquee direction="right" className="my-6">
            <div className="card mx-12 shadow-2xl p-3">
              <div className="container space-y-6">
                <p className="text-xl">
                  Workspace
                  <span className="text-purple-500 font-bold bg-purple-200 p-1">
                    Clean design, easy task management,
                  </span>
                  and quick syncing.
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500"
                    alt=""
                    className="rounded-full w-11 h-11 border"
                  />
                  <p className="text-xl font-semibold text-neutral-500">
                    Ethan Rivers.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mx-12 shadow-2xl p-3">
              <div className="container space-y-6">
                <p className="text-xl">
                  Workspace
                  <span className="text-purple-500 font-bold bg-purple-200 p-1">
                    Simplifies to-do lists with seamless organization.
                  </span>
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src=""
                    alt=""
                    className="rounded-full w-11 h-11 border"
                  />
                  <p className="text-xl font-semibold">Ava Sinclair.</p>
                </div>
              </div>
            </div>
            <div className="card mx-12 shadow-2xl p-3">
              <div className="container space-y-6">
                <p className="text-xl">
                  Workspace
                  <span className="text-purple-500 font-bold bg-purple-200 p-1">
                    Clean design, easy task management,
                  </span>
                  and quick syncing.
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500"
                    alt=""
                    className="rounded-full w-11 h-11 border"
                  />
                  <p className="text-xl font-semibold text-neutral-500">
                    Ethan Rivers.
                  </p>
                </div>
              </div>
            </div>
            <div className="card mx-12 shadow-2xl p-3">
              <div className="container space-y-6">
                <p className="text-xl">
                  Workspace
                  <span className="text-purple-500 font-bold bg-purple-200 p-1">
                    Simplifies to-do lists with seamless organization.
                  </span>
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=500"
                    alt=""
                    className="rounded-full w-12 h-12 border"
                  />
                  <p className="text-xl font-semibold">Ava Sinclair.</p>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="section_4 lg:py-40 py-52 h-[100vh] space-y-10 flex flex-col items-center text-center relative">
        <div className="">
          <img src="../../../public/sec_4_pattern.png" alt="" className="absolute -bottom-5 w-[80%] left-2 lg:w-[30%]"/>
          <img src="../../../public/pattern2.png" alt="" className="absolute top-0 w-[50%] right-2 lg:w-[30%]"/>
          <img src="../../../public/sec_4_circle.png" alt="" className="absolute w-[25%] top-60 right-0 lg:w-[15%] lg:right-64 lg:top-52"/>
        </div>
          <div className=":space-y-20 space-y-1 lg:w-[50%]">
            <h1 className="text-[2.5rem] lg:text-[8rem] text-neutral-700">Get Started</h1>
            <p className="text-base text-gray-400 lg:text-2xl">Boost productivity and collaboration with our workspace tools. Get started today and transform the way your team works!</p>
          </div>
          <button className="bg-red-400 text-white py-3 text-2xl px-4  rounded-md">Start for free</button>
      </div>
    </div>
  );
};

export default Hero;
