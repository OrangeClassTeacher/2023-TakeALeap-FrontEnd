import React from "react";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";
import { Explore } from "@/components/Explore";

export default function ExploreMain() {
  return (
    <div>
      <Header />
      <div className="bg-black text-white">
        <Explore />
      </div>
      <Footer />
    </div>
  );
}
