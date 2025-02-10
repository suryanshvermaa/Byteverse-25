import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="w-full lg:h-20 h-16 bg-trasparent p-3 flex justify-end text-white">
      <div className="flex items-center justify-center lg:gap-10 gap-4">
        <div className="flex flex-row rounded-lg border-s border-gray-200 border-[1px] p-1">
          <div className="bg-white w-4 rounded-l-lg"></div>
          <button className="lg:px-2 px-1 font-bold py-0 bg-transparent rounded-r lg:text-xl text-xs">
            Brochure
          </button>
        </div>

        <div className="flex flex-row rounded-lg border-s border-gray-200 border-[1px] p-1">
          <button className="lg:px-2 px-1 font-bold py-0 bg-transparent rounded-r lg:text-xl text-xs">
            Menu
          </button>
          <div>
            <LuArrowUpRight
              color="white"
              className="lg:text-xl text-xl h-full"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
