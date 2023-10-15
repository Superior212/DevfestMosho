import React, { useEffect, useState } from "react";
import star from "../assets/Star.png";

const Marquee = () => {
  return (
    <div>
      <div className="marquee-container">
        <div className="bg-[#EA4335] h-20 md:flex items-center px-4 md:mt-20 hidden   ">
          <div className=" md:flex items-center marquee-containers">
            <h1 className="hidden md:block text-[1.6rem] font-bold">
              Stay tuned for further updates!
            </h1>
            <img src={star} className="md:mx-6" alt="" />
            <h1 className="text-xl md:text-[1.5rem]  mx-auto md:mx-0 font-bold">
              Stay tuned for further updates!
            </h1>
            <img src={star} className="mx-6" alt="" />
            <h1 className="hidden md:block text-[1.6rem] font-bold">
              Stay tuned for further updates!
            </h1>
          </div>
        </div>

        <Marquee2 />
      </div>
    </div>
  );
};

const Marquee2 = () => {
  return (
    <div>
      <div className="marquee  ">
        <div className="bg-[#F9AB00] h-20 flex items-center px-4 md:w-[110%]  md:rotate-[-6deg] md:absolute left-[-10px] md:top-[36rem] ">
          <div className="flex items-center  px-4 marquee-containers">
            <h1 className="hidden md:block md:text-[1.6rem] font-bold">
              Stay tuned for further updates!
            </h1>
            <img src={star} className="md:mx-6 mr-1 md:mr-2 " alt="" />
            <h1 className="text-[0.9rem] md:text-[1.6rem] mx-auto md:mx-0 font-bold">
              Stay tuned for further updates!
            </h1>
            <img src={star} className="mx-6 ml-4 md:ml-2" alt="" />
            <h1 className="hidden md:block md:text-[1.6rem] font-bold">
              Stay tuned for further updates!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
