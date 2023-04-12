import React from "react";
import { Meta } from "./Meta";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
