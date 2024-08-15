import React, { useEffect, useState } from "react";
import Link from "next/link";


// const cards = [
//   {
//     title: "technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     img: "./images/post-card-overlay.svg",
//   },
//   {
//     title: "technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     img: "./images/post-card-overlay.png",
//   },
//   {
//     title: "technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     img: "/images/rec.png",
//   },
//   {
//     title: "technology",
//     text: "The Impact of Technology on the Workplace: How Technology is Changing",
//     img: "/images/rec-2.png",
//   },
// ];



const Trending = () => {
  const [cards, setCards] = useState([])
  const getTrendingData = async () => {
    const res = await fetch("https://dev.to/api/articles?page=1&top=1/3");
    const data = await res.json();
    setCards(data);
  };

  useEffect(() => {
    getTrendingData();
  }, []);

  return (
    <>
      <Link href="single-post">
        <h2 className="font-bold text-xl md:text-bold mb-2">Trending</h2>
        <div className="flex md:gap-4 items-center mx-30">
          {/* <div className="md:flex md:gap-6"> */}
          {cards.map((cards) => (
            <img
              className="md:h-56 md:w-52 rounded-md h-40 w-40 bg-blend-darken  "
              src={cards.social_image}
            />
          ))}
          {/* </div> */}
        </div>
      </Link>
    </>
  );
};

export default Trending;
