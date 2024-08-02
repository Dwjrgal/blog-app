import Image from "next/image";
import { Inter } from "next/font/google";
import { Main } from "next/document";
import Content from "@/components/content";
import AllPost from "@/components/all-post/all-post";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Content />
      <AllPost />
    </main>
  );
}
