import React, { useState, useEffect, useRef } from "react";
import { IRestaurant } from "../InterfaceEnumsMeta/InterFace";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import VanillaTilt from "vanilla-tilt";

export default function RestaurantLilSlide({ data }: { data: IRestaurant[] }) {
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
    <div>
      <div className="text-center uppercase text-3xl pb-10">Restaurants</div>
      <div className="relative">
        <button
          className="bg-white/50 z-10 left-0 absolute text-2xl rounded-full p-2 top-[50%]  m-5 "
          onClick={handlePrevItemBtn}
          style={{ display: activeIndex === 0 ? "none" : "block" }}>
          <IoIosArrowBack />
        </button>
        <div className="flex items-center justify-evenly mx-12 gap-10">
          {data.map((item, ind) => {
            if (
              activeIndex === ind ||
              activeIndex + 1 === ind ||
              activeIndex + 2 === ind ||
              activeIndex + 3 === ind
            ) {
              return (
                <Link href={`/restaurant?id=${item._id}`} key={ind}>
                  <div className="card rgb w-[300px]" ref={cardRef}>
                    <div className="h-[300px] md:h-[450px]">
                      <Image
                        src={item?.img[0]}
                        width={200}
                        height={200}
                        alt="img"
                        className="card-image object-cover w-[100%] h-[50%]"
                      />
                      <div className="card-text overflow-hidden">
                        <h1 className="">{item?.restaurantName}</h1>
                        <p className="text-sm whitespace-wrap py-2 font-light">
                          {item.address.address}
                        </p>

                        <p>
                          Mon-Fri: {item?.schedule?.weekday?.open}~
                          {item?.schedule?.weekday?.close} clock
                        </p>

                        <p>
                          Weekend: {item?.schedule?.weekday?.open}~
                          {item?.schedule?.weekday?.close} clock
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
        <button
          className="bg-white/50 z-10 right-0 absolute text-2xl rounded-full p-2 top-[50%] m-5"
          onClick={handleNextItemBtn}
          style={{
            display: activeIndex === data.length - 4 ? "none" : "block",
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
