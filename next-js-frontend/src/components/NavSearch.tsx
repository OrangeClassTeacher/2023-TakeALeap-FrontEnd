import React from "react";
import { GrFormClose } from "react-icons/Gr";
import { TfiWorld } from "react-icons/Tfi";
import { VscAccount } from "react-icons/Vsc";

export const NavSearch = () => {
  return (
    <div className="flex px-4 justify-between items-center">
      <div className="basis-1/6">
        <h1 className="flex justify-between items-center   text-4xl font-light">
          LYNX
        </h1>
        <p className=" 2x1:px-16 py-0 text-xs underline">Find, Eat, Rate</p>
      </div>
      <div className="basis-3/6 flex gap-2 h-9">
        <div className="bg-slate-200 text-black p-2 rounded text-center">All</div>
        <div className="bg-slate-200 rounded flex w-full justify-between items-center p-2">
          <input
            type="text w-full"
            placeholder="Search"
            className="bg-slate-200"
            style={{ outline: "none", color: "black"}}
          />
          <GrFormClose />
        </div>
      </div>
      <div className="basis-1/6 flex items-center gap-2 mx-2 justify-end font-light text-sm">
        <p className="text-4xl">
          <TfiWorld />
        </p>
        <p>EXPLORE</p>
      </div>
      <div className="basis-1/6 flex items-center gap-2 mx-2 justify-end font-light text-sm">
        <p className="text-4xl">
          <VscAccount />
        </p>
        <div className="uppercase">
          <p>sign in</p>
          <p>create account</p>
        </div>
      </div>
    </div>
  );
};
