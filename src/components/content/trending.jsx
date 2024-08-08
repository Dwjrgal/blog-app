import React from "react";

const cards = [
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/post-card-overlay.svg",
  },
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "./images/post-card-overlay.png",
  },
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "/images/rec.png",
  },
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "/images/rec-2.png",
  },
];

const Trending = () => {
  return (
    <>
      <h2 className="font-bold text-xl md:text-bold">Trending</h2>
      <div className="flex gap-4 flex-col items-center ">
        <div className="md:flex md:gap-6">
          {cards.map((cards) => (
            <div className="relative flex flex-col sm:flex justify-end">
              {/* <h4 className=" hidden  md:flex border-none h-5 w-20 rounded bg-blue-600 font-extralight text-white text-center pl-2 text-xs absolute top-24 ml-2">
                {cards.title}
              </h4>
              <p className="h-[70px] w-[160px] flex  text-[11px] absolute top-30 font-semibold pl-2 text-white ">
                {cards.text}{" "}
              </p> */}
              <img
                className="md:h-56 md:w-52 rounded-md h-40 w-40 bg-blend-darken "
                src={cards.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
