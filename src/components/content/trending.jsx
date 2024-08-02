import React from "react";

const cards = [
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "https://plus.unsplash.com/premium_photo-1721980274417-8d3d99e69ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "https://plus.unsplash.com/premium_photo-1721980274417-8d3d99e69ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "https://plus.unsplash.com/premium_photo-1721980274417-8d3d99e69ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "technology",
    text: "The Impact of Technology on the Workplace: How Technology is Changing",
    img: "https://plus.unsplash.com/premium_photo-1721980274417-8d3d99e69ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Trending = () => {
  return (
    <>
      <div className="flex gap-4 flex-col mt-36">
        <h2 className="font-semibold text-md md:text-bold pl-6 ">Trending</h2>
        <div className="flex gap-6 justify-center">
          {cards.map((cards) => (
            <div className="relative flex flex-col sm:flex">
              <h4 className="border-none h-5 w-20 rounded bg-blue-600 font-extralight text-white text-center text-xs absolute top-20 ml-2">
                {cards.title}
              </h4>
              <p className="h-[70px] w-[160px] flex text-center text-xs absolute top-28 font-semibold text-white ">
                {cards.text}{" "}
              </p>
              <img className="md:h-48 md:w-44 rounded-md" src={cards.img} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
