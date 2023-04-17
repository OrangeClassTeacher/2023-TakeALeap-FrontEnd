import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RestaurantStart } from "@/components/RestaurantStart";
import { PopularDish } from "@/components/PopularDish";
import axios from "axios";
import { Menu } from "@/components/Menu";
import { RestaurantInfo } from "@/components/RestaurantInfo";
import { useRouter } from "next/router";
import Map from "@/components/Map";

export interface IRestaurant {
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
  cuisineType: string[];
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

export default function Restaurant() {
  const [restaurant, setRestaurant] = useState<IRestauran>({});
  const route = useRouter();
  const { id } = route.query;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`http://localhost:8080/api/restaurant?id=${id}`)
      .then((res) => setRestaurant(res.data.result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <RestaurantStart restaurant={restaurant} />
        <PopularDish restaurant={restaurant} />
        <div className="text-center p-5">
          <button className="p-2 bg-sky-300 text-md">View 3D menu</button>
        </div>
        <Menu />
        <RestaurantInfo />
        <Map />
      </div>
      <Footer />
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async (
//   param
// ): Promise<any> => {
//   const id = param.query;
//   const res = await axios.get(`http://localhost:8080/api/restaurant?id=${id}`);

//   console.log(res.data.result);

//   return {
//     props: { result: res.data.result },
//   };
// };
