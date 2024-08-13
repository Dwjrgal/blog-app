import React from "react";
import Link from "next/link";
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
      <Link href="single-post">
        <h2 className="font-bold text-xl md:text-bold mb-2">Trending</h2>
        <div className="flex md:gap-4 items-center">
          {/* <div className="md:flex md:gap-6"> */}
          {cards.map((cards) => (
            <img
              className="md:h-56 md:w-52 rounded-md h-40 w-40 bg-blend-darken  "
              src={cards.img}
            />
          ))}
          {/* </div> */}
        </div>
      </Link>
    </>
  );
};

export default Trending;
