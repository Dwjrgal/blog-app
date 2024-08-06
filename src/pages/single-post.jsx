import React from "react";
import { IoIosContact } from "react-icons/io";

const SinglePost = () => {
  return (
    <section className="flex justify-center my-10">
      <div className="md:w-[600px] w-[300px] flex flex-col gap-3 md:flex md:flex-col md:gap-6">
        <h3 className="md:font-bold md:text-xl font-semibold text-sm">
          The Impact of Technology on the Workplace: <br />
          How Technology is Changing
        </h3>
        <div className="flex gap-3 items-center">
          <IoIosContact className="text-2xl text-slate-600" />
          <div className="flex gap-3 text-xs font-semibold text-slate-600">
            <span> Tracy Wilson</span>
            <p>August 20, 2022</p>
          </div>
        </div>
        <img src="./images/image (2).png" alt="" />
        <p className="md:text-sm text-xs">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.
        </p>

        <h5 className="md:font-bold font-semibold text-sm">
          Research Your Destination
        </h5>
        <p className="md:text-sm text-xs">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non
          tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper
          sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing
          vitae. Viverra adipiscing at in tellus.
        </p>
        <h5 className="md:font-bold font-semibold text-sm">
          Plan Your Itinerary
        </h5>
        <p className="md:text-sm text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut aperiam
          obcaecati officiis eligendi ab aliquam, alias quaerat nisi. Earum
          facilis soluta ea vero quas laboriosam praesentium minus saepe beatae
          doloribus?
        </p>
      </div>
    </section>
  );
};

export default SinglePost;
