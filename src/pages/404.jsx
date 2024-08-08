import React from "react";
import Link from "next/link";

const NotFoundPages = () => {
  return (
    <div className="h-80 pt-20">
      <section className="flex justify-center gap-8">
        <h1 className="text-center text-5xl font-extralight  pt-10 pr-8">
          404
        </h1>
        <div className="border-l-[1px]  pl-5  flex flex-col gap-5 justify-center">
          <h4 className="font-bold">Page Not Found</h4>
          <p className="text-sm">
            We're sorry, This page is unknown or does <br /> not exist the page
            you are looking for.
          </p>
          <button className="hidden md:flex bg-blue-700 text-white w-[100px] h-[30px] rounded-md text-center text-[12px] pl-2 py-1">
            <Link href="/">Back to home</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPages;
