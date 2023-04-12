import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RestaurantInfo } from "@/components/RestaurantInfo";
import { PopularDish } from "@/components/PopularDish";
import { GetServerSideProps } from "next";
import axios from "axios";
import { Menu } from "@/components/Menu";

export default interface IRestaurant {
  restaurantName: string;
  address: {
    district: string;
    street: string;
    building: string;
    address: string;
    location: {
      type: string;
      coordinates: number[];
    };
  };
  restaurantRate: [
    {
      rateType: string;
      userId: string;
      score: number;
      comment: string;
    }
  ];
  cuisineType: string[]; // national
  // foodType: string[]; //Ene hereg baina uu? Menu dotroo foodtype beverageType tai ym chin?
  contact: {
    phone: number;
    facebook: string;
    Instagram: string;
    link: string;
  };
  email: string;
  img: string[];
  logoImg: string | null;
  schedule: {
    weekday: { open: number; close: number };
    weekend: { open: number; close: number };
  };
}

export default function Restaurant({ result }: { result: IRestaurant }) {
  return (
    <>
      <Header />
      <div className="bg-black">
        <RestaurantInfo result={result} />
        <PopularDish result={result} />
        <div className="text-center p-5">
          <button className="p-2 bg-sky-300 text-md">View 3D menu</button>
        </div>
        <Menu />
      </div>
      <Footer />
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (param) => {
//   const id = param.query;
//   const res = await axios.get(``);

//   return {
//     result: res.data.result,
//   };
// };
