import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <ul className="flex gap-5 p-5 text-sm md:text-[14px] text-slate-500 font-medium">
        <li className="hover:text-black">
          <Link href="/"> Home </Link>
        </li>
        <li className="hover:text-black">
          {" "}
          <Link href="/blog"> Blog </Link>
        </li>
        <li className="hover:text-black">
          {" "}
          <Link href="/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
