import React from "react";
import Kite from "../../assets/kite.png";
import MasonryGrid from "./MasonryGrid";

const BackInTime = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-center rounded-lg bg-blue text-lightGray text-3xl sm:text-[40px] font-bold font-GoogleSans p-[20px] mx-auto md:mt-32 w-[90%] max-w-[992px]">
        Let’s travel back in time to DevFest Ogbomoso 2022
      </div>
      <div className="flex justify-center items-center my-12">
        <img src={Kite} className="w-68" alt="A flying kite" />
      </div>
      <div className="mb-44">
        <MasonryGrid />
      </div>
    </div>
  );
};

export default BackInTime;
