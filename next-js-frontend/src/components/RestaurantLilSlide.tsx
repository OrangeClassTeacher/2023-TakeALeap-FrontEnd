import React, { useState } from "react";
import { IRestaurant } from "./InterFace";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function RestaurantLilSlide({ data }: { data: [IRestaurant] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleNextItemBtn() {
    if (data.length == activeIndex + 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  function handlePrevItemBtn() {
    if (0 == activeIndex) {
      setActiveIndex(data.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <div className="bg-black">
      <div className="text-white text-center pt-5 uppercase text-3xl">
        Restaurants
      </div>
      <div className="relative">
        <button
          className="bg-white/50 z-10 left-0 absolute text-2xl rounded-full p-2 top-[50%]  m-5 "
          onClick={handlePrevItemBtn}
          style={{ display: activeIndex == 0 ? "none" : "block" }}>
          <IoIosArrowBack />
        </button>
        <div className="grid grid-cols-4 p-10">
          {data.map((item, ind) => {
            if (
              activeIndex == ind ||
              activeIndex + 1 == ind ||
              activeIndex + 2 == ind ||
              activeIndex + 3 == ind
            ) {
              return (
                <Link href={`/restaurant?id=${item._id}`} key={ind}>
                  <div className="m-2 rounded bg-white ">
                    <Image
                      src={item.img[0]}
                      width={400}
                      height={400}
                      alt="img"
                      className="rounded"
                    />
                    <div className="text-center">
                      <h1 className=" text-md uppercase m-1">
                        {item.restaurantName}
                      </h1>
                      <p className="pb-2">Cuisine Type : {item.cuisineType}</p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
        <button
          className="bg-white/50 z-10 right-0 absolute text-2xl rounded-full p-2 top-[50%] m-5 "
          onClick={handleNextItemBtn}
          style={{
            display: activeIndex == data.length - 4 ? "none" : "block",
          }}>
          <IoIosArrowBack
            style={{
              transform: "rotate(180deg)",
            }}
          />
        </button>
      </div>
    </div>
  );
}
