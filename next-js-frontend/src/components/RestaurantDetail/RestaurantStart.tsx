import React from "react";
import Image from "next/image";
import { IDetailRest } from "../InterfaceEnumsMeta/InterFace";
import Stars from "../commentsRates/Stars";
import { AiFillClockCircle } from "react-icons/ai";

export const RestaurantStart = ({
  restaurant,
}: {
  restaurant?: IDetailRest;
}) => {
  console.log(restaurant);

  const { restaurantName, description, schedule, img }: any =
    restaurant?.restaurant[0];

  return (
    <div className=" block md:flex">
      <div className="md:basis-2/3">
        <Image
          src={img[0] || ""}
          alt="png"
          className="w-full max-h-[600px] min-h-[300px] object-cover"
          width={600}
          height={600}
        />
      </div>
      <div className="md:basis-1/3 flex justify-around items-center">
        <div className="font-3xl md:font-2xl lg:w-96 ">
          <div className="con">
            <div className="cloud"></div>
          </div>
          <h1 className="m-5 text-3xl uppercase">{restaurantName} </h1>
          <p className="hidden md:block text-start font-light text-sm">
            {description}
          </p>
          <div className="flex gap-3 my-3 items-center">
            <Stars stars={restaurant?.avg} />
            <p>/</p>
            <p>Reviewer : {restaurant?.count}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-3xl">
              <AiFillClockCircle />
            </p>
            <div>
              <div className="flex text-sm font-light">
                Mon-Fri: {schedule?.weekday?.open}~{schedule?.weekday?.close}{" "}
                clock
              </div>
              <div className="flex text-sm font-light">
                Weekend: {schedule?.weekday?.open}~{schedule?.weekday?.close}{" "}
                clock
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
