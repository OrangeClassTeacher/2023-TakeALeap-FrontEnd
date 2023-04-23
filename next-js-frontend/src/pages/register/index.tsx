import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { BiArrowBack } from "react-icons/Bi";
import Link from "next/link";

export default function Register() {
  return (
    <div className="text-center pt-20">
      <Link href={"/"}>
        <div className="flex items-center ml-10 hover:text-sky-500">
          {" "}
          <BiArrowBack /> back
        </div>
      </Link>

      <div className="my-10 text-2xl">
        <h1 className="text-sm md:text-xl lg:text-2xl">
          CREATE YOUR ACCOUNT FOR FREE
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 my-5 lg:my-8">
          <div className="flex justify-end">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input className="w-full" placeholder="Name" />
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input className="w-full" placeholder="User Name" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 my-5 lg:my-8">
          <div className="flex justify-end">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input className="w-full" placeholder="E-Mail" />
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input className="w-full" placeholder="Phone" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 my-5 lg:my-8">
          <div className="flex justify-end">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input className="w-full" placeholder="Password" />
            </div>
          </div>
          <div className="flex justify-start">
            <div className="border rounded w-full md:w-2/3 lg:w-1/2  p-2 text-start">
              <input className="w-full" placeholder="Confirm Password" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="text-xs md:text-base lg:text-lg bg-black text-white font-thin p-3">
          CREATE AN ACCOUNT
        </button>
      </div>
      <div className="flex justify-around my-5 lg:my-8">
        <div></div>
        <div className="text-xs md:text-sm lg:text-base font-thin text-slate-400">
          OR LOGIN WITH
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 mx-10 md:mx-5 lg:mx-0 my-5 lg:my-8">
        <div className="flex justify-around md:justify-end">
          <div className="border rounded-full w-[200px] md:w-[170px] lg:w-[170px] p-2 flex items-baseline justify-center">
            <FaFacebookF />
            <p className="pl-1">FACEBOOK</p>
          </div>
        </div>
        <div className="flex justify-around md:justify-start">
          <div className="border rounded-full w-[200px] md:w-[170px] lg:w-[170px] p-2 flex items-baseline justify-center">
            <FaGoogle />
            <p>GOOGLE</p>
          </div>
        </div>
      </div>
    </div>
  );
}
