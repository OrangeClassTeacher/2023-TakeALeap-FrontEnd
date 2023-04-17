import React, { Dispatch, useState } from "react";
import { GrFormClose } from "react-icons/Gr";
import { TfiWorld } from "react-icons/Tfi";
import { VscAccount } from "react-icons/Vsc";
import Link from "next/link";
import { BiSearch } from "react-icons/Bi";
import { FiMenu } from "react-icons/Fi";
import SignIn from "./SignIn";

export const NavSearch = () => {
  const [signIn, setSignIn] = useState<boolean>(false);
  const [search, setSearch] = useState(false);

  return (
    <div>
      <div className="flex px-4 justify-between items-center hidden md:flex">
        <div className="basis-1/6">
          <h1 className="flex justify-between items-center text-4xl font-light">
            <Link href={"/"}> LYNX</Link>
          </h1>
          <p className=" 2x1:px-16 py-0 text-xs underline">Find, Eat, Rate</p>
        </div>
        <div className="basis-3/6 relative">
          <div className="flex gap-2 h-9 ">
            {/* <div className="bg-slate-200 text-black p-2 rounded text-center">
          All
        </div> */}
            <div
              className="bg-slate-200 rounded flex w-full justify-between items-center p-2"
              onClick={() => setSearch(!search)}>
              <input
                type="text w-full"
                placeholder="Search"
                className="bg-slate-200"
                style={{ outline: "none", color: "black", width: "100%" }}
              />
              <GrFormClose />
            </div>
          </div>
          <div
            className="absolute bg-white top-12 w-[900px] h-[400px] rounded"
            style={{ display: search ? "block" : "none" }}>
            hi
          </div>
        </div>

        <div className="basis-1/6 flex items-center gap-2 mx-2 justify-end font-light text-sm">
          <p className="text-4xl">
            <TfiWorld />
          </p>
          <Link href={"/explore"}>
            <p className="hover:text-sky-400">EXPLORE</p>
          </Link>
        </div>
        <div className="basis-1/6 flex items-center gap-2 mx-2 justify-end font-light text-sm">
          <p className="text-4xl">
            <VscAccount />
          </p>
          <div className="uppercase">
            <p
              className="hover:text-sky-400 cursor-pointer"
              onClick={() => {
                setSignIn(!signIn);
              }}>
              sign in
            </p>
            <Link href={"/register"}>
              {" "}
              <p className="hover:text-sky-400">create account</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex px-4 justify-between items-center  md:hidden">
        <div className="flex gap-2">
          {" "}
          <FiMenu />
          <BiSearch />
        </div>
        <div className="flex items-center gap-2 my-3">
          <TfiWorld />
          Explore
        </div>
      </div>
      <div style={{ display: signIn ? "block" : "none" }}>
        <SignIn signIn={signIn} setSignIn={setSignIn} />
      </div>
    </div>
  );
};
