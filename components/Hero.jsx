import Link from "next/link";
import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div
      className="flex items-center relative justify-center h-screen  bg-fixed bg-center w-full ease-in duration-300"
      id="custom_img"
    >
      <div className=" w-full absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-white/70 to-cyan-100/60  z-[2] flex items-center justify-center">
        <div className="p-5 md:w-4/5 w-11/12 md:text-left text-center text-white mt-10">
          <h2
            data-aos="fade-up"
            data-aos-delay="0"
            className="lg:text-8xl text-5xl lg:w-2/3 text-cyan-900 font-serif"
          >
            {heading}
          </h2>
          <br />
          <p
            data-aos="fade-up"
            data-aos-delay="50"
            className="py-5 lg:w-1/2 text-slate-900 font-light font-regular text-lg "
          >
            {message}
          </p>
          <br />
          <Link href="#contacts">
            <button>
              {" "}
              <span>GET IN TOUCH</span>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
