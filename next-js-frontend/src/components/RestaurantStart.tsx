import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IRestaurant } from "../components/InterFace";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/router";

export const RestaurantStart = () => {
  const [restaurant, setRestaurant] = useState<IRestaurant>();
  const route = useRouter();
  const { id } = route.query;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/restaurant?id=${id}`)
      .then((res) => setRestaurant(res.data.result))
      .catch((err) => console.log(err));
  });

  let sum = 0;
  let rate = 0;
  let reviewer = 0;

  restaurant?.restaurantRate?.map((item, ind) => {
    sum += item.score;
    rate = Math.floor(sum / (ind + 1));
    reviewer = ind + 1;
  });

  return (
    <div className="flex  text-white p-10">
      <div className=" basis-1 lg:basis-2/3">
        <Image
          src={restaurant?.img[0]}
          alt="png"
          className="w-full"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deleniti
            atque velit asperiores amet eaque odio, minima impedit facere omnis
            sit accusamus ipsum numquam beatae cum aspernatur aliquam nulla
            repellat.
          </p>
          <div className="flex gap-3 my-3 items-center">
            <div className="text-yellow-400">
              {rate == 1 ? (
                <FaStar />
              ) : rate == 2 ? (
                <p className="flex">
                  <FaStar />
                  <FaStar />
                </p>
              ) : rate == 3 ? (
                <p className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              ) : rate == 4 ? (
                <p className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              ) : (
                <p className="flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
              )}
            </div>
            <p>/</p>
            <p>Reviewer : {reviewer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
