import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiCookingPot } from "react-icons/gi";
import { IFood } from "../InterfaceEnumsMeta/InterFace";

export const FoodCard = ({ food, name }: { food: IFood[]; name: string }) => {
  let type: string[] = [];
  food.map((item, ind) => {
    item.foodType.includes(name) ? type.push(name) : "";
  });

  return (
    <div className={type.length > 0 ? "block" : "hidden"}>
      <p className="text-2xl text-blue-700 py-3 flex items-center">
        <GiCookingPot />
        {name}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {food?.map((item, ind) => {
          if (item.foodType == name) {
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
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};
