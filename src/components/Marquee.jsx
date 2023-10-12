import React from "react";
import star from "../assets/Star.png";

const Marquee = () => {
  return (
    <div>
      <div className="marquee-container">
        <div className="bg-[#EA4335] h-20 md:flex items-center px-4 md:mt-20 hidden  ">
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

        <Marquee2 />
      </div>
    </div>
  );
};

const Marquee2 = () => {
  return (
    <div className="marquee ">
      <div className="bg-[#F9AB00] h-20 flex items-center px-4 w-full  md:rotate-[-6deg] md:absolute md:top-[36rem] ">
        <h1 className="hidden md:block md:text-[1.6rem] font-bold">Stay tuned for further updates!</h1>
        <img src={star} className="md:mx-6 " alt="" />
        <h1 className="text-xl md:text-[1.6rem] mx-auto md:mx-0 font-bold">Stay tuned for further updates!</h1>
        <img src={star} className="mx-6" alt="" />
        <h1 className="hidden md:block md:text-[1.6rem] font-bold">Stay tuned for further updates!</h1>
      </div>
    </div>
  );
};

export default Marquee;
