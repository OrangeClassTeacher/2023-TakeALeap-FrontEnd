import React, { useState } from "react";
import Link from "next/link";
import { BsCaretDown } from "react-icons/Bs";

const list = [
  { name: "find restaurants", path: "/find" },
  { name: "blog", path: "/blog" },
  { name: "recipe", path: "/category" },
  { name: "contact", path: "/category" },
  { name: "about us", path: "/category" },
];

export const NavCateg = () => {
  const [category, setCategory] = useState<boolean>(false);

  const cuisines = [
    "Chinese",
    "Korean",
    "Italian",
    "Mongolian",
    "Japanese",
    "Mexican",
    "Turkish",
    "Russian",
    "Spanish",
    "Fast food",
  ];

  return (
    <div>
      <div className="flex justify-evenly font-thin text-sm  p-5 hidden md:flex">
        <div
          className=" hover:text-sky-500 flex items-center text-white relative gap-2"
          onClick={() => setCategory(!category)}>
          <BsCaretDown /> <p className="uppercase">category</p>
          <div
            style={{ display: category ? "block" : "none" }}
            className="  absolute bg-white w-[150px] h-[250px] text-black overflow-scroll top-10">
            {cuisines.map((item, ind) => {
              return (
                <Link href={`/findrestaurant?type=${item}`} key={ind}>
                  <p className="m-2 hover:text-sky-500 text-lg">{item}</p>
                </Link>
              );
            })}
          </div>
        </div>
        {list.map((item, ind) => {
          return (
            <div key={ind} className="uppercase hover:text-sky-500">
              <Link href={`${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
