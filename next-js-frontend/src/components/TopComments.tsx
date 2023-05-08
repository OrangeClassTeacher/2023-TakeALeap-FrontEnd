import React, { useEffect, useState } from "react";
import Image from "next/image";
import coca from "../img/can-pepsi-zero-sugar.png";
import axios from "axios";
import cat from "../img/cat.jpeg";
import { IRestaurant } from "./InterFace";
import { Iuser } from "./InterFace";
import Starts from "./Starts";
import Link from "next/link";
import { IFood } from "./InterFace";
import pep2 from "../img/pep2.png";
interface Icomment {
  _id: string;
  restaurantId: IRestaurant;
  foodId: IFood;
  userId: Iuser;
  comment: string;
  rate: number;
}

interface IUser {
  _id: {
    username: string;
    img: [string];
  };
  points: number;
}

export default function TopComments(): JSX.Element {
  const [lastComments, setLastComments] = useState<Icomment[]>([]);
  const [topConterbuter, setTopConterbuter] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/latestcomments")
      .then((res) => {
        setLastComments(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8080/api/users/topusers")
      .then((res) => {
        setTopConterbuter(res.data.result);
        console.log(res.data.result);
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
        <div className="basis-1 md:basis-3/5 ">
          <div className="text-center text-3xl">Recent Comments</div>
          <div className="m-0 md:mx-20 h-[600px] overflow-scroll">
            {lastComments?.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className="flex p-4  m-4 items-center border-b border-slate-500 "
                >
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
                    <div className="flex justify-between  items-center">
                      <div className="flex items-center">
                        <p className="font-semibold">{item.userId.userName}</p>
                        <span className="font-thin text-sm mx-2">
                          {item.userId.createdAt.slice(0, 10)}
                        </span>
                        <span
                          className={
                            item?.restaurantId
                              ? "font-thin text-sm mx-2"
                              : "hidden"
                          }
                        >
                          rated
                        </span>
                        <Link
                          href={
                            item?.restaurantId
                              ? `/restaurant?id=${item?.restaurantId?._id}`
                              : `/`
                          }
                        >
                          <span className="hover:text-[#9395d3]">
                            {" "}
                            {item?.restaurantId?.restaurantName}
                          </span>
                        </Link>
                        <span
                          className={
                            item?.restaurantId
                              ? "font-thin text-sm mx-2"
                              : "hidden"
                          }
                        >
                          food
                        </span>
                        <Link
                          href={
                            item?.foodId ? `/food?id=${item?.foodId?._id}` : `/`
                          }
                        >
                          <span className="hover:text-[#9395d3]">
                            {" "}
                            {item?.foodId?.foodName}
                          </span>
                        </Link>
                      </div>
                      <div className="text-center">
                        <p className="text-end mx-1">
                          <Starts stars={item.rate ? item.rate : 0} />
                        </p>
                      </div>
                    </div>
                    <span className="font-light my-1">{item.comment}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block basis-1/5 border border-gray-900 bg-gray-950 rounded p-5 h-full">
          <div>
            <h1 className="text-xl text-center">Top Contritors</h1>
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
                      className="rounded-full"
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
