import React from "react";
import Link from "next/link";

const list = [
  { name: "category", path: "/category" },
  { name: "find restaurants", path: "/category" },
  { name: "blog", path: "/category" },
  { name: "recipe", path: "/category" },
  { name: "contact", path: "/category" },
  { name: "about us", path: "/category" },
];

export const NavCateg = () => {
  return (
    <div>
      <div className="flex justify-evenly font-thin text-sm  p-5">
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
