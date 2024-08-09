import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { TbBrandTwitterFilled } from "react-icons/tb";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Menu from "./menu";

const About = () => {
  return (
    <>
      <section className="sm:flex sm:gap-40">
        <div className="md:flex md:flex-col md:gap-6">
          <h4 className="font-bold">About</h4>
          <p className="md:h-[120px] md:w-[260px] text-start font-extralight text-[12px] md:text-[14px]">
            Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit.
            Impedit ex nostrum nesciunt, <br /> voluptates sed corporis <br />
            molestiae esse voluptas eligendi similique{" "}
          </p>
          <ul className="flex flex-col gap-2 mt-4  font-semibold text-[12px] md:text-[12px]">
            <li>Email: info@jstemplate.net</li>
            <li>Phone : 880 123 456 789</li>
          </ul>
        </div>
        <Menu />
        <div className=" hidden md:flex md:gap-5 md:text-gray-500">
          <FaSquareFacebook className="hover:text-blue-700" />
          <TbBrandTwitterFilled className="hover:text-blue-500" />
          <FaSquareInstagram className="hover:text-rose-600" />
          <FaLinkedin className="hover:text-blue-600" />
        </div>
      </section>
    </>
  );
};

export default About;
