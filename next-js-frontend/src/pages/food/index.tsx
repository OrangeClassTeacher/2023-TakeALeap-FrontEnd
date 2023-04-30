import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { originFood } from "@/components/InterFace";
import Comment from "@/components/Comment";

export default function Food() {
  const route = useRouter();
  const { id } = route.query;
  console.log();

  const [food, setFood] = useState<originFood>();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/food?id=${id}`)
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
        <Comment />
      </div>
      <Footer />
    </div>
  );
}
