import React from "react";
import box from "../../assets/images/box.png";

const EventSchedule = () => {
  return (
    <div className="mt-8 md:mt-20">
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-bold md:text-[1.8rem] mb-1 md:mb-3 ">Event Schedule</h1>

        <div className="flex gap-x-2  mb-4 md:mb-12 ">
          <img src={box} className="w-[8px]" alt="" />
          <img src={box} className="w-[8px]" alt="" />
          <img src={box} className="w-[8px]" alt="" />
          <img src={box} className="w-[8px]" alt="" />
          <img src={box} className="w-[8px]" alt="" />
          <img src={box} className="w-[8px]" alt="" />
          <img src={box} className="w-[8px]" alt="" />
          <img src={box} className="w-[8px]" alt="" />
        </div>
        <p className="text-md md:text-sm md:mr-[20rem] px-8 md:px-0">
          Start the day with networking, meet and greet before the event kicks
          off.
        </p>

        <div class="">
          <table class="md:w-[49rem] mx-2 md:mx-0  text-left border my-4">
            <thead class=" text-gray-700">
              <tr>
                <th
                  scope="col"
                  class="px-1 md:px-6 py-3 text-xs md:text-[16px] border-r">
                  Dec 1
                </th>
                <td scope="row" class="px-3 md:px-6 py-4">
                  <h1 className="font-bold mb-2 text-xs md:text-[16px]">
                    Workshop
                  </h1>
                  <p className="text-xs md:text-sm">
                    Hackathon, PWA, Hands on (Flutter, Design, Cloud, Web,
                    Android, Machine Learning)
                  </p>
                </td>
              </tr>
              <tr class=" border ">
                <th
                  scope="col"
                  class="px-2 md:px-6 py-3 text-xs md:text-[16px] border-r">
                  Dec 2
                </th>
                <td class="px-3 md:px-6 py-4">
                  <h1 className="font-bold mb-2 text-xs md:text-[16px]">
                    Main Event
                  </h1>
                  <p className="text-xs md:text-sm">
                    Networking, Fireside chat, Panel Session, Speaking Session,
                  </p>
                </td>
              </tr>
            </thead>
            {/* <thead class=" text-gray-700 uppercase ">
              <tr class=" border ">
                <th scope="col"  class="px-2 md:px-6 py-3 text-xs md:text-[16px] border-r">
                  Dec 2
                </th>
                <td class="px-3 md:px-6 py-4">
                  <h1 className="font-bold mb-2 text-xs md:text-[16px]">Main Event</h1>
                  <p  className="text-xs md:text-sm">
                    Networking, Fireside chat, Panel Session, Speaking Session,
                  </p>
                </td>
              </tr>
            </thead> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
