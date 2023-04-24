import React from "react";
import Image from "next/image";
import { Ifoods } from "./InterFace";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export const PopularDish = ({ data }: { data: [Ifoods] }) => {
  console.log(data);

  return (
    <div className="md:px-20 bg-black text-gray-900">
      <h1 className="text-3xl uppercase text-center text-white">
        Most popular{" "}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 p-5 text-white">
        {data.map((item, ind) => {
          return (
            <Link key={ind} href={`/food?id=${item.food._id}`}>
              <div
                key={ind}
                className={
                  ind == 1 || ind == 4 ? "m-2 mt-16 hidden sm:block " : "m-2"
                }>
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
                    <div className="text-yellow-400">
                      {item?.avg_rate == 1 ? (
                        <FaStar />
                      ) : item?.avg_rate == 2 ? (
                        <p className="flex">
                          <FaStar />
                          <FaStar />
                        </p>
                      ) : item?.avg_rate == 3 ? (
                        <p className="flex">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </p>
                      ) : item.avg_rate == 4 ? (
                        <p className="flex">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </p>
                      ) : (
                        <p className="flex">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </p>
                      )}
                    </div>
                    <p>/</p>
                    <p>Rate : {Math.floor(item.avg_rate * 100) / 100}</p>
                    <p>/</p>
                    <p>Review : {item?.count}</p>
                  </div>
                  <p>Price: {item?.food?.price}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
