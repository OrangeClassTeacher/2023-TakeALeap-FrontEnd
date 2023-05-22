import React from "react";
import Image from "next/image";
import { IDetailRest } from "../InterfaceEnumsMeta/InterFace";
import Stars from "../commentsRates/Stars";
import { AiFillClockCircle } from "react-icons/ai";
import gip from "../../img/gip.gif";

export const RestaurantStart = ({
  restaurant,
}: {
  restaurant?: IDetailRest;
}): JSX.Element => {
  const { restaurantName, description, schedule, img }: any =
    restaurant?.restaurant[0];

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 bg-black">
      <div className="md:basis-1/2">
        <Image
          src={img[0] || ""}
          alt="png"
          className="w-full w-[100%] h-[100%] object-cover"
          width={600}
          height={600}
        />
      </div>
      <div className="md:basis-1/2 flex justify-around items-center ">
        <div className="h-[100%] relative">
          <Image
            width={400}
            height={400}
            alt="gphy"
            src={gip}
            className=" w-[100%] h-[100%]"
          />
          <div className="flex items-center justify-center absolute w-[100%] h-[100%] top-0">
            <div className="m-10">
              <h1 className="m-5 text-3xl uppercase">{restaurantName} </h1>
              <p className="hidden md:block text-start font-light text-sm">
                {description}
              </p>
              <div className="flex gap-3 my-3 items-center justify-center">
                <Stars stars={restaurant?.avg} />
                <p>/</p>
                <p>Reviewer : {restaurant?.count}</p>
              </div>
              <div className="flex gap-2 items-center justify-center">
                <p className="text-3xl">
                  <AiFillClockCircle />
                </p>
                <div>
                  <div className="flex text-sm font-light">
                    Mon-Fri: {schedule?.weekday?.open}~
                    {schedule?.weekday?.close} clock
                  </div>
                  <div className="flex text-sm font-light">
                    Weekend: {schedule?.weekday?.open}~
                    {schedule?.weekday?.close} clock
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
