import React, { useEffect, useState } from "react";
import Image from "next/image";
import coca from "../img/can-pepsi-zero-sugar.png";
import axios from "axios";
import cat from "../img/cat.jpeg";
import { IRestaurant } from "../InterfaceEnumsMeta/InterFace";
import { IUser } from "../InterfaceEnumsMeta/InterFace";
import Starts from "../commentsRates/Stars";
import Link from "next/link";
import { IFood } from "../InterfaceEnumsMeta/InterFace";
import pep2 from "../img/pep2.png";
import Utils from "@/utils/helper";
import rocket from "../img/rocket.png";
import { ITopComment } from "../InterfaceEnumsMeta/InterFace";
import { IUserPoint } from "../InterfaceEnumsMeta/InterFace";

export default function TopComments(): JSX.Element {
  const [lastComments, setLastComments] = useState<ITopComment[]>([]);
  const [topConterbuter, setTopConterbuter] = useState<IUserPoint[]>([]);

  useEffect(() => {
    axios
      .get(`${Utils.API_URL}/latestcomments`)
      .then((res) => {
        setLastComments(res.data.result);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${Utils.API_URL}/users/topusers`)
      .then((res) => {
        setTopConterbuter(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-black text-gray-100 p-5">
      <div className="flex">
        <div className="hidden md:block basis-1/5 border border-gray-900 bg-gray-950 rounded p-5">
          <div className="coke">
            <div className="card2">
              <div className="circle"></div>
              <div className="content">
                <h2>Pepsi</h2>
                <p>Amnii tsangaag 10han second</p>
                <Link className="atag" href="/">
                  Buy now
                </Link>
              </div>
              <Image src={coca} width={100} height={30} alt="advert" />
            </div>
          </div>
          <div className="coke mt-20">
            <div className="card2">
              <div className="circle"></div>
              <div className="content">
                <h2>Pepsi</h2>
                <p>Amnii tsangaag 5han second</p>
                <Link className="atag" href="/">
                  Buy now
                </Link>
              </div>
              <Image src={pep2} width={100} height={30} alt="advert" />
            </div>
          </div>
        </div>
        <div className="basis-1 md:basis-3/5">
          <div className="text-center text-3xl">Recent Comments</div>
          <div className="m-0 md:mx-20 h-[600px] overflow-scroll">
            {lastComments?.map((item, ind) => {
              return (
                <div key={ind} className="flex p-4 items-center">
                  <div className="basis-1/12 mx-3">
                    <Image
                      src={cat}
                      alt="img"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="basis-11/12">
                    <div className=" bg-gray-900 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold">{item.userId.userName}</p>
                        <div className="text-end">
                          <Starts stars={item.rate ? item.rate : 0} />
                        </div>
                      </div>
                      <span className="font-light my-1">{item.comment}</span>
                    </div>

                    <span className="flex items-center gap-2">
                      <span className="font-thin text-sm mx-2">
                        {item.userId.createdAt.slice(0, 10)}
                      </span>
                      <p
                        className={
                          item?.restaurantId ? "font-thin text-sm" : "hidden"
                        }>
                        rated
                      </p>
                      <div className="hover:text-[#9395d3]">
                        <Link
                          href={
                            item?.restaurantId
                              ? `/restaurant?id=${item?.restaurantId?._id}`
                              : `/`
                          }>
                          {" "}
                          {item?.restaurantId?.restaurantName}
                        </Link>
                      </div>
                      <span
                        className={
                          item?.restaurantId
                            ? "font-thin text-sm mx-2"
                            : "hidden"
                        }>
                        food
                      </span>
                      <Link
                        href={
                          item?.foodId ? `/food?id=${item?.foodId?._id}` : `/`
                        }>
                        <span className="hover:text-[#9395d3]">
                          {" "}
                          {item?.foodId?.foodName}
                        </span>
                      </Link>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block basis-1/5 border border-gray-900 bg-gray-950 rounded p-5 h-full">
          <div>
            <h1 className="text-xl text-center">Top Contritors</h1>
            <div className="scene">
              <div className="rocket">
                <Image
                  src={rocket}
                  alt="rocket"
                  className="w-full h-[30px] object-cover"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div>
            {topConterbuter?.map((item, ind) => {
              return (
                <div key={ind} className="flex  items-center my-3">
                  <p className="basis-1/12">{ind + 1}.</p>
                  <div className="rounded-full basis-1/6 m-1">
                    <Image
                      src={cat}
                      width={40}
                      height={40}
                      alt="profile"
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="basis-3/6">{item?._id.username}</div>
                  <div className="basis-1/6">
                    <p className=" bg-sky-700  rounded p-1">{item?.points}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}