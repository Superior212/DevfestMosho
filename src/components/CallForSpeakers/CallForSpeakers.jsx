import React from "react";
import speakers from "../../assets/images/speaker.png";

const CallForSpeakers = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-28 relative">
      <div className="h-[21rem] md:h-[30rem] w-[24rem] md:w-[50rem] bg-[#F9AB00] flex items-center justify-center  flex-col">
        <img
          src={speakers}
          className="w-[20rem] md:w-[42rem] md:absolute  md:top-[-40px]"
          alt=""
        />
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-y-0 md:gap-x-8 mt-3 md:mt-[24rem]">
          <button className="bg-[#EA4335]  hover:bg-white text-white hover:text-[#EA4335] md:hover:translate-x-3 text-xs p-2 md:p-4 w-60 md:w-80 rounded">
            Calling For Sponsorship: DevFest Ogbomoso 2023
          </button>
          <button className="bg-white hover:bg-[#4285F4] hover:border-none  text-[#4285F4] hover:text-white border  md:hover:translate-x-3 text-xs p-3 md:p-4 w-60 md:w-80 rounded">
            Call For Speakers
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallForSpeakers;
