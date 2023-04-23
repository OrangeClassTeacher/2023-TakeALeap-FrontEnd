import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";

interface myProps {
  _id: {
    restaurantName: string;
    img: [string];
  };
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
    <div className="flex justify-around bg-black  relative">
      <div className="flex justify-around">
        <div className="h-full relative  delay-75 ">
          {activeIndex > 0 && (
            <button
              className="bg-white/50 z-10 left-0 absolute text-2xl rounded-full p-2 top-[50%]  m-5 "
              onClick={handlePrevItemBtn}>
              <IoIosArrowBack />
            </button>
          )}
          <Image
            src={items[activeIndex]?._id?.img[0]}
            key={1}
            width={1000}
            height={700}
            className="h-[700px] w-screen object-cover duration-500 transition-opacity  ease-linear"
            alt="testt"
          />
          {activeIndex < items.length - 1 && (
            <button
              className="bg-white/50 z-10 right-0 absolute text-2xl rounded-full p-2 top-[50%] m-5 "
              onClick={handleNextItemBtn}>
              <IoIosArrowBack
                style={{
                  transform: "rotate(180deg)",
                }}
              />
            </button>
          )}
        </div>
        <div className="absolute  top-0 z-20 w-[75%]  h-full flex justify-around items-center">
          <div className=" bg-black/75 w-[50%] rounded-lg h-[50%] p-5 ">
            <div className="text-4xl flex justify-around text-white">
              <h1>{items[activeIndex]._id.restaurantName}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
