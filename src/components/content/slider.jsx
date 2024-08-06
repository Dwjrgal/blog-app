import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const Slider = () => {
  return (
    <section className="flex justify-center items-center relative mx-20">
      <img
        className="w-[400px] h-[200px] rounded-sm sm:w-[900px] sm:h-[500px] mt-10"
        src="./images/Image (1).png"
        alt=""
      />
      {/* <div>
        <SlArrowLeft />
        <SlArrowRight />
      </div> */}

      <div className="h-[80px] w-[120px] bg-slate-50 rounded-lg flex flex-col md:gap-6 absolute bottom-2 left-16 justify-center sm:pl-8  pl-4 gap-3 sm:w-[450px] sm:h-[200px]">
        <h4 className="h-[25px] w-[97px] text-center bg-blue-700 rounded-md text-white text-xs md:text-sm">
          Technology
        </h4>
        <p className="sm:font-bold sm:text-2xl text-[10px] font-semibold">
          Grid system for better <br /> Design User Interface
        </p>
        <span className="hidden md:flex text-xs text-gray-600 font-thin">
          August 20, 2022
        </span>
      </div>
    </section>
  );
};

export default Slider;
