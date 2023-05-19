import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const list = [
  { name: "home", path: "/" },
  { name: "explore", path: "/explore" },
  { name: "find restaurants", path: "/findrestaurants" },
  { name: "find foods", path: "/findfoods" },
  { name: "about us", path: "/aboutus" },
];

export const NavCateg = (): JSX.Element => {
  const route = useRouter();
  const path = route.pathname;

  return (
    <div>
      <div className="flex justify-evenly font-thin text-sm  p-5 md:flex">
        {list.map((item, ind) => (
          <Link key={ind} href={`${item.path}`}>
            <div
              className={
                path == item.path
                  ? "uppercase text-[#9395d3]"
                  : "uppercase hover:text-[#9395d3]"
              }>
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
