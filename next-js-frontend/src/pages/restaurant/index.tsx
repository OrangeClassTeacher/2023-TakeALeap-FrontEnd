import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RestaurantStart } from "@/components/RestaurantStart";
import { Menu } from "@/components/Menu";
import { RestaurantInfo } from "@/components/RestaurantInfo";
import { DetailPopular } from "@/components/DetailPopular";
import Comment from "@/components/CommentRes";
import { useRouter } from "next/router";
import { IRestaurant } from "@/components/InterFace";
import axios from "axios";
import Utils from "@/utils/helper";

export default function Restaurant() {
  const [restaurant, setRestaurant] = useState<IRestaurant>();
  const route = useRouter();
  const { id } = route.query;

  useEffect(() => {
    axios
      .get(`${Utils.API_URL}/restaurant?id=${id}`)
      .then((res) => setRestaurant(res.data.result))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <RestaurantStart restaurant={restaurant} />
        {/* <DetailPopular /> */}
        <div className="px-32 py-10">
          <Menu />
          <RestaurantInfo restaurant={restaurant} />
          <Comment />
        </div>
      </div>
      <Footer />
    </>
  );
}
