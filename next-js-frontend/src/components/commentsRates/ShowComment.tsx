import React from "react";
import Image from "next/image";
import Stars from "./Stars";
import { IComment } from "../InterfaceEnumsMeta/InterFace";
import img from "../../img/cat.jpeg";
import Link from "next/link";
export const ShowComment = ({
  showAllCom,
  all,
}: {
  showAllCom: boolean;
  all?: IComment[];
}): JSX.Element => (
  <div className={showAllCom ? "h-[700px] overflow-scroll" : ""}>
    {all &&
      all.length &&
      all.map((item, ind) => {
        if (showAllCom) {
          return (
            <div
              key={ind}
              className="flex p-4  m-4 items-center border-b border-slate-500 ">
              <div className="basis-1/12 mx-3">
                <Image
                  src={
                    item.userId
                      ? item.userId.img[0]
                        ? item.userId.img[0]
                        : img
                      : img
                  }
                  alt="img"
                  width={40}
                  height={40}
                  className="rounded-full w-[50px] h-[50px] object-cover"
                />
              </div>
              <div className="basis-11/12">
                <div className="flex justify-between  items-center">
                  <div className="flex items-center">
                    <p className="font-semibold">
                      {item.userId && item.userId.userName}
                    </p>
                    <span className="font-thin text-sm mx-2">
                      {item.createdAt.slice(0, 10)}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-end mx-1">
                      <Stars stars={item.rate ? item.rate : 0} />
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <span className="font-light my-1">{item.comment}</span>
                  <div className="flex items-center gap-2">
                    <p
                      className={
                        item.restaurantId.restaurantName
                          ? "font-thin text-sm"
                          : "hidden"
                      }>
                      rated
                    </p>
                    <div className="hover:text-[#9395d3]">
                      <Link href={`/restaurant?id=${item.restaurantId._id}`}>
                        {item.restaurantId.restaurantName}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } else {
          if (ind < 3) {
            return (
              <div
                key={ind}
                className="flex p-4 m-4 items-center border-b border-slate-500">
                <div className="mx-3 basis-1/12">
                  <Image
                    src={
                      item.userId
                        ? item.userId.img[0]
                          ? item.userId.img[0]
                          : img
                        : img
                    }
                    alt="img"
                    width={40}
                    height={40}
                    className="rounded-full w-[50px] h-[50px] object-cover"
                  />
                </div>
                <div className="basis-11/12">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <p className="font-semibold">
                        {item.userId && item.userId.userName}
                      </p>
                      <span className="font-thin text-sm mx-2">
                        {item.createdAt.slice(0, 10)}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-end mx-1">
                        <Stars stars={item.rate ? item.rate : 0} />
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <span className="font-light my-1">{item.comment}</span>
                    {item.restaurantId.restaurantName && (
                      <div className="flex items-center gap-2">
                        <p
                          className={
                            item.restaurantId.restaurantName
                              ? "font-thin text-sm"
                              : "hidden"
                          }>
                          rated
                        </p>
                        <div className="hover:text-[#9395d3]">
                          <Link
                            href={`/restaurant?id=${item.restaurantId._id}`}>
                            {item.restaurantId.restaurantName}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        }
      })}
  </div>
);
