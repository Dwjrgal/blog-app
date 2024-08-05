import React from "react";

const Contact = () => {
  return (
    <>
      <div className="md:flex md:justify-center md:my-20 my-10">
        <section className="md:flex md:flex-col md:px-40">
          <h1 className="font-bold md:text-xl pl-8">Contact Us</h1>
          <p className="md:w-[643px]  h-[100px] md:h-[143px] mt-2 px-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            nesciunt similique incidunt modi velit quo optio, aliquam magni
            ipsa, quam reiciendis non deserunt ullam eius dicta, minus soluta
            vel rerum!
          </p>
          <div className=" flex  gap-16  px-8 ">
            <div className="border border-slate-400 rounded-md md:h-[120px] md:w-[280px] p-5">
              <h4 className="font-bold">Address</h4>
              <p className="font-base text-gray-600 text-sm pt-1">
                1328 Oak Ridge Drive,
                <br /> Saint Louis, Missouri
              </p>
            </div>
            <div className="border border-slate-400 rounded-md md:h-[120px] md:w-[280px] p-5">
              <h4 className="font-bold">Contact</h4>
              <p className="font-base text-gray-600 text-sm p-1">
                313-332-8662
                <br /> info@email.com
              </p>
            </div>
          </div>
          <div className="md:h-[400px] md:w-[643px] bg-[#F6F6F7] mt-10 flex flex-col gap-8 pl-10 py-8 rounded-md h-[250px] w-[400px]">
            <h5 className="font-bold">Leave a Message</h5>
            <div className="flex flex-col h-[200px] w-[300px] md:h-[300px] gap-4 md:w-[420px]">
              <div className=" flex  gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border rounded text-sm pl-2 py-1 w-[250px]"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border rounded text-sm pl-2 py-1 w-[250px]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border rounded text-sm pl-2 py-1"
              />
              <input
                type="text"
                placeholder="Write a message"
                className="border rounded md:h-[133px] md:w-[420px] pl-4"
              />
            </div>
            <button className="hidden md:flex bg-blue-700 text-white w-[110px] h-[40px] rounded-md text-center text-[12px] pl-2 py-1">
              Send Message
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
