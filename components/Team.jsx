import Link from "next/link";
import React from "react";

export default function Team() {
  const tiles = [
    {
      name: "Makena King'ori ",
      description: "Managing Partner",
      image: "/mercy1.jpeg",
      link: "https://www.linkedin.com/in/makena-kingori-32961254/?original_referer=",
    },
    {
      name: "Samuel K Mboya",
      description: "Associate",
      image: "/john1.jpg",
      link: "https://www.linkedin.com/in/samuel-mboya-5575b782",
    },
    {
      name: "Abiud Ambehi",
      description: "Legal Assistant",
      image: "/james1.jpg",
      link: "#",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-cyan-700 to-cyan-900  text-white py-20 lg:px-32 flex items-center justify-center relative overflow-hidden">
      <div className="md:w-full w-11/12 flex items-center lg:flex-row flex-col justify-between  md:gap-10">
        <h2 className="lg:text-6xl text-4xl text-center" data-aos="fade-right">
          Introducing <br /> Our <i>Team</i> Of Experts
        </h2>
        <div
          className="w-full md:w-2/3 mt-10 grid gap-5 md:grid-cols-2 grid-cols-1"
          data-aos="fade-up"
        >
          {tiles.map((tile, index) => (
            <Link
              key={index}
              href={tile.link}
              target="_blank"
              className={`flex 
              ${index === 0 ? "md:col-span-2 justify-center " : "col-span-1"}
              ${index === 1 ? "justify-end" : " "}
              
              
              `}
            >
              <div
                id="tile"
                className={`relative rounded-xl cursor-pointer overflow-hidden lg:h-[300px] h-fit lg:w-[300px] w-full 
                ${tiles.length === index + 1 ? "mb-0" : "md:mb-0 mb-5"}`}
              >
                <span className="lg:h-full w-full">
                  <img
                    src={tile.image}
                    alt={tile.name}
                    loading="lazy"
                    className="lg:h-full w-full object-cover"
                  />
                </span>
                <span className="px-3 py-1 text-left duration-300 absolute bottom-1 right-0 bg-cyan-900 rounded-tl-xl rounded-bl-xl">
                  <h5 className="text-cyan-50 border-b-[1px] border-cyan-100 font-normal">
                    {tile.name}
                  </h5>
                  <p className="text-xs text-slate-100 mt-1">
                    {tile.description}
                  </p>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-blue-gradient absolute top-[90%] right-[-10%] z-[0] w-[300px] h-[300px] rounded-full"></div>
    </div>
  );
}
