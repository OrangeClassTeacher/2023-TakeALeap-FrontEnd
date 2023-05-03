import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { NavSearch } from "@/components/NavSearch";
import Useredit from "@/components/Useredit";
import UserMain from "@/components/UserMain";

export default function Userprofile() {
  return (
    <div className="bg-black text-white">
      <NavSearch />
      <div className="h-full flex  justify-between">
        <div className="basis-1/6">
          {" "}
          <Useredit />
        </div>
        <div className="basis-5/6 bg-primary flex-1 p-4 text-white">
          <UserMain />
        </div>
      </div>
      <Footer />
    </div>
  );
}
