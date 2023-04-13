import React from "react";
import { Meta } from "./Meta";
import  Footer  from "./Footer";
import Header from "./Header";
import { NavbarCustom } from "./NavbarCustom";
import {Rating} from "../components/Rating"




export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
   {   <Header />}
  {    <NavbarCustom />}
  <Rating/>
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
;
