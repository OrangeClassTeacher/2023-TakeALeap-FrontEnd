import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-black text-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start px-20 py-5">
        <div className="p-5 ">
          <ul>
            <p className=" font-normal text-3xl pb-6">
              TAKE A <span className="text-blue-600">LEAP</span>
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul className="font-light">
            <p className=" font-normal text-2xl pb-4">Product</p>
            <li className="text-md pb-2  hover:text-blue-600 cursor-pointer">
              Stocks
            </li>
            <li className="text-md pb-2 hover:text-blue-600 cursor-pointer">
              Futures & Options
            </li>
            <li className="text-md pb-2 hover:text-blue-600 cursor-pointer">
              Mutual Funds
            </li>
            <li className="text-md pb-2 hover:text-blue-600 cursor-pointer">
              Fixed deposits
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul className="font-light">
            <p className=" font-normal text-2xl pb-4">Company</p>
            <li className=" text-md pb-2  hover:text-blue-600 cursor-pointer">
              About
            </li>
            <li className=" text-md pb-2  hover:text-blue-600 cursor-pointer">
              Products
            </li>
            <li className=" text-md pb-2  hover:text-blue-600 cursor-pointer">
              Pricing
            </li>
            <li className=" text-md pb-2  hover:text-blue-600 cursor-pointer">
              Careers
            </li>
            <li className=" text-md pb-2  hover:text-blue-600 cursor-pointer">
              Press & Media
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul className="font-light">
            <p className="font-normal text-2xl pb-4">Support</p>
            <li className="text-md pb-2  hover:text-blue-600 cursor-pointer">
              Contact
            </li>
            <li className="text-md pb-2  hover:text-blue-600 cursor-pointer">
              Support Portals
            </li>
            <li className="text-md pb-2  hover:text-blue-600 cursor-pointer">
              List Of Charges
            </li>
            <li className="text-md pb-2  hover:text-blue-600 cursor-pointer">
              Downloads & Resources
            </li>
            <li className="text-md pb-2  hover:text-blue-600 cursor-pointer">
              Videos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col bg-black text-white justify-center items-center text-center  p-5  font-light">
        <h1>
          © 2023 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-blue-600 cursor-pointer">lynx </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
