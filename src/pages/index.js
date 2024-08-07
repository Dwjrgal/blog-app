import Image from "next/image";
import { Inter } from "next/font/google";
import { Main } from "next/document";
import Content from "@/components/content";
import AllPost from "@/components/all-post/all-post";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* {articles.map((article) => {
        console.log("article", article);
        return <AllPost title={article.title} />;
      })} */}
      <Content />
      <AllPost />
    </main>
  );
}
