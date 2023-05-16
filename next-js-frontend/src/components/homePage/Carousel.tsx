import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { ITopRestaurant } from "../InterfaceEnumsMeta/InterFace";
import Starts from "../commentsRates/Stars";
import { MdLocationPin } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";

export default function Carousel({ items }: { items: ITopRestaurant[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const { img, address, contact, restaurantName, cuisineType, schedule } =
    items[activeIndex]?.restaurant[0];

  function handleNextItemBtn() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => {
          setIsTransitioning(false);
          return prev + 1 < items.length ? prev + 1 : prev;
        });
      }, 500); // change the value to adjust the duration of the transition
    }
  }

  function handlePrevItemBtn() {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => {
          setIsTransitioning(false);
          return prev - 1 >= 0 ? prev - 1 : prev;
        });
      }, 500); // change the value to adjust the duration of the transition
    }
  }

  return (
    <div
      className="flex justify-around bg-black relative w3-animate-right"
      id="carso"
    >
      <div className="flex justify-around">
        <div className="h-full relative  delay-75 ">
          {activeIndex > 0 && (
            <button
              className="bg-white z-10 left-0 absolute text-2xl rounded-full p-2 top-[50%]  m-5 "
              onClick={handlePrevItemBtn}
            >
              <IoIosArrowBack />
            </button>
          )}

          <div className="slider">
            <div className="rotator">
              {[...Array(9)].map((_, index) => {
                const itemIndex = (activeIndex + index) % items.length;
                return (
                  <div
                    className={`items ${index === 3 ? "active" : ""}`}
                    key={index}
                  >
                    <Image
                      src={items[itemIndex].restaurant[0].img[0]}
                      width={1000}
                      height={700}
                      className={`h-[700px] w-screen object-cover transition-opacity duration-500`}
                      alt="testt"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {activeIndex < items.length - 1 && (
            <button
              className="bg-white z-10 right-0 absolute text-2xl rounded-full p-2 top-[50%] m-5 "
              onClick={handleNextItemBtn}
            >
              <IoIosArrowBack
                style={{
                  transform: "rotate(180deg)",
                }}
              />
            </button>
          )}
        </div>
        <div className="absolute  top-0 z-20 w-[75%]  h-full flex justify-around items-center text-white">
          <div className="flex flex-col gap-2 bg-black/75 w-[50%] rounded-lg h-[50%] p-5 text-center ">
            <div className="text-4xl flex justify-around">
              <h1>{restaurantName}</h1>
            </div>
            <div className="flex items-center gap-5 justify-center">
              <Starts stars={items[activeIndex]?.avg} />
              <p>/</p>
              <p> Reviewers: {items[activeIndex].count}</p>
            </div>
            <div>
              {" "}
              <p>
                Mon-Fri :{" "}
                {items[activeIndex].restaurant[0].schedule.weekday.open}~{" "}
                {items[activeIndex].restaurant[0].schedule.weekday.close}
              </p>
              <p>
                Weekend :{" "}
                {items[activeIndex].restaurant[0].schedule.weekend.open}~{" "}
                {items[activeIndex].restaurant[0].schedule.weekend.close}
              </p>
            </div>
            <p className="flex items-center justify-center gap-2">
              <MdLocationPin />{" "}
              {items[activeIndex].restaurant[0].address.address}
            </p>
            <p className="flex items-center justify-center gap-2">
              {items[activeIndex].restaurant[0].cuisineType}
            </p>
            <p className="flex items-center justify-center gap-2">
              <AiTwotonePhone />
              {items[activeIndex].restaurant[0].contact.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
