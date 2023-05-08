import React, { useState, useEffect, useRef } from "react";
import { IRestaurant } from "./InterFace";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function RestaurantLilSlide({ data }: { data: [IRestaurant] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return VanillaTilt.init(cardRef.current, {
      scale: 1.1,
      glare: true,
      "max-glare": 0.5,
    });
  }, []);

  function handleNextItemBtn() {
    if (data.length === activeIndex + 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  }

  function handlePrevItemBtn() {
    if (0 === activeIndex) {
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
      <div className="relative container">
        <button
          className="bg-white/50 z-10 left-0 absolute text-2xl rounded-full p-2 top-[50%]  m-5 "
          onClick={handlePrevItemBtn}
          style={{ display: activeIndex === 0 ? "none" : "block" }}
        >
          <IoIosArrowBack />
        </button>
        <div className="container">
          {data.map((item, ind) => {
            if (
              activeIndex === ind ||
              activeIndex + 1 === ind ||
              activeIndex + 2 === ind ||
              activeIndex + 3 === ind
            ) {
              return (
                <Link href={`/restaurant?id=${item._id}`} key={ind}>
                  <div className="m-2 rounded bg-[#1e1f23] text-white h-[340px] border border-white/20">
                    <Image
                      src={item?.img[0]}
                      width={400}
                      height={400}
                      alt="img"
                      className="rounded"
                    />
                    <div className="m-3">
                      <h1 className="text-md uppercase mt-1 whitespace-wrap">
                        {item?.restaurantName}
                      </h1>
                      <p className="text-sm whitespace-nowrap py-2 font-light">
                        {item.address.address}
                      </p>
                      <div className="flex text-sm font-light">
                        Mon-Fri: {item?.schedule?.weekday?.open}~
                        {item?.schedule?.weekday?.close} clock
                      </div>
                      <div className="flex text-sm font-light">
                        Weekend: {item?.schedule?.weekday?.open}~
                        {item?.schedule?.weekday?.close} clock
                      </div>
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
            display: activeIndex === data.length - 4 ? "none" : "block",
          }}
        >
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
