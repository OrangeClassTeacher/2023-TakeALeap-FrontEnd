import React, { useState, useEffect } from "react";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";
import { RestaurantStart } from "@/components/RestaurantDetail/RestaurantStart";
import { Menu } from "@/components/RestaurantDetail/Menu";
import { RestaurantInfo } from "@/components/RestaurantDetail/RestaurantInfo";
import Comment from "@/components/commentsRates/CommentRes";
import { useRouter } from "next/router";
import { IDetailRest } from "@/components/InterfaceEnumsMeta/InterFace";
import axios from "axios";
import Utils from "@/utils/helper";

export default function Restaurant() {
  const [restaurant, setRestaurant] = useState<IDetailRest>();
  const route = useRouter();
  const { id } = route.query;

  useEffect(() => {
    axios
      .get(`${Utils.API_URL}/restaurant?id=${id}`)
      .then((res) => setRestaurant(res.data.result[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className="bg-black text-white">
        {restaurant ? (
          <div>
            <RestaurantStart restaurant={restaurant} />
            <div className="px-32 py-10">
              <Menu />
              <RestaurantInfo restaurant={restaurant} />
              <Comment />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Footer />
    </>
  );
}
