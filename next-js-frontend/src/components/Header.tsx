import React from "react";
import { NavbarCustom } from "./NavbarCustom";
import { NavSearch } from "./NavSearch";
import { NavCateg } from "./NavCateg";

function Header() {
  return (
    <header className="w-full shadow-md bg-black text-gray-200">
      <NavbarCustom />
      <NavSearch />
      <NavCateg />
    </header>
  );
}

export default Header;
