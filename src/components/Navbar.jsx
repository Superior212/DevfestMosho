import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center">
            <img src={logo} className="h-[3.4rem] mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-6 md:p-4 mt-4 border border-white rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white items-start">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#2D2D2D] rounded hover:bg-gray-100">
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="https://sessionize.com/devfest-ogbomoso-2023/"
                  target="_blank"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">
                  Call For Speakers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="https://bit.ly/devfest-ogbomoso-23" target="_blank">
                  <button className="block py-2 pl-3 pr-4 text-white hover:bg-blue-400 rounded-xl bg-[#4285F4]">
                    Grab Your Ticket
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
