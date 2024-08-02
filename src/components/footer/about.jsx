import React from "react";

const About = () => {
  return (
    <div className="flex flex-col  gap-4">
      <h4>About</h4>
      <p>
        Lorem ipsum dolor sit amet <br /> consectetur, adipisicing elit. <br />{" "}
        Impedit ex nostrum nesciunt, <br /> voluptates sed corporis <br />
        molestiae esse voluptas eligendi similique{" "}
      </p>

      <ul>
        <li>Email: info@jstemplate.net</li>
        <li>Phone : 880 123 456 789</li>
      </ul>
      {/* <img className="h-[45px] w-[80px]" src="./images/Logo.png" alt="" /> */}
    </div>
  );
};

export default About;
