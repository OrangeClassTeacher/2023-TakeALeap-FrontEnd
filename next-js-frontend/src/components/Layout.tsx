import React from "react";
import { Meta } from "./Meta";
import { NavbarCustom } from "./NavbarCustom";



export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};
