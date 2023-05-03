import React from "react";
import { NavSearch } from "@/components/NavSearch";
import Useredit from "@/components/Useredit";
import Footer from "@/pages/food";

export default function Index() {
  return (
    <div className="bg-black text-white">
      <NavSearch />
      <div className="h-full flex  justify-between">
        <div className="basis-1/6">
          {" "}
          <Useredit />
        </div>
        <div className="basis-5/6 bg-primary flex-1 p-4 text-white">here</div>
      </div>
      <Footer />
    </div>
  );
}
