import React, { useState } from "react";
import { useEffect } from "react";

const posts = [
  {
    photo: "./images/Rectangle 38.png",
    badge: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1720048169707-a32d6dfca0b3?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Design",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1722111091429-dd3dc55979d3?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    photo: "./images/image-14.avif",
    badge: "Software",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    photo: "./images/screen.avif",
    badge: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
  {
    photo: "./images/image-12.avif",
    badge: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
  },
];

const AllPost = () => {
  const [articles, setArticles] = useState([]);

  const getArticlesData = async () => {
    const response = await fetch(
      "https://dev.to/api/articles?page=1& per_page=9"
    );
    const data = await response.json();
    setArticles(data);
    // console.log("data", data);
  };

  useEffect(() => {
    getArticlesData();
  }, [articles]);

  return (
    <div className="mt-24 flex flex-col gap-6 mx-20">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-md sm:text-lg font-bold">All Blog Post</h3>
          <ul className="hidden md:flex gap-6 text-[10px] font-semibold">
            <li className=" hover:text-orange-500">All</li>
            <li className=" hover:text-orange-500">Design</li>
            <li className=" hover:text-orange-500">Travel</li>
            <li className=" hover:text-orange-500">Fashion</li>
            <li className=" hover:text-orange-500">Technology</li>
            <li className=" hover:text-orange-500">Branding</li>
          </ul>
        </div>
        <button className="text-center  rounded w-20 text-xs h-5 font-semibold text-[10px]">
          View all
        </button>
      </div>
      <section className="md:grid md:grid-cols-3 md:gap-4  gap-2 md:items-center">
        {articles.map((card) => (
          <div className="md:w-[280px] w-[200px] h-[300px] md:h-[340px] border rounded flex flex-col gap-3 justify-center items-start pl-4">
            <img
              className="md:h-[160px] md:w-[240px] rounded-md"
              src={card.social_image}
              alt=""
            />
            <span className="text-[11px] h-5 w-24  text-blue rounded-md text-center bg-slate-200 text-indigo-600 font-extralight">
              {card.type_of}
            </span>
            <p className=" sm:h-[80px] sm:w-[230px]  sm:text-[14x] sm:font-semibold  sm:font-base">
              {card.title}
            </p>

            <p className="text-[11px] font-extralight text-gray-600">
              {card.published_at}
            </p>
          </div>
        ))}
        <button className=" hidden md:flex h-10 w-24 border rounded-md text-xs md:pl-2 md:pt-3 font-extralight text-gray-500 mx-[160%] my-20">
          Load More
        </button>
      </section>
    </div>
  );
};

export default AllPost;
