import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import Search from "./search";

const Header = () => {
  return (
    <header className="flex justify-between px-16">
      <Logo />
      <Menu />
      <Search />
    </header>
  );
};

export default Header;
