import React from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { ISearch } from "./InterfaceEnumsMeta/InterFace";

export const SearchModal = ({
  search,
  setSearch,
  data,
}: {
  search: boolean;
  setSearch: any;
  data?: ISearch;
}): JSX.Element => {
  return (
    <div
      className="absolute bg-slate-200 top-12 w-[950px] h-[500px] rounded text-black p-10 overflow-scroll z-50"
      style={{ display: search ? "block" : "none" }}>
      <div className="absolute right-5 top-5">
        {" "}
        <IoMdClose
          className="text-2xl hover:text-sky-600"
          onClick={(): void => setSearch(false)}
        />
      </div>
      <div>
        <div className="flex justify-between border-b border-black">
          <h1>Foods</h1>
          <p>
            All : {data?.food.rowCountOfFood ? data?.food.rowCountOfFood : 0}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 p-10 gap-5">
          {data?.food?.food.map((item, ind) => {
            if (ind < 8) {
              return (
                <Link href={`/food?id=${item._id}`} key={ind}>
                  <div className="rounded border border-black/20 w-[180px] h-[210px] overflow-hidden transition duration-500 hover:scale-110">
                    <div className="flex justify-between">
                      <Image
                        src={item.img[0]}
                        width={150}
                        height={140}
                        alt="img"
                        className="rounded w-[180px] h-[140px] object-cover"
                      />
                    </div>
                    <div className="m-2">
                      <h1 className="text-xs font-semibold uppercase mt-1 whitespace-nowrap">
                        {item.foodName}
                      </h1>
                      <p className="text-xs">{item.foodType}</p>
                      <p className="text-xs font-semibold">{item.price} ₮</p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-between border-b border-black ">
          <h1>Restaurants</h1>
          <p>
            All :{" "}
            {data?.restaurant.rowCountOfRes
              ? data?.restaurant.rowCountOfRes
              : 0}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 p-10 gap-5">
          {data?.restaurant?.restaurant.map((item, ind) => {
            if (ind < 8) {
              return (
                <Link href={`/restaurant?id=${item._id}`} key={ind}>
                  <div className="rounded border border-black/20 w-[180px] h-[210px] overflow-hidden transition duration-500 hover:scale-110 ">
                    <div className="flex justify-between">
                      <Image
                        src={item.img[0]}
                        width={150}
                        height={140}
                        alt="img"
                        className="rounded w-[180px] h-[140px] object-cover"
                      />
                    </div>
                    <div className="m-2">
                      <h1 className="text-xs font-semibold uppercase mt-1 whitespace-nowrap">
                        {item.restaurantName}
                      </h1>
                      <p className="text-xs">{item.cuisineType}</p>
                      <p className="text-xs whitespace-nowrap">
                        {item.address.district}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
      <div>
        <div className="flex justify-between border-b border-black">
          <h1>Beverages</h1>
          <p>
            All :{" "}
            {data?.beverage.rowCountOfBev ? data?.beverage.rowCountOfBev : 0}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 p-10 gap-5">
          {data?.beverage.beverage.map((item, ind) => {
            if (ind < 8) {
              return (
                <Link href={`/restaurant?id=${item._id}`} key={ind}>
                  <div className="rounded border border-black/20 w-[180px] h-[210px] overflow-hidden transition duration-500 hover:scale-110 ">
                    <div className="flex justify-between">
                      <Image
                        src={item.img[0]}
                        width={150}
                        height={140}
                        alt="img"
                        className="rounded w-[180px] h-[140px] object-cover"
                      />
                    </div>
                    <div className="m-2">
                      <h1 className="text-xs font-semibold uppercase mt-1 whitespace-nowrap">
                        {item.beverageName}
                      </h1>
                      <p className="text-xs">{item.beverageType}</p>
                      <p className="text-xs font-semibold">{item.price} ₮</p>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
