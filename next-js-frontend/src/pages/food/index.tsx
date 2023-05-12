import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { IFood } from "@/components/InterFace";
import CommentFood from "@/components/CommentFood";
import Utils from "@/utils/helper";
import Loading from "@/components/Loading";
export default function Food() {
  const route = useRouter();
  const { id } = route.query;
  const [food, setFood] = useState<IFood>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${Utils.API_URL}/food?id=${id}`)
      .then((res) => setFood(res.data.result))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 bg-black ">
        <div className="text-white p-10 blk glow">
          <h1 className="text-4xl uppercase justify-center flex">
            {food?.foodName}
          </h1>
          <div className="">
            <p className="flex justify-center mt-20">Price : {food?.price}</p>
            <p className="flex justify-center">Meal type : {food?.foodType}</p>
            <p className="flex justify-center">
              Ingredients : {food?.ingredients}
            </p>
          </div>
        </div>
        <div>
          <Image
            src={food?.img[0] || ""}
            width={1000}
            height={1000}
            alt="img"
            className=""
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
