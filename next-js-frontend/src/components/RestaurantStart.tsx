import React from "react";
import Image from "next/image";
import { IDetailRest } from "../components/InterFace";
import Stars from "./Stars";
import { AiFillClockCircle } from "react-icons/ai";

export const RestaurantStart = ({
  restaurant,
}: {
  restaurant?: IDetailRest;
}) => {
  const tsas: number[] = [
    11, 12, 14, 18, 16, 19, 20, 19, 10, 16, 14, 18, 11, 13, 15, 12, 17, 13, 15,
    12,
  ];
  console.log(restaurant);

  return (
    <div className=" block md:flex">
      <div className="md:basis-2/3">
        <Image
          src={restaurant?.restaurant[0]?.img[0] || ""}
          alt="png"
          className="w-full max-h-[600px] min-h-[300px] object-cover"
          width={600}
          height={600}
        />
      </div>
      <div className="md:basis-1/3 flex justify-around items-center">
        <div className="font-3xl md:font-2xl lg:w-96 ">
          {/* <div className="con">
            <div className="cloud"></div>
            <div className="rain">
              {tsas?.map((i, ind) => (
                <span key={ind} style={{ "--i": i }}></span>
              ))}
            </div>
          </div> */}
          <h1 className="m-5 text-3xl uppercase">
            {restaurant?.restaurant[0]?.restaurantName}{" "}
          </h1>
          <p className="hidden md:block text-start font-light text-sm">
            {restaurant?.restaurant[0]?.description}
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
                Mon-Fri: {restaurant?.restaurant[0]?.schedule?.weekday?.open}~
                {restaurant?.restaurant[0]?.schedule?.weekday?.close} clock
              </div>
              <div className="flex text-sm font-light">
                Weekend: {restaurant?.restaurant[0]?.schedule?.weekday?.open}~
                {restaurant?.restaurant[0]?.schedule?.weekday?.close} clock
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
