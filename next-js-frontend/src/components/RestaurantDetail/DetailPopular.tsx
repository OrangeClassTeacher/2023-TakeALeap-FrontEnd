import React, { useEffect, useState } from "react";
import { IFood } from "../InterfaceEnumsMeta/InterFace";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import Utils from "@/utils/helper";
import { toast } from "react-toastify";

export const DetailPopular = (): JSX.Element => {
  const [foods, setFoods] = useState<[IFood]>();
  const route = useRouter();
  const { id } = route.query;

  useEffect((): void => {
    axios
      .get(`${Utils.API_URL}/restaurantfoods?id=${id}`)
      .then((res) =>
        res.data.result
          ? setFoods(res.data.result)
          : toast.error("Please try again")
      )
      .catch(() => toast.error("please try again"));
  });

  return (
    <div className="md:px-20 text-gray-900 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 p-5 text-white">
        {foods?.map((item, ind) => (
          <div
            key={ind}
            className={
              ind == 1 || ind == 4 ? "m-2 mt-16 hidden sm:block " : "m-2"
            }>
            <div className="">
              <Image
                src={item.img[0] || ""}
                alt="img"
                className="w-full h-[300px] object-cover"
                width={200}
                height={200}
              />
            </div>
            <div className="text-center m-5">
              <h1 className="text-xl font-light uppercase m-1">
                {item.foodName}
              </h1>
              <div className="flex justify-between font-thin">
                <p>/</p>
                <p>Type: {item.foodType}</p>
              </div>
              <p>Price: {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
