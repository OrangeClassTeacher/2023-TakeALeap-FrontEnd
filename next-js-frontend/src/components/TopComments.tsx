import React, { useEffect, useState } from "react";
import Image from "next/image";
import coca from "../img/cocaCola.jpeg";
import axios from "axios";
import cat from "../img/cat.jpeg";

export default function TopComments(): JSX.Element {
  const [topComment, setTopComment] = useState();

  const MockData = [
    {
      _id: {
        username: "Moogii23",
        img: ["link here"],
      },
      points: 1000,
    },
    {
      _id: {
        username: "Daria",
        img: ["link here"],
      },
      points: 500,
    },
    {
      _id: {
        username: "manlai",
        img: ["link here"],
      },
      points: 10000,
    },
    {
      _id: {
        username: "Moogii23",
        img: ["link here"],
      },
      points: 1000,
    },
    {
      _id: {
        username: "Daria",
        img: ["link here"],
      },
      points: 500,
    },
    {
      _id: {
        username: "manlai",
        img: ["link here"],
      },
      points: 10000,
    },
  ];

  const Comment = [
    {
      _id: "6438054e9e7aecc85edd49ee",
      restaurantId: { restaurantName: "dsakk Shangri-La" },
      userId: {
        username: "Moogii23",
        img: ["link here"],
      },
      comment: "not bad",
      rate: 3,
      createdAt: "2023-04-13T13:36:14.025Z",
      updatedAt: "2023-04-13T13:36:14.025Z",
      __v: 0,
    },
    {
      _id: "6438052a6e01f136e49bcc98",
      restaurantId: { restaurantName: "dsakk Shangri-La" },
      userId: {
        username: "Moogii23",
        img: ["link here"],
      },
      comment: "not ",
      rate: 3,
      createdAt: "2023-04-13T13:35:38.603Z",
      updatedAt: "2023-04-13T13:36:57.981Z",
      __v: 0,
    },
    {
      _id: "6438052a6e01f136e49bcc98",
      restaurantId: { restaurantName: "dsakk Shangri-La" },
      userId: {
        username: "Moogii23",
        img: ["link here"],
      },
      comment: "not ",
      rate: 3,
      createdAt: "2023-04-13T13:35:38.603Z",
      updatedAt: "2023-04-13T13:36:57.981Z",
      __v: 0,
    },
  ];

  return (
    <div className="bg-black text-gray-100 p-5 mt-20">
      <div className="flex">
        <div className="hidden md:block basis-1/5 border border-gray-900 bg-gray-950 rounded p-5">
          <Image src={coca} width={300} height={300} alt="advert" />
        </div>
        <div className="basis-1 md:basis-3/5">
          <div className="text-center text-3xl">Recent Comments</div>
          <div className="m-0 md:mx-20">
            {Comment.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className="border border-gray-900 bg-gray-950 rounded flex my-5 h-32 md:h-44 ">
                  <div className="flex items-center mx-5 ">
                    <Image
                      src={cat}
                      width={100}
                      height={100}
                      alt="profile"
                      className="rounded-full w-[100px] h-[100px]"
                    />
                  </div>
                  <div className=" flex items-center ">
                    <div>
                      <p>
                        {item?.userId?.username} rated{" "}
                        {item?.restaurantId.restaurantName}
                      </p>
                      <p>Comment : {item?.comment}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block basis-1/5 border border-gray-900 bg-gray-950 rounded p-5">
          <div>
            <h1 className="text-xl text-center">Top Contritors</h1>
          </div>
          <div>
            {MockData.map((item, ind) => {
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
                  <div className="basis-3/6">{item._id.username}</div>
                  <div className="basis-1/6">
                    <p className=" bg-sky-700  rounded p-1">{item.points}</p>
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
