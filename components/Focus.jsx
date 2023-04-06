import React, { useState } from "react";

const tiles = [
  {
    name: "Child Custody",
    description:
      "We offer expert legal advice and representation for child custody cases, helping you protect the best interests of your child.",
    image: "/mkl1.jpg",
  },
  {
    name: "Divorce",
    description:
      "Our experienced divorce lawyers provide compassionate support and guidance through every step of the divorce process.",
    image: "/mkl2.jpg",
  },
  {
    name: "Estate Planning",
    description:
      "Our estate planning services help you ensure that your assets are distributed according to your wishes and your loved ones are taken care of.",
    image: "/mkl3.jpg",
  },
  {
    name: "Personal Injury",
    description:
      "If you've been injured due to someone else's negligence, we can help you get the compensation you deserve.",
    image: "/mkl4.jpg",
  },
];

const Focus = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-700 to-cyan-900 text-white py-20 lg:px-32 flex items-center justify-center">
      <div className="md:w-full w-11/12 flex items-center lg:flex-row flex-col justify-between  md:gap-10">
        <h2
          className="lg:text-6xl text-4xl  text-center"
          data-aos="fade-right"
          data-aos-delay="50"
        >
          What we <br />
          <i>Focus</i> On
        </h2>
        <div className="w-full lg:w-2/3 flex flex-wrap items-center lg:justify-between justify-center lg:flex-row flex-col mt-10">
          {tiles.map((tile, index) => (
            <div
              key={index}
              id="tile"
              data-aos="fade-up"
              className={`w-full md:w-[300px] h-[300px] bg-gradient-to-r from-white to-cyan-50  rounded-xl overflow-hidden
              ${index == 1 ? "lg:mr-[10%]" : " "} 
              ${index == 2 ? "lg:ml-[10%]" : " "} 
              ${
                tiles.length === index + 1 ? "mb-0" : "md:mb-0 mb-5"
              } px-4 py-4 flex  flex-col items-center justify-center text-center relative md:mt-3 mt-0`}
            >
              <span
                id="tile-text"
                className="w-full h-full flex flex-col items-center justify-center  "
              >
                <h3 className="text-cyan-900 font-normal">{tile.name}</h3>
                <br />

                <p>{tile.description}</p>
              </span>
              <span
                id="tile-image"
                className="w-full top-0 left-0 opacity-0 h-full absolute"
              >
                <img
                  src={tile.image}
                  alt={tile.image}
                  className="h-full w-full object-cover"
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Focus;
