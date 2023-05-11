import React from "react";
import Image from "next/image";
import { IRestaurant } from "../components/InterFace";
import Stars from "./Stars";

export const RestaurantStart = ({
  restaurant,
}: {
  restaurant?: IRestaurant;
}) => {
  let sum = 0;
  let rate = 0;
  let reviewer = 0;
  const tsas: number[]= [
    11, 12, 14, 18, 16, 19, 20, 19, 10, 16, 14, 18, 11, 13, 15, 12, 17, 13, 15,
    12,
  ];

  return (
    <div className="flex">
      <div className=" basis-1 lg:basis-2/3">
        <Image
          src={restaurant?.img[0] || ""}
          alt="png"
          className="w-full max-h-[600px] object-cover"
          width={1000}
          height={1000}
        />
      </div>
      <div className=" basis-1 lg:basis-1/3 flex justify-around">
        <div className="font-3xl md:font-2xl lg:w-96 mt-44">
          <div className="con">
            <div className="cloud"></div>
            <div className="rain">
              {tsas?.map((i, ind) => (
                <span key={ind} style={{ "--i": i }}></span>
              ))}
            </div>
          </div>
          <h1 className="m-5 text-3xl uppercase">
            {restaurant?.restaurantName}{" "}
          </h1>
          <p className="hidden lg:block text-start font-light text-sm">
            {restaurant?.description}
          </p>
          <div className="flex gap-3 my-3 items-center">
            {/* <Stars stars={rate} /> */}
            <p>/</p>
            <p>Reviewer : {reviewer}</p>
          </div>
          <div>
            <p>Schedule</p>
            <div className="flex text-sm font-light">
              Mon-Fri: {restaurant?.schedule?.weekday?.open}~
              {restaurant?.schedule?.weekday?.close} clock
            </div>
            <div className="flex text-sm font-light">
              Weekend: {restaurant?.schedule?.weekday?.open}~
              {restaurant?.schedule?.weekday?.close} clock
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
