import Link from "next/link";


const Menu = () => {
  return (
    <div>
      <ul className="flex gap-5 p-5 text-sm md:text-lg">
        <li><Link href= "/"> Home </Link></li>
        <li> <Link href= "/blog"> Blog </Link></li>
        <li> <Link href= "/contact"> Contact </Link></li>
      </ul>
    </div>
  );
};

export default Menu;
