import React from "react";
import { Meta } from "./Meta";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Roboto } from "next/font/google";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Meta />
      {/* <Header /> */}
      <Navbar />
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
const font = Roboto({
  subsets: ["latin"],
  weight: "300",
});
