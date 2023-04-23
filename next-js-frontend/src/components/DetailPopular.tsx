import React from "react";
import { IFood } from "./InterFace";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const DetailPopular = () => {
  const [foods, setFoods] = useState<[IFood]>();
  const route = useRouter();
  const { id } = route.query;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/restaurantfoods?id=${id}`)
      .then((res) => setFoods(res.data.result))
      .catch((err) => console.log(err));
  });

  return (
    <div className="md:px-20 text-gray-900">
      <div className="grid grid-cols-2 sm:grid-cols-3 p-5 text-white">
        {foods?.map((item, ind) => {
          return (
            <div
              key={ind}
              className={
                ind == 1 || ind == 4 ? "m-2 mt-16 hidden sm:block " : "m-2"
              }>
              <div>
                <Image
                  src={item?.img[0]}
                  alt="img"
                  className="w-full h-[300px] object-cover "
                  width={200}
                  height={200}
                />
              </div>
              <div className="text-center m-5">
                <h1 className="text-xl font-light uppercase m-1">
                  {item?.foodName}
                </h1>
                <div className="flex justify-between font-thin">
                  {/* <div className="text-yellow-400">
                    {item.avg == 1 ? (
                      <FaStar />
                    ) : item.avg == 2 ? (
                      <p className="flex">
                        <FaStar />
                        <FaStar />
                      </p>
                    ) : item.avg == 3 ? (
                      <p className="flex">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    ) : item.avg == 4 ? (
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
                  </div> */}
                  <p>/</p>
                  <p>Type: {item?.foodType}</p>
                </div>
                <p>Price: {item?.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
