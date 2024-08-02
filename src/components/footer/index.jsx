import React from "react";
import Menu from "./menu";
import Links from "./links";
import About from "./about";

const Footer = () => {
  return (
    <div className="flex">
      <About />
      <Links />
      <Menu />
    </div>
  );
};

export default Footer;
