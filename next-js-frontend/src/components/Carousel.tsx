import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { IRestaurant } from "./InterFace";
import Starts from "./Starts";

interface myProps {
  _id: {
    restaurantId: string;
  };
  count: number;
  restaurant: [IRestaurant];
  avg_score: number;
}

export default function Carousel({ items }: { items: [myProps] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleNextItemBtn() {
    setActiveIndex((prev) => {
      return prev + 1 < items.length ? prev + 1 : prev;
    });
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev;
    });
  }

  return (
    <div
      className="flex justify-around bg-black relative w3-animate-right"
      id="carso">
      <div className="flex justify-around">
        <div className="h-full relative  delay-75 ">
          {activeIndex > 0 && (
            <button
              className="bg-white z-10 left-0 absolute text-2xl rounded-full p-2 top-[50%]  m-5 "
              onClick={handlePrevItemBtn}>
              <IoIosArrowBack />
            </button>
          )}
          <Image
            src={items[activeIndex]?.restaurant[0].img[0]}
            key={1}
            width={1000}
            height={700}
            className="h-[700px] w-screen object-cover duration-500 transition-opacity  ease-linear"
            alt="testt"
          />
          {activeIndex < items.length - 1 && (
            <button
              className="bg-white z-10 right-0 absolute text-2xl rounded-full p-2 top-[50%] m-5 "
              onClick={handleNextItemBtn}>
              <IoIosArrowBack
                style={{
                  transform: "rotate(180deg)",
                }}
              />
            </button>
          )}
        </div>
        <div className="absolute  top-0 z-20 w-[75%]  h-full flex justify-around items-center text-white">
          <div className=" bg-black/75 w-[50%] rounded-lg h-[50%] p-5 ">
            <div className="text-4xl flex justify-around">
              <h1>{items[activeIndex].restaurant[0].restaurantName}</h1>
            </div>
            <Starts stars={items[activeIndex].avg_score} />
            <p> Reviewers: {items[activeIndex].count}</p>
            <p>
              Mon-Fri : {items[activeIndex].restaurant[0].schedule.weekday.open}
              ~ {items[activeIndex].restaurant[0].schedule.weekday.close}
            </p>
            <p>
              Weekend : {items[activeIndex].restaurant[0].schedule.weekend.open}
              ~ {items[activeIndex].restaurant[0].schedule.weekend.close}
            </p>
            <p>{items[activeIndex].restaurant[0].address.address}</p>
            <p>{items[activeIndex].restaurant[0].cuisineType}</p>
            <p>{items[activeIndex].restaurant[0].contact.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
