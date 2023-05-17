import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Image from "next/image";
import { ITopRestaurant } from "../InterfaceEnumsMeta/InterFace";
import Starts from "../commentsRates/Stars";
import { MdLocationPin } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import styles from "../../styles/slider.module.css";

export default function Carousel({ items }: { items: ITopRestaurant[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const currentItem = items[activeIndex]?.restaurant[0];
  const { img, address, contact, restaurantName, cuisineType, schedule } =
    currentItem || {};

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
                      src={items[itemIndex]?.restaurant[0]?.img[0]}
                      width={1000}
                      height={700}
                      className={`h-[700px] w-screen object-cover transition-opacity duration-500  `}
                      alt="testt"
                    />
                    <div className="absolute  top-0 h-full flex justify-around items-center text-white">
                      <div className="flex flex-col gap-2 bg-black/75 w-[50%] rounded-lg h-[50%] p-5 text-center ">
                        <div className=" flex justify-around">
                          <h1>
                            {items[itemIndex]?.restaurant[0].restaurantName}
                          </h1>
                        </div>
                        <div className="flex items-center gap-5 justify-center">
                          <Starts stars={items[itemIndex]?.avg} />
                          <p>/</p>
                          <p> Reviewers: {items[itemIndex]?.count}</p>
                        </div>
                        <div>
                          {" "}
                          <p>
                            Mon-Fri :{" "}
                            {
                              items[itemIndex]?.restaurant[0].schedule.weekday
                                .open
                            }
                            ~{" "}
                            {
                              items[itemIndex]?.restaurant[0].schedule.weekday
                                .close
                            }
                          </p>
                          <p>
                            Weekend :{" "}
                            {
                              items[itemIndex]?.restaurant[0].schedule.weekend
                                .open
                            }
                            ~{" "}
                            {
                              items[itemIndex]?.restaurant[0].schedule.weekend
                                .close
                            }
                          </p>
                        </div>
                        <p className="flex items-center justify-center gap-2">
                          <MdLocationPin />{" "}
                          {items[itemIndex]?.restaurant[0].address.address}
                        </p>
                        <p className="flex items-center justify-center gap-2">
                          {items[itemIndex]?.restaurant[0].cuisineType}
                        </p>
                        <p className="flex items-center justify-center gap-2">
                          <AiTwotonePhone />
                          {items[itemIndex]?.restaurant[0].contact.phone}
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
