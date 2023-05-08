import React from "react";
import Image from "next/image";
import { ITopFoods } from "./InterFace";
import Link from "next/link";
import Stars from "./Stars";

export const PopularDish = ({ data }: { data: [ITopFoods] }) => {
  return (
    <div className="md:px-20 bg-black text-gray-900 text-white">
      <h1 className="text-3xl uppercase text-center">Most popular </h1>
      <Link href={`/findfoods`}>
        <p className="text-end hover:text-[#9395d3]">See all</p>
      </Link>
      <div className="grid grid-cols-2 sm:grid-cols-3 p-5 ">
        {data.map((item, ind) => {
          return (
            <Link key={ind} href={`/food?id=${item.food._id}`}>
              <div
                key={ind}
                className={
                  ind == 1 || ind == 4 ? "m-2 mt-16 hidden sm:block " : "m-2"
                }
              >
                <div>
                  <Image
                    src={item?.food?.img[0]}
                    alt="img"
                    className="w-full h-[300px] object-cover "
                    width={200}
                    height={200}
                  />
                </div>
                <div className="text-center m-5">
                  <h1 className="text-xl font-light uppercase m-1">
                    {item?.food?.foodName}
                  </h1>
                  {/* <p className="text-xl font-light">Restaurant name</p> */}
                  <div className="flex justify-between font-thin">
                    <Stars stars={item.avg_rate} />
                    <p>/</p>
                    <p>Rate : {Math.floor(item.avg_rate * 100) / 100}</p>
                    <p>/</p>
                    <p>Review : {item?.count}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
