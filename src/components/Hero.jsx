import React from "react";
import rectangle from "../assets/rectangle.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";
import Rectangle4 from "../assets/Rectangle4.png";
import Rectangle5 from "../assets/Rectangle5.png";
import Component2 from "../assets/Component2.png";

const Hero = () => {
  return (
    <div className="md:flex">
      <div className="flex-wrap items-center justify-between md:mx-12 px-6 md:px-0 p-4 space-y-2 md:space-y-8 md:w-[60%]">
        <h1 className="text-2xl md:text-6xl font-bold text-ellipsis">
          Ogbomoso! DevFest 23”
        </h1>
        <h2 className="text-2xl md:text-6xl font-bold text-ellipsis">
          is Here!: 1st - 2nd Dec.
        </h2>

        <p>
          A 2-day, with more than 20 experts speakers delving into topics
          ranging from Artificial Intelligence and Machine Learning to Mobile,
          Cloud, Intellectual Property, Startup Financing, Policy and
          Governance, and beyond! DevFest Ogbomoso 2023 promises to be an
          unforgettable tech experience.
        </p>
        <div className="flex">
          <button
            href="#"
            className="block text-sm  my-4  md:my-1 md:text-md py-2  pl-2 pr-3 md:pl-3 md:pr-4 text-white hover:bg-blue-400 rounded-xl bg-[#4285F4]">
            Grab Your Ticket
          </button>
          <button
            href="#"
            className="block text-sm  my-4 md:my-1 md:text-md mx-8 py-2 pl-2 pr-2 md:pl-3 md:pr-4  border-2 hover:border-none text-black hover:bg-blue-400 rounded-xl bg-transparent">
            Call For Speakers
          </button>
        </div>
      </div>
      <div className="md:w-[40%] hidden md:block">
        <img src={Rectangle2} className="w-10" alt="" />
        <img
          src={Rectangle3}
          className="w-28 absolute left-[45rem] top-48"
          alt=""
        />
        <img src={rectangle} className="w-[23rem]" alt="" />
        <div className="flex gap-x-20">
          <img src={Rectangle4} className="w-[3.5rem] h-[3.5rem] my-6" alt="" />
          <img src={Rectangle5} className="w-8 mt-8 h-8 my-6" alt="" />
          <div className="flex items-center justify-center">
            <img
              src={Component2}
              alt=""
              className="w-44 h-44 rotating-image cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
