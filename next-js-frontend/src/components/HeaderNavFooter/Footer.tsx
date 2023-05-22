import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Panel from "../../img/adminPanel.png";
import Image from "next/image";

function Footer(): JSX.Element {
  const cate = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Find restaurants", path: "/findrestaurants" },
    { name: "Find foods", path: "/findfoods" },
  ];
  return (
    <div className="w-full bg-black text-gray-200 ">
      <div className="w-full flex flex-col justify-around items-start md:grid md:grid-cols-3  px-20 py-5">
        <div className="p-5 relative">
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
        </div>
        <div className="p-5 z-10">
          <ul className="font-light">
            <p className=" font-normal text-2xl pb-4">Pages</p>
            {cate.map((item, ind) => (
              <li
                key={ind}
                className="text-md pb-2  hover:text-[#9395d3] cursor-pointer">
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <div className="font-light w-full rounded border p-5">
            <p className="font-normal text-2xl pb-4">Register Restaurant</p>
            <Image
              src={Panel}
              width={200}
              height={200}
              alt="admin panel"
              className=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-black text-white justify-center items-center text-center  p-5  font-light">
        <h1>
          © 2023 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 cursor-pointer">lynx </span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;

// https://takealeapadmin-2wkx219rx-orange22erdenedarich-gmailcom.vercel.app/dashboard
