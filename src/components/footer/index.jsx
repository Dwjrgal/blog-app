import React from "react";
import Menu from "./menu";
import Links from "./links";
import About from "./about";

const Footer = () => {
  return (
    <div className="flex flex-col px-40 bg-[#E8E8EA] pt-10">
      <div className="flex gap-20 items-center">
       <About />   
      </div>
      <Links />
    </div>
  );
};

export default Footer;
