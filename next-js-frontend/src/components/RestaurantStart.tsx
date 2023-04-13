import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img from "../img/RestaurantDetail.png";
import IRestaurant from "../pages/restaurant/index";

export const RestaurantStart = ({ result }: { result: IRestaurant }) => {
  return (
    <div className="flex  text-white p-10">
      <div className=" basis-1 lg:basis-2/3">
        <Image src={img} alt="png" className="w-full" />
      </div>
      <div className=" basis-1 lg:basis-1/3 flex justify-around">
        <div className="font-3xl md:font-2xl lg:w-96 mt-44">
          <h1 className="m-5">RESTAURANTs NAME GOES HERE </h1>
          <p className="hidden lg:block text-start font-light text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti
            atque velit asperiores amet eaque odio, minima impedit facere omnis
            sit accusamus ipsum numquam beatae cum aspernatur aliquam nulla
            repellat.
          </p>
          <p>rate hereee</p>
        </div>
      </div>
    </div>
  );
};
