import React, { useState, useEffect } from "react";
import arrow from "../../assets/images/arrow.png";
import AOS from "aos";
import "aos/dist/aos.css";

const COUNTDOWN_TARGET = new Date("2023-12-01T00:00:00Z").getTime();

const getRemainingTime = () => {
  const now = new Date();
  const targetDate = new Date(COUNTDOWN_TARGET);
  const monthsRemaining =
    (targetDate.getFullYear() - now.getFullYear()) * 12 +
    (targetDate.getMonth() - now.getMonth());
  const totalTimeLeft = COUNTDOWN_TARGET - now;
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);

  return { months: monthsRemaining, days, hours, minutes, seconds };
};

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(() => getRemainingTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getRemainingTime());
    }, 1000);
    AOS.init({ duration: 2000 });
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className="md:mt-24"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false">
      <div className="">
        <img
          src={arrow}
          className="w-20 md:w-40 relative top-40 md:top-0 md:left-[34rem]"
          alt=""
        />
      </div>
      <div className="md:flex items-center justify-center  gap-x-4 md:gap-x-12">
        <div className="flex justify-center items-center flex-col mb-20 md:mb-0">
          <h1 className="bg-[#34A853] text-white px-20 py-4 rounded mb-3">
            Time is ticking....
          </h1>
          <p className="text-sm">Count Every Second Until The Event</p>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center gap-3">
            <div className="flex justify-center items-center flex-col bg-[#4285F4] text-white p-1 rounded w-[3.5rem]">
              <h1 className="text-2xl font-bold">{timeLeft.months}</h1>
              <p className="text-xs">Months</p>
            </div>
            <div className="flex justify-center items-center flex-col bg-[#34A853] text-white p-1 rounded w-[3.5rem]">
              <h1 className="text-2xl font-bold">{timeLeft.days}</h1>
              <p className="text-xs">Days</p>
            </div>
            <div className="flex justify-center items-center flex-col bg-[#F9AB00] text-white p-1 rounded w-[3.5rem]">
              <h1 className="text-2xl font-bold">{timeLeft.hours}</h1>
              <p className="text-xs">Hours</p>
            </div>
            <div className="flex justify-center items-center flex-col bg-[#EA4335] text-white p-1 rounded w-[3.5rem]">
              <h1 className="text-2xl font-bold">{timeLeft.minutes}</h1>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="flex justify-center items-center flex-col bg-[#5F6368] text-white p-1 rounded w-[3.5rem]">
              <h1 className="text-2xl font-bold">{timeLeft.seconds}</h1>
              <p className="text-xs">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
