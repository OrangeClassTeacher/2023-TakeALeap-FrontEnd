import React from "react";
import Image from "next/image";
import { IExplore } from "./InterfaceEnumsMeta/InterFace";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export const Explore = ({
  data,
}: {
  data: IExplore | undefined;
}): JSX.Element => (
  <div className="flex justify-center">
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px]">
        {data &&
          data.restaurant.map((item, ind) => (
            <Link key={ind} href={`restaurant?id=${item._id}`}>
              <div className="p-1 relative">
                <Image
                  width={400}
                  height={400}
                  src={item.restaurantDetail[0].img[0]}
                  alt="img"
                  className="w-[400px] h-[400px] object-cover overflow-hidden "
                />
                <div className="absolute hover:bg-black/25 w-full h-full flex justify-center items-center top-0 z-1 gap-5">
                  <div className="flex items-center gap-2 text-2xl">
                    <FaStar />
                    {Math.floor(item.avg)}
                  </div>
                  <p>/</p>
                  <div className="text-2xl">Review {item.count}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-[1200px]">
        {data &&
          data.food.map((item, ind) => (
            <Link key={ind} href={`/food?id=${item._id}`}>
              <div className="p-1 relative">
                <Image
                  width={400}
                  height={400}
                  src={item.foodDetail[0].img[0]}
                  alt="img"
                  className="w-[400px] h-[400px] object-cover overflow-hidden "
                />
                <div className="absolute hover:bg-black/25 w-full h-full flex justify-center items-center top-0 z-1 gap-5">
                  <div className="flex items-center gap-2 text-2xl">
                    <FaStar />
                    {Math.floor(item.avg)}
                  </div>
                  <p>/</p>
                  <div className="text-2xl">Review {item.count}</div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  </div>
);
