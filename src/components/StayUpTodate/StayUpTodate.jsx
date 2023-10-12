import React from "react";
import image7 from "../../assets/images/image7.png";

const StayUpTodate = () => {
  return (
    <div className="mt-8 md:mt-20">
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold md:text-[1.4rem] mb-3 md:mb-5">
          Stay up to date!
        </h1>
        <p className="text-md md:text-xl mx-10 md:mx-0">
          Subscribe and we’ll send you updates and information about the event.
        </p>
        <div className="md:flex md:gap-x-8 my-8">
          <div>
            <img src={image7} className="w-[20rem] md:w-[26rem] " alt="" />
          </div>
          <div>
            <form action="" className="flex flex-col mt-4 md:mt-0">
              <input
                type="text"
                placeholder="Name"
                className="w-80 my-2 md:my-3 outline-none border-[#2D2D2D] rounded"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-80 my-2 md:my-5  outline-none border-[#2D2D2D] rounded"
              />
              <button className="bg-[#4285F4] text-white p-2 rounded my-2 md:my-3">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayUpTodate;
