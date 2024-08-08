import React from "react";
import Slider from "./slider";
import Trending from "./trending";

const content = () => {
  return (
    <div>
      <Slider />
      <div className="flex px-20 items-start flex-col my-20 gap-5">
        <Trending />
      </div>
    </div>
  );
};

export default content;
