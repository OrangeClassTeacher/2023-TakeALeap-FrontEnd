import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { IFood } from "./InterFace";
import { useRouter } from "next/router";
import Image from "next/image";

export const Menu = () => {
  const route = useRouter();
  const { id } = route.query;
  const [food, setFood] = useState<[IFood]>();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/restaurantfoods?id=${id}`)
      .then((res) => setFood(res.data.result))
      .catch((err) => console.log(err));
  });

  return (
    <div className="md:mx-20">
      <div className="flex justify-center">
        <h1 className="text-2xl">MENU</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-5 gap-10 text-white">
        {food?.map((item, ind) => {
          return (
            <div key={ind}>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};
