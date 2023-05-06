import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { IFood } from "@/components/InterFace";
import CommentFood from "@/components/CommentFood";
import Utils from "@/utils/helper";

export default function Food() {
  const route = useRouter();
  const { id } = route.query;
  const [food, setFood] = useState<IFood>();

  useEffect(() => {
    axios
      .get(`${Utils.API_URL}/food?id=${id}`)
      .then((res) => setFood(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 bg-black">
        <div className="text-white p-10">
          <h1 className="text-4xl uppercase">{food?.foodName}</h1>
          <p>Price : {food?.price}</p>
          <p>Meal type : {food?.foodType}</p>
          <p>Ingredients : {food?.ingredients}</p>
        </div>
        <div>
          <Image
            src={food?.img[0] || ""}
            width={1000}
            height={1000}
            alt="img"
          />
        </div>
      </div>
      <div className="bg-black">
        <CommentFood />
      </div>
      <Footer />
    </div>
  );
}
