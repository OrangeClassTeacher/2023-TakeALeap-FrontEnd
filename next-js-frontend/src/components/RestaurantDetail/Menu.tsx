import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { IFood, IBeverage } from "../InterfaceEnumsMeta/InterFace";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Utils from "@/utils/helper";
import { FoodCard } from "./FoodCard";
import { meal } from "../InterfaceEnumsMeta/enumValues";
import { GiCookingPot } from "react-icons/gi";

export const Menu = () => {
  const route = useRouter();
  const { id } = route.query;
  const [food, setFood] = useState<IFood[]>([]);
  const [beverage, setBeverage] = useState<IBeverage[]>([]);

  useEffect(() => {
    axios
      .get(`${Utils.API_URL}/restaurantfoods?id=${id}`)
      .then((res) => setFood(res.data.result))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl m-5">MENU</h1>
      </div>
      {meal.map((name, ind) => {
        return <FoodCard key={ind} name={name} food={food} />;
      })}
      <p className="text-2xl text-blue-700 py-3 flex items-center">
        <GiCookingPot />
        Beverages
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {beverage?.map((item, ind) => {
          return (
            <Link href={`/`} key={ind}>
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
                <p className="text-xl font-normal">{item.beverageName}</p>
                <div className="flex justify-between font-light">
                  <p>Price: {item.price}</p>
                  <p>Type: {item.beverageType}</p>
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
