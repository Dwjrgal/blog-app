import React from "react";
import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <ul className="flex flex-col gap-1 text-xs text-gray-500 font-medium">
        <li className=" hover:text-blue-600">
          <Link href="/"> Home </Link>
        </li>
        <li className=" hover:text-cyan-600">
          {" "}
          <Link href="/blog"> Blog </Link>
        </li>
        <li className=" hover:text-orange-400">
          {" "}
          <Link href="/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
