import React, { useEffect, useState } from "react";
import Image from "next/image";
import coca from "../img/cocaCola.jpeg";
import axios from "axios";
import cat from "../img/cat.jpeg";

interface Icomment {
  _id: string;
  restaurantId: {
    _id: string;
    restaurantName: string;
  };
  foodId: string;
  userId: {
    _id: string;
    userName: string;
  };
  comment: string;
  rate: number;
}

interface Iuser {
  _id: {
    username: string;
    img: [string];
  };
  points: number;
}

export default function TopComments(): JSX.Element {
  const [lastComments, setLastComments] = useState<Icomment[]>([]);
  const [topConterbuter, setTopConterbuter] = useState<Iuser[]>([]);

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
          <Image src={coca} width={300} height={300} alt="advert" />
        </div>
        <div className="basis-1 md:basis-3/5 ">
          <div className="text-center text-3xl">Recent Comments</div>
          <div className="m-0 md:mx-20 h-[600px] overflow-scroll">
            {lastComments?.map((item, ind) => {
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
                        {item?.userId?.userName} rated{" "}
                        {item?.restaurantId?.restaurantName}
                      </p>
                      <p>Comment : {item?.comment}</p>
                    </div>
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
