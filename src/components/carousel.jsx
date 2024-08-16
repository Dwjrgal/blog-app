import React from "react";

const Carousel = ({ sliderImg, currentIndex }) => {
  return (
    <>
      <div
        className=" flex h-full transition-all duration-150"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderImg.map((sliderImg, i) => (
          <img
            className={`min-w-full h-[140px]  rounded-sm sm:w-[900px] sm:h-[500px] mt-10 ${sliderImg}`}
            src={sliderImg.imgUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
