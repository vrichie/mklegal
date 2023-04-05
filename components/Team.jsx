import React from "react";

export default function Team() {
  const tiles = [
    {
      name: "John Martin's",
      description: "Partner",
      image: "/john1.jpg",
    },
    {
      name: "James Mains",
      description: "Partner",
      image: "/james1.jpg",
    },

    {
      name: "Mercy Nguire",
      description: "Associate",
      image: "/mercy1.jpeg",
    },
    {
      name: "Jane Wanuna",
      description: "Of Counsel",
      image: "/jane1.jpeg",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-slate-500 to-slate-900  text-white py-20 lg:px-32 flex items-center justify-center relative overflow-hidden">
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
              data-aos-delay="50"
              className={` rounded-xl relative overflow-hidden h-[400px]  lg:w-[400px] w-full ${
                tiles.length === index + 1 ? "mb-0" : " md:mb-0 mb-5"
              }  
              ${index == 1 ? "lg:mr-[10%]" : " "} 
              ${index == 2 ? "lg:ml-[10%]" : " "} 
              
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
                id="tile-team-text"
                className=" p- text-center duration-300  lg:translate-y-[100%] absolute bottom-0 bg-gradient-to-b from-slate-50/70 to-slate-100  w-full rounded-t-xl   "
              >
                <h3 className="text-slate-900">{tile.name}</h3>

                <p>{tile.description}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-gradient absolute top-[90%] right-[-10%] z-[0] w-[300px] h-[300px] rounded-full"></div>
    </div>
  );
}
