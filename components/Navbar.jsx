import Link from "next/link";
import React, { useState, useEffect } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  // useEffect(() => {
  //   const changeColor = () => {
  //     if (window.scrollY >= 90) {
  //       setColor(true);
  //     } else {
  //       setColor(false);
  //     }
  //   };
  //   window.addEventListener("scroll", changeColor);
  // }, []);
  const transparent = {
    backgroundColor: "transparent",
    color: "black",
  };
  const opaque = {
    backgroundColor: "white",
    color: "white",
  };

  return (
    <div
      // style={color ? opaque : transparent}
      className="absolute left-0 top-0 w-full z-10 "
    >
      <div className="lg:max-w-[1240] md:w-4/5 w-11/12 m-auto flex justify-between items-center p-6 text-white">
        <Link href="/">
          {/* <h1
            // style={color ? transparent : opaque}
            className={`text-white/80 font-semibold ease-in text-xl`}
          >
            
          </h1> */}
          <img
            src="./logo_black.png"
            className="h-[40px]"
            loading="lazy"
            alt="MK legal"
          />
        </Link>
        {/* <ul
          // style={color ? opaque : transparent}
          className="hidden  sm:flex  ease-in "
        >
          <li className="p-6 text-1xl hover:text-orange-600">
            <Link href="/">Home</Link>
          </li>
          <li className="p-6 text-1xl hover:text-orange-600">
            <Link href="/#about">About</Link>
          </li>
          <li className="p-6 text-1xl hover:text-orange-600">
            <Link href="/#services">Services</Link>
          </li>
          <li className="p-6 text-1xl hover:text-orange-600">
            <Link href="/#projects">My Projects</Link>
          </li>
          <li className="p-6 text-1xl hover:text-orange-600">
            <Link href="/#contact">Contact</Link>
          </li>
        </ul> */}

        {/* mobile button */}
        {/* 
        <div className="block sm:hidden z-10">
          {nav ? (
            <button onClick={handleNav}>
              <img loading="lazy" src="/close.png" alt="close" width="30px" />
            </button>
          ) : (
            <button onClick={handleNav}>
              <img loading="lazy" src="/menu.png" alt="menu" width="30px" />
            </button>
          )}
        </div> */}
        {/* mobile menu */}
        {/* <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-6 text-1xl hover:text-orange-600">
              <Link href="/">Home</Link>
            </li>
            <li className="p-6 text-1xl hover:text-orange-600">
              <Link href="/#about">About</Link>
            </li>
            <li className="p-6 text-1xl hover:text-orange-600">
              <Link href="/#service">Services</Link>
            </li>
            <li className="p-6 text-1xl hover:text-orange-600">
              <Link href="/#projects">My Projects</Link>
            </li>
            <li className="p-6 text-1xl hover:text-orange-600">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
