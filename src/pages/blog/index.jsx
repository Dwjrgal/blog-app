import React from "react";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { SearchContext } from "@/provider/search-provider";

const Blog = () => {
  const { searchValue } = useContext(SearchContext);
  const [articles, setArticles] = useState([]);
  const [count, setCount] = useState(9);

  const getArticlesData = async () => {
    const response = await fetch(
      `https://dev.to/api/articles?page=1&per_page=${count}`
    );
    const data = await response.json();
    setArticles(data);
  };

  useEffect(() => {
    getArticlesData();
  }, [count]);

  const findPost = articles?.filter((cards) =>
    cards?.title?.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <section className="flex justify-center">
        <div className="mt-20 flex flex-col gap-6 mx-20">
          <h3 className="text-md sm:text-lg font-bold">All Blog Post</h3>
          <section className="md:grid md:grid-cols-3 sm:gap-6  gap-2 md:items-center">
            {findPost.map((card) => (
              <Link href={"/blog/" + card.id}>
                <div className="sm:w-[280px] sm:h-[340px] border rounded flex flex-col gap-3 justify-center items-start pl-4">
                  <img
                    className="sm:h-[160px] sm:w-[240px] rounded-md"
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
              </Link>
            ))}
          </section>
          <div className="flex justify-center">
            <button
              onClick={() => setCount(count + 3)}
              className=" h-10 w-24 border rounded-md text-xs text-center font-extralight text-gray-500  my-10 hover:border-emerald-300"
            >
              Load More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
