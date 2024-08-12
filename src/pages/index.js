import Image from "next/image";
import { Inter } from "next/font/google";
import { Main } from "next/document";
import Content from "@/components/content";
import AllPost from "@/components/all-post/all-post";
import { useContext, useState } from "react";
import { SearchContext } from "@/provider/search-provider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { searchValue } = useContext(SearchContext);
  // const [searchValue, setSearchValue] = useState("");
  const [articles, setArticles] = useState([]);

  const hanldeChange = (text) => {
    setSearchValue(text.target.value);
    const findArticle = articles.filter((articleTitle) =>
      articles.articleTitle
        .toLowerCase()
        .includes(text.target.value.toLowerCase())
    );
    setArticles(findArticle);
  };

  return (
    <main className="flex flex-col items-center">
      <Content />
      <AllPost />
    </main>
  );
}
