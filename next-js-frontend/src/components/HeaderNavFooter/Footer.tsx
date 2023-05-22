import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/Fa";
import Link from "next/link";

function Footer(): JSX.Element {
  const cate = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Find restaurants", path: "/findrestaurants" },
    { name: "Find foods", path: "/findfoods" },
    { name: "About us", path: "/aboutus" },
  ];

  return (
    <div className="w-full">
      <div className="bg-black text-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start px-20 py-5">
        <div className="p-5">
          <ul>
            <div className="zox">
              <div className="lightbar" />
              <div className="topLayer" />
              <h2>Take a Leap</h2>
            </div>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5 z-10">
          <ul className="font-light">
            <p className="font-normal text-2xl pb-4">Pages</p>
            {cate.map((item, ind) => (
              <li
                key={ind}
                className="text-md pb-2 hover:text-[#9395d3] cursor-pointer"
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <ul className="font-light">
            <p className="font-normal text-2xl pb-4">Contact developers</p>
            <li className="text-md pb-2 hover:text-[#9395d3] cursor-pointer">
              Developer 1
            </li>
            <li className="text-md pb-2 hover:text-[#9395d3] cursor-pointer">
              Developer 2
            </li>
            <li className="text-md pb-2 hover:text-[#9395d3] cursor-pointer">
              Developer 2
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col bg-black text-white justify-center items-center text-center p-5 font-light">
        <h1>
          © 2023 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 cursor-pointer">lynx</span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
