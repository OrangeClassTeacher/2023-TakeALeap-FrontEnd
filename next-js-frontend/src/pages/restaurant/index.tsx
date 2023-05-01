import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RestaurantStart } from "@/components/RestaurantStart";
import { Menu } from "@/components/Menu";
import { RestaurantInfo } from "@/components/RestaurantInfo";
import { DetailPopular } from "@/components/DetailPopular";
import Comment from "@/components/CommentRes";

export default function Restaurant() {
  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <RestaurantStart />
        {/* <DetailPopular /> */}
        <div className="text-center p-5">
          <button className="p-2 bg-sky-300 text-md">View 3D menu</button>
        </div>
        <Menu />
        <Comment />
        <RestaurantInfo />
      </div>
      <Footer />
    </>
  );
}
