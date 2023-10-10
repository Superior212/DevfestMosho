import React from "react";
import star from "../assets/Star.png";

const Marquee = () => {
  return (
    <div>
      <div className="marquee-container">
        <div className="bg-[#EA4335] h-20 flex items-center px-4 mt-20 w-[105%]  overscroll-auto">
          <h1 className="text-3xl font-bold">
            Stay tuned for further updates!
          </h1>
          <img src={star} className="mx-6" alt="" />
          <h1 className="text-3xl font-bold">
            Stay tuned for further updates!
          </h1>
          <img src={star} className="mx-6" alt="" />
          <h1 className="text-3xl font-bold">
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
      <div className="bg-[#F9AB00] h-20 flex items-center px-4 w-full  rotate-[-6deg] absolute top-[36rem] overscroll-auto w-[103%]">
        <h1 className="text-3xl font-bold">Stay tuned for further updates!</h1>
        <img src={star} className="mx-6" alt="" />
        <h1 className="text-3xl font-bold">Stay tuned for further updates!</h1>
        <img src={star} className="mx-6" alt="" />
        <h1 className="text-3xl font-bold">Stay tuned for furt</h1>
      </div>
    </div>
  );
};

export default Marquee;
