import React from "react";
import { NavSearch } from "./NavSearch";
import { NavCateg } from "./NavCateg";

function Header(): JSX.Element {
  return (
    <header className="w-full shadow-md bg-black text-gray-200">
      <NavSearch />
      <NavCateg />
    </header>
  );
}

export default Header;
