import React from "react";

export default function Team() {
  const tiles = [
    {
      name: "Makena King'ori ",
      description: "Managing Partner",
      image: "/mercy1.jpeg",
    },
    {
      name: "Samuel K Mboya",
      description: "Associate",
      image: "/john1.jpg",
    },
    {
      name: "Abiud Ambehi",
      description: "Legal Assistant",
      image: "/james1.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-700 to-cyan-900  text-white py-20 lg:px-32 flex items-center justify-center relative overflow-hidden">
      <div className="md:w-full w-11/12 flex items-center lg:flex-row flex-col justify-between  md:gap-10">
        <h2
          className="text-6xl font- text-center"
          data-aos="fade-right"
          data-aos-delay="0"
        >
          Introducing <br /> Our <i>Team</i> Of Experts
        </h2>
        <div className="w-full md:w-2/3 flex flex-wrap  lg:justify-between justify-center md:flex-row flex-col mt-10">
          {tiles.map((tile, index) => (
            <div
              key={index}
              id="tile"
              data-aos="fade-up"
              className={` rounded-xl relative overflow-hidden h-[300px]  lg:w-[300px] w-full ${
                tiles.length === index + 1 ? "mb-0" : " md:mb-0 mb-5"
              }  
              
              
              flex  items-center justify-center cursor-pointer text-center relative md:mt-3 mt-0`}
            >
              {" "}
              <span
                // id="tile-image"
                className=" h-full w-full"
              >
                <img
                  src={tile.image}
                  alt={tile.name}
                  className="h-full w-full object-cover"
                />
              </span>
              <span
                // id="tile-team-text"
                className=" px-3 py-1 text-left duration-300   absolute bottom-1 right-0 bg-cyan-900   rounded-tl-xl rounded-bl-xl   "
              >
                <h5 className="text-cyan-50 border-b-[1px] border-cyan-100 font-normal">
                  {tile.name}
                </h5>

                <p className="text-xs mt-1">{tile.description}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-gradient absolute top-[90%] right-[-10%] z-[0] w-[300px] h-[300px] rounded-full"></div>
    </div>
  );
}
