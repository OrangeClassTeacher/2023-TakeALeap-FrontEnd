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

  restaurant?.restaurantRate?.map((item, ind) => {
    sum += item.score;
    rate = Math.floor(sum / (ind + 1));
    reviewer = ind + 1;
  });

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
          <h1 className="m-5 text-3xl uppercase">
            {restaurant?.restaurantName}{" "}
          </h1>
          <p className="hidden lg:block text-start font-light text-sm">
            {restaurant?.description}
          </p>
          <div className="flex gap-3 my-3 items-center">
            <Stars stars={rate} />
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
