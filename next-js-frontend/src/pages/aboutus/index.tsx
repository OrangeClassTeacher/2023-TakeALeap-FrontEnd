import React from "react";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";

export default function index(): JSX.Element {
  return (
    <>
      <Header />
      <div className="bg-black text-white grid grid-cols-1 md:grid-cols-3" />
      <Footer />
    </>
  );
}
