import Link from "next/link";
import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div
      className="flex items-center relative justify-center h-screen  bg-fixed bg-center w-full ease-in duration-300"
      id="custom_img"
    >
      <div className=" w-full absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2] flex items-center justify-center">
        <div className="p-5 md:w-4/5 w-11/12 md:text-left text-center text-white mt-10">
          <h2
            data-aos="fade-up"
            data-aos-delay="0"
            className="lg:text-8xl lg:w-2/3 text-slate-50 font-serif"
          >
            {heading}
          </h2>
          <br />
          <p
            data-aos="fade-up"
            data-aos-delay="50"
            className="py-5 lg:w-1/2 text-slate-50 text-xl"
          >
            {message}
          </p>
          <br />
          <button data-aos="fade-up" data-aos-delay="100">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
