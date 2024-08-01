import Image from "next/image";
import { Inter } from "next/font/google";
import { Main } from "next/document";
import Content from "@/components/content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Content/>
      

    </main>
  )
}
  