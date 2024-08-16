import React, { useState } from "react";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import Carousel from "@/components/carousel";

const sliderImg = [
  {
    imgUrl:
      "https://images.unsplash.com/photo-1721367632166-0d851a5349af?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imgUrl:
      "https://images.unsplash.com/photo-1723376779603-69f15cdfa034?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    imgUrl: "./images/Image (2).png",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <section className="flex flex-col gap-2">
        <section className=" w-2/3  relative  overflow-hidden mx-auto">
          <Carousel sliderImg={sliderImg} currentIndex={currentIndex} />
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
        <div className="flex ml-[79%] gap-2">
          <button
            className="border-[1px] rounded-sm h-5 w-5 text-center border-slate-600 text-[10px]"
            onClick={() => setCurrentIndex(currentIndex - 1)}
          >
            <SlArrowLeft className="hover:text-yellow-300 " />
          </button>
          <button
            className="border-[1px] rounded-sm h-5 w-5 border-slate-600 text-center pl-1"
            onClick={() => setCurrentIndex(currentIndex + 1)}
          >
            <SlArrowRight className="hover:text-yellow-300 text-[10px]" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Slider;
