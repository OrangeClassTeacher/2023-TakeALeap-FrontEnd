import React, { useState } from "react";
import Image from "next/image";
import { ITopRestaurant } from "../InterfaceEnumsMeta/InterFace";
import Starts from "../commentsRates/Stars";
import { MdLocationPin } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import styles from "../../styles/slider.module.css";

export default function Carousel({
  items,
}: {
  items: ITopRestaurant[];
}): JSX.Element {
  const [activeIndex] = useState<number>(0);
  const currentItem = items[activeIndex]?.restaurant[0];
  const { img, address, contact, restaurantName, cuisineType, schedule } =
    currentItem;

  return (
    <div className="flex justify-around bg-black relative w3-animate-right">
      <div className="flex justify-around">
        <div className="h-full relative  delay-75">
          <div className={styles.slider}>
            <div className={styles.rotator}>
              {[...Array(9)].map((_, index) => {
                const itemIndex = (activeIndex + index) % items.length;
                return (
                  <div className={styles.items} key={index}>
                    <Image
                      src={img[0]}
                      width={1000}
                      height={700}
                      className={`h-[700px] w-screen object-cover transition-opacity duration-500 orgiluun `}
                      alt="testt"
                    />
                    <div className="absolute  top-0 h-full flex justify-around items-center text-white w-full">
                      <div className="flex flex-col bg-black/50 text-center text-xs/[10px] gap-1 justify-center">
                        <div className=" flex justify-around mt-2">
                          <h1>{restaurantName}</h1>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <Starts stars={items[itemIndex]?.avg} />
                          <p>/</p>
                          <p> Reviewers: {items[itemIndex]?.count}</p>
                        </div>
                        <div>
                          {" "}
                          <p className="mb-2">
                            Mon-Fri : {schedule.weekday.open}~{" "}
                            {schedule.weekday.close}
                          </p>
                          <p>
                            Weekend : {schedule.weekend.open}~{" "}
                            {schedule.weekend.close}
                          </p>
                        </div>
                        <p className="flex items-center justify-center gap-2">
                          <MdLocationPin /> {address.address}
                        </p>
                        <p className="flex items-center justify-center gap-2">
                          {cuisineType}
                        </p>
                        <p className="flex items-center justify-center gap-2 mb-2">
                          <AiTwotonePhone />
                          {contact.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
