import React from "react";
import Image from "next/image";
import { ITopFoods } from "../InterfaceEnumsMeta/InterFace";
import Link from "next/link";
import Stars from "../commentsRates/Stars";

export const PopularDish = ({ data }: { data: ITopFoods[] }): JSX.Element => (
  <div className="md:px-20">
    <h1 className="text-3xl uppercase text-center pt-10">Most popular food </h1>
    <Link href={`/findfoods`}>
      <p className="text-end hover:text-[#9395d3]">See all</p>
    </Link>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 ">
      {data.length &&
        data.map((item, ind) => (
          <Link key={ind} href={`/food?id=${item._id.foodId}`}>
            <div key={ind} className="m-2 mt-8 hidden sm:block ">
              <div className="vox">
                <div className="vox-img">
                  <Image
                    src={item.food.img[0]}
                    alt="img"
                    className="w-full h-[100px] md:h-[250px]  object-cover -z-3"
                    width={200}
                    height={150}
                  />
                </div>

                <div className="montent border-b border-white">
                  <h1 className="text-xl font-light uppercase m-1 p-3 border-b">
                    {item.food.foodName}
                  </h1>
                  <div className="justify-around font-thin montent mt-14">
                    <div className="flex justify-around">
                      <div className=" basis-1/2 flex items-center justify-around">
                        <p>{item.food.price}₮</p>
                        <p>/</p>
                        <p>{item.food.foodType}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <p>Review : {item.count}</p>
                      <Stars stars={item.avg} />
                      <p>Rate : {Math.floor(item.avg * 100) / 100}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  </div>
);
