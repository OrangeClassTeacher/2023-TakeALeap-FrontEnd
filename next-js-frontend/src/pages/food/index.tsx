import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/HeaderNavFooter/Header";
import Footer from "@/components/HeaderNavFooter/Footer";
import Image from "next/image";
import { IDetailFood } from "@/components/InterfaceEnumsMeta/InterFace";
import CommentFood from "@/components/commentsRates/CommentFood";
import Utils from "@/utils/helper";
import Link from "next/link";
import { IoMdRestaurant } from "react-icons/io";
import { TbSoup } from "react-icons/tb";

export default function Food() {
  const route = useRouter();
  const { id } = route.query;
  const [food, setFood] = useState<IDetailFood>();

  useEffect(() => {
    axios
      .get(`${Utils.API_URL}/food?id=${id}`)
      .then((res) => {
        setFood(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-black ">
        <div className="text-white p-10 blk glow">
          <h1 className="text-2xl md:text-4xl uppercase justify-center flex">
            {food?.foodName}
          </h1>
          <div className="flex gap-2 items-center justify-around mt-10">
            <p className="flex justify-center">{food?.price}₮</p>
            <p>/</p>
            <h1 className="justify-center text-xl md:text-2xl gap-2 flex items-center hover:text-[#9395d3]">
              <IoMdRestaurant />
              <Link href={`/restaurant?id=${food?.restaurantId?._id}`}>
                <p className="uppercase ">
                  {" "}
                  {food?.restaurantId?.restaurantName}
                </p>
              </Link>
            </h1>
            <p>/</p>
            <p className="flex justify-center gap-2">
              <p className="text-xl">
                {" "}
                <TbSoup />
              </p>{" "}
              {food?.foodType}
            </p>
          </div>
          <p className="flex justify-center">{food?.description}</p>
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
