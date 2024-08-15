import React from "react";
import Slider from "./slider";
import Trending from "./trending";

const content = () => {
  return (
    <div>
      <Slider />
      <div className="flex items-center flex-col my-20">
        <Trending />
      </div>
    </div>
  );
};

export default content;
