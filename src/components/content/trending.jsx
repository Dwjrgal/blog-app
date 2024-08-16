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
  const [cards, setCards] = useState([]);
  const getTrendingData = async () => {
    const res = await fetch(
      " https://dev.to/api/articles?page=1&per_page=4&top=1"
    );
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
          <div className="flex gap-5 relative">
            {cards.map((cards) => (
              <Link href={"/blog/" + cards.id}>
                <div>
                  <img
                    className="md:h-60 md:w-[218px] rounded-md h-40 w-40 bg-blend-darken relative"
                    src={cards.social_image}
                  />
                  <div className="pl-2 bg-transparent">
                    {/* <p className="text-[11px] h-5 w-24  text-blue rounded-md text-center bg-indigo-400 text-white font-extralight absolute top-24">
                    {cards.type_of}
                  </p> */}
                    {/* <h5 className="text-sm w-48 text-white font-bold absolute top-28">
                    {cards.title}
                  </h5> */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Trending;
