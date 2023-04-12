import React from "react";
import { Meta } from "./Meta";
import  Footer  from "./Footer";
import Header from "./Header";
import { NavbarCustom } from "./NavbarCustom";



export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
   {   <Header />}
  {    <NavbarCustom />}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
;
