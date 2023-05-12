import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { IFood } from "./InterFace";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Utils from "@/utils/helper";

export const Menu = () => {
  const route = useRouter();
  const { id } = route.query;
  const [food, setFood] = useState<[IFood]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${Utils.API_URL}/restaurantfoods?id=${id}`)
      .then((res) => setFood(res.data.result))
      .catch((err) => console.log(err));
    // setIsLoading(false);
  });

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl m-5">MENU</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {food?.map((item, ind) => {
          return (
            <Link href={`/food?id=${item._id}`} key={ind}>
              <div>
                <Image
                  src={item?.img[0] || ""}
                  alt="img"
                  className="rounded-xl w-full h-[200px] object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div>
                <p className="text-xl font-normal">{item.foodName}</p>
                <div className="flex justify-between font-light">
                  <p>Price: {item.price}</p>
                  <p>Type: {item.foodType}</p>
                </div>
                <div>rate here</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
