import React, { useState } from "react";
import Link from "next/link";
import { BsCaretDown } from "react-icons/bs";
import { useRouter } from "next/router";

const list = [
  { name: "home", path: "/" },
  { name: "explore", path: "/explore" },
  { name: "find restaurants", path: "/findrestaurants" },
  { name: "find foods", path: "/findfoods" },
  // { name: "blog", path: "/blog" },
  // { name: "recipe", path: "/recipe" },
  { name: "about us", path: "/aboutus" },
];

export const NavCateg = () => {
  const route = useRouter();
  console.log(route.pathname);
  const path = route.pathname;

  return (
    <div>
      <div className="flex justify-evenly font-thin text-sm  p-5 hidden md:flex">
        {list.map((item, ind) => {
          return (
            <div
              key={ind}
              className={
                path == item.path
                  ? "uppercase text-[#9395d3]"
                  : "uppercase hover:text-[#9395d3]"
              }>
              <Link href={`${item.path}`}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
