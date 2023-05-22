import React, { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import QR from "../../img/sqr.jpg";
import res from "../../img/logo.jpg";
import Image from "next/image";

function Footer(): JSX.Element {
  const cate = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Find restaurants", path: "/findrestaurants" },
    { name: "Find foods", path: "/findfoods" },
  ];
  const [showRoundedImage, setShowRoundedImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowRoundedImage((prevValue) => !prevValue);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black text-gray-200">
      <div className="w-full flex flex-col justify-around items-start md:grid md:grid-cols-3 px-20 py-5">
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
                className="text-md pb-2  hover:text-[#9395d3] cursor-pointer"
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <div className="font-light w-full">
            <p className="font-normal text-2xl pb-4">Register Restaurant</p>
            <div className="relative flex items-center justify-around rounded-lg border bg-white w-[230px] h-[230px]">
              <Image
                alt="panel"
                src={QR}
                width={200}
                height={200}
                className={`overflow-hidden w-[200px] h-[200px] object-cover rounded-lg ${
                  showRoundedImage ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`absolute flex items-center justify-around ${
                  showRoundedImage ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="w-[200px] h-[200px] object-cover rounded-lg bg-white flex flex-col items-center justify-around">
                  <Image
                    alt="panel"
                    src={res}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] object-cover rounded-full"
                  />
                  <Link
                    href="https://takealeapadmin-2wkx219rx-orange22erdenedarich-gmailcom.vercel.app/dashboard"
                    className="bg-black rounded-lg p-2 hover:text-[#9395d3]"
                  >
                    <button className="text-xl">Visit</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-black text-white justify-center items-center text-center p-5 font-light">
        <h1>
          © 2023 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 cursor-pointer">lynx </span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
