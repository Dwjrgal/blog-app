import React from "react";

const About = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4>About</h4>
      <p className="h-[120px] w-[260px] text-start font-extralight text-[14px]">
        Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. Impedit
        ex nostrum nesciunt, <br /> voluptates sed corporis <br />
        molestiae esse voluptas eligendi similique{" "}
      </p>
      <ul className="flex flex-col gap-2 mt-4 font-light text-[12px]">
        <li>Email: info@jstemplate.net</li>
        <li>Phone : 880 123 456 789</li>
      </ul>
      {/* <img className="h-[45px] w-[80px]" src="./images/Logo.png" alt="" /> */}
    </div>
  );
};

export default About;
