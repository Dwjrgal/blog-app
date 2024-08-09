import React from "react";

const Links = () => {
  return (
    <div className="md:flex md:justify-between my-16 border-t-2 pt-6 border-zinc-300">
      <img className="h-8" src="./images/Copyright Info.svg" alt="" />
      <ul className="md:flex gap-5 hidden md:text-sm">
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul>
    </div>
  );
};

export default Links;
