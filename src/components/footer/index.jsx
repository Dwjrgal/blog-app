import React from "react";
import Menu from "./menu";
import Links from "./links";
import About from "./about";

const Footer = () => {
  return (
    <div className="flex flex-col px-20 bg-[#E8E8EA] pt-10">
      <div className="flex gap-20">
       <About />   
      </div>
      <Links />
    </div>
  );
};

export default Footer;
