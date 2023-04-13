import React from "react";
import { NavbarCustom } from "./NavbarCustom";
import { NavSearch } from "./NavSearch";
import { NavCateg } from "./NavCateg";

function Header() {
  return (
    <header className="sticky top-o w-full shadow-md z-[100] bg-black text-white">
      <NavbarCustom />
      <NavSearch />
      <NavCateg />
    </header>
  );
}

export default Header;
