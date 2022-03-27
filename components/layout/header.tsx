import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="md:w-5/6 w-full m-auto pl-4 pr-4 pt-2 pb-2  flex items-center">
        <div className="flex   items-center w-5/12 gap-2">
          <div className="md:hidden lg:hidden">
            <Image
              src="/images/LechugaData.png"
              alt="logo of studioLechuga"
              width={54}
              height={68}
              className="hidden"
              objectFit="contain"
            />
          </div>
          <h1 className="hidden md:flex justify-center items-center  font-sans font-bold  text-3xl text-gray-800 h-16">
            StudioLechuga
          </h1>
        </div>
        <div className="w-7/12">
          <nav className="flex justify-end items-cente">
            <ul className="flex justify-end items-center gap-2">
              <li className="font-sans">Blog</li>
              <li className="font-sans">About</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
