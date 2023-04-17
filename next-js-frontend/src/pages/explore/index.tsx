import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";

interface IRestauran {
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

export default function Explore() {
  return (
    <div>
      <Header />
      <div className="bg-black text-white">
        <div className="flex justify-around">hi</div>
      </div>
      <Footer />
    </div>
  );
}

// export async function getServerSideProps(pageSize: string) {
//   const res = await axios.get("http://localhost:8080/api/restaurants");

//   return {
//     props: {
//       message: "Server side Props",
//       result: res.data.result,
//     },
//   };
// }
