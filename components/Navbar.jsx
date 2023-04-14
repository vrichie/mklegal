import Link from "next/link";
import React, { useState, useEffect } from "react";
const Navbar = () => {
  return (
    <div className="absolute left-0 top-0 w-full z-10 ">
      <div className="lg:max-w-[1240] md:w-4/5 w-11/12 m-auto flex justify-between items-center p-6 text-white">
        <Link href="/">
          <img
            src="./logo_black.png"
            className="md:h-[50px] h-[55px]"
            loading="lazy"
            alt="MK legal"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
