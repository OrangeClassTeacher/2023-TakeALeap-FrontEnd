import React from "react";
import IRestaurant from "../pages/restaurant/index";
import Data from "./MockDataRes";
import Image from "next/image";

export const PopularDish = ({ restaurant }: { restaurant: IRestaurant }) => {
  const populer = [Data, Data, Data, Data, Data, Data];
  return (
    <div className="md:mx-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 p-5 text-white">
        {populer.map((item, ind) => {
          return (
            <div
              key={ind}
              className={
                ind == 1 || ind == 4 ? "m-2 mt-16 hidden sm:block " : "m-2"
              }>
              <div>
                <img src={item.img[0]} alt="img" className="w-full" />
              </div>
              <div className="text-center m-5">
                <h1 className="text-xl font-light uppercase">
                  {item.foodName}
                </h1>
                <p className="text-xl font-light">Restaurant name</p>
                <div className="flex justify-between font-thin">
                  <p>rate by start here</p>
                  <p>rate by number</p>
                  <p>/</p>
                  <p>review</p>
                </div>
                <p>Price: 34525</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
